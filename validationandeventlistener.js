const btn = document.querySelector('.button0');
btn.addEventListener('click',(e) =>{
    e.preventDefault();
    //e.stopPropagation();
    console.log(e.target.className);
    console.log(e.target.id);
    //document.querySelector('.container').style.background = 'red';
    //document.querySelector('body').style.background = 'blue';
})
const btn1 = document.querySelector('.button1');
btn1.addEventListener('mouseover',(e1) =>{
    console.log(e1.target.className);
})
const btn2 = document.querySelector('.button2');
btn2.addEventListener('mouseout',(e2) =>{
    console.log(e2.target.className);
})

const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value === '' || email.value === '')
    {
      msg.innerHTML = 'enter the missing values';
      setTimeout(() => msg.remove(),4000);
    }
    else{
        console.log(nameInput.value);
        console.log(email.value);

        /*const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        users.appendChild(li);*/

        nameInput.value ='';
        email.value = '';
    }
} 
