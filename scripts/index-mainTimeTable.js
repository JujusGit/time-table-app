import { examRecord } from "./index-mainPage.js";

document.addEventListener('DOMContentLoaded', () => {

  const contentBody = document.querySelector('.content-body');
  const pdfTemplate =  document.querySelector('.content-for-pdf');


 function renderTimeTable(){
  let examTable = '';
  examRecord.forEach((item) => {
    const html = `
      <div class="div-first js-container-${item.sn}" style="border: solid 1px red;">

        <div class="date-field">
          <div class="date-name">DATE</div>
          <div class="date-content js-date-${item.sn}">${item.examDate}
          <span class="hide js-seek1-${item.sn}">
          <input class="js-date js-dateInput-${item.sn} input-field-design"; type="date">
          </span>
          </div>
        </div>

    <div class="time-field">
          <div class="time-name">TIME</div>
          <div class="time-content js-time-${item.sn}">${item.time}

    <span  class="hide js-seek2-${item.sn}" >
        <select class="js-select-time js-timeInput-${item.sn} input-field-design";>
            <option selected>Exam Time</option>
            <option value="8:00AM - 11:00AM">Morning</option>
            <option value="3:00PM - 6:00PM">Afternoon</option>
        </select>
      </span>
          
        
          </div>
        </div>

        <div class="title-field">
          <div class="title-name">TITLE</div>
          <div class="title-content js-title-${item.sn}">${item.title}
          <span  class="hide js-seek3-${item.sn}" >
            <input  class="js-course-title  js-titleInput-${item.sn}  input-field-design"; type="text" placeholder="course Title">
          </span>
          </div>
        </div>

        <div class="course-field">
          <div class="course-name">CODE</div>
          <div class="course-content js-code-${item.sn}">${item.code}

          <span class="hide js-seek4-${item.sn}" >
            <input class="js-course-code  js-codeInput-${item.sn} input-field-design"; type="text" placeholder="course code">
          </span> 
          
         
          </div>
        </div>

    <div class="venue-field">
          <div class="venue-name">VENUE</div>
          <div class="venue-content js-venu-${item.sn}">${item.venu}

    <span class="hide js-seek5-${item.sn}">
        <select class="js-select-venue  js-venuInput-${item.sn}  input-field-design">
          <option selected>Venue</option>
          <option value="SLT">SLT</option>
          <option value="SLH">SLH</option>
          <option value="STT 1">STT 1</option>
          <option value="STT 2">STT 2</option>
          <option value="TLT 1">TLT 1</option>
          <option value="TLT 2">TLT 2</option>
          <option value="ETT">ETT</option>
          <option value="CTT">CTT</option>
          <option value="EDS">EDS</option>
        </select>
    </span>
          
       
          </div>
    </div>

    <div class="unit-field">
          <div class="unit-name">UNIT</div>
          <div class="unit-content js-unit-${item.sn}">${item.unit}
    
          <span class="hide js-seek6-${item.sn}" >
            <input  class="js-unit  js-unitInput-${item.sn} input-field-design"; type="number" placeholder="Unit">
          </span>
          
          </div>
    </div>

        <div class="button-section">
        <span class="hide js-seek7-${item.sn}">
        <button class="js-submit-btn"  style="background-color: rgb(95, 95, 255)" data-table-id="${item.sn}">
          SUBMIT
        </button>
        </span> 
       

      <button style="background-color: rgb(82, 255, 82);" class="js-edit-btn editBtn-${item.sn}" data-table-id="${item.sn}">
          Edit
      </button>

          <button style="background-color: rgb(255, 52, 52);" class="js-delete-btn deleteBtn-${item.sn}" data-table-id="${item.sn}">
            Delete Record
          </button>
        </div>
      </div>`;
    examTable += html;
  });
  contentBody.innerHTML = examTable;
  attachDeleteHandlers();
  attachEditHandlers();
  attachSubmitHandlers();
}

function attachDeleteHandlers() {
  document.querySelectorAll('.js-delete-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const itemSN = button.dataset.tableId;
      const updatedRecord = examRecord.filter(item => item.sn !== parseInt(itemSN));
      localStorage.setItem('examRecords', JSON.stringify(updatedRecord));
      examRecord.length = 0; 
      examRecord.push(...updatedRecord); 
      renderTimeTable();
    });
  });
}

function attachEditHandlers(){
  document.querySelectorAll('.js-edit-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const itemSN = button.dataset.tableId;
      const seek1 = document.querySelector(`.js-seek1-${itemSN}`);
      const seek2 = document.querySelector(`.js-seek2-${itemSN}`);
      const seek3 = document.querySelector(`.js-seek3-${itemSN}`);
      const seek4 = document.querySelector(`.js-seek4-${itemSN}`);
      const seek5 = document.querySelector(`.js-seek5-${itemSN}`);
      const seek6 = document.querySelector(`.js-seek6-${itemSN}`);
      const seek7 = document.querySelector(`.js-seek7-${itemSN}`);
      
      const deleteBtn = document.querySelector(`.deleteBtn-${itemSN}`);
      const editBtn = document.querySelector(`.editBtn-${itemSN}`);

      seek1.classList.add('seek');
      seek2.classList.add('seek');
      seek3.classList.add('seek');
      seek4.classList.add('seek');
      seek5.classList.add('seek');
      seek6.classList.add('seek');
      seek7.classList.add('seek');
      deleteBtn.classList.add('hide');
      editBtn.classList.add('hide');
    });
  });
}

function attachSubmitHandlers(){
  document.querySelectorAll('.js-submit-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const itemSN = parseInt(button.dataset.tableId);

      const seek1 = document.querySelector(`.js-seek1-${itemSN}`);
      const seek2 = document.querySelector(`.js-seek2-${itemSN}`);
      const seek3 = document.querySelector(`.js-seek3-${itemSN}`);
      const seek4 = document.querySelector(`.js-seek4-${itemSN}`);
      const seek5 = document.querySelector(`.js-seek5-${itemSN}`);
      const seek6 = document.querySelector(`.js-seek6-${itemSN}`);
      const seek7 = document.querySelector(`.js-seek7-${itemSN}`);
      const deleteBtn = document.querySelector(`.deleteBtn-${itemSN}`);
      const editBtn = document.querySelector(`.editBtn-${itemSN}`);
      
      seek1.classList.add('hide');
      seek2.classList.add('hide');
      seek3.classList.add('hide');
      seek4.classList.add('hide');
      seek5.classList.add('hide');
      seek6.classList.add('hide');
      seek7.classList.remove('seek');
      seek7.classList.add('hide');
      deleteBtn.classList.add('seek');
      editBtn.classList.remove('hide');
      editBtn.classList.add('seek');


      const newDate = document.querySelector(`.js-dateInput-${itemSN}`).value;
      const newTime = document.querySelector(`.js-timeInput-${itemSN}`).value;
      const newCourse = document.querySelector(`.js-titleInput-${itemSN}`).value;
      const newCode = document.querySelector(`.js-codeInput-${itemSN}`).value;
      const newVenue = document.querySelector(`.js-venuInput-${itemSN}`).value;
      const newUnit = document.querySelector(`.js-unitInput-${itemSN}`).value;


      
      let matchingItem = examRecord.find(item => item.sn === itemSN);
      if(matchingItem) {
        if (newDate) matchingItem.examDate = newDate;
        if (newTime) matchingItem.time = newTime;
        if (newCourse) matchingItem.title = newCourse;
        if (newCode) matchingItem.code = newCode;
        if (newVenue) matchingItem.venu = newVenue;
        if (newUnit) matchingItem.unit = newUnit;
      }

      saveToStorage();

      
      document.querySelector(`.js-date-${itemSN}`).textContent = newDate;
      document.querySelector(`.js-time-${itemSN}`).textContent = newTime;
      document.querySelector(`.js-title-${itemSN}`).textContent = newCourse;
      document.querySelector(`.js-code-${itemSN}`).textContent = newCode;
      document.querySelector(`.js-venu-${itemSN}`).textContent = newVenue;
      document.querySelector(`.js-unit-${itemSN}`).textContent = newUnit;
    });
  });
}

function saveToStorage() {
  localStorage.setItem('examRecords', JSON.stringify(examRecord));
}

renderTimeTable();
});

/*
function attachDeleteHandlers() {
  document.querySelectorAll('.js-delete-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const itemSN = button.dataset.tableId;
      examRecord = examRecord.filter(item => item.sn !== itemSN);
      saveToStorage();
      renderTimeTable();
    });
  });
}
*/