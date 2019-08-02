const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const main = document.getElementById("container");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");


inputMin.value = 1;
inputMax.value = 100;

const create = function () {            
while (main.firstChild) {
    main.removeChild(main.firstChild);
};


for (let i = 1; i <= 100; i++) {     

    let newDiv = document.createElement("div");
    let newPar = document.createElement("p");

    newDiv.appendChild(newPar);
    main.appendChild(newDiv).setAttribute("id", "div_" + i);    

    if (i < inputMin.value || i > inputMax.value) {
        newDiv.style = "display: none";
    } else {
        if (i % 3 === 0 && i % 5 === 0) {                              
            newPar.appendChild(document.createTextNode('FizzBuzz'));
            main.appendChild(newDiv).setAttribute("class", "FizzBuzz");   

        } else if (i % 3 === 0) {
            newPar.appendChild(document.createTextNode('Fizz'));
            main.appendChild(newDiv).setAttribute("class", "Fizz");

        } else if (i % 5 === 0) {
            newPar.appendChild(document.createTextNode('Buzz'));
            main.appendChild(newDiv).setAttribute("class", "Buzz");

        } else {
            newPar.appendChild(document.createTextNode(i));
            main.appendChild(newDiv).setAttribute("class", "num");
        }
    }
}
};    

btnOne.onclick = function() {
    inputMin.value = "";
    inputMax.value = "";
    create();
};

btnTwo.onclick = function() {
    inputMin.value = 1;
    inputMax.value = 100;
    create();
};