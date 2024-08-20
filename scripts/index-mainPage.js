import { user } from "./login.js";
export let examRecord = JSON.parse(localStorage.getItem('examRecords'))||[];


document.addEventListener('DOMContentLoaded', () => {

const serialNumber = document.querySelector('.js-serial-number');
const courseCode = document.querySelector('.js-course-code');
const displayMessage = document.querySelector('.js-display-message');
const courseTitle = document.querySelector('.js-course-title');
const unit = document.querySelector('.js-unit');
const dateContent = document.querySelector('.js-date');
const selectVenue = document.querySelector('.js-select-venue');
const selectTime = document.querySelector('.js-select-time');
const submitButton = document.querySelector('.btn3');
const userInfo = document.querySelector('.user-info');
const deptInfo = document.querySelector('.dept-info');
const adminImg = document.querySelector('.admin-image');
const logOutBtn = document.querySelector('.logOutBtn');
logOutBtn
const VTTBtn = document.querySelector('.VTTBtn');

let fixedTime;


const imgHtml = `<img class="user" src="${user.image}" alt="Example Image" onerror="this.src='${user.altImg}';" />`

adminImg.innerHTML = imgHtml;

userInfo.innerHTML = user.name.toUpperCase();
deptInfo.innerHTML = user.dept.toUpperCase();

const nextSerialNumber = examRecord.length > 0 ? examRecord[examRecord.length - 1].sn + 1 : 1;

serialNumber.innerHTML = nextSerialNumber;


submitButton.addEventListener('click', ()=>{

  const serialNumber2 = examRecord.length > 0 ? examRecord[examRecord.length - 1].sn + 1 : 1;

  serialNumber.innerHTML = Number(serialNumber2) + 1;

  examRecord.push({
    sn: serialNumber2,
    code: courseCode.value,
    title: courseTitle.value,
    unit: unit.value,
    examDate: dateContent.value,
    venu: selectVenue.value,
    time: selectTime.value
  });
  saveToStorage();
  displayMsg();
  renderTimeTable();
  renderTimeTable2();
})

logOutBtn.addEventListener('click', ()=>{
  window.location.href = 'login.html';
})


function displayMsg(){
  displayMessage.classList.add('appear');

  clearInterval(fixedTime)
  fixedTime = setInterval(()=>{
    document.querySelector('.js-display-message').classList.remove('appear')
      }, 1000);
}

});

export function saveToStorage(){
  localStorage.setItem('examRecords', JSON.stringify(examRecord));
}

