input = document.getElementById("result")
buttons = document.querySelectorAll("button")
output = ""
arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            output = eval(output)
            input.value = output
            console.log(input.value)
        }
        else if(e.target.innerHTML=="AC"){
            output = ""
            input.value = output
            console.log(input.value)
        }
        else if(e.target.innerHTML=="DEL"){
            output = output.substring(0,output.length-1);
            input.value = output
            console.log(input.value)
        }
        else{
            output = output + e.target.innerHTML
            input.value = output
            console.log(input.value)
        }
    })    
})