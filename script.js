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

document.addEventListener("DOMContentLoaded", () => {
    if (window.axe) {
        axe.run(document, {}, (err, results) => {
            if (err) throw err;
            console.log("AXE RESULTAT:", results);
            console.log("Fel:", results.violations.length);
            console.log("Varningar:", results.incomplete.length);
            const box = document.createElement("div");
            box.style.padding = "16px";
            box.style.background = "#f0f0f0";
            box.style.margin = "20px";
            box.style.fontFamily = "Arial";
            box.innerHTML = ` 
                <h3>Axe Accessibility Report
                </h3> 
                <p><strong>Fel:</strong> ${results.violations.length}</p> 
                <p><strong>Varningar:</strong> ${results.incomplete.length}</p> 
              `;
            document.body.appendChild(box);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const lcpDisplay = document.getElementById("lcp-display");

    console.log("Hittar lcp-display:", lcpDisplay);

    if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            const lcp = lastEntry.renderTime || lastEntry.loadTime;

            if (lcpDisplay) {
                lcpDisplay.textContent = `LCP: ${Math.round(lcp)} ms`;
            }

            console.log("LCP:", Math.round(lcp), "ms");
        });

        observer.observe({ type: "largest-contentful-paint", buffered: true });
    }
});

