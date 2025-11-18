let buku = [
{ resi: "001", judul: "Matematika Dasar", penulis: "A. Putra", status: "Tersedia" },
{ resi: "002", judul: "IPA Terpadu", penulis: "B. Wati", status: "Dipinjam" }
];


function tampilkanBuku() {
const container = document.getElementById("daftar-buku");
container.innerHTML = "";
buku.forEach(b => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `<h3>${b.judul}</h3>
<p>Penulis: ${b.penulis}</p>
<p>Resi: ${b.resi}</p>
<p>Status: <strong>${b.status}</strong></p>`;
container.appendChild(card);
});
}


tampilkanBuku();


function cariBuku() {
const keyword = document.getElementById("search").value.toLowerCase();
const hasil = document.getElementById("hasil-cari");
hasil.innerHTML = "";


const ditemukan = buku.filter(b =>
b.judul.toLowerCase().includes(keyword) ||
b.resi.toLowerCase().includes(keyword)
);


if (ditemukan.length === 0) {
hasil.innerHTML = "<p>Tidak ada buku ditemukan.</p>";
} else {
ditemukan.forEach(b => {
hasil.innerHTML += `<p><strong>${b.judul}</strong> - ${b.penulis} (Resi: ${b.resi}) - Status: ${b.status}</p>`;
});
}
}


function tambahBuku() {
const resi = document.getElementById("resi").value;
const judul = document.getElementById("judul").value;
const penulis = document.getElementById("penulis").value;
const status = document.getElementById("status").value;


if (!resi || !judul || !penulis) {
document.getElementById("notif").innerText = "Semua data harus diisi.";
return;
}


buku.push({ resi, judul, penulis, status });
document.getElementById("notif").innerText = "Buku berhasil ditambahkan.";
tampilkanBuku();
}
