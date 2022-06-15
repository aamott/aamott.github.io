const technical_skills = [
    {
        name: "Python",
        level: 60
    },
    {
        name: "C++",
        level: 40
    },
    {
        name: "HTML",
        level: 60
    },
    {
        name: "CSS",
        level: 60
    },
    {
        name: "JavaScript",
        level: 50
    },
    {
        name: "PHP",
        level: 30
    },
    {
        name: "C#",
        level: 40
    }
];

const people_skills = [
    {
        name: "Communication",
        level: 60
    },
    {
        name: "Teamwork",
        level: 60
    },
    {
        name: "Problem solving",
        level: 60
    },
    {
        name: "Adaptability",
        level: 60
    },
    {
        name: "Time management",
        level: 60
    },
    {
        name: "Nunchuk",
        level: 1
    },
    {
        name: "Awesomeness",
        level: 300
    }
];


function build_skills_el(skills, skills_el) {
    if ( ! skills.length > 0 || ! skills_el) {
        console.log("build_skills_el: no skills or no skills_el provided");
        return;
    }

    skills.forEach((skill) => {
        // Create the skill container
        let skill_el = document.createElement("li");
        skill_el.classList.add("skill-container");
        
        // Create the skill name
        let skill_name_el = document.createElement("label");
        skill_name_el.classList.add("skill-name");
        skill_name_el.innerText = skill.name;
        skill_name_el.setAttribute( "for", skill.name + "El" );

        // Create the skill level
        let skill_level_el = document.createElement("div");
        skill_level_el.id = skill.name + "El";
        skill_level_el.classList.add("skill-level");
        // check if skill level is a number
        if (typeof skill.level === "number") {
            skill_level_el.style.width = skill.level + "%";
        } else {
            skill_level_el.style.width = "0%";
        }

        // Append the skill name and level to the skill container
        skill_el.appendChild(skill_name_el);
        skill_el.appendChild(skill_level_el);

        // Append the skill container to the skills element     
        skills_el.appendChild(skill_el);
    }
    );
}


// Wait until the page is loaded to build the skills element
window.addEventListener("load", () => {
    let skills_el = document.getElementById( "technical-skills-container" );
    build_skills_el(technical_skills, skills_el);

    let people_skills_el = document.getElementById( "people-skills-container" );
    build_skills_el(people_skills, people_skills_el);
});
