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
    invocationName: 'TBD',
    sacramentHymn: 175,
    // isTestimonyMeeting: true,
    isPrimaryProgram: false,
    speakers: [
        [{ name: 'Elder Tyrus Harmer', calling: null }], // group 1, before the rest hymn
        [{ name: 'Elder Michael Gomez', calling: null }], // group 2, after the rest hymn
    ],
    intermediateHymn: null,
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
    closingHymn: null,
    benedictionName: 'TBD',
    // showLingerLonger: true,
    // happyDay: "Happy Father's Day!"",
    // happyDay: "Happy Mother's Day!",
    showTithingDeclarations: true,
};
