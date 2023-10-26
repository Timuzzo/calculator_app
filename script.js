const display = (x) => {
    document.getElementById("result").value += x

    const input = document.getElementById("result").value
    const lastCaracter = input[input.length-1]
    const penultimateCaracter = input[input.length-2]

    if (lastCaracter === penultimateCaracter && !Number(lastCaracter) && lastCaracter !== "0") {
        const deleteLastCharacter = input.slice(0,-1)
        document.getElementById("result").value = deleteLastCharacter
    }
    if (lastCaracter !== penultimateCaracter && !Number(lastCaracter) && !Number(penultimateCaracter) && lastCaracter !== "0" && penultimateCaracter !== "0") {
        const replaceLastCharacter = input.replace(penultimateCaracter, x).slice(0,-1)
        document.getElementById("result").value = replaceLastCharacter
    }
    return x
}

const calculate = () => {
    let a = document.getElementById('result').value
    let b = eval(a);
    document.getElementById('result').value = b
    if (b===undefined) {
        document.getElementById('result').value = ""
    }
    return b
}

const reset = () => {
    document.getElementById("result").value = ""
}

const del = () => {
    const input = document.getElementById("result").value
    const deleteLastCharacter = input.slice(0, length-1)
    document.getElementById('result').value = deleteLastCharacter
}

const toggle = document.getElementsByClassName("toggle");
const arr = [...toggle];

arr.forEach((element, index) => {
element.addEventListener("click", () => {
element.style.opacity = "1";
if (index == 0) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementsByClassName("name_theme")[0].style.color = "hsl(0, 0%, 100%)";
    document.getElementsByClassName("three-state-toggle")[0].style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "hsl(223, 31%, 20%)";
    
    const numberButtons = document.getElementsByClassName("button");
    const buttonsArr = [...numberButtons];
    buttonsArr.forEach(item => {
        item.style.backgroundColor = "hsl(30, 25%, 89%)";
        item.style.boxShadow = "0px 3px  hsl(28, 16%, 65%)";
        item.style.color = "hsl(221, 14%, 31%)";
    })
    
    document.getElementById("result").style.backgroundColor = "hsl(224, 36%, 15%)";
    document.getElementById("result").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("equal").style.boxShadow = "0px 3px hsl(6, 70%, 34%)";
    document.getElementById("equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementById("equal").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("reset").style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
    document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("del").style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
    document.getElementById("del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("del").style.color = "hsl(0, 0%, 100%)";

    element.style.backgroundColor = "hsl(6, 63%, 50%)";

} else if (index == 1) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementsByClassName("name_theme")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "hsl(0, 5%, 81%)";
    document.getElementsByClassName("three-state-toggle")[0].style.backgroundColor = "hsl(0, 5%, 81%)";

    const numberButtons = document.getElementsByClassName("button");
    const buttonsArr = [...numberButtons];
    buttonsArr.forEach(item => {
        item.style.backgroundColor = "hsl(45, 7%, 89%)";
        item.style.boxShadow = "0px 3px  hsl(35, 11%, 61%)";
        item.style.color = "hsl(60, 10%, 19%)";
    })
    document.getElementById("result").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.getElementById("result").style.color = "hsl(60, 10%, 19%)";
    document.getElementById("equal").style.boxShadow = "0px 3px hsl(25, 99%, 27%)";
    document.getElementById("equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementById("equal").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("reset").style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
    document.getElementById("reset").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("del").style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
    document.getElementById("del").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("del").style.color = "hsl(0, 0%, 100%)";

    element.style.backgroundColor = "hsl(25, 98%, 40%)";

} else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementsByClassName("name_theme")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementsByClassName("three-state-toggle")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
    
    const numberButtons = document.getElementsByClassName("button");
    const buttonsArr = [...numberButtons];
    buttonsArr.forEach(item => {
        item.style.backgroundColor = "hsl(268, 47%, 21%)";
        item.style.boxShadow = "0px 3px  hsl(290, 70%, 36%)";
        item.style.color = "hsl(52, 100%, 62%)";
    })

    document.getElementById("result").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("result").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("equal").style.boxShadow = "0px 3px hsl(177, 92%, 70%)";
    document.getElementById("equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementById("equal").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("reset").style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
    document.getElementById("reset").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("reset").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("del").style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
    document.getElementById("del").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("del").style.color = "hsl(0, 0%, 100%)";

    element.style.backgroundColor = "hsl(176, 100%, 44%)";
}

arr
.filter((item) => {
return item !== element;
})
.forEach((item) => {
item.style.opacity = "0";
});
});
});