// Saldo dengan nilai awal 0
let saldo = 0

// Fungsi untuk menambah saldo
function tambahSaldo() {
    let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: "))
    if (!isNaN(jumlah) && jumlah > 0) {
        saldo += jumlah
        alert("Saldo berhasil ditambahkan. Saldo baru: " + "Rp" + " " + saldo)
    } else {
        alert("Jumlah yang dimasukkan tidak valid.")
    }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
    let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi: "))
    if (!isNaN(jumlah) && jumlah > 0) {
        if (jumlah <= saldo) {
            saldo -= jumlah
            alert("Saldo berhasil dikurangi. Saldo baru: " + "Rp" + " " + saldo)
        } else {
            alert("Jumlah yang dimasukkan melebihi saldo yang tersedia.")
        }
    } else {
        alert("Jumlah yang dimasukkan tidak valid.")
    }
}

// Menjalankan pilihan di browser
window.onload = function() {
    while (true) {
        let pilihan = window.prompt("Pilih operasi:\n1. Tambah Saldo\n2. Kurangi Saldo\n3. Keluar")
        if (pilihan === '1') {
            tambahSaldo()
        } else if (pilihan === '2') {
            kurangiSaldo()
        } else if (pilihan === '3') {
            alert("Terima kasih! Program berakhir.")
            break
        } else {
            alert("Pilihan tidak valid. Silakan coba lagi.")
        }
    }
}
