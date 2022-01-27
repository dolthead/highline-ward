export const baseUrl = 'https://www.churchofjesuschrist.org/music/library/hymns/';
export interface Hymn {
    hymno: number;
    title: string;
    url?: string;
}
export const hymnList: Hymn[] = [
    { hymno: 38, title: 'Come, All Ye Saints of Zion', url: 'come-all-ye-saints-of-zion' },
    { hymno: 86, title: 'How Great Thou Art' },
    { hymno: 181, title: 'Jesus of Nazareth, Savior and King', url: 'jesus-of-nazareth-savior-and-king' },
    { hymno: 294, title: 'Love at Home', url: 'love-at-home' },
    { hymno: 308, title: 'Love one Another', url: 'love-one-another' },
];
export const getHymn = (hymno: number): Hymn | undefined => hymnList.find((hymn) => hymn.hymno === hymno) 
