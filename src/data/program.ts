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
    time: '10:30am',
    // holiday: 'Easter Sunday',
    // holiday: 'Ward Conference',
    // holiday: 'Christmas Program',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter! ☆",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "☆ Happy Thanksgiving! ☆",
    // happyDay: "☆ Merry Christmas!",
    // happyDay: "☆ Happy New Year! ☆",
    // showTithingDeclarations: true,

    presidingName: 'Bishop Ryley Enz',
    // presidingName: 'Brother Ben Gowans',
    // presidingName: 'President Jothathan Young',
    // presidingName: 'President Matthew Hinton',
    // presidingName: 'President Tim Clayson',

    conductingName: 'Bishop Ryley Enz',
    // conductingName: 'Brother Ben Gowans',
    // conductingName: 'Brother Ben Cook',

    choristerName: 'Sister Carina Sackley',
    // choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',
    // organistName: 'Sister Kelsey Eastmond',

    openingHymn: 303,
    sacramentHymn: 170,
    intermediateHymn: 274,
    closingHymn: 264,

    invocationName: 'Brother Michael Sackley',
    benedictionName: 'Sister Brooke Porter',

    youthSpeakers: [
        { name: 'Mia Enz' },
    ],

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Sister Makenzi Starr', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'Brother Sean Starr', calling: null },
            // { name: 'President Tim Clayson', calling: 'Stake Presidency 1st Counselor' },
        ],
    ],
    
    // musicNumber: { label: 'Choir Number', title: `Thanksgiving In My Heart`, credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // musicNumber: { label: 'Musical Number', title: `Peace`, credits: 'Accomp. by Sister Shellie Vanfleet' },
    // musicNumber: { label: 'Musical Number', title: 'This Little Light of Mine', credits: 'Creviston and Ainsworth Families, accomp. by Sister Kaylene DeMasi', },
    // musicNumber: { label: 'Primary Musical Number', title: 'If I Were at the Manger', credits: 'Dir. by Sister Hale, Accomp. by Sister Deveraux', },

    // musicNumbers: [
    //     { label: 'Quartet', title: 'Samuel Tells of Baby Jesus', credits: 'Oakley Olson, Shannon Olson, Lizzy Porter, and Lilly Porter' },
    //     { label: 'Quartet', title: 'Lo, How A Rose E’er Blooming', credits: 'Sisters Tiffany Sackley, Kaylene DeMasi, Hailey Peay, and Shellie Vanfleet' },
    //     { hymn: 208 },
    //     { label: 'Choir Number', title: 'As Shepherds Kept Their Lonely Vigil', credits: 'Dir. by Brother Lambert, Accomp. by Sister DeMasi' },
    //     { hymn: 213 },
    //     { hymn: 210 },
    //     { hymn: 214 },
    // ],
};
