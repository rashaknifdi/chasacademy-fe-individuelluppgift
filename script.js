

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    const form = document.querySelector(".newsletter form");
    if (form) { form.addEventListener("submit", function (e)
    { e.preventDefault();
        alert("Thank you for subscribing!");
    });
    }
});
