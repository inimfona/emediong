let hamburger =document.querySelector('.hamburger')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
})
let cat = document.querySelector('.cat')
hamburger.addEventListener('click',()=>{
    cat.classList.toggle('cat')
})
var typed = new Typed('.autotyped', {
    strings: ["Welcome to Diamond Realties.", "Unique design for the unique client."],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  var typed = new Typed('.autotyped2', {
    strings: ["Welcome to Diamond Realties.", "Unique design for the unique client."],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
let item= document.getElementById('username')
let email= document.getElementById('email')
let form = document.querySelector('.form')
let one = document.getElementById('one')
let sendmail = document.getElementById('sendmail')

form.addEventListener('submit',onsubmit)

function onsubmit(e){
    e.preventDefault();
    if (item.value ==='' && email.value ==='' && text.value ===''){
        one.innerHTML="Please input Details"
        one.style.color=" red"
    }
    else if (item.value ==='' && email.value ==='' ){
        one.innerHTML="Please input Details"
        one.style.color=" red"
    }
    else if (item.value ==='' && text.value ==='' ){
        one.innerHTML="Please input Details"
        one.style.color=" red"
    }
    else if ( email.value ==='' && text.value ===''){
        one.innerHTML="Please input Details"
        one.style.color=" red"
    }
    else if (item.value ==='') {
        one.innerHTML='Please input Username'
        one.style.color=" red"
    } 
    else if (email.value ==='') {
        one.innerHTML='Please input Email'
        one.style.color=" red"
    } 
    else if (text.value ==='') {
        one.innerHTML='Text area is Empty'
        one.style.color=" red"
    } 
    else{
            let params = {
                name:document.getElementById('username').value,
                email:document.getElementById('email').value,
                message:document.getElementById('text').value
            };
            let serviceID="service_9j1oesx";
        let templateID="template_bapjco4";
        emailjs
        .send(serviceID, templateID,params)
        .then((res) => (
            document.getElementById('username').value ="",
            document.getElementById('email').value ="",
            document.getElementById('text').value ="",
            one.style.color=" rgb(1, 184, 1)",
            one.innerHTML='Successful'
        ))

        } 
        }
let vv =document.querySelector('.vv')
vv.addEventListener('click',()=>{
    vv.classList.toggle('dog')
})