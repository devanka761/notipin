# NOTIPIN
### Ganti Alert, Confirm, & Prompt kamu menjadi lebih menarik versi Notipin!
Sesuai keterangannya, notifin menghadirkan 3 jenis interaction box yang dapat digunakan. Yuk, simak cara pemakaiannya!
## INSTALASI
Letakkan tag script ini pada bagian sebelum penutup tag body
```html
<script src="https://cdn.statically.io/gh/devanka761/notipin/v1.21.04/all.js"></script>
```
## PENGGUNAAN
Kita cukup gunakan interaksi yang akan dipakai.<br>
contoh: ```Notipin.Alert({msg: Selamat Datang!});```<br>
Tidak perlu menggunakan semua opsi, cukup pilih satu atau beberapa yang ingin dipakai seperti msg, type, mode atau yang lainnya.<br>
Berikut beberapa opsi yang bisa digunakan
> ### CONFIRM
```javascript
Notipin.Confirm({
  msg: "TEKS KAMU DI SINI", // DEFAULT KOSONG
  yes: "OKE", // TULISAN DI TOMBOL YES
  no: "BATAL", // TULISAN DI TOMBOL NO
  onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
  onNo: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
  type: "NORMAL", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
  mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
})
```
> ### ALERT
```javascript
Notipin.Alert({
  msg: "TEKS KAMU DI SINI", // DEFAULT KOSONG
  yes: "OKE", // TULISAN DI TOMBOL YES
  onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
  type: "NORMAL", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
  mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
})
```
> ### PROMPT
```javascript
Notipin.Prompt({
  msg: "TEKS KAMU DI SINI", // DEFAULT KOSONG
  placeholder: "Tulis Sesuatu..", // PLACEHOLDER DI INPUT
  max: 0, // JUMLAH (INTEGER) MAKSIMALVALUE -- DEFAULT 0 = UNSET
  textarea: false, // false = input tag || true = textarea tag
  yes: "OKE", // TULISAN DI TOMBOL YES
  no: "BATAL", // TULISAN DI TOMBOL NO
  onYes: (res) => { /* KODE DI SINI -- (res = value yang sudah diisi) */ },
  onNo: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
  type: "NORMAL", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
  mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
})
```
## KOSTUMISASI
> ### TEMPLATE WARNA SENDIRI
> Setelah Meletakkan Script Instalasi, jalankan
> ```javascript
> Notipin.custom();
> ```
> Template default di file css atau di dalam tag style:
> ```css
> :root {
>     --notifinBg: #warna;
>     --notifinBoxLight: #warna;
>     --notifinBoxDark: #warna;
> 
>     --notifinMainLightNormal: #warna;
>     --notifinMainLightDanger: #warna;
>     --notifinMainLightInfo: #warna;
>     --notifinMainLightBlue: #warna;
>     
>     --notifinMsgLight: #warna;
>     --notifinMsgDark: #warna;
>     --notifinBtnText: #warna;
>     --notifinBtnBgNo: #warna;
>     
>     --notifinSymbolNormal: #warna;
>     --notifinSymbolDanger: #warna;
>     --notifinSymbolInfo: #warna;
>     --notifinSymbolBlue: #warna;
>     
>     --notifinBtnAlert: #warna;
> }
> ```

> ### FULL MENTAHAN TANPA CSS
> Setelah Meletakkan Script Instalasi, jalankan
> ```javascript
> Notipin.fullCustom();
> ```
> Element untuk Notipin:
> ```css
> div.Notipin
>   div.box
>       div.symbol
>       div.msg
>       input
>       div.buttons
>           div.btn.confirm.no
>           div.btn.confirm.yes
> ```

> ### GANTI FONT NOTIPIN
> Jalankan setelah meletekan script instalasi:
> 
> 1. Contoh Jika 1 Font
> ```javascript
> Notipin.font("Nama Font");
> ```
> 2. Contoh Jika Lebih Dari 1 Font
> ```javascript
> Notipin.font(["Font 1", "Font 2", "Font 3"]);
> ```

[SUBSCRIBE DEVANKA761 :V](https://www.youtube.com/c/RG761)

My Other Projects:
1. [D-Audio (Custom Audio Tag Design)](https://github.com/devanka761/d-audio)
2. [KIRIMIN (Advanced Chat App)](https://github.com/devanka761/chat-app)