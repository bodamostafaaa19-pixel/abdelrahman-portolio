// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= SCROLL ANIMATION =================

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .stat, .education-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.7s ease";

    observer.observe(element);

});
const cursorLight = document.querySelector(".cursor-light");

let mouseX = 0;
let mouseY = 0;

let lightX = 0;
let lightY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateLight() {

    lightX += (mouseX - lightX) * 0.12;
    lightY += (mouseY - lightY) * 0.12;

    cursorLight.style.left = lightX + "px";
    cursorLight.style.top = lightY + "px";

    requestAnimationFrame(animateLight);
}

animateLight();
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const elapsed = currentTime - startTime;

                const progress = Math.min(
                    elapsed / duration,
                    1
                );

                // Smooth animation
                const easeOut =
                    1 - Math.pow(1 - progress, 3);

                current = Math.floor(
                    easeOut * target
                );

                counter.textContent =
                    current.toLocaleString() + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent =
                        target.toLocaleString() + suffix;
                }
            }

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);
        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});
if (window.innerWidth > 768) {

    // كود الـcustom cursor هنا

}
const caseStudies = {

    case1: {
        category: "MARKETING CAMPAIGN",
        title: "Campaign Name",

        role: "Marketing & Business Development",

        objective: "Increase registrations and reach the target audience.",

        work: "Campaign strategy, B2B outreach, social media promotion, audience targeting and campaign coordination.",

        result: "500+ registrations and 20K+ reach."
    },

    case2: {
        category: "EVENT MARKETING",
        title: "Event Campaign",

        role: "Marketing & Event Management",

        objective: "Increase event attendance and awareness.",

        work: "Offline marketing, partnership development, social media promotion and event coordination.",

        result: "1,000+ participants."
    },

    case3: {
        category: "B2B MARKETING",
        title: "B2B Partnership Campaign",

        role: "Business Development",

        objective: "Build strategic partnerships and expand the campaign reach.",

        work: "B2B outreach, negotiation, relationship building and partnership development.",

        result: "Multiple strategic partnerships."
    }

};


function openCaseStudy(caseId) {

    const data = caseStudies[caseId];

    if (!data) return;

    document.getElementById("modalCategory").textContent =
        data.category;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalRole").textContent =
        data.role;

    document.getElementById("modalObjective").textContent =
        data.objective;

    document.getElementById("modalWork").textContent =
        data.work;

    document.getElementById("modalResult").textContent =
        data.result;

    document.getElementById("caseModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCaseStudy() {

    document.getElementById("caseModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* Close when clicking outside */

document.getElementById("caseModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeCaseStudy();
        }

    }
);
