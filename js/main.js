// Start passgen functionality

const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numArray = ["0","1","2","3","4","5","6","7","8","9"];

const spcArray = ["\""," ","!","#","$","%","&","'","(",")","*","+",",",
  "-",".","/",":",";","<","=",">","?","@","[","]","\\",
  "^","_","`","{","}","|","~",];

let chrArray = [...lowerArray, ...upperArray, ...numArray, ...spcArray];
let chrArrayCache = true;

function passgen(x=24,array=chrArray) {
let password = "";
m = array.length;
for (let n=0; n<x; n++) {
password += array[Math.floor(Math.random()*m)];
};
return password;
};

function passgen2(x,set) {
    let passwordArray = passgen(x-set.size).split("");
    for (y of set) {
        passwordArray.splice(Math.floor(Math.random()*(passwordArray.length+1)),0,y);
    }
    if (set.has("space")) {passwordArray[passwordArray.indexOf("space")] = " "};
    let password2 = "";
    for (m in passwordArray) {
        password2 += passwordArray[m];
    }
    return password2;
};

// End passgen functionality

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("Page loaded");
        initApp();
    }
});

const initApp = () => {

const addSet = new Set();
const buttonList = document.querySelectorAll(".characterButton");

buttonList.forEach(buttonElement => {
    buttonElement.addEventListener("click", () => {
        if (buttonElement.classList.contains("--clicked")) {
            buttonElement.classList.remove("--clicked");
            addSet.delete(buttonElement.textContent);
        } else {
            buttonElement.classList.add("--clicked");
            addSet.add(buttonElement.textContent);
        };
        console.log(addSet);
    });
});

const pw = document.getElementsByClassName("password")[0];
const buttonGenerate = document.getElementsByClassName("buttonGenerate")[0];
const checkboxArray = document.querySelectorAll(".checkboxInput");

const lowerLetters = document.getElementById("lowerLetters");
const upperLetters = document.getElementById("upperLetters");
const numbers = document.getElementById("numbers");
const specialCharacters = document.getElementById("specialCharacters");

lowerLetters.addEventListener("click", (event) => {
    event.preventDefault();
});

upperLetters.addEventListener("click", () => {
    chrArrayCache = false;
});

numbers.addEventListener("click", () => {
    chrArrayCache = false;
});

specialCharacters.addEventListener("click", () => {
    chrArrayCache = false;
});

buttonGenerate.addEventListener("click", () => {
    if (chrArrayCache) {
        pw.value = passgen2(lengthInput.value,addSet);
    } else {
        chrArray = [...lowerArray];
        if (upperLetters.checked) {
            chrArray = chrArray.concat(upperArray);
        };
        if (numbers.checked) {
            chrArray = chrArray.concat(numArray);
        };
        if (specialCharacters.checked) {
            chrArray = chrArray.concat(spcArray);
        };
        chrArrayCache = true;
        console.log("Cache modified")
        pw.value = passgen2(lengthInput.value,addSet);
    }
});

const copyButton = document.getElementsByClassName("copyButton")[0];

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(pw.value);
});

const lengthInput = document.getElementById("lengthInput");
const lengthNumber = document.getElementById("lengthNumber");

lengthInput.oninput = (() => {
    lengthNumber.textContent = lengthInput.value;
});

}