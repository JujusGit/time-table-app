import {examRecord} from "./index-mainPage.js";
const contentBody = document.querySelector('.content-body');
/*let timeTable2 = [ 
  {
    sn:'2'
  },

  {
    sn:'3'
  },
  
];

function renderTimeTable(){
  let matchingItem;
  timeTable2.forEach((item)=>{
    let serialNumber = item.sn;
    
    examRecord.forEach((record)=>{
      if(serialNumber === record.sn){
        matchingItem = examRecord;
      }
    })
  }) 
   }
*/
let examTable = '';



  function renderTimeTable(){
    examRecord.forEach((item)=>{
      const html = `
      <div class="div-first" style="border: solid 1px red;">
      <div class="date-field">
        <div class="date-name">
          DATE
        </div>
        <div class="date-content">
        ${item.examDate}
        </div>
      </div>
    
      <div class="time-field">
        <div class="time-name">
          TIME
        </div>
        <div class="time-content">
        ${item.time}
        </div>
      </div>
      
      <div class="title-field">
        <div class="title-name">
          TITLE
        </div>
        <div class="title-content">
        ${item.title}
        </div>
      </div>
      <div class="course-field">
        <div class="course-name">
         CODE
        </div>
        <div class="course-content">
        ${item.code}
        </div>
      </div>
      <div class="venue-field">
        <div class="venue-name">
          VENUE
        </div>
        <div class="venue-content">
        ${item.venu}
        </div>
      </div>
      <div class="unit-field">
        <div class="unit-name">
          UNIT
        </div>
        <div class="unit-content">
        ${item.unit}
        </div>
      </div>
    <div class="button-section">
      <button style="background-color: rgb(82, 255, 82);">
          Edit
      </button>
      <button style="background-color: rgb(255, 52, 52);" ">
          Delete Record
      </button>
    </div>
    
    </div>
    `

    examTable += html;
    })
   contentBody.innerHTML = examTable;
  }
 
  
renderTimeTable();
