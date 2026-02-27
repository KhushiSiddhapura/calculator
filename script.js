screen = document.getElementById("result")
buttons = document.querySelectorAll("button")
output = ""
arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(button.innerText == "="){
            output = eval(output);
        }else if(button.innerText == "AC"){
            output = ""
        }else if(button.innerText == "DEL"){
             output = output.substring(0,output.length-1);
        }else{
            output += button.innerText;
        }
        screen.value = output;
    })    
})
