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
    // holiday: 'Ward Conference',
    // holiday: 'Christmas Program',
    meetingDate: sundate,
    time: '9:00am',

    // presidingName: 'Bishop Glen Ostler',
    // presidingName: 'Brother Kayle Smith',
    // presidingName: 'President Jothathan Young',
    presidingName: 'President Matthew Hinton',
    conductingName: 'Brother Brent Oakeson',
    // conductingName: 'Bishop Glen Ostler',
    choristerName: 'Sister Carina Sackley',
    // choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 247,
    sacramentHymn: 190,
    intermediateHymn: 300,
    closingHymn: 259,

    invocationName: 'Brother Dennis Adams',
    benedictionName: 'Sister Angela Christensen',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    youthSpeakers: [
        // { name: 'Talon Harmon' },
    ],

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Brother Casey Irons', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'Elder Blake Oakeson', calling: 'Leaving for the Texas Dallas West Mission' },
            // { name: 'President Matthew Hinton', calling: null },
        ],
    ],
    
    // musicNumber: { 
    //     label: 'Choir Number',
    //     title: "I'll Go Where You Want Me to Go",
    //     credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Shellie Vanfleet',
    // },
    // musicNumber: {
    //     label: 'Primary Musical Number',
    //     title: 'Love is Spoken Here', 
    //     credits: 'Dir by Sister Hale & Sister Harmon, Accomp by Sister Deveraux',
    // },

    // musicNumbers: [
    //     { label: 'YM/YW Musical Number', title: 'Two Thousand Valiant-Hearted Youth', credits: 'Dir by Sister Porter, Accomp by Sister Sackley' },
    // ],
    
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter! ☆",
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "☆ Merry Christmas! ☆",
    // showTithingDeclarations: true,
};
