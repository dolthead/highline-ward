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
    meetingDate: sundate,
    time: '9:00am',
    // holiday: 'Easter Sunday',
    // holiday: 'Ward Conference',
    // holiday: 'Christmas Program',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter! ☆",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "♡ Happy Father's Day! ♡",
    happyDay: "☆ Happy Thanksgiving! ☆",
    // happyDay: "☆ Merry Christmas! ☆",
    showTithingDeclarations: true,

    // presidingName: 'Bishop Glen Ostler',
    // presidingName: 'Brother Kayle Smith',
    presidingName: 'President Jothathan Young',
    // presidingName: 'President Matthew Hinton',

    // conductingName: 'Bishop Ryley Enz',
    conductingName: 'Brother Ben Gowans',
    // conductingName: 'Brother Ben Cook',

    // choristerName: 'Sister Carina Sackley',
    choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 92,
    sacramentHymn: 183,
    // intermediateHymn: 301,
    closingHymn: 94,

    invocationName: 'Brother Michael Lambert',
    benedictionName: 'Brother Brent Oakeson',

    // youthSpeakers: [
        // { name: 'Talon Harmon' },
    // ],

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Jo Webber', calling: null },
            { name: 'Brother Rhett Webber', calling: 'Returned from the Missouri Independence Mission' },
            // { name: 'By Invitation', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'President Jonathan Young', calling: 'Stake President' },
        ],
    ],
    
    musicNumber: { label: 'Musical Number', title: `Peace`, credits: 'Accomp. by Sister Shellie Vanfleet' },
    // musicNumber: { label: 'Choir Number', title: `Thanksgiving In My Heart`, credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // musicNumber: { label: 'Musical Number', title: 'This Little Light of Mine', credits: 'Creviston and Ainsworth Families, accomp. by Sister Kaylene DeMasi', },
    // musicNumber: { label: 'Primary Musical Number', title: 'I Belong to the Church of Jesus Christ', credits: 'Dir. by Sister Hale, Accomp. by Sister Deveraux', },
};
