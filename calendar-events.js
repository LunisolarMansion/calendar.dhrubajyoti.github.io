/* =========================================================
   AUTO-GENERATE WEEKLY HOLIDAYS (SUNDAYS + 2nd/4th SAT)
   ========================================================= */

function generateWeeklyHolidays(year) {
  const events = [];
  let idCounter = 9000;

  for (let month = 0; month < 12; month++) {
    let saturdays = [];

    for (let day = 1; day <= 31; day++) {
      const d = new Date(year, month, day);
      if (d.getMonth() !== month) break;

      const iso = `${year}/${String(month+1).padStart(2,'0')}/${String(day).padStart(2,'0')}`;

      // Sunday
      if (d.getDay() === 0) {
        events.push({
          id: `auto_${idCounter++}`,
          name: "Holiday",
          date: iso,
          description: "Sunday",
          type: "Holiday",
          everyYear: false
        });
      }

      // Saturday
      if (d.getDay() === 6) {
        saturdays.push(day);
      }
    }

    // 2nd & 4th Saturday
    [saturdays[1], saturdays[3]].forEach((satDay, idx) => {
      if (!satDay) return;
      events.push({
        id: `auto_${idCounter++}`,
        name: "Holiday",
        date: `${year}/${String(month+1).padStart(2,'0')}/${String(satDay).padStart(2,'0')}`,
        description: idx === 0 ? "2nd Saturday" : "4th Saturday",
        type: "Holiday",
        everyYear: false
      });
    });
  }

  return events;
}
/* =========================================================
   CALENDAR EVENTS – 2026
   This file is loaded BEFORE evo-calendar initialization
   ========================================================= */

window.calendarEvents = [

  /* ================= RESTRICTED HOLIDAYS ================= */

  { id:'event_01', name:'Restricted Holiday', date:'2026/01/01', description:"New Year's Day", type:'Restricted Holiday', everyYear:false },
  { id:'event_03', name:'Restricted Holiday', date:'2026/01/05', description:'Rongker Karkli', type:'Restricted Holiday', everyYear:false },
  { id:'event_06', name:'Restricted Holiday', date:'2026/01/13', description:'Uruka of Magh Bihu', type:'Restricted Holiday', everyYear:false },
  { id:'event_09', name:'Restricted Holiday', date:'2026/01/17', description:'Silpi Divas', type:'Restricted Holiday', everyYear:false },
  { id:'event_15', name:'Restricted Holiday', date:'2026/01/27', description:'Busu Dima Festival', type:'Restricted Holiday', everyYear:false },

  { id:'event_22', name:'Restricted Holiday', date:'2026/02/04', description:'Shab-E-Barat', type:'Restricted Holiday', everyYear:false },
  { id:'event_24', name:'Restricted Holiday', date:'2026/02/17', description:'Karbi-Dehal-Kachir Dom', type:'Restricted Holiday', everyYear:false },
  { id:'event_25', name:'Restricted Holiday', date:'2026/02/18', description:'Ali-Aye-Ligang', type:'Restricted Holiday', everyYear:false },
  { id:'event_28', name:'Restricted Holiday', date:'2026/02/15', description:'Sivaratri', type:'Restricted Holiday', everyYear:false },

  { id:'event_32', name:'Restricted Holiday', date:'2026/03/02', description:'Khring Khring Baithow Puja', type:'Restricted Holiday', everyYear:false },
  { id:'event_37', name:'Restricted Holiday', date:'2026/03/17', description:'Lailatur Qadar', type:'Restricted Holiday', everyYear:false },
  { id:'event_42', name:'Restricted Holiday', date:'2026/03/31', description:'Mahabir Jayanti', type:'Restricted Holiday', everyYear:false },
  { id:'event_160', name:'Restricted Holiday', date:'2026/03/25', description:'Tora Chira Bihu', type:'Restricted Holiday', everyYear:false },

  { id:'event_48', name:'Restricted Holiday', date:'2026/04/15', description:'Deuri Bihu', type:'Restricted Holiday', everyYear:false },
  { id:'event_50', name:'Restricted Holiday', date:'2026/04/18', description:'Birthday of Gurudev Kalicharan Brahma', type:'Restricted Holiday', everyYear:false },
  { id:'event_51', name:'Restricted Holiday', date:'2026/04/04', description:'Easter Saturday', type:'Restricted Holiday', everyYear:false },
  { id:'event_58', name:'Restricted Holiday', date:'2026/04/22', description:'Tithi of Gopal Dev', type:'Restricted Holiday', everyYear:false },

  { id:'event_63', name:'Restricted Holiday', date:'2026/05/01', description:'Sati Radhika Utsav', type:'Restricted Holiday', everyYear:false },
  { id:'event_66', name:'Restricted Holiday', date:'2026/05/24', description:'Motak Roja Swargadeo Sarbananda Singha Divas', type:'Restricted Holiday', everyYear:false },
  { id:'event_68', name:'Restricted Holiday', date:'2026/05/16', description:'Tithi of Hari Dev', type:'Restricted Holiday', everyYear:false },
  { id:'event_70', name:'Restricted Holiday', date:'2026/05/23', description:'Birthday of Sri Krishnaguru', type:'Restricted Holiday', everyYear:false },
  { id:'event_73', name:'Restricted Holiday', date:'2026/05/31', description:'Baikhowa Festival', type:'Restricted Holiday', everyYear:false },

  { id:'event_77', name:'Restricted Holiday', date:'2026/06/20', description:'Death Anniversary of Bishnu Prasad Rabha', type:'Restricted Holiday', everyYear:false },
  { id:'event_81', name:'Restricted Holiday', date:'2026/06/30', description:'Hul Divas', type:'Restricted Holiday', everyYear:false },

  { id:'event_85', name:'Restricted Holiday', date:'2026/07/13', description:'Birthday of Nepali Poet Bhanu Bhakta Acharya', type:'Restricted Holiday', everyYear:false },

  { id:'event_92', name:'Restricted Holiday', date:'2026/08/13', description:'Death Anniversary of Bir Tikendrajit', type:'Restricted Holiday', everyYear:false },
  { id:'event_101', name:'Restricted Holiday', date:'2026/08/26', description:'Fateha-e-Dwaz Daham', type:'Restricted Holiday', everyYear:false },

  { id:'event_98', name:'Restricted Holiday', date:'2026/09/15', description:'Nau Khai Festival', type:'Restricted Holiday', everyYear:false },
  { id:'event_107', name:'Restricted Holiday', date:'2026/09/16', description:'Birthday of Sri Sri Thakur Anukul Chandra', type:'Restricted Holiday', everyYear:false },

  { id:'event_129', name:'Restricted Holiday', date:'2026/11/01', description:'Kuki Chavang Kut', type:'Restricted Holiday', everyYear:false },
  { id:'event_132', name:'Restricted Holiday', date:'2026/11/07', description:'Wangala Festival', type:'Restricted Holiday', everyYear:false },
  { id:'event_125', name:'Restricted Holiday', date:'2026/11/11', description:'Abhibhav Tithi of Sri Sri Bhubaneswar Sadhu Thakur', type:'Restricted Holiday', everyYear:false },
  { id:'event_136', name:'Restricted Holiday', date:'2026/11/19', description:'Bir Raghav Moran Divas', type:'Restricted Holiday', everyYear:false },
  { id:'event_142', name:'Restricted Holiday', date:'2026/11/24', description:'Death Anniversary of Guru Tegh Bahadur Ji', type:'Restricted Holiday', everyYear:false },

  { id:'event_146', name:'Restricted Holiday', date:'2026/12/05', description:'Sikpui Ruoi (Harvest Festival of Hmar Community)', type:'Restricted Holiday', everyYear:false },
  { id:'event_148', name:'Restricted Holiday', date:'2026/12/10', description:"Martyr's Day", type:'Restricted Holiday', everyYear:false },
  { id:'event_156', name:'Restricted Holiday', date:'2026/12/19', description:'Death Anniversary of Shree Shree Aniruddhadev', type:'Restricted Holiday', everyYear:false },
  { id:'event_145', name:'Restricted Holiday', date:'2026/12/22', description:'Gaan Ngai', type:'Restricted Holiday', everyYear:false },
  { id:'event_152', name:'Restricted Holiday', date:'2026/12/24', description:'Christmas Eve', type:'Restricted Holiday', everyYear:false },


/* ================= FIXED HOLIDAYS – 2026 ================= */

  { id:'event_07',  name:'Holiday', date:'2026/01/14', description:'Magh Bihu & Tusu Puja', type:'Holiday', everyYear:false },
  { id:'event_08',  name:'Holiday', date:'2026/01/15', description:'Magh Bihu & Tusu Puja', type:'Holiday', everyYear:false },
  { id:'event_11',  name:'Holiday', date:'2026/01/23', description:"Netaji's Birthday", type:'Holiday', everyYear:false },
  { id:'event_14',  name:'Holiday', date:'2026/01/26', description:'Republic Day', type:'Holiday', everyYear:false },
  { id:'event_16',  name:'Holiday', date:'2026/01/27', description:'Gwthar Bathou San', type:'Holiday', everyYear:false },
  { id:'event_17',  name:'Holiday', date:'2026/01/31', description:'Me-Dam-Me-Phi', type:'Holiday', everyYear:false },

  { id:'event_21',  name:'Holiday', date:'2026/02/01', description:'Bir Chilaray Divas', type:'Holiday', everyYear:false },

  { id:'event_33',  name:'Holiday', date:'2026/03/03', description:'Dol Jatra', type:'Holiday', everyYear:false },
  { id:'event_39',  name:'Holiday', date:'2026/03/21', description:'Id-ul-Fitr', type:'Holiday', everyYear:false },

  { id:'event_49',  name:'Holiday', date:'2026/04/03', description:'Good Friday', type:'Holiday', everyYear:false },
  { id:'event_45',  name:'Holiday', date:'2026/04/14', description:'Bohag Bihu', type:'Holiday', everyYear:false },
  { id:'event_46',  name:'Holiday', date:'2026/04/15', description:'Bohag Bihu', type:'Holiday', everyYear:false },
  { id:'event_47',  name:'Holiday', date:'2026/04/16', description:'Bohag Bihu', type:'Holiday', everyYear:false },
  { id:'event_53',  name:'Holiday', date:'2026/04/21', description:'Sati Sadhani Divas', type:'Holiday', everyYear:false },
  { id:'event_56',  name:'Holiday', date:'2026/04/18', description:'Tithi of Damodar Dev', type:'Holiday', everyYear:false },

  { id:'event_57',  name:'Holiday', date:'2026/05/01', description:'May Day', type:'Holiday', everyYear:false },
  { id:'event_62',  name:'Holiday', date:'2026/05/01', description:'Buddha Purnima', type:'Holiday', everyYear:false },
  { id:'event_71',  name:'Holiday', date:'2026/05/27', description:'Id-ul-Zuha', type:'Holiday', everyYear:false },

  { id:'event_74',  name:'Holiday', date:'2026/06/01', description:'Janmotsav of Sri Sri Madhabdeva', type:'Holiday', everyYear:false },

  { id:'event_93',  name:'Holiday', date:'2026/08/15', description:'Independence Day', type:'Holiday', everyYear:false },

  { id:'event_103', name:'Holiday', date:'2026/09/01', description:'Tirubhav Tithi of Sri Sri Madhabdeva', type:'Holiday', everyYear:false },
  { id:'event_105', name:'Holiday', date:'2026/09/04', description:'Janmastomi', type:'Holiday', everyYear:false },
  { id:'event_97',  name:'Holiday', date:'2026/09/12', description:'Tirubhav Tithi of Srimanta Sankardeva', type:'Holiday', everyYear:false },
  { id:'event_115', name:'Holiday', date:'2026/09/21', description:'Janmotsav of Sri Sri Sankardev', type:'Holiday', everyYear:false },
  { id:'event_100', name:'Holiday', date:'2026/09/22', description:'Karam Puja', type:'Holiday', everyYear:false },

  { id:'event_116', name:'Holiday', date:'2026/10/02', description:'Birthday of Mahatma Gandhi', type:'Holiday', everyYear:false },
  { id:'event_111', name:'Holiday', date:'2026/10/18', description:'Durga Puja', type:'Holiday', everyYear:false },
  { id:'event_112', name:'Holiday', date:'2026/10/19', description:'Durga Puja', type:'Holiday', everyYear:false },
  { id:'event_113', name:'Holiday', date:'2026/10/20', description:'Durga Puja', type:'Holiday', everyYear:false },
  { id:'event_114', name:'Holiday', date:'2026/10/21', description:'Vijoya Dasami', type:'Holiday', everyYear:false },
  { id:'event_121', name:'Holiday', date:'2026/10/18', description:'Kati Bihu', type:'Holiday', everyYear:false },

  { id:'event_123', name:'Holiday', date:'2026/11/08', description:'Kali Puja & Diwali', type:'Holiday', everyYear:false },
  { id:'event_124', name:'Holiday', date:'2026/11/11', description:'Bhatri Dwitiya', type:'Holiday', everyYear:false },
  { id:'event_128', name:'Holiday', date:'2026/11/15', description:'Chhat Puja', type:'Holiday', everyYear:false },
  { id:'event_131', name:'Holiday', date:'2026/11/24', description:"Guru Nanak's Birthday", type:'Holiday', everyYear:false },
  { id:'event_141', name:'Holiday', date:'2026/11/24', description:'Lachit Divas', type:'Holiday', everyYear:false },

  { id:'event_144', name:'Holiday', date:'2026/12/02', description:'Asom Divas (Su-Ka-Pha Divas)', type:'Holiday', everyYear:false },
  { id:'event_153', name:'Holiday', date:'2026/12/25', description:'Christmas Day', type:'Holiday', everyYear:false }


  /* ================= BANK / SPECIAL ================= */

  { id:'event_40', name:'Bank Holiday', date:'2026/04/01', description:'Annual Closing of Bank Accounts', type:'Bank Holiday', everyYear:false },

  { id:'event_137', name:'Special Casual Leave', date:'2026/07/09', description:'Matri Pitri Vandana', type:'Special Casual Leave', everyYear:false },
  { id:'event_138', name:'Special Casual Leave', date:'2026/07/10', description:'Matri Pitri Vandana', type:'Special Casual Leave', everyYear:false },
  { id:'event_158', name:'Special Casual Leave', date:'2026/07/23', description:'Matri Pitri Vandana', type:'Special Casual Leave', everyYear:false },
  { id:'event_159', name:'Special Casual Leave', date:'2026/07/24', description:'Matri Pitri Vandana', type:'Special Casual Leave', everyYear:false },

  { id:'event_118', name:'Half Holiday', date:'2026/10/25', description:'Lakshmi Puja', type:'Half Holiday', everyYear:false }

];
