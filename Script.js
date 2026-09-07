document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       GUEST SYSTEM
    ========================= */

    const guests = {

        rahim: {
            name: "Rahim Khan",
            reminder: true,
            pickup: true
        },

        salman: {
            name: "Salman Ahmed",
            reminder: false,
            pickup: false
        },

        arif: {
            name: "Arif Ahmad",
            reminder: true,
            pickup: false
        },

        sahil: {
            name: "Sahil Khan",
            reminder: true,
            pickup: true
        },

        imran: {
            name: "Imran Ahmad",
            reminder: false,
            pickup: false
        }

    };


    /* Read guest from URL */

    const params = new URLSearchParams(window.location.search);
    const guestID = params.get("guest");

    const guestBox = document.getElementById("guestBox");
    const guestNameDisplay = document.getElementById("guestNameDisplay");
    const reminderStatus = document.getElementById("reminderStatus");
    const pickupStatus = document.getElementById("pickupStatus");


    if (guestID && guests[guestID]) {

        const guest = guests[guestID];

        guestBox.innerHTML =
            `<span>Assalamualaikum ${guest.name} ❤️</span>`;

        guestNameDisplay.textContent = guest.name;

        if (guest.reminder) {
            reminderStatus.textContent =
                "✦ You are requested to join us one day before.";
        } else {
            reminderStatus.textContent =
                "✦ Your invitation is confirmed.";
        }

        if (guest.pickup) {
            pickupStatus.textContent =
                "✦ Special pickup arrangement is available.";
        } else {
            pickupStatus.textContent =
                "✦ Please reach the venue at the given time.";
        }

    } else {

        guestBox.innerHTML =
            `<span>Assalamualaikum ❤️</span>`;

        guestNameDisplay.textContent = "Dear Guest";

        reminderStatus.textContent =
            "✦ You are warmly invited.";

        pickupStatus.textContent =
            "✦ Please reach the venue at the given time.";

    }


    /* =========================
       COUNTDOWN
    ========================= */

    const weddingDate =
        new Date("2026-11-07T13:00:00");

    function updateCountdown() {

        const now = new Date();

        const difference =
            weddingDate.getTime() - now.getTime();

        if (difference <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }

        const days =
            Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );

        const minutes =
            Math.floor(
                (difference / (1000 * 60)) % 60
            );

        const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =========================
       ENTER INVITATION
    ========================= */

    window.scrollToInvitation = function () {

        document.getElementById("invitation")
            .scrollIntoView({
                behavior: "smooth"
            });

    };


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const sections =
        document.querySelectorAll("section");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform =
            "translateY(25px)";
        section.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";

        observer.observe(section);

    });


    /* =========================
       PHOTO TILT
    ========================= */

    const photo =
        document.querySelector(".photo-frame");

    if (photo) {

        photo.addEventListener("mousemove", function (e) {

            const rect =
                photo.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            photo.style.transform =
                `perspective(500px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        photo.addEventListener("mouseleave", function () {

            photo.style.transform =
                "perspective(500px) rotateX(0) rotateY(0)";

        });

    }


    /* =========================
       GALLERY CLICK
    ========================= */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            window.open(image.src, "_blank");

        });

    });


});
