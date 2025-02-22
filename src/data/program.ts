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

    // presidingName: 'Bishop Glen Ostler',
    presidingName: 'Brother Kayle Smith',
    conductingName: 'Bishop Glen Ostler',
    choristerName: 'Sister Carina Sackley',
    // choristerName: 'Sister LeAnn Ostler',
    // organistName: 'Sister Kaylene DeMasi',
    organistName: 'Sister Shellie Vanfleet',

    openingHymn: 27,
    sacramentHymn: 194,
    // intermediateHymn: 301,
    closingHymn: 302,

    invocationName: 'Sister Kami Lane',
    benedictionName: 'Sister Diane Lambert',
    // isTestimonyMeeting: true,
    // isPrimaryProgram: true,

    speakers: [
        [ // group 1, before the rest hymn
            { name: 'Brother Steve Eggleston', calling: 'Sunday School Secretary' },
            { name: 'Brother Jesse Webber', calling: 'Sunday School 2nd Counselor' },
        ],
        [ // group 2, after the rest hymn
            { name: 'Brother Ben Gowans', calling: 'Sunday School 1st Counselor' },
            { name: 'President Steve Cox', calling: 'Ward Sunday School President' },
        ],
    ],
    
    musicNumber: { 
        label: 'Choir Number',
        title: '1015 Oh, the Deep, Deep Love of Jesus',
        credits: 'Dir. by Brother Michael Lambert, Accomp. by Sister Kaylene DeMasi',
    },
    // musicNumber: {
    //     label: 'Youth Musical Number',
    //     title: "YM/YW Medley",
    //     credits: 'Dir. by Sister Brooke Porter, Accomp. by Sister Shellie Vanfleet',
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
