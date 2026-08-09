function togglePaperTheme() {
    document.body.classList.toggle('dark-mode');
    const modeText = document.getElementById('themeModeText');
    const themeEmoji = document.getElementById('themeEmoji');

    if (document.body.classList.contains('dark-mode')) {
        if (modeText) modeText.textContent = 'Light Paper';
        if (themeEmoji) themeEmoji.textContent = '☀️';
        localStorage.setItem('goodnotes_theme', 'dark');
    } else {
        if (modeText) modeText.textContent = 'Dark Paper';
        if (themeEmoji) themeEmoji.textContent = '🌙';
        localStorage.setItem('goodnotes_theme', 'light');
    }
}

// Load saved theme on boot
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('goodnotes_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const modeText = document.getElementById('themeModeText');
        const themeEmoji = document.getElementById('themeEmoji');
        if (modeText) modeText.textContent = 'Light Paper';
        if (themeEmoji) themeEmoji.textContent = '☀️';
    }
});

function copyCode(btn) {
    const container = btn.closest('.code-sticker');
    const code = container.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#4ade80';
        setTimeout(() => {
            btn.textContent = orig;
            btn.style.color = '';
        }, 2000);
    });
}

function filterNotes() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('.note-section, .toc-card');

    sections.forEach(sec => {
        const txt = sec.innerText.toLowerCase();
        sec.style.display = txt.includes(q) ? '' : 'none';
    });
}
