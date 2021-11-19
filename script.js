const btn = document.getElementById('submit');
const exclaim = document.querySelectorAll('.fa-exclamation');
const check = document.querySelectorAll('.fa-check');
const para = document.querySelectorAll('p');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "teal";
    btn.style.border ="2px solid black";

    if(userNameValid()){
        userName.style.border = "2px solid green";
        check[0].style.visibility = "visible";
        check[0].style.color = "green";
        setTimeout(()=>{
            userName.value = "";
            userName.style.border = "1px solid black";
            check[0].style.visibility = "hidden";
            check[0].style.color = "black";
        },3000)
    }
    else {
        userName.style.border = "2px solid red";
        exclaim[0].style.visibility = "visible";
        exclaim[0].style.color ="red";
        para[0].textContent = "Invalid UserName";
        para[0].style.color = "red";
        setTimeout(()=>{
            userName.value = "";
            userName.style.border = "1px solid black";
            exclaim[0].style.visibility = "hidden";
            exclaim[0].style.color = "black";
            para[0].textContent = "";
            para[0].style.color = "";
        },3000)

    }
    if(emailValid()){
        email.style.border= "2px solid green";
        check[1].style.visibility = "visible";
        check[1].style.color = "green";
        setTimeout(()=>{
            email.value = "";
            email.style.border = "1px solid black";
            check[1].style.visibility = "hidden";
            check[1].style.color = "black";
        },3000)
    }
    else{
        email.style.border= "2px solid red";
        exclaim[1].style.visibility = "visible";
        exclaim[1].style.color ="red";
        para[1].textContent = "Invalid Email";
        para[1].style.color = "red";
        setTimeout(()=>{
            email.value = "";
            email.style.border = "1px solid black";
            exclaim[1].style.visibility = "hidden";
            exclaim[1].style.color = "black";
            para[1].textContent = "";
            para[1].style.color = "";
        },3000)

    }
    if(pass1valid()){
        pass1.style.border= "2px solid green";
        check[2].style.visibility = "visible";
        check[2].style.color = "green";
        setTimeout(()=>{
            pass1.value = "";
            pass1.style.border = "1px solid black";
            check[2].style.visibility = "hidden";
            check[2].style.color = "black";
        },3000)
    }
    else{
        pass1.style.border= "2px solid red";
        exclaim[2].style.visibility = "visible";
        exclaim[2].style.color ="red";
        para[2].textContent = "Invalid Password";
        para[2].style.color = "red";
        setTimeout(()=>{
            pass1.value = "";
            pass1.style.border = "1px solid black";
            exclaim[2].style.visibility = "hidden";
            exclaim[2].style.color = "black";
            para[2].textContent = "";
            para[2].style.color = "";
        },3000)
    }
    if(pass2Valid()){
        pass2.style.border= "2px solid green";
        check[3].style.visibility = "visible";
        check[3].style.color = "green";
        setTimeout(()=>{
            pass2.value = "";
            pass2.style.border = "1px solid black";
            check[3].style.visibility = "hidden";
            check[3].style.color = "black";
        },3000)
    }
    else{
        pass2.style.border= "2px solid red";
        exclaim[3].style.visibility = "visible";
        exclaim[3].style.color ="red";
        para[3].textContent = "Password do not match";
        para[3].style.color = "red";
        setTimeout(()=>{
            pass2.value = "";
            pass2.style.border = "1px solid black";
            exclaim[3].style.visibility = "hidden";
            exclaim[3].style.color = "black";
            para[3].textContent = "";
            para[3].style.color = "";
        },3000)
    }
})

function userNameValid(){
    let val = userName.value;
    let pattern = /[a-z]/;
    return pattern.test(val);
}

function emailValid(){
    let val = email.value;
    let pattern = /[a-zA-Z0-9\._]+@+[a-z]+\.+[com]/
    return pattern.test(val);
}

function pass1valid(){
    let val1 = pass1.value;
    return val1.length != 0;
}

function pass2Valid(){
    let val1 = pass1.value;
    let val2 = pass2.value;
    return val1 === val2 && val1.length != 0;
}