/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import { input } from '@inquirer/prompts';
import qr from 'qr-image';

const userURL = await input({ message: 'Enter your URL' });
const userFilename = await input({ message: 'Enter QR image filename' });

const qr_svg = qr.image(userURL, { size: 10 }, { parse_url: userURL });
qr_svg.pipe(fs.createWriteStream(`${userFilename}.png`));

fs.writeFile("./url.txt", userURL, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});