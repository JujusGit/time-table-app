import { adminData } from "./saveData.js";

document.addEventListener('DOMContentLoaded', () => {
  const userName2 = document.querySelector('.userName');
  const password2 = document.querySelector('.password');
  const button1 = document.querySelector('.button1');
  const Show = document.querySelector('.show');
  const hide = document.querySelector('.hide');
  const idField = document.querySelector('.id-field');
  const enterBtn = document.querySelector('.enter-btn');

  function togglePassword(){
    const fieldType = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', fieldType);

    Show.classList.toggle('appear', fieldType === 'password');
    Show.classList.toggle('disappear', fieldType === 'text');
    
    hide.classList.toggle('appear', fieldType === 'text');
    hide.classList.toggle('disappear', fieldType === 'password');
  }

  [Show, hide].forEach(btn => btn.addEventListener('click', togglePassword));

  let matchingitem;

  adminData.forEach((item)=>{
    enterBtn.addEventListener('click', ()=>{
      if(item.id === idField.value){
        matchingitem = item;
      }
    })
  })

  button1.addEventListener('click', () => {
      if (userName2.value === matchingitem.username && password2.value === matchingitem.password){  
        const usersInformation = {
          name: matchingitem.username,
          image: matchingitem.image,
          dept: matchingitem.department,
          altImg: matchingitem.altImg
        };
        localStorage.setItem('usersInformation', JSON.stringify(usersInformation));

        console.log('User data stored:', usersInformation);
        window.location.href = 'index.html';
      } else {
        document.querySelector('.hide-appear').classList.add('appear');
      }
    });
});

const user = JSON.parse(localStorage.getItem('usersInformation'));


export { user };