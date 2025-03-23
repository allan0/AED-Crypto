// Initialize Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready();

// Get User Data
const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('username').textContent = user.username || 'User';
    // Profile photo (assuming Telegram provides a URL, otherwise use a placeholder)
    document.getElementById('profile-photo').src = user.photo_url || 'https://via.placeholder.com/50';
}

// Simulate KYC Verification (Replace with real API call)
document.getElementById('kyc-button').addEventListener('click', () => {
    // Mock API call
    setTimeout(() => {
        document.getElementById('verified-tick').style.display = 'inline';
        document.getElementById('kyc-button').style.display = 'none';
        alert('KYC Verified!');
    }, 1000);
});

// Connect Wallet (Placeholder)
document.getElementById('connect-wallet').addEventListener('click', () => {
    alert('Wallet connection feature coming soon!');
});

// Interactive Scroll Effects
window.addEventListener('scroll', () => {
    const scrollDivs = document.querySelectorAll('.scroll-div');
    scrollDivs.forEach(div => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            div.classList.add('visible');
        } else {
            div.classList.remove('visible');
        }
    });
});

// Navigation Logic
const pages = {
    'account-btn': 'profile',
    'ai-trading-btn': 'ai-trading-page',
    'swap-btn': 'swap-page'
};

document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const pageId = pages[button.id];
        document.querySelectorAll('.page, #news, #profile').forEach(section => {
            section.style.display = 'none';
        });
        if (pageId === 'profile') {
            document.getElementById('profile').style.display = 'flex';
            document.getElementById('news').style.display = 'block';
        } else {
            document.getElementById(pageId).style.display = 'block';
        }
    });
});

// Default to Account view
document.getElementById('account-btn').click();
