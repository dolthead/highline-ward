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

    presidingName: 'Bishop Glen Ostler',
    // presidingName: 'Brother Kayle Smith',
    // presidingName: 'President Jothathan Young',
    // presidingName: 'President Matthew Hinton',

    // conductingName: 'Bishop Glen Ostler',
    conductingName: 'Brother Kayle Smith',
    // conductingName: 'Brother Brent Oakeson',

    // choristerName: 'Sister Carina Sackley',
    choristerName: 'Sister LeAnn Ostler',
    organistName: 'Sister Kaylene DeMasi',
    // organistName: 'Sister Shellie Vanfleet',

    openingHymn: 21,
    sacramentHymn: 170,
    // intermediateHymn: 35,
    closingHymn: 38,

    invocationName: 'Brother Ben Gowan',
    benedictionName: 'Brother Gabe Gomez',
    isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    // youthSpeakers: [
        // { name: 'Talon Harmon' },
    // ],

    speakers: [
        [ // group 1, before the rest hymn
            // { name: 'Sister Kirsten Harmon', calling: 'Ward Primary President' },
        ],
        [ // group 2, after the rest hymn
            // { name: 'Sister Ashley Turner', calling: 'Stake Primary First Counselor' },
        ],
    ],

    // musicNumbers: [
    //     { label: 'Choir Number (w/ Spring Lake 4th Ward)', title: `The Lord is My Light`, credits: 'Dir by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // ],
    // musicNumbers: [{
    //     label: 'String Trio',
    //     title: 'Come Thou Fount', 
    //     credits: 'Sister Sidonna Davis & friends',
    // }],
    
    // musicNumber: { label: 'Choir Number (w/ Spring Lake 4th Ward)', title: `The Lord is My Light`, credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // musicNumber: {
    //     label: 'Primary Musical Number',
    //     title: 'Love is Spoken Here', 
    //     credits: 'Dir by Sister Hale & Sister Harmon, Accomp by Sister Deveraux',
    // },
    
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter! ☆",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "☆ Happy Pioneer Day! ☆",
    // happyDay: "☆ Merry Christmas! ☆",
    // showTithingDeclarations: true,
};
