/* =========================================================
   CALENDAR EVENTS – 2026
   ========================================================= */

window.calendarEvents = [

  /* ================= RESTRICTED HOLIDAYS ================= */
  { id:'RH01', name:'Restricted Holiday', date:'2026/01/01', description:"New Year's Day", type:'Restricted Holiday' },
  { id:'RH02', name:'Restricted Holiday', date:'2026/01/05', description:'Rongker Karkli', type:'Restricted Holiday' },
  { id:'RH03', name:'Restricted Holiday', date:'2026/01/13', description:'Uruka of Magh Bihu', type:'Restricted Holiday' },
  { id:'RH04', name:'Restricted Holiday', date:'2026/01/17', description:'Silpi Divas', type:'Restricted Holiday' },
  { id:'RH05', name:'Restricted Holiday', date:'2026/02/04', description:'Shab-E-Barat', type:'Restricted Holiday' },
  { id:'RH06', name:'Restricted Holiday', date:'2026/03/02', description:'Khring Khring Baithow Puja', type:'Restricted Holiday' },
  { id:'RH07', name:'Restricted Holiday', date:'2026/12/24', description:'Christmas Eve', type:'Restricted Holiday' },

  /* ================= GENERAL HOLIDAYS ================= */
  { id:'H01', name:'Holiday', date:'2026/01/14', description:'Magh Bihu & Tusu Puja', type:'Holiday' },
  { id:'H02', name:'Holiday', date:'2026/01/15', description:'Magh Bihu & Tusu Puja', type:'Holiday' },
  { id:'H03', name:'Holiday', date:'2026/01/26', description:'Republic Day', type:'Holiday' },
  { id:'H04', name:'Holiday', date:'2026/04/03', description:'Good Friday', type:'Holiday' },
  { id:'H05', name:'Holiday', date:'2026/08/15', description:'Independence Day', type:'Holiday' },
  { id:'H06', name:'Holiday', date:'2026/10/02', description:'Gandhi Jayanti', type:'Holiday' },
  { id:'H07', name:'Holiday', date:'2026/12/25', description:'Christmas Day', type:'Holiday' }

];

/* =========================================================
   AUTO-GENERATE SUNDAYS + 2ND / 4TH SATURDAYS (2026)
   ========================================================= */

(function generateWeekends() {

  let id = 1000;

  for (let month = 0; month < 12; month++) {

    let saturdays = [];

    for (let day = 1; day <= 31; day++) {

      const d = new Date(2026, month, day);
      if (d.getMonth() !== month) continue;

      const yyyy = d.getFullYear();
      const mm = String(month + 1).padStart(2,'0');
      const dd = String(day).padStart(2,'0');
      const dateStr = `${yyyy}/${mm}/${dd}`;

      /* SUNDAY */
      if (d.getDay() === 0) {
        window.calendarEvents.push({
          id: 'SUN' + id++,
          name: 'Holiday',
          date: dateStr,
          description: 'Sunday',
          type: 'Holiday'
        });
      }

      /* SATURDAY */
      if (d.getDay() === 6) {
        saturdays.push(dateStr);
      }
    }

    /* 2nd & 4th Saturday */
    if (saturdays[1]) {
      window.calendarEvents.push({
        id: 'SAT2' + id++,
        name: 'Holiday',
        date: saturdays[1],
        description: '2nd Saturday',
        type: 'Holiday'
      });
    }

    if (saturdays[3]) {
      window.calendarEvents.push({
        id: 'SAT4' + id++,
        name: 'Holiday',
        date: saturdays[3],
        description: '4th Saturday',
        type: 'Holiday'
      });
    }
  }

})();
