const book = document.getElementById("book");
const fontSizeLinks = document.querySelectorAll(".font-size");

for (let link of fontSizeLinks) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        // Remove the active class from all font-size links
        for (let link of fontSizeLinks) {
            link.classList.remove("font-size_active");
        }
        // Add the active class to the clicked font-size link
        this.classList.add("font-size_active");
        // Remove the book_fs-big and book_fs-small classes from the book
        book.classList.remove("book_fs-big", "book_fs-small");
        // Add the corresponding class to the book
        if (this.dataset.size === "big") {
            book.classList.add("book_fs-big");
        } else if (this.dataset.size === "small") {
            book.classList.add("book_fs-small");
        }
    });
}
