const style = document.createElement('style');
style.textContent = `
    main {
        display: none !important;
    }
`;

document.documentElement.appendChild(style);

function hideFeed() {
    const feed = document.querySelector('main');
    if(feed) {
        console.log('Main element found... destroying it!');
        feed.style.display = 'none';
    } else {
        console.log('Could not find the main element...');
    }
}

hideFeed();


document.addEventListener('DOMContentLoaded', hideFeed);
const observer = new MutationObserver(hideFeed);
observer.observe(document.body, { childList: true, subtree: true });
