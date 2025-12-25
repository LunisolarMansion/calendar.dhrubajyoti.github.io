/* =========================================================
   calendar-events.js  |  Year: 2026
   ========================================================= */

window.calendarEvents = [

/* ================= RESTRICTED HOLIDAYS ================= */

{ id:'RH01', name:'Restricted Holiday', date:'2026/01/01', description:'New Year’s Day', type:'Restricted Holiday', color:'#FFD700' },
{ id:'RH02', name:'Restricted Holiday', date:'2026/01/05', description:'Rongker Karkli', type:'Restricted Holiday', color:'#FFD700' },
// continue all restricted holidays here…

/* ================= GENERAL HOLIDAYS ================= */

{ id:'H01', name:'Holiday', date:'2026/01/14', description:'Magh Bihu & Tusu Puja', type:'Holiday', color:'#FF0000' },
{ id:'H02', name:'Holiday', date:'2026/01/26', description:'Republic Day', type:'Holiday', color:'#FF0000' },
// continue all general holidays…

/* ================= BANK / SPECIAL ================= */

{ id:'B01', name:'Bank Holiday', date:'2026/04/01', description:'Annual Closing of Bank Accounts', type:'Bank Holiday', color:'#FF0000' },

{ id:'SCL01', name:'Special Casual Leave', date:'2026/07/09', description:'Matri Pitri Vandana', type:'Special Casual Leave', color:'#32CD32' },
{ id:'SCL02', name:'Special Casual Leave', date:'2026/07/10', description:'Matri Pitri Vandana', type:'Special Casual Leave', color:'#32CD32' }

];

/* =========================================================
   AUTO-GENERATE SUNDAYS + 2ND / 4TH SATURDAYS (2026)
   ========================================================= */

(function () {

  const YEAR = 2026;
  let autoId = 9000;

  for (let month = 0; month < 12; month++) {

    let saturdays = [];

    for (let day = 1; day <= 31; day++) {

      const d = new Date(YEAR, month, day);
      if (d.getMonth() !== month) continue;

      const date =
        `${YEAR}/${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}`;

      /* ----- SUNDAY ----- */
      if (d.getDay() === 0) {
        window.calendarEvents.push({
          id: 'SUN' + autoId++,
          name: 'Holiday',
          date: date,
          description: 'Sunday',
          type: 'Holiday',
          color: '#3FA9F5'
        });
      }

      /* ----- SATURDAY ----- */
      if (d.getDay() === 6) {
        saturdays.push(date);
      }
    }

    /* ----- 2nd Saturday ----- */
    if (saturdays[1]) {
      window.calendarEvents.push({
        id: 'SAT2' + autoId++,
        name: 'Holiday',
        date: saturdays[1],
        description: '2nd Saturday',
        type: 'Holiday',
        color: '#3FA9F5'
      });
    }

    /* ----- 4th Saturday ----- */
    if (saturdays[3]) {
      window.calendarEvents.push({
        id: 'SAT4' + autoId++,
        name: 'Holiday',
        date: saturdays[3],
        description: '4th Saturday',
        type: 'Holiday',
        color: '#3FA9F5'
      });
    }
  }

})();
