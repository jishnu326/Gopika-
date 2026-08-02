const PASSWORD = "2808";

function checkPassword() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        const music = document.getElementById("bgMusic");
        music.play().catch(() => {});

        createHearts();
    } else {
        alert("Wrong Password ❤️");
    }
}

function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 6s linear, opacity 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);
}
