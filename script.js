let buku = [];


function tambahBuku() {
const resi = document.getElementById("resi").value;
const judul = document.getElementById("judul").value;
let sampulName = document.getElementById("sampul").value.trim();
let folder = "";
if (sampulName.includes("074345")) folder = "img/matematika/";
else if (sampulName.includes("074435")) folder = "img/ipa/";
const sampul = folder + sampulName;
const sinopsis = document.getElementById("sinopsis").value;


if (!resi || !judul || !sampul) {
alert("Semua data harus diisi!");
return;
}


buku.push({ resi, judul, sampul, sinopsis, dipinjam: false });
render();
}


function render() {
const area = document.getElementById("koleksi");
area.innerHTML = "";


buku.forEach(b => {
area.innerHTML += `
<div class="card">
<img src="${b.sampul}" alt="Sampul Buku" loading="lazy" />
<h3>${b.judul}</h3>
<p><b>Resi:</b> ${b.resi}</p>
<p>${b.sinopsis}</p>
<button onclick="togglePinjam('${b.resi}')">
${b.dipinjam ? "Sudah Dipinjam" : "Tersedia"}
</button>
</div>
`;
});
}


function togglePinjam(resi) {
const target = buku.find(x => x.resi === resi);
target.dipinjam = !target.dipinjam;
render();
}
