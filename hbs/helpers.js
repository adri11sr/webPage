const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (txt) => {
    let palabras = txt.split(' ');
    palabras.forEach((pal, idx) => {
        palabras[idx] = pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});