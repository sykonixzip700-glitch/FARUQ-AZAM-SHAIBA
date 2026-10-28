
document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    const envelope = document.getElementById("envelope");
    const tapText = document.getElementById("tapText");
    const website = document.getElementById("website");
    const particles = document.getElementById("particles");

    /* Guest personalization */
    const guests = {
        sanjana: {
            name: "Sanjana",
            message: "You are cordially invited to join us on the wedding day."
        },
        aarti: {
            name: "Aarti",
            message: "You are cordially invited to join us on the wedding day."
        },
        aashish: {
            name: "Aashish",
            message: "You are cordially invited to join us on the wedding day."
        },
        rukmani: {
            name: "Rukmani",
            message: "You are warmly invited to join us one day before the wedding."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const guestId = (params.get("name") || "").trim().toLowerCase();
    const guest = guests[guestId];

    const guestNameElement = document.getElementById("guestName");
    const guestMessageElement = document.getElementById("guestMessage");

    if (guest && guestNameElement && guestMessageElement) {
        guestNameElement.textContent = guest.name;
        guestMessageElement.textContent = guest.message;
    }

    /* Envelope opening animation */
    let envelopeOpened = false;

    function openEnvelope() {
        if (envelopeOpened) return;
        envelopeOpened = true;

        envelope.classList.add("open");
        tapText.textContent = "Opening your invitation...";

        setTimeout(function () {
            intro.classList.add("hide");
            website.classList.add("show");

            requestAnimationFrame(function () {
                website.classList.add("visible");
            });

            setTimeout(function () {
                intro.style.display = "none";
            }, 1100);
        }, 1500);
    }

    envelope.addEventListener("click", openEnvelope);
    envelope.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openEnvelope();
        }
    });
    envelope.setAttribute("tabindex", "0");
    envelope.setAttribute("role", "button");
    envelope.setAttribute("aria-label", "Open wedding invitation");

    /* Countdown */
    const weddingDate = new Date("2026-11-07T13:00:00+05:30");

    function updateCountdown() {
        const now = new Date();
        const difference = weddingDate.getTime() - now.getTime();

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        const countdown = document.getElementById("countdown");

        if (difference <= 0) {
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            countdown.setAttribute("aria-label", "The wedding date has arrived");
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* Scroll reveal */
    const revealElements = document.querySelectorAll(".section-reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("revealed");
        });
    }

    /* Floating gold particles */
    const symbols = ["✦", "✧", "❖", "·"];

    for (let i = 0; i < 24; i++) {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (9 + Math.random() * 13) + "s";
        particle.style.animationDelay = (Math.random() * 12) + "s";
        particle.style.fontSize = (8 + Math.random() * 12) + "px";
        particles.appendChild(particle);
    }

    /* Click sparkles */
    document.addEventListener("click", function (event) {
        if (event.target.closest("button")) return;

        const sparkle = document.createElement("span");
        sparkle.textContent = "✦";
        sparkle.style.position = "fixed";
        sparkle.style.left = event.clientX + "px";
        sparkle.style.top = event.clientY + "px";
        sparkle.style.color = "#d8b45a";
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = "20";
        sparkle.style.fontSize = "16px";
        sparkle.style.transition = "all 700ms ease";
        document.body.appendChild(sparkle);

        requestAnimationFrame(function () {
            sparkle.style.transform = "translateY(-25px) scale(1.5)";
            sparkle.style.opacity = "0";
        });

        setTimeout(function () {
            sparkle.remove();
        }, 750);
    });

    /* Back to top button */
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        backToTop.classList.toggle("show", window.scrollY > 350);
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
            
