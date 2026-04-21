(function () {
    const form = document.getElementById('book-form');
    if (!form) return;

    const btn = form.querySelector('button[type="submit"]');
    const msg = form.querySelector('.form-msg');
    const modal = document.getElementById('modal');
    const dateInput = form.querySelector('input[name="date"]');

    const ALLOWED_DAYS = new Set([4, 5, 6]); // Thu, Fri, Sat
    const lang = document.documentElement.lang || 'en';

    function toYmd(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }
    function nextAllowed(from) {
        const d = new Date(from);
        d.setHours(0, 0, 0, 0);
        for (let i = 0; i < 7; i++) {
            if (ALLOWED_DAYS.has(d.getDay())) return d;
            d.setDate(d.getDate() + 1);
        }
        return d;
    }

    function buildI18n(lang) {
        const monthFmt = new Intl.DateTimeFormat(lang, { month: 'long' });
        const weekdayFmt = new Intl.DateTimeFormat(lang, { weekday: 'long' });
        const weekdayShortFmt = new Intl.DateTimeFormat(lang, { weekday: 'narrow' });
        const months = [];
        for (let i = 0; i < 12; i++) {
            const n = monthFmt.format(new Date(2024, i, 1));
            months.push(n.charAt(0).toUpperCase() + n.slice(1));
        }
        // Pikaday uses Sunday-first: Dec 29 2024 was a Sunday
        const weekdays = [], weekdaysShort = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(2024, 11, 29 + i);
            weekdays.push(weekdayFmt.format(d));
            weekdaysShort.push(weekdayShortFmt.format(d).toUpperCase());
        }
        return { months, weekdays, weekdaysShort, previousMonth: '‹', nextMonth: '›' };
    }

    // Initialize Pikaday if available, else fall back to native input behaviour.
    let picker = null;
    if (dateInput && window.Pikaday) {
        const initial = nextAllowed(new Date());
        dateInput.value = toYmd(initial);
        picker = new window.Pikaday({
            field: dateInput,
            minDate: new Date(),
            defaultDate: initial,
            setDefaultDate: true,
            firstDay: 1,
            i18n: buildI18n(lang),
            format: 'YYYY-MM-DD',
            toString(d) { return toYmd(d); },
            disableDayFn(d) { return !ALLOWED_DAYS.has(d.getDay()); }
        });
    } else if (dateInput) {
        dateInput.min = toYmd(new Date());
        if (!dateInput.value) dateInput.value = toYmd(nextAllowed(new Date()));
    }

    function openModal() {
        if (!modal) return;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        if (!modal) return;
        modal.hidden = true;
        document.body.style.overflow = '';
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-close')) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.hidden) closeModal();
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        msg.className = 'form-msg';
        msg.textContent = '';

        const data = Object.fromEntries(new FormData(form).entries());
        data.people = parseInt(data.people, 10);

        const d = new Date(data.date + 'T00:00:00');
        if (isNaN(d) || !ALLOWED_DAYS.has(d.getDay())) {
            msg.className = 'form-msg error';
            msg.textContent = dateInput.dataset.invalidMsg;
            return;
        }

        btn.disabled = true;
        btn.textContent = btn.dataset.sending;

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error('bad_status');
            openModal();
            form.reset();
            const next = nextAllowed(new Date());
            if (picker) picker.setDate(next);
            else if (dateInput) dateInput.value = toYmd(next);
        } catch (err) {
            msg.textContent = msg.dataset.error;
            msg.classList.add('error');
        } finally {
            btn.disabled = false;
            btn.textContent = btn.dataset.label;
        }
    });
})();
