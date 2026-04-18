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
    // holiday: 'Easter Service',
    // holiday: 'Ward Conference',
    // holiday: 'Christmas Program',
    // isTestimonyMeeting: true,
    // isFastSunday: true,
    // isPrimaryProgram: true,
    // showLingerLonger: true,
    // happyDay: "☆ Happy Easter Week! ☆",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "☆ Happy Thanksgiving! ☆",
    // happyDay: "☆ Merry Christmas!",
    // happyDay: "☆ Happy New Year! ☆",
    // showTithingDeclarations: true,

    presidingName: 'Bishop Ryley Enz',
    // presidingName: 'Brother Ben Gowans',
    // presidingName: 'President Jothathan Young',
    // presidingName: 'President Tim Clayson',
    // presidingName: 'President Matthew Hinton',

    conductingName: 'Bishop Ryley Enz',
    // conductingName: 'Brother John Harmon',
    // conductingName: 'Brother Ben Cook',

    // choristerName: 'TBD',
    choristerName: 'Brother Mike Lambert',
    organistName: 'Sister Kaylene DeMasi',
    // organistName: 'Sister Shellie Vanfleet',

    openingHymn: 1023,
    sacramentHymn: 196,
    intermediateHymn: 143,
    closingHymn: 274,

    invocationName: 'Brother Corwin Bennett',
    benedictionName: 'Sister Angela Christensen',

    youthSpeakers: [
        { name: 'Ira Stetser' },
    ],

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Sister Kathleen Heller', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'Brother Jeff Heller', calling: null },
        ],
    ],
    
    // musicNumber: { label: 'Choir Number', title: `Dedication, by Willy Reske`, credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi' },
    // musicNumber: { label: 'Musical Number', title: `Peace`, credits: 'Accomp. by Sister Shellie Vanfleet' },
    // musicNumber: { label: 'Musical Number', title: 'This Little Light of Mine', credits: 'Creviston and Ainsworth Families, accomp. by Sister Kaylene DeMasi', },
    // musicNumber: { label: 'Primary Musical Number', title: 'Love is Spoken Here', credits: 'Dir. by Sister Hale & Sister Harmon, Accomp. by Sister Deveraux', },

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
