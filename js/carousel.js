class CarouselCreator{
    dataArr
    parent
    control
    mapper
    currentIndex = 0

    constructor(dataArr,parent,control,mapper){
        this.dataArr = dataArr
        this.parent = document.getElementById(parent)
        this.control = document.getElementById(control)
        this.mapper = mapper
    }

    render(){
        let result = ""
        for(let data of this.dataArr){
            result += this.mapper(data)
        }

        this.parent.innerHTML = result + result
        this.parent.style.transform = `translateX(-${this.currentIndex * (300+50)}px)`;
        this.parent.style.transition = `all .5s`;

        this.control.innerHTML = Array.from({length: this.dataArr.length}).map((_, index) => `
        <span onclick="carouselObj.handleChange(${index})" class="p-2 rounded-full ${index === this.currentIndex ? "bg-amber-400" : "bg-amber-200"}">
        </span>
        `).join("")
    }

    handleChange(index){
        this.currentIndex = index
        this.render()
    }
}


const starSvg = () => `<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2143 13.9217L14.595 12.8976L16.4253 18.1014L10.2143 13.9217ZM20.2959 7.19556H12.5847L10.2143 0.49707L7.84398 7.19556H0.132812L6.37376 11.3475L4.0034 18.046L10.2443 13.8941L14.0849 11.3475L20.2959 7.19556Z" fill="#FFB400"/>
</svg>
`

function dataMapper(data){
    return `
        <div class="flex flex-col bg-white p-4 w-[300px] gap-6">
            <div class="flex gap-2">${Array.from({length:data.stars}).map(starSvg).join("")}</div>
            <span class="font-semibold">
                ${data.title}
            </span>
            <span class="text-gray-500">
                ${data.description}
            </span>
            <div class="flex gap-5">
                <img src="${data.user.image}" class="aspect-square w-[70px] object-cover rounded-full" />
                <div class="flex flex-col items-center justify-center">
                    <span class="font-semibold">${data.user.name}</span>
                    <span class="text-sm text-gray-500">${data.user.designation}</span>
                </div>
            </div>
        </div>
    `
}


const carouselDataArr = [
    {
        title : "Review 1",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:1
    },
    {
        title : "Review 2",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:2
    },
    {
        title : "Review 3",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:3
    },
    {
        title : "Review 4",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:4
    },
    {
        title : "Review 5",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:4
    },
    {
        title : "Review 6",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        user:{
            image:"public/image1.png",
            name:"test name",
            designation:"Photographer"
        },
        stars:5
    }
]


const carouselObj = new CarouselCreator(carouselDataArr,"home-carousel","home-carousel-control",dataMapper)
carouselObj.render()
