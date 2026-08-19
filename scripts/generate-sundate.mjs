import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const timeZone = process.env.PROGRAM_TIME_ZONE ?? 'America/Denver';
const now = new Date();
const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
}).formatToParts(now);
const getPart = (type) => Number(dateParts.find((part) => part.type === type).value);

const currentDate = new Date(Date.UTC(getPart('year'), getPart('month') - 1, getPart('day')));
const day = currentDate.getUTCDay();
currentDate.setUTCDate(currentDate.getUTCDate() + (day >= 2 ? 7 - day : -day));

const sundate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
}).format(currentDate);
const isDecember = currentDate.getUTCMonth() === 11;
const outputPath = resolve('src/data/sundate.ts');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `export const sundate = ${JSON.stringify(sundate)};\nexport const isDecember = ${isDecember};\n`);