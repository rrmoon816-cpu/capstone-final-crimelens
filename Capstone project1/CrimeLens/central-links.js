 
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".portal-card");

    cards.forEach(function (card) {
        let title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
