const body = document.getElementsByTagName('body')[0];
const footerNode = document.createElement("div");

footerNode.innerHTML = `
    <section id="footer" class="w-full bg-slate-100 flex flex-col gap-4 px-10 py-5">
        <div class="w-full flex justify-evenly items-center">
            <img src="public/FooterLogo1.svg" />
            <img src="public/FooterLogo2.svg" />
            <img src="public/FooterLogo3.svg" />
            <img src="public/FooterLogo4.svg" />
        </div>
        <div>
            <img src="public/Logo.png" />
        </div>
        <div class="w-full flex justify-between items-center">
            <div class="flex flex-col w-fit">
                <span>Link 1</span>
                <span>Link 2</span>
                <span>Link 3</span>
                <span>Link 4</span>
            </div>
            
            <div class="flex gap-4">
                <div class="flex flex-col w-fit min-w-[200px]">
                    <span class="font-semibold mb-4">Quick Links</span>
                    <span class="text-gray-600 text-sm">Home</span>
                    <span class="text-gray-600 text-sm">Skills</span>
                    <span class="text-gray-600 text-sm">Education</span>
                    <span class="text-gray-600 text-sm">Projects</span>
                    <span class="text-gray-600 text-sm">Recommendations</span>
                </div>
                <div class="flex flex-col w-fit min-w-[200px]">
                    <span class="font-semibold mb-4">Portfolios</span>
                    <span class="text-gray-600 text-sm">Frontend Development</span>
                    <span class="text-gray-600 text-sm">Backend Development</span>
                    <span class="text-gray-600 text-sm">Website Design</span>
                    <span class="text-gray-600 text-sm">Machine Learning</span>
                    <span class="text-gray-600 text-sm">Problem Solving & DSA</span>
                </div>
                <div class="flex flex-col w-fit min-w-[200px]">
                    <span class="font-semibold mb-4">Connect</span>
                    <span class="text-gray-600 text-sm">Link 2</span>
                    <span class="text-gray-600 text-sm">Link 3</span>
                    <span class="text-gray-600 text-sm">Link 4</span>
                </div>
            </div>
        </div>
    </section>
    `
body.append(footerNode);
