// delete  simulateHeavyWork()  blocking code

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });



    const form = document.querySelector(".newsletter form");
    //
    if (form) { form.addEventListener("submit", function (e)
    { e.preventDefault();
        alert("Thank you for subscribing!");
    });
    }
});
