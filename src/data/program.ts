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
    time: '9:00am',

    presidingName: 'Bishop Glen Ostler',
    // presidingName: 'President Matthew Hinton',
    conductingName: 'Bishop Glen Ostler',
    // choristerName: 'Sister Carina Sackley',
    choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 247,
    sacramentHymn: 183,
    intermediateHymn: 58,
    closingHymn: 153,

    invocationName: 'Brother John Harmon',
    benedictionName: 'Brother Jeff Heller',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Brother Logan Kennard', calling: null },
        ],
        [ // group 2, after the rest hymn
            { name: 'Brother Rick Baxter', calling: 'Stake High Councilor' },
        ],
    ],
    
    // musicNumber: { 
    //     label: 'Choir Number',
    //     title: 'Praise to the Man',
    //     credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi',
    // },
    // musicNumber: {
    //     label: 'Musical Number',
    //     title: 'He Sent His Son',
    //     credits: 'Wesley Mitchell, Revere & Rainy Hemmming, Accomp. by Sister DeMasi',
    // },

    // musicNumbers: [
    //     { title: 'Oh, Come, All Ye Faithful', credits: 'Violin solo by Sister Sackley' },
    //     { hymn: 208 },
    //     { title: 'Away in a Manger', credits: 'Primary Children, Dir by Sister Hale, Accomp by Sister Deveraux' },
    //     { title: 'Little Baby', credits: 'Primary Children, Accomp by Sister Hale' },
    //     { hymn: 212 },
    //     { title: 'As Sudden Angels Filled the Night', credits: 'Ward Choir, Dir by Brother Lambert, Accomp by Sister DeMasi, Flutes by Sister Porter and Sister Kunz' },
    //     { title: 'What Child is This?', credits: 'Performed by Malia Cook' },
    //     { hymn: 201 },
    //     { hymn: 210 },
    //     { title: `And the Glory of the Lord (Handel)`, credits: 'Ward Choir, Dir by Brother Lambert, Accomp by Sister DeMasi' },
    // ],
    
    // showLingerLonger: true,
    // happyDay: "♡ Happy Father's Day! ♡",
    // happyDay: "♡ Happy Mother's Day! ♡",
    // happyDay: "☆ Merry Christmas! ☆",
    // showTithingDeclarations: true,
};
