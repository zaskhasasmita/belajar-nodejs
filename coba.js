// console.log("Hello World!");
function cetakNama(nama) {
    return `Haloo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Zaskha Sasmita',
    umur : 22,
    cetakMhs() {
        return `Halo namaku ${this.nama} dan saya ${this.umur} tahun.`;
    }
}

class Orang {
    constructor() {
        console.log('Objek orang sudah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama   : cetakNama,
//     PI          : PI,
//     mahasiswa   : mahasiswa,
//     Orang       : Orang,
// }

//notasi ES6
module.exports = { cetakNama, PI, mahasiswa, Orang }