let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('https://dev.to/aurelkurtula')
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
        }
    }, (error) => console.log(err));

const html = '<h3 class="title">I have a bunch of questions on how to behave when contributing to open source</h3>'
const h3 = cheerio.load(html)
console.log(h3.text())

axios.get('https://dev.to/aurelkurtula')
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let devtoList = [];
            $('.single-article').each(function(i, elem) {
                devtoList[i] = {
                    title: $(this).find('h3').text().trim(),
                    url: $(this).children('.index-article-link').attr('href'),
                    tags: $(this).find('.tags').text().split('#')
                        .map(tag => tag.trim())
                        .filter(function(n) { return n != "" })
                }
            });
        }
    }, (error) => console.log(err));

axios.get('https://dev.to/aurelkurtula')
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let devtoList = [];
            $('.single-article').each(function(i, elem) {
                devtoList[i] = {
                    title: $(this).find('h3').text().trim(),
                    url: $(this).children('.index-article-link').attr('href'),
                    tags: $(this).find('.tags').text().split('#')
                        .map(tag => tag.trim())
                        .filter(function(n) { return n != "" })
                }
            });
            const devtoListTrimmed = devtoList.filter(n => n != undefined)
            fs.writeFile('devtoList.json',
                JSON.stringify(devtoListTrimmed, null, 4),
                (err) => console.log('File successfully written!'))
        }
    }, (error) => console.log(err));