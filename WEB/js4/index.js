let a = document.getElementById("home");
let b = document.getElementById("guest");

let count = 0
function first() {
    count +=1
    a.innerText = count

}
function second() {
    count +=2
    a.innerText = count
}

function third() {
    count +=3
    a.innerText = count
}

function four() {
    count +=1
    b.innerText = count

}
function five() {
    count +=2
    b.innerText = count
}

function six() {
    count +=3
    b.innerText = count
}