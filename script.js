const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// Move the "No" button when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});


// Show a message when clicking "Yes"
yesBtn.addEventListener("click", () => {
    response.textContent = "Yay! 💖 Can't wait for our date!";
});


// Function to switch between Home and Gallery
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}
