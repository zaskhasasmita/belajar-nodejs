// const nama = 'Zaskha Sasmitaa';
// const cetakNama = nama => `Hi Nama Saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); // core modul (modul ori buatan nodejs)
// const cetakNama = require('./coba'); // meng-import local module
// const moment = require('moment'); //third party module / npm module / node_modules

const coba = require('./coba');
// console.log(coba);

console.log(
    coba.cetakNama('Jekiasi'),
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
    );

