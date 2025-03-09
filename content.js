function hideFeed() {
    if (window.location.pathname.startsWith('/feed')) {
        const feed = document.querySelector('main');
        if(feed) {
            console.log('Main element found on feed page... hiding it!');
            feed.style.display = 'none';
        } else {
            console.log('Could not find the main element on feed page...');
        }
    } else {
        console.log('Not on feed page, doing nothing.');
    }
}

hideFeed();


document.addEventListener('DOMContentLoaded', hideFeed);
const observer = new MutationObserver(hideFeed);
observer.observe(document.body, { childList: true, subtree: true });
