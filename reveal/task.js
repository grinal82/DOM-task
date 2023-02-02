// Get all elements with .reveal class
const reveal = document.querySelectorAll(".reveal");

// Function to add class to visible elements
function toggleClassOnVisible() {
    reveal.forEach((el) => {
        const isVisible = isInView(el); /* true/false */
        if (isVisible) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    });
}

// Function to check if an element is in view
function isInView(element) {
    // Get the bounding rectangle of the element
    const rect = element.getBoundingClientRect();
    // Check if any part of the element is within the viewport
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Listen for scroll events and call toggleClassOnVisible
window.onscroll = toggleClassOnVisible;

// window.innerWidth/innerHeight игнорируют полосу прокрутки (если она есть)
// clientWidth/Height, если есть полоса прокрутки, возвращают именно ширину/высоту внутри неё, доступную для документа
