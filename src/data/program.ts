const nextSunday = new Date();
nextSunday.setDate(nextSunday.getDate() - nextSunday.getDay() + (nextSunday.getDay() >= 2 ? 7 : 0)); // 2 = TUESDAY
const sundate = nextSunday.toLocaleDateString(['en-US'], { month: 'long', day: '2-digit', year: 'numeric' });
const isDecember = nextSunday.getMonth() === 11;

export const data: any = {
    image: isDecember
        ? { url: '/assets/maryjesus.jpeg', description: 'Mary holding baby Jesus' }
        : { url: '/assets/Christus.png', description: 'Statue of Christ' },
          // : { url: '/assets/ChristPraying.png', description: 'Christ Kneeling in Prayer' },
    // unitName: 'Payson Canyon Stake Conference',
    unitName: 'Highline Ward',
    // meetingName: 'General Session',
    meetingName: 'Sacrament Meeting',
    meetingDate: sundate,
    // time: '10:00am',
    time: '10:30am',
    // holiday: 'Easter Service',
    // holiday: 'Ward Conference',
    // holiday: 'Christmas Program',
    // isStakeConference: true,
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter Week! ☆",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "☆ Happy Pioneer Day! ☆",
    // happyDay: "♡ Welcome home, Zach! ♡",
    // happyDay: "☆ Happy Thanksgiving! ☆",
    // happyDay: "☆ Merry Christmas!",
    // happyDay: "☆ Happy New Year! ☆",
    // showTithingDeclarations: true,

    presidingName: 'Bishop Ryley Enz',
    // presidingName: 'Brother John Harmon',
    // presidingName: 'President Jothathan Young',
    // presidingName: 'President Tim Clayson',
    // presidingName: 'President Matthew Hinton',

    // conductingName: 'Bishop Ryley Enz',
    conductingName: 'Brother John Harmon',
    // conductingName: 'Brother Ben Cook',

    // choristerName: 'TBD',
    choristerName: 'Brother Mike Lambert',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 64,
    sacramentHymn: 1008,
    intermediateHymn: 31,
    closingHymn: 1045,

    invocationName: 'Sister Marie Hopper',
    benedictionName: 'Brother Jeff Heller',

    youthSpeakers: [
        { name: 'Alex Serna' },
        // { name: 'TBD' },
        // { name: 'Young Men Testimonies' },
    ],

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Brother Jeffrey Queen', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'Brother Todd Hale', calling: null },
        ],
    ],
    
    // musicNumber: { label: 'Combined Choir Number', title: `Building on a Legacy of Faith`, credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // musicNumber: { label: 'Musical Number', title: `Peace`, credits: 'Accomp. by Sister Shellie Vanfleet' },
    // musicNumber: { label: 'Musical Number', title: 'This Little Light of Mine', credits: 'Creviston and Ainsworth Families, accomp. by Sister Kaylene DeMasi', },
    // musicNumber: { label: 'Primary Musical Number', title: 'I Will Be Valiant', credits: 'Dir. by Sister Hale & Sister Harmon, Accomp. by Sister Deveraux', },
    // musicNumber: { label: 'Young Women Musical Number', title: 'Walk With Me', credits: 'Accomp. by Sister Kaylene DeMasi', },

    // musicNumbers: [
    //     { label: 'Easter Service Narrators', title: 'Brother & Sister Ingalls', credits: null },
    //     { label: 'Choir & Congregation Number', title: '1205 Let Easter Anthems Ring', credits: 'Dir. by Brother Lambert, Accomp. by Sister DeMasi' },
    //     { hymn: 1009 },
    //     { hymn: 184 },
    //     { label: 'Violin/Piano Duet', title: '1017 This is the Christ', credits: 'Sister Sackley & Sister DeMasi' },
    //     { label: 'Primary Number', title: 'The Miracle', credits: 'Dir. by Sister Hale & Sister Harmon, Accomp. by Sister Deveraux' },
    //     { label: 'Choir Number', title: 'Easter: A Hymn Medley', credits: 'Dir. by Brother Lambert, Accomp. by Sister DeMasi' },
    //     { label: 'Closing Remarks', title: 'Brother Ben Cook', credits: null },
    // ],
};
