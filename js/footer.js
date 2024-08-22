const body = document.getElementsByTagName('body')[0];
const footerNode = document.createElement("div");

footerNode.innerHTML = `
    <div id="footer" class="w-full bg-green-200 justify-between h-10 px-5 py-2">
    </div>
    `
body.append(footerNode);
