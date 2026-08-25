/* =====================================
   PASSWORD
===================================== */

// CHANGE YOUR PASSWORD HERE
const correctPassword = "Anu";


function unlockDoor() {

    const password =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("errorMessage");

    const door =
        document.querySelector(".door-panel");


    if (password === correctPassword) {

        error.textContent = "";

        // Open the door
        door.classList.add("open");


        // Wait for door animation
        setTimeout(() => {

            document.getElementById("doorScreen")
                .style.display = "none";

            document.getElementById("birthdayScreen")
                .classList.remove("hidden");

            createConfetti();

        }, 1200);


    } else {

        error.textContent =
            "❌ Wrong password! Try again.";

        document.getElementById("passwordInput").value = "";

    }

}


/* =====================================
   ENTER KEY FOR PASSWORD
===================================== */

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            unlockDoor();

        }

    });


/* =====================================
   SHOW GIFT PAGE
===================================== */

function showGifts() {

    document
        .getElementById("birthdayScreen")
        .classList.add("hidden");

    document
        .getElementById("giftScreen")
        .classList.remove("hidden");

}


/* =====================================
   GIFT DATA
===================================== */

const gifts = {

    1: {
        image: "images/a.jpg",

        title: "A Beautiful Memory ❤️",

        message:
            "your best gift is oviously me..."
    },

    2: {
        image: "images/b.jpg",

        title: "For Your Smile 😊",

        message:
            "your best gift is oviously me..."
    },

    3: {
        image: "images/c.jpg",

        title: "A Special Moment ✨",

        message:
            "Life becomes beautiful when we are together."
    },

    4: {
        image: "images/d.jpg",

        title: "One More Wish 🎂",

        message:
            "May all your dreams come true. Happy Birthday once again! ❤️"
    }

};


/* =====================================
   OPEN GIFT
===================================== */

function openGift(giftNumber) {

    const gift = gifts[giftNumber];

    const result =
        document.getElementById("giftResult");


    result.innerHTML = `

        <img
            src="${gift.image}"
            alt="Birthday Gift"
        >

        <h2>
            ${gift.title}
        </h2>

        <p>
            ${gift.message}
        </p>

    `;


    document
        .getElementById("giftPopup")
        .classList.remove("hidden");

}


/* =====================================
   CLOSE GIFT
===================================== */

function closeGift() {

    document
        .getElementById("giftPopup")
        .classList.add("hidden");

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const colors = [
        "#ff6bd6",
        "#ffd166",
        "#9b5cff",
        "#6ee7ff",
        "#ffffff"
    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.style.position = "fixed";

        confetti.style.width = "8px";

        confetti.style.height = "14px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "999";

        confetti.style.borderRadius = "3px";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const duration =
            3 + Math.random() * 4;


        confetti.style.transition =
            `top ${duration}s linear,
             transform ${duration}s linear`;


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.style.top =
                "110vh";

            confetti.style.transform =
                `rotate(${Math.random() * 1000}deg)`;

        }, 100);


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000 + 500);

    }

}