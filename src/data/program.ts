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
    conductingName: 'Bishop Glen Ostler',
    choristerName: 'Sister Carina Sackley',
    // choristerName: 'Sister LeAnn Ostler',
    organistName: 'Sister Kaylene DeMasi',

    openingHymn: 62,
    sacramentHymn: 175,
    intermediateHymn: null,
    closingHymn: null,

    invocationName: 'Brother Harley McNeil',
    benedictionName: 'Sister Emily Mitchell',
    // isTestimonyMeeting: true,
    isPrimaryProgram: false,

    testimonies: [
        { name: 'Sister Sherry Chapman', calling: null },
        { name: 'Sister Shelley Smith', calling: 'Ward Missionaries' },
    ],
    speakers: [
        [{ name: 'Elder Tyrus Harmer', calling: 'Full-time missionary' }], // group 1, before the rest hymn
        [{ name: 'Elder Michael Gomez', calling: 'Full-time missionary' }], // group 2, after the rest hymn
    ],

    // musicNumber: { 
    //     label: 'Choir Number', 
    //     title: 'I Am a Child of God', 
    //     credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' 
    // },
    musicNumber: { 
        label: 'Music Number', 
        title: 'I Am a Child of God', 
        credits: 'Performed by The Sackley Family' 
    },
    
    // showLingerLonger: true,
    // happyDay: "Happy Father's Day!"",
    // happyDay: "Happy Mother's Day!",
    showTithingDeclarations: true,
};
