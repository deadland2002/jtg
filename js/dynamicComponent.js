class DynamicComponent{
    data
    mapFunction
    parentNode
    constructor(arrData,dataMapper,parent){
        this.data = arrData
        this.mapFunction = dataMapper
        this.parentNode = document.getElementById(parent)
        console.log("const")
    }

    render(){
        let result = ""
        for(let data of this.data){
            result += this.mapFunction(data)
        }
        this.parentNode.innerHTML = result
    }

    add(value){
        this.data.push(value)
        this.render()
    }
}
