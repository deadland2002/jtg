function cardCreator({title,description , bgImg , tags}) {
    const inner = tags.map((single)=>(
        `<span class="bg-gray-100 p-1 px-2 rounded-2xl text-xs border-[1px] border-slate-200">${single}</span>`
    )).join("")

    return `
    <div class="flex flex-col gap-2 bg-white w-[400px] shadow-xl rounded-2xl">
        <img src="${bgImg}" alt="${title}" class="h-[300px] w-full" />
        <div class="flex flex-col gap-2 p-4">
            <span class="font-semibold text-slate-700">${title}</span>
            <span class="text-slate-400 text-sm">${description}</span>
            <div class="flex gap-2 flex-wrap">
                ${inner}
            </div>
        </div>
    </div>
    `
}

const dataArr = [
    {
        title:"Front End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Java Script","Web Development","Word Press","React Js.","Next Js"],
    },
    {
        title:"Back End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Java Script","React Js.","Next Js"],
    },
    {
        title:"Front End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Java Script","Web Development","Word Press","React Js.","Next Js"],
    },
    {
        title:"Back End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Java Script","Next Js"],
    },
    {
        title:"Front End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Web Development","Word Press","React Js.","Next Js"],
    },
    {
        title:"Back End Development",
        description:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        bgImg:"public/image1.png",
        tags : ["Java Script","Web Development","Word Press","React Js.","Next Js"],
    },
]

var obj = new DynamicComponent(dataArr,cardCreator,"home-card-parent")
obj.render()