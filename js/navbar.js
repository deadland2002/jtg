const navNode = document.createElement("div");

const isHome = location.pathname.includes("index.html")
const isSkill = location.pathname.includes("skill.html")

navNode.innerHTML = `
    <div id="navbar" class="w-full justify-between px-10 py-2 flex items-center fixed left-0 top-0 bg-white z-10 shadow-md">
        <img src="public/Logo.png" class="" />
        <div class="flex gap-4">
            <a href="index.html" class="px-4 py-1 rounded-md ${isHome && "bg-amber-400"}">Home</a>
            <a href="skill.html" class="px-4 py-1 rounded-md ${isSkill && "bg-amber-400"}">Skills</a>
            <a href="#" class="px-4 py-1 rounded-md">Education</a>
            <a href="#" class="px-4 py-1 rounded-md">Projects</a>
            <a href="#" class="px-4 py-1 rounded-md">Recommendations</a>
            <a href="#" class="px-4 py-1 rounded-md">Contact</a>
        </div>
    </div>
    `
body.prepend(navNode);
