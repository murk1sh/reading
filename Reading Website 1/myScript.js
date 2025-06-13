function toggleExpand(id) {
    const storyBlock = id.parentElement;
    const extraLinks = storyBlock.querySelector('.extra-links');
    const isExpanded = storyBlock.classList.contains('expanded');

    if (isExpanded) {
        storyBlock.classList.remove('expanded');
        extraLinks.classList.remove('visible');
    } else {
        storyBlock.classList.add('expanded');
        extraLinks.classList.add('visible');
    }
}
function moveOffscreen() {
/* add time wait for 1 second, then other page will load
   goal is to have chapter move to left, then the other chapter move in */ 
}
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(function() {
        window.location.href = href;
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
})