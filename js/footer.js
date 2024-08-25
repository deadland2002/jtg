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
            <div class="flex flex-col w-fit gap-5">
                <span>
                    <a href="#">
                         <img src="public/link1.png" />
                    </a>
                    <p> 4.5/5 Rating on Lorem </p>
                </span>
                <span>
                    <a href="#">
                         <img src="public/link2.png" />
                    </a>
                    <p> 9/10 Rating on Ipsum </p>
                </span>
                <span>
                    <a href="#">
                         <img src="public/link3.png" />
                    </a>
                    <p> 4.5/5 Rating on detor </p>
                </span>
            </div>
            
            <div class="flex gap-4">
                <div class="flex flex-col w-fit gap-4 min-w-[200px]">
                    <span class="font-semibold mb-4">Quick Links</span>
                    <span class="text-gray-600 text-sm">
                        <a href="#">Home</a></span>
                    <span class="text-gray-600 text-sm">
                        <a href="Skill.html">Skills</a></span>
                   <span class="text-gray-600 text-sm">
                        <a href="#">Education</a></span>
                    <span class="text-gray-600 text-sm">
                        <a href="#">Projects</a></span>
                    <span class="text-gray-600 text-sm">
                        <a href="#">Recommendations</a></span>
                </div>
                <div class="flex flex-col w-fit gap-4 min-w-[200px]">
                    <span class="font-semibold mb-4">Portfolios</span>
                    <span class="text-gray-600 text-sm">Frontend Development</span>
                    <span class="text-gray-600 text-sm">Backend Development</span>
                    <span class="text-gray-600 text-sm">Website Design</span>
                    <span class="text-gray-600 text-sm">Machine Learning</span>
                    <span class="text-gray-600 text-sm">Problem Solving & DSA</span>
                </div>
                <div class="flex flex-col w-fit gap-4 min-w-[200px]">
                    <span class="font-semibold mb-4">Connect</span>
                    <span>
                    <a href="#">
                         <img src="public/linkedin.png" />
                    </a>
                </span>
                    <a href="#">
                         <img src="public/insta.png" />
                    </a>
                   <a href="#">
                         <img src="public/face.png" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    `
body.append(footerNode);
