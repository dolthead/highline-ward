const nextSunday = new Date();
nextSunday.setDate(nextSunday.getDate() - nextSunday.getDay() + (nextSunday.getDay() >= 2 ? 7 : 0)); // 2 = TUESDAY
const sundate = nextSunday.toLocaleDateString(['en-US'], { month: 'long', day: '2-digit', year: 'numeric' });
const isDecember = nextSunday.getMonth() === 11;

export const data: any = {
    image: isDecember
        ? { url: '/assets/maryjesus.jpeg', description: 'Mary holding baby Jesus' }
        : { url: '/assets/Christus.png', description: 'Statue of Christ' },
          // : { url: '/assets/ChristPraying.png', description: 'Christ Kneeling in Prayer' },
    unitName: 'Highline Ward',
    meetingName: 'Sacrament Meeting',
    // holiday: 'Easter Sunday',
    // holiday: 'Christmas Program',
    meetingDate: sundate,
    time: 'Noon',

    presidingName: 'Bishop Glen Ostler',
    conductingName: 'Brother Kayle Smith',
    // choristerName: 'Sister Carina Sackley',
    choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 1010,
    sacramentHymn: 185,
    // intermediateHymn: 301,
    closingHymn: 67,

    invocationName: 'TBD',
    benedictionName: 'TBD',
    isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    // testimonies: [
    //     { name: 'Sister Sherry Chapman', calling: null },
    //     { name: 'Sister Shelley Smith', calling: 'Ward Missionaries' },
    // ],
    // speakers: [
    //     [{ name: 'Elder Tallin Kunz', calling: null }], // group 1, before the rest hymn
    //     [{ name: 'Bishop Glen Ostler', calling: null }], // group 2, after the rest hymn
    // ],

    // musicNumber: { 
    //     label: 'Choir Number', 
    //     title: 'I Am a Child of God', 
    //     credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' 
    // },
    // musicNumber: { 
    //     label: 'Musical Number', 
    //     title: 'Amazing Grace', 
    //     credits: 'Sister Cowan, Sister Hale, Brother Lambert, Brother Hale' 
    // },
    
    showLingerLonger: true,
    // happyDay: "Happy Father's Day!"",
    // happyDay: "Happy Mother's Day!",
    showTithingDeclarations: true,
};
