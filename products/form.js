const items = document.querySelectorAll(".item");
const selectedOptionInput = document.getElementById("selectedOption");
const form = document.getElementById("styledForm");

// Handle selection
items.forEach(item => {
    item.addEventListener("click", function () {
        // Remove previous selection
        items.forEach(i => i.classList.remove("selected"));
        
        // Mark clicked item as selected
        this.classList.add("selected");
        
        // Set hidden input value
        selectedOptionInput.value = this.dataset.value;
    });
});

// Prevent form submission if no option is selected
form.addEventListener("submit", function (event) {
    if (!selectedOptionInput.value) {
        event.preventDefault(); // Stop form from submitting
        alert("Please select an option before submitting.");
    }
});

///
let count = 0;

function plus() {
    if (count >= 5) {
        alert("Sorry, but you can't order six or more quantities");
        return;
    }
    count++;
    document.getElementById("quantity").innerText = count;
}

function minus() {
    if (count <= 0) {
        alert("Sorry, but you can't order 0 or fewer quantities");
        return;
    }
    count--;
    document.getElementById("quantity").innerText = count;
}
