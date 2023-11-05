let radioBtns = document.querySelectorAll("input[name='pizza']")
let result = document.getElementById("result")

let FindSelected = () => 
{let selected = document.querySelector("input[name='pizza']:checked").value;}
    
result.textContent = `Type of thickness: ${selected}`
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change",FindSelected)
    
});
