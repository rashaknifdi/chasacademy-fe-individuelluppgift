(function simulateHeavyWork() {
    const start = Date.now();
    while (Date.now() - start < 200) {}
})();

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    const newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});
