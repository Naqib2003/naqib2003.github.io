document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Populate Hero Section
    document.getElementById("hero-name").textContent = portfolioData.personal.name;
    document.getElementById("hero-headline").textContent = portfolioData.personal.headline;
    document.getElementById("hero-bio").textContent = portfolioData.personal.bio;
    document.getElementById("btn-resume").href = portfolioData.personal.resume;
    document.getElementById("link-github").href = portfolioData.personal.github;
    document.getElementById("link-linkedin").href = portfolioData.personal.linkedin;
    document.getElementById("hero-photo").src = portfolioData.personal.photo;
    
    document.getElementById("footer-email").href = portfolioData.personal.email;
    document.getElementById("footer-email").textContent = portfolioData.personal.email.replace("mailto:", "");
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Populate Education
    const eduContainer = document.getElementById("education-container");
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="edu-card">
                <h3>${edu.degree}</h3>
                <span>${edu.institution} | ${edu.date}</span>
                <p>${edu.details}</p>
            </div>
        `;
    });

    // 3. Populate Skills
    const skillsContainer = document.getElementById("skills-container");
    portfolioData.skills.forEach(skillGroup => {
        const tags = skillGroup.items.map(item => `<span>${item}</span>`).join("");
        skillsContainer.innerHTML += `
            <div class="skill-category">
                <h4>${skillGroup.category}</h4>
                <div class="skill-tags">${tags}</div>
            </div>
        `;
    });

    // 4. Populate Projects
    const projectsContainer = document.getElementById("projects-container");
    portfolioData.projects.forEach(project => {
        const techTags = project.technologies.map(tech => `<span>${tech}</span>`).join("");
        let links = ``;
        if(project.github) links += `<a href="${project.github}" target="_blank">GitHub ↗</a>`;
        if(project.live) links += `<a href="${project.live}" target="_blank">Live Demo ↗</a>`;

        projectsContainer.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <div class="project-tech">${techTags}</div>
                <p>${project.description}</p>
                <div class="project-links">${links}</div>
            </div>
        `;
    });

    // 5. Populate Experience
    const expContainer = document.getElementById("experience-container");
    portfolioData.experience.forEach(exp => {
        expContainer.innerHTML += `
            <div class="exp-item">
                <h4>${exp.title}</h4>
                <span class="company">${exp.company} | ${exp.date}</span>
                <p>${exp.description}</p>
            </div>
        `;
    });

    // 6. Populate Achievements
    const achContainer = document.getElementById("achievements-container");
    portfolioData.achievements.forEach(ach => {
        achContainer.innerHTML += `
            <div class="achieve-item">
                <h4>${ach.title}</h4>
                <span class="issuer">${ach.issuer} | ${ach.date}</span>
                ${ach.score ? `<p>Score: ${ach.score}</p>` : ''}
            </div>
        `;
    });

    // 7. Populate Research
    const resContainer = document.getElementById("research-container");
    const interests = portfolioData.research.interests.map(i => `<li>${i}</li>`).join("");
    resContainer.innerHTML = `
        <h3>Core Focus Areas</h3>
        <ul>${interests}</ul>
    `;

    // --- Interactive Logic --- //

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu on link click
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Scroll Reveal Animation via Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach((el) => {
        observer.observe(el);
    });
});