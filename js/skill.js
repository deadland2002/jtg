function cardCreator({title,language}){
    const inner = language.map((single)=>(
        `<div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <span>${single.title}</span>
                <span>${single.percent}</span>
            </div>
            <div class='w-full border-[1px] border-amber-400 flex rounded-md items-center'>
                <span class="m-[1px] p-[2px] bg-amber-400 rounded-md" style="width: ${single.percent};">
                </span>
            </div>
        </div>`
    )).join("")

    return `
    <div class="flex flex-col gap-2 bg-white p-10 w-[400px]">
        <span class="font-semibold">${title}</span>
        <div class="flex flex-col gap-4">
            ${inner}
        </div>
    </div>
    `
}

const dataArr = [
    {
        title:"Front End Development",
        language : [
            {
                title: "HTML",
                percent: "90%"
            },
            {
                title: "CSS",
                percent: "85%"
            },
            {
                title: "JS",
                percent: "80%"
            },
            {
                title: "PHP",
                percent: "75%"
            },
            {
                title: "WordPress",
                percent: "85%"
            },
        ]
    },
    {
        title:"Languages",
        language: [
            {
                title: "Hindi",
                percent: "90%"
            },
            {
                title: "English",
                percent: "85%"
            },
        ]
    },
    {
        title:"Back End Development",
        language: [
            {
                title: "NodeJs",
                percent: "90%"
            },
            {
                title: "SSR",
                percent: "85%"
            },
        ]
    },
    {
        title:"Front End Development",
        language : [
            {
                title: "HTML",
                percent: "90%"
            },
            {
                title: "CSS",
                percent: "85%"
            },
            {
                title: "JS",
                percent: "80%"
            },
            {
                title: "PHP",
                percent: "75%"
            },
            {
                title: "WordPress",
                percent: "85%"
            },
        ]
    },
    {
        title:"Languages",
        language: [
            {
                title: "Hindi",
                percent: "90%"
            },
            {
                title: "English",
                percent: "85%"
            },
        ]
    },
    {
        title:"Back End Development",
        language: [
            {
                title: "NodeJs",
                percent: "90%"
            },
            {
                title: "SSR",
                percent: "85%"
            },
        ]
    },
]

var obj = new DynamicComponent(dataArr,cardCreator,"skill-div")
obj.render()

let isDialogOpen = false;

const dialog = document.createElement("div");

dialog.className = "hidden h-screen fixed w-full backdrop-blur-md top-0 left-0 z-20 justify-center items-center"
dialog.style.display = "hidden"

dialog.innerHTML = `
    <div class="relative flex flex-col max-w-[600px] p-5 rounded-md min-h-[500px] bg-white w-full">
        <form class="flex flex-col gap-4" onsubmit="handleSubmit(event)" action="#">
            <div class="flex justify-center flex-col gap-5">
                <span class="font-semibold text-2xl text-center">Add Skill</span>
                    <div class="flex flex-col gap-2">
                        <span>Domain</span>
                        <input type="text" name="domain" class="outline-none bg-gray-100 rounded-md w-full py-2 px-4" required placeholder="Front End Developer">
                    </div>
                    <div class="flex justify-between">
                        <span>Skills</span>
                        <span>Proficiency(%)</span>
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="skill-name-1" name="skill-name" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-full" placeholder="" required>
                        <input type="number" id="skill-prof-1" name="skill-prof" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-[110px]" placeholder="" required max="100" min="0">
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="skill-name-2" name="skill-name" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-full" placeholder="" >
                        <input type="number" id="skill-prof-2" name="skill-prof" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-[110px]" placeholder="" max="100" min="0" >
                    </div>
                     <div class="flex gap-2">
                        <input type="text" id="skill-name-3" name="skill-name" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-full" placeholder="" >
                        <input type="number" id="skill-prof-3" name="skill-prof" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-[110px]" placeholder="" max="100" min="0" >
                    </div>
                     <div class="flex gap-2">
                        <input type="text" id="skill-name-4" name="skill-name" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-full" placeholder="" >
                        <input type="number" id="skill-prof-4" name="skill-prof" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-[110px]" placeholder="" max="100" min="0" >
                    </div>
                     <div class="flex gap-2">
                        <input type="text" id="skill-name-5" name="skill-name" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-full" placeholder="" >
                        <input type="number" id="skill-prof-5" name="skill-prof" class="outline-none bg-gray-100 rounded-md py-2 px-4 w-[110px]" placeholder="" max="100" min="0" >
                    </div>
            </div>
            <div class="flex justify-end gap-5">
                <button type="submit" class="bg-amber-400 px-6 py-2 rounded-md">Add Skill</button>
                <button type="reset" onclick="handleDialogToggle()" class="border-2 border-red-400 text-red-400 px-6 py-2 rounded-md">Close</button>
            </div>
        </form>
    </div>
`
dialog.id = "dialog"
body.append(dialog)

function handleDialogToggle (){
    console.log("CLICK")
    if(isDialogOpen){
        isDialogOpen = false
        dialog.style.display = "none"
        return;
    }else{
        isDialogOpen = true
        dialog.style.display = "flex"
    }
}

function handleSubmit(e){
    console.log(e)
    e.preventDefault()
    const form = e.target;
    const data = new FormData(form)
    const domain = data.get("domain")
    const names = data.getAll("skill-name")
    const profs = data.getAll("skill-prof")

    const ans = {
        title : domain,
        language : []
    }

    for(let nameIdx = 0 ; nameIdx < names.length; nameIdx++){
        if(names[nameIdx] !== ""){
            const prof = profs[nameIdx]
            if(prof === ""){
                document.getElementById(`skill-prof-${nameIdx+1}`).style.border = "2px solid red"
                return
            }else{
                document.getElementById(`skill-prof-${nameIdx+1}`).style.border = ""
                ans.language.push({
                    title: names[nameIdx],
                    percent: prof+"%"
                },)
            }
        }
    }
    form.reset()
    handleDialogToggle()
    obj.add(ans)
}
