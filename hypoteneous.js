const sides = document.querySelectorAll(".side-input");
const hypoteneousBtn = document.querySelector("#hypoteneous-btn");
const outputBox = document.querySelector("#output");

function calculateSumofSquares(a , b) {
    const sumOfSquares = a*a + b*b;

    return sumOfSquares;
}

function calculateHypoteneous() {

    if(Number(sides[0].value)>0 && Number(sides[1].value)>0) {
   const sumOfSquares = calculateSumofSquares(Number(sides[0].value), Number(sides[1].value));
   const lengthOfHypoteneous = Math.sqrt(sumOfSquares);
   outputBox.innerText = "The length of hypoteneous is " + lengthOfHypoteneous;
    }
    else {
        outputBox.innerText= "Please enter positive values!";
    }
}

hypoteneousBtn.addEventListener("click", calculateHypoteneous);