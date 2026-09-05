/* =========================================
   GERANI BISTROT
   VANILLA JAVASCRIPT
========================================= */


/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        12 + Math.random() * 20 + "s";

    particle.style.animationDelay =
        Math.random() * -20 + "s";

    particle.style.opacity =
        .15 + Math.random() * .5;

    particleContainer.appendChild(particle);
}


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar =
    document.getElementById("navbar");

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

        backTop.classList.add("show");

    } else {

        navbar.classList.remove("scrolled");

        backTop.classList.remove("show");
    }

});


/* =========================================
   BACK TO TOP
========================================= */

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   3D TILT
========================================= */

const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach(element => {

    element.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) return;

        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;


        /* LOGO HERO */
        if (element.classList.contains("hero-logo-3d")) {

            element.style.transform =
                `translateY(-50%)
                 perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateZ(10px)`;

        }

        /* ALTRI ELEMENTI 3D */
        else {

            element.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateZ(10px)`;

        }

    });


    element.addEventListener("mouseleave", () => {

        if (element.classList.contains("hero-logo-3d")) {

            element.style.transform =
                `translateY(-50%)
                 perspective(1000px)
                 rotateY(-8deg)`;

        } else {

            element.style.transform = "";

        }

    });

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


window.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left =
        mouseX + "px";

    cursor.style.top =
        mouseY + "px";

});


function animateCursor() {

    ringX +=
        (mouseX - ringX) * .12;

    ringY +=
        (mouseY - ringY) * .12;

    cursorRing.style.left =
        ringX + "px";

    cursorRing.style.top =
        ringY + "px";

    requestAnimationFrame(
        animateCursor
    );
}

animateCursor();


document
    .querySelectorAll("a, button")
    .forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorRing.style.width = "60px";
                cursorRing.style.height = "60px";

                cursorRing.style.borderColor =
                    "rgba(240,210,123,.9)";

            }
        );

        element.addEventListener(
            "mouseleave",
            () => {

                cursorRing.style.width = "38px";
                cursorRing.style.height = "38px";

                cursorRing.style.borderColor =
                    "rgba(240,210,123,.6)";

            }
        );

    });


/* =========================================
   MENU
========================================= */

const menuData = {

    antipasti: [

        ["Bruschetta", "", "€ 3,50"],

        [
            "Antipasto all'italiana",
            "Prosciutto crudo, salame, carciofini, olive, formaggi, porchetta",
            "€ 8,50"
        ],

        [
            "Antipasto di mare",
            "Selezione di specialità di mare",
            "€ 9,50"
        ],

        ["Alici marinate", "", "€ 7,50"],

        ["Cozze", "", "€ 8,00"],

        ["Insalata di polpo", "", "€ 9,50"],

        ["Caprese", "", "€ 8,00"],

        ["Caprese di bufala", "", "€ 9,00"]

    ],


    primi: [

        ["Lasagna", "", "€ 9,00"],

        ["Cannelloni", "", "€ 9,00"],

        ["Amatriciana", "", "€ 9,00"],

        ["Gricia", "", "€ 9,00"],

        ["Carbonara", "", "€ 9,00"],

        ["Arrabbiata", "", "€ 8,50"],

        ["Funghi porcini", "", "€ 9,50"],

        ["Gnocchi al ragù", "", "€ 9,50"],

        ["Vongole", "", "€ 9,50"],

        ["Pescatora", "", "€ 9,50"],

        ["Aglio", "", "€ 9,50"],

        [
            "Gnocchi alla crema di scampi",
            "",
            "€ 9,50"
        ]

    ],


    pesce: [

        ["Seppie con piselli", "", "€ 9,50"],

        ["Moscardini", "", "€ 9,50"],

        ["Orata", "400–600 g", "€ 12,00"],

        ["Spigola", "400–600 g", "€ 12,00"],

        ["Platessa", "", "€ 9,50"],

        ["Salmone", "", "€ 9,50"],

        ["Pesce spada", "", "€ 9,50"],

        ["Calamari alla piastra", "", "€ 9,50"],

        [
            "Frittura calamari e gamberi",
            "",
            "€ 9,50"
        ],

        [
            "Spiedini di gamberi",
            "",
            "€ 9,50"
        ]

    ],


    carne: [

        ["Vitello arrosto", "", "€ 9,50"],

        ["Pollo arrosto", "", "€ 7,50"],

        ["Petto di pollo", "", "€ 8,50"],

        ["Salsiccia", "", "€ 7,00"],

        ["Polpette", "", "€ 9,00"],

        ["Straccetti di manzo", "", "€ 9,50"],

        ["Pollo alla cacciatora", "", "€ 8,50"],

        ["Bistecca", "", "€ 15,00"],

        ["Spezzatino", "", "€ 9,00"],

        ["Cotoletta di pollo", "", "€ 8,00"]

    ],


    contorni: [

        ["Patate arrosto", "", "€ 5,00"],

        ["Verdura all'agro", "", "€ 5,00"],

        ["Verdura ripassata", "", "€ 5,00"],

        ["Verdura grigliata", "", "€ 5,00"],

        ["Verdura gratinata", "", "€ 5,00"],

        ["Carciofi", "", "€ 5,00"],

        ["Funghi trifolati", "", "€ 5,00"],

        ["Piselli", "", "€ 5,00"],

        ["Insalata mista", "", "€ 5,00"]

    ],


    pizza: [

        ["Margherita", "", "€ 7,00"],

        ["Napoli", "", "€ 7,50"],

        ["Capricciosa", "", "€ 8,50"],

        ["Ortolana", "", "€ 9,00"],

        ["Boscaiola", "", "€ 8,50"],

        ["Crostino", "", "€ 8,00"],

        ["Funghi", "", "€ 7,50"],

        ["Wurstel e patate", "", "€ 8,50"],

        ["4 Stagioni", "", "€ 9,50"],

        ["Zucchine", "", "€ 8,00"],

        ["4 Formaggi", "", "€ 9,00"],

        ["Melanzane", "", "€ 8,00"],

        ["Peperoni", "", "€ 8,00"],

        ["Fiori di zucca e alici", "", "€ 9,50"],

        ["Diavola", "", "€ 8,50"],

        ["Salmone", "", "€ 9,50"],

        ["4 Salumi", "", "€ 9,00"],

        ["Porcini", "", "€ 9,50"],

        ["Focaccia", "", "€ 4,50"],

        ["Focaccia con crudo", "", "€ 8,50"],

        ["Valtellina", "", "€ 10,00"]

    ],


    bevande: [

        ["Acqua piccola", "", "€ 1,00"],

        ["Acqua grande", "", "€ 2,50"],

        ["Lattina", "", "€ 2,00"],

        ["Bibita 1/2 L", "", "€ 2,50"],

        ["Coca Cola piccola", "", "€ 2,50"],

        ["Coca Cola grande", "", "€ 4,50"],

        ["Bibita 1,5 L", "", "€ 3,50"],

        ["Peroni piccola", "", "€ 2,00"],

        ["Heineken", "", "€ 2,50"],

        ["Ceres", "", "€ 3,50"],

        ["Tennent's", "", "€ 3,50"],

        ["Ichnusa", "", "€ 4,50"],

        ["Peroni grande", "", "€ 3,00"],

        ["Nastro Azzurro", "", "€ 3,50"],

        ["Moretti", "", "€ 3,50"]

    ]

};


const menuGrid =
    document.getElementById("menuGrid");

const menuTabs =
    document.querySelectorAll(".menu-tab");


function renderMenu(category) {

    menuGrid.innerHTML = "";

    const items =
        menuData[category];

    items.forEach(
        (item, index) => {

            const element =
                document.createElement("article");

            element.className =
                "menu-item";

            element.style.animationDelay =
                `${index * 35}ms`;

            element.innerHTML = `

                <div>

                    <h3>
                        ${item[0]}
                    </h3>

                    ${
                        item[1]
                        ?
                        `<p>${item[1]}</p>`
                        :
                        ""
                    }

                </div>

                <span class="menu-price">
                    ${item[2]}
                </span>

            `;

            menuGrid.appendChild(element);

        }
    );
}


renderMenu("antipasti");


menuTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            menuTabs.forEach(
                item =>
                    item.classList.remove("active")
            );

            tab.classList.add("active");

            renderMenu(
                tab.dataset.category
            );

        }
    );

});


/* =========================================
   PARALLAX
========================================= */

const heroLogo =
    document.querySelector(".hero-logo-3d");

window.addEventListener("scroll", () => {

    if (!heroLogo) return;

    heroLogo.style.marginTop = "";
});

/* =========================================
   BOOKING FORM
========================================= */

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const button =
            bookingForm.querySelector(
                ".submit-button"
            );

        const original =
            button.innerHTML;

        button.innerHTML =
            "RICHIESTA INVIATA ✓";

        button.style.background =
            "#e2c76e";

        setTimeout(() => {

            button.innerHTML =
                original;

        }, 3000);

    }
);


/* =========================================
   MAGNETIC BUTTON EFFECT
========================================= */

document
    .querySelectorAll(".gold-button")
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 900)
                    return;

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const moveX =
                    (x - rect.width / 2) * .08;

                const moveY =
                    (y - rect.height / 2) * .08;

                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform = "";

            }
        );

    });


/* =========================================
   IMAGE LOAD FALLBACK
========================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                console.warn(
                    "Immagine non trovata:",
                    img.src
                );

            }
        );

    });

    /* =========================================
   COOKIE CONSENT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cookieBanner = document.getElementById("cookieBanner");
    const cookieAccept = document.getElementById("cookieAccept");
    const cookieReject = document.getElementById("cookieReject");
    const manageCookies = document.getElementById("manageCookies");

    if (!cookieBanner) return;

    const cookieChoice = localStorage.getItem("gerani_cookie_consent");

    if (!cookieChoice) {
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 800);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener("click", () => {

            localStorage.setItem(
                "gerani_cookie_consent",
                "accepted"
            );

            cookieBanner.classList.remove("show");
        });
    }

    if (cookieReject) {
        cookieReject.addEventListener("click", () => {

            localStorage.setItem(
                "gerani_cookie_consent",
                "rejected"
            );

            cookieBanner.classList.remove("show");
        });
    }

    if (manageCookies) {
        manageCookies.addEventListener("click", (event) => {

            event.preventDefault();

            cookieBanner.classList.add("show");
        });
    }

});
