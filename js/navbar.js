const navNode = document.createElement("div");
console.log("OK NAV")
navNode.innerHTML = `
    <div id="navbar" class="w-full bg-red-200 justify-between px-5 py-2">
        <img src="../public/Logo.png" class="" />
    </div>
    `
body.prepend(navNode);
