// Main hymn list: https://www.churchofjesuschrist.org/music/library/hymns?lang=eng

export const baseUrl = 'https://www.churchofjesuschrist.org/music/library/hymns/';

export interface Hymn {
    hymno: number;
    title: string;
    url?: string;
    notSetup?: boolean;
}

export const hymnList: Hymn[] = [
    { hymno: 1, title: 'The Morning Breaks', url: 'the-morning-breaks' },
    { hymno: 3, title: 'Now Let Us Rejoice', url: 'now-let-us-rejoice' },
    { hymno: 7, title: 'Israel, Israel, God Is Calling', url: 'israel-israel-god-is-calling' },
    { hymno: 26, title: 'Joseph Smith’s First Prayer', url: 'joseph-smiths-first-prayer' },
    { hymno: 38, title: 'Come, All Ye Saints of Zion', url: 'come-all-ye-saints-of-zion' },
    { hymno: 80, title: 'God of Our Fathers, Known of Old', url: 'god-of-our-fathers-known-of-old' },
    { hymno: 83, title: 'Guide Us, O Thou Great Jehovah', url: 'guide-us-o-thou-great-jehovah' },
    { hymno: 85, title: 'How Firm a Foundation', url: 'how-firm-a-foundation' },
    { hymno: 86, title: 'How Great Thou Art' },
    { hymno: 96, title: 'Dearest Children, God Is Near You', url: 'dearest-children-god-is-near-you' },
    { hymno: 98, title: 'I Need Thee Every Hour', url: 'i-need-thee-every-hour' },
    { hymno: 100, title: 'Nearer, My God, to Thee', url: 'nearer-my-god-to-thee' },
    { hymno: 105, title: 'Master the Tempest is Raging', url: 'master-the-tempest-is-raging' },
    { hymno: 124, title: 'Be Still, My Soul' },
    { hymno: 129, title: 'Where Can I Turn for Peace?', url: 'where-can-i-turn-for-peace' },
    { hymno: 141, title: 'Jesus, the Very Thought of Thee', url: 'jesus-the-very-thought-of-thee' },
    { hymno: 162, title: 'Lord, We Come before Thee Now', url: 'lord-we-come-before-thee-now' },
    { hymno: 166, title: 'Abide With Me!', url: 'abide-with-me' },
    { hymno: 169, title: 'As Now We Take the Sacrament', url: 'as-now-we-take-the-sacrament' },
    { hymno: 170, title: 'God, Our Father, Hear Us Pray', url: 'god-our-father-hear-us-pray' },
    { hymno: 173, title: 'While of These Emblems We Partake', url: 'while-of-these-emblems-we-partake-saul' },
    { hymno: 177, title: '\'Tis Sweet to Sing the Matchless Love', url: 'tis-sweet-to-sing-the-matchless-love-hancock' },
    { hymno: 180, title: 'Father in Heaven, We Do Believe', url: 'father-in-heaven-we-do-believe' },
    { hymno: 181, title: 'Jesus of Nazareth, Savior and King', url: 'jesus-of-nazareth-savior-and-king' },
    { hymno: 185, title: 'Reverently and Meekly Now', url: 'reverently-and-meekly-now' },
    { hymno: 187, title: 'God Loved Us, So He Sent His Son', url: 'god-loved-us-so-he-sent-his-son' },
    { hymno: 190, title: 'In Memory of the Crucified', url: 'in-memory-of-the-crucified' },
    { hymno: 194, title: 'There Is a Green Hill Far Away', url: 'there-is-a-green-hill-far-away' },
    { hymno: 239, title: 'Choose the Right', url: 'choose-the-right' },
    { hymno: 254, title: 'True to the Faith', url: 'true-to-the-faith' },
    { hymno: 258, title: 'O Thou Rock of Our Salvation', url: 'o-thou-rock-of-our-salvation' },
    { hymno: 263, title: 'Go Forth with Faith', url: 'go-forth-with-faith' },
    { hymno: 294, title: 'Love at Home', url: 'love-at-home' },
    { hymno: 308, title: 'Love One Another', url: 'love-one-another' },
];

export const getHymn = (hymno: number): Hymn | undefined => hymnList.find((hymn) => hymn.hymno === hymno) || { hymno, title: 'not found', notSetup: true };
