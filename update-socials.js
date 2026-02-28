const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src', 'templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    let code = fs.readFileSync(filePath, 'utf8');

    // Strategy: Find the line containing `data.twitter && <a` or `data.linkedin && <a`
    // We will find ALL matches in the file, extract the `className` or other standard props, 
    // and append our new social links right below it.

    // Step 1: Find {data.twitter && <a ...>Twitter</a>} or similar.
    // If twitter doesn't exist, fallback to linkedin.

    // We can use a regex that matches the entire line with twitter
    const lineRegex = /^[ \t]*\{data\.twitter\s*&&\s*<a\s+href=\{data\.twitter\}[^>]*>.*?<\/a>\}.*$/gm;

    code = code.replace(lineRegex, (match) => {
        const indent = match.match(/^[ \t]*/)[0];

        // Extract the raw anchor tag content to replicate
        const aTagRegex = /<a\s+href=\{data\.twitter\}([^>]*)>(.*?)<\/a>/;
        const aTagMatch = match.match(aTagRegex);

        if (!aTagMatch) return match; // fallback

        const attrs = aTagMatch[1];
        let innerText = aTagMatch[2];

        // If inner text is just "Twitter", we replace it. 
        // If it's "TW", we might just map it, but let's assume standard replacement.
        let isShort = innerText === 'TW';
        let isBracket = innerText === '[Twitter]';
        let isEmoji = innerText.includes('🐦');

        const makeLink = (key, name, shortName, emoji) => {
            let text = name;
            if (isShort) text = shortName;
            if (isBracket) text = `[${name}]`;
            if (isEmoji) text = `${emoji} ${name}`;
            return `${indent}{data.${key} && <a href={data.${key}}${attrs}>${text}</a>}`;
        }

        const instaStr = makeLink('instagram', 'Instagram', 'IG', '📸');
        const tiktokStr = makeLink('tiktok', 'TikTok', 'TK', '🎵');
        const fbStr = makeLink('facebook', 'Facebook', 'FB', '📘');
        const ytStr = makeLink('youtube', 'YouTube', 'YT', '▶️');

        return `${match}\n${instaStr}\n${tiktokStr}\n${fbStr}\n${ytStr}`;
    });

    // Write back
    fs.writeFileSync(filePath, code, 'utf8');
});

console.log('Done updating templates.');
