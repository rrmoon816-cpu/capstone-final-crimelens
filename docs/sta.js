document.getElementById("searchInput")?.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#stateTable tbody tr");

    rows.forEach(row => {
        let state = row.cells[0].textContent.toLowerCase();

        if (state.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});