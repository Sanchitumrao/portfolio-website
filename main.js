  var typed = new Typed("#speedtext", {
    strings: ["Web Developer", "UI Designer", "Problem Solver", "Freelancer"],
    typeSpeed: 100,      // typing speed in ms
    backSpeed: 60,       // backspacing speed
    backDelay: 1500,     // pause before deleting
    loop: true           // repeat infinitely
  });


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✖";
    }
    else {
        menuToggle.textContent = "☰";
    }
});
const headings = document.querySelectorAll('section h2');

// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-line');
        } else {
            entry.target.classList.remove('animate-line'); // optional (if you want it to reset)
        }
    });
}, { threshold: 0.5 }); // triggers when 50% of heading is visible

// Observe each heading
headings.forEach(h2 => observer.observe(h2));




const skills = [
    { name: "HTML", level: "Advanced", icon: "Assets/html.png" },
    { name: "CSS", level: "Advanced", icon: "Assets/css.png" },
    { name: "JavaScript", level: "Intermediate", icon: "Assets/javascript.png" },
    { name: "Tailwind", level: "Intermediate", icon: "Assets/tailwind.png" },
    { name: "Python", level: "Advanced", icon: "Assets/python.svg" },
    { name: "Node JS", level: "learning", icon: "Assets/nodejs.png" }
];

const skillContainer = document.getElementById("skillContainer");

skills.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = `
    <img src="${skill.icon}" alt="${skill.name}">
    <h3>${skill.name}</h3>
    <p>${skill.level}</p>
  `;
    skillContainer.appendChild(card);
});


const educationData = [
    {
        degree: "Bachelor of Computer Application",
        institution: "CSJMU Kanpur Nagar",
        year: "2024 - 2027",
        details: "Specialized in Computer Science and Engineering."
    },
    {
        degree: "High School & Intermediate ",
        institution: "MDBL Inter College Umri Kanpur Nagar",
        year: "2020 - 2024",
        details: "Science & Mathematics"
    }
];

const edContainer = document.getElementById("ed-container");

educationData.forEach((edu) => {
    const card = document.createElement("div");
    card.classList.add("edu-card");

    card.innerHTML = `
    <h3>${edu.degree}</h3>
    <p><strong>${edu.institution}</strong> | ${edu.year}</p>
    <p>${edu.details}</p>
  `;

    edContainer.appendChild(card);
});
// Array of project data
const projects = [
    {
        title: "3 in 1 Calculator",
        description: "A web app that converts currencies in real time using API data.",
        image: "Assets/calc.png",
        link: "https://calculator-nine-alpha-52.vercel.app",
        github: "abc",
    }

];

// Get the container
const container = document.getElementById("projects-container");

// Loop through projects and build cards
projects.forEach((project) => {
    // Create project card
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
    <img id="project-image" src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="buttons">
      <a href="${project.link}" target="_blank" class="btn">Live Demo</a>
      ${project.github ? `<a href="${project.github}" target="_blank" title="View on GitHub">
               <img src="Assets/github.svg" alt="GitHub" class="github-icon">
             </a>` : ""}
    </div>
   
  `;

    // Add card to container
    container.appendChild(card);
});



// Observe when the .contact section appears in the viewport
const contactSection = document.querySelector('.contact');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 }); // trigger when 30% of section is visible

observer2.observe(contactSection);





// Initialize EmailJS
(function () {
    emailjs.init("E4q-PPyeoZd8CEgGz"); //public key
})();

// form submission
const contactForm = document.getElementById("contactForm");
let isSending = false;
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    //  If already sending, ignore clicks
    if (isSending) return;
    isSending = true;
    // Collect form data
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contactno").value,
        message: document.getElementById("message").value
    };

    // Send email
    emailjs.send("service_uk304r5", "template_vjm8tbe", params)
        .then(function (response) {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        })
        .catch(function (error) {
            alert("❌ Failed to send message. Try again later.");
            console.error(error);
        })
        .finally(() => {
            isSending = false;
        });
});