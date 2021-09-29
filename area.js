const inputBaseHeight = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputBox = document.querySelector("#output");

function calculateTriangleArea() {
    const base = Number(inputBaseHeight[0].value);
    const height = Number(inputBaseHeight[1].value);
    if(base > 0 && height > 0 ){
    const area = (base*height)* 0.5;
    outputBox.innerText = "area of triangle is: " + area;
    }
    else {
        
     outputBox.innerText= "Please enter positive values!"
    }
}

areaBtn.addEventListener("click" , calculateTriangleArea);