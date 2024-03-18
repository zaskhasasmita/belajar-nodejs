// Core Modules
// File System
// const fs = require('fs');

// menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World! secara Sync');
// } catch (e) {
//     console.log(e);
// }


// menuliskan string ke file secara asynchronous
// fs.writeFile('data/test.txt', 'Hello World! secara Async', (err) => {
//     console.log(err);
// })


// membaca isi file secara synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);


// membaca isi file secara asynchronous
// fs.readFile('data/test.txt', 'utf-8' , (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })



// // core modul READLINE
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukan nama anda : ', (nama) => {
//     rl.question('Masukan No. HP : ', (noHp) => {
//         console.log(`Terimakasih ${nama}, no hp anda ${noHp}`);
//         rl.close();
//     })
// })


// Memuat modul 'fs' untuk bekerja dengan file system.
const fs = require('fs');

// Memuat modul 'readline' untuk membaca input dari console.
const readline = require('readline');

// Membuat interface readline untuk membaca input dan menulis output ke console.
const rl = readline.createInterface({
    input: process.stdin, // Input diambil dari standard input (keyboard)
    output: process.stdout, // Output ditampilkan di standard output (console)
});

// Menanyakan nama pengguna melalui console dan menangani input dengan callback.
rl.question('Masukan nama anda : ', (nama) => {
    // Setelah nama dimasukkan, menanyakan No. HP pengguna.
    rl.question('Masukan No. HP : ', (noHp) => {
        // Membuat objek contact dengan properti nama dan noHp dari input pengguna.
        const contact = { nama, noHp,};

        // Membaca file 'data/contact.json' secara sinkron dan menyimpan konten dalam variabel 'file'.
        const file = fs.readFileSync('data/contact.json', 'utf-8');

        // Mengubah string JSON dari 'file' menjadi objek JavaScript dan menyimpannya dalam variabel 'contacts'.
        const contacts = JSON.parse(file);

        // Menambahkan objek contact baru ke dalam array 'contacts'.
        contacts.push(contact);

        // Menulis array 'contacts' yang sudah diperbarui ke file 'data/contact.json' dalam format JSON.
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));
        
        // Memberi tahu pengguna bahwa datanya telah dimasukkan.
        console.log('data masuk');

        // Menutup interface readline sehingga program akan berhenti menunggu input lebih lanjut dan keluar.
        rl.close();
    })
})
