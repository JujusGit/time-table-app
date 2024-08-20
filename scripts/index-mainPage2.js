import { examRecord } from "./index-mainPage.js";

document.addEventListener('DOMContentLoaded', () => {
  
function renderTimeTable2(){
let examTable2 = '';

 examRecord.forEach((item) => {
    const html = `
    <div class="SerialNumber">${item.sn}</div>
    <div class="courseTitle">${item.title}</div>
    <div class="courseCode">${item.code}</div>
    <div class="TTVenue">${item.venu}</div>
    <div class="TTTime">${item.time}</div>
    <div class="TTDate">${item.examDate}</div>
    <div class="TTUnit">${item.unit}</div>
      `;

examTable2 += html;
  });
  document.querySelector('.content-for-pdf').innerHTML = examTable2;
}

renderTimeTable2();

function savePageAsPDF() {
  var element = document.getElementById('content');
  html2pdf().from(element).save();
}

document.querySelector('.downlodPdfBtn').addEventListener('click', ()=>{
  savePageAsPDF();
})

});