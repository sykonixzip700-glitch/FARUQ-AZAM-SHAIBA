/* =========================================
SHAIBA ❤️ AZAM FARUQ
WEDDING INVITATION JAVASCRIPT
========================================= */

/* =========================================
GUEST SYSTEM
========================================= */

const guests = {

rahim: {
    name: "Rahim Khan"
},

salman: {
    name: "Salman Ahmed"
},

arif: {
    name: "Arif Ahmad"
},

sahil: {
    name: "Sahil Khan"
},

imran: {
    name: "Imran Ahmad"
}

};

/* =========================================
PAGE READY
========================================= */

document.addEventListener(
"DOMContentLoaded",
function () {

    /* =================================
       GUEST NAME
    ================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const guestId =
        params.get("guest");


    if (
        guestId &&
        guests[guestId]
    ) {

        const guest =
            guests[guestId];


        const guestName =
            document.getElementById(
                "guestName"
            );


        const guestNameCard =
            document.getElementById(
                "guestNameCard"
            );


        if (guestName) {

            guestName.textContent =
                guest.name;

        }


        if (guestNameCard) {

            guestNameCard.textContent =
                guest.name;

        }

    }


    /* =================================
       ELEMENTS
    ================================= */

    const enterButton =
        document.getElementById(
            "enterButton"
        );


    const home =
        document.getElementById(
            "home"
        );


    const envelopeSection =
        document.getElementById(
            "envelopeSection"
        );


    const envelope =
        document.getElementById(
            "envelope"
        );


    const mainContent =
        document.getElementById(
            "mainContent"
        );


    /* =================================
       INITIAL STATE
    ================================= */

    if (envelopeSection) {

        envelopeSection.style.display =
            "none";

    }


    if (mainContent) {

        mainContent.style.display =
            "none";

    }


    /* =================================
       ENTER INVITATION
    ================================= */

    if (enterButton) {

        enterButton.addEventListener(
            "click",
            function () {


                /* Hide welcome */

                if (home) {

                    home.style.transition =
                        "opacity 1s ease, transform 1s ease";

                    home.style.opacity =
                        "0";

                    home.style.transform =
                        "scale(1.05)";

                }


                /* Show envelope */

                setTimeout(
                    function () {

                        if (home) {

                            home.style.display =
                                "none";

                        }


                        if (envelopeSection) {

                            envelopeSection.style.display =
                                "flex";

                            envelopeSection.style.opacity =
                                "0";

                            envelopeSection.style.transform =
                                "translateY(30px)";

                            envelopeSection.style.transition =
                                "opacity .8s ease, transform .8s ease";


                            requestAnimationFrame(
                                function () {

                                    envelopeSection.style.opacity =
                                        "1";

                                    envelopeSection.style.transform =
                                        "translateY(0)";

                                }
                            );

                        }

                    },
                    900
                );

            }
        );

    }


    /* =================================
       ENVELOPE OPEN
    ================================= */

    if (envelope) {

        envelope.addEventListener(
            "click",
            function () {


                /* Don't repeat */

                if (
                    envelope.classList.contains(
                        "open"
                    )
                ) {

                    return;

                }


                /* Open envelope */

                envelope.classList.add(
                    "open"
                );


                /* Stop floating */

                envelope.style.animation =
                    "none";


                /* =================================
                   SHOW MAIN CONTENT
                ================================= */

                setTimeout(
                    function () {

                        if (mainContent) {

                            mainContent.style.display =
                                "block";

                            mainContent.style.opacity =
                                "0";

                            mainContent.style.transform =
                                "translateY(30px)";

                            mainContent.style.transition =
                                "opacity 1s ease, transform 1s ease";


                            requestAnimationFrame(
                                function () {

                                    mainContent.style.opacity =
                                        "1";

                                    mainContent.style.transform =
                                        "translateY(0)";

                                }
                            );

                        }


                        /* Scroll to invitation content */

                        setTimeout(
                            function () {

                                if (mainContent) {

                                    mainContent.scrollIntoView({
                                        behavior:
                                            "smooth",
                                        block:
                                            "start"
                                    });

                                }

                            },
                            400
                        );

                    },
                    1800
                );

            }
        );

    }


    /* =================================
       COUNTDOWN
    ================================= */

    const weddingDate =
        new Date(
            "2026-11-07T13:00:00+05:30"
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        const days =
            document.getElementById(
                "days"
            );


        const hours =
            document.getElementById(
                "hours"
            );


        const minutes =
            document.getElementById(
                "minutes"
            );


        const seconds =
            document.getElementById(
                "seconds"
            );


        if (
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ) {

            return;

        }


        /* Wedding day */

        if (distance <= 0) {

            days.textContent =
                "00";

            hours.textContent =
                "00";

            minutes.textContent =
                "00";

            seconds.textContent =
                "00";

            return;

        }


        const d =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const h =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const m =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const s =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );


        days.textContent =
            String(d).padStart(
                2,
                "0"
            );


        hours.textContent =
            String(h).padStart(
                2,
                "0"
            );


        minutes.textContent =
            String(m).padStart(
                2,
                "0"
            );


        seconds.textContent =
            String(s).padStart(
                2,
                "0"
            );

    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );


    /* =================================
       FALLING FLOWERS
    ================================= */

    const flowers = [

        "🌸",
        "🌺",
        "🌷",
        "🌼",
        "❀",
        "✿",
        "✨"

    ];


    function createFlower() {

        const flower =
            document.createElement(
                "div"
            );


        flower.className =
            "falling-flower";


        flower.textContent =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];


        flower.style.left =
            Math.random() *
            100 +
            "vw";


        flower.style.fontSize =
            (
                12 +
                Math.random() * 16
            ) +
            "px";


        const duration =
            6 +
            Math.random() * 5;


        flower.style.animationDuration =
            duration +
            "s";


        document.body.appendChild(
            flower
        );


        setTimeout(
            function () {

                flower.remove();

            },
            (duration + 1) * 1000
        );

    }


    /* Initial flowers */

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            createFlower,
            i * 250
        );

    }


    /* Continuous flowers */

    setInterval(
        createFlower,
        700
    );


    /* =================================
       GALLERY
    ================================= */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img"
        );


    galleryImages.forEach(
        function (img) {

            img.addEventListener(
                "click",
                function () {

                    window.open(
                        img.src,
                        "_blank"
                    );

                }
            );

        }
    );


}

);
