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
    // presidingName: 'President Matthew Hinton',
    conductingName: 'Brother Brent Oakeson',
    choristerName: 'Sister Carina Sackley',
    // choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 207,
    sacramentHymn: 170,
    // intermediateHymn: 125,
    closingHymn: 203,

    invocationName: 'TBD',
    benedictionName: 'TBD',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    speakers: [
        [
            { name: 'Stellar Hemming', calling: null },
            { name: 'Serene Hemming', calling: null },
            { name: 'Marvel Hemming', calling: null },
        ], // group 1, before the rest hymn
        [
            { name: 'Sister Emily Mitchell', calling: null },
        ], // group 2, after the rest hymn
    ],
    
    // musicNumber: { 
    //     label: 'Choir Number',
    //     title: 'Praise to the Man',
    //     credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi',
    // },
    musicNumber: {
        label: 'Musical Number',
        title: 'He Sent His Son',
        credits: 'Wesley Mitchell, Revere & Rainy Hemmming, Accomp. by Sister DeMasi',
    },
    
    // showLingerLonger: true,
    // happyDay: "Happy Father's Day!"",
    // happyDay: "Happy Mother's Day!",
    // showTithingDeclarations: true,
};
