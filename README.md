# NOTIPIN
### Ganti Alert, Confirm, & Prompt kamu menjadi lebih menarik versi Notipin!
Sesuai keterangannya, notifin menghadirkan 3 jenis interaction box yang dapat digunakan. Yuk, simak cara pemakaiannya!
## INSTALASI
Letakkan tag script ini pada bagian sebelum penutup tag body
```html
<script src="https://gitcdn.link/cdn/devanka761/notipin/main/src/all.js"></script>
```
## PENGGUNAAN
> ### CONFIRM
```javascript
Notipin.Confirm({
  msg: "TEKS KAMU DI SINI", // DEFAULT KOSONG
  yes: "IYA", // TULISAN DI TOMBOL YES
  no: "TIDAK", // TULISAN DI TOMBOL NO
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
  yes: "OKE", // TULISAN DI TOMBOL YES
  no: "BATAL", // TULISAN DI TOMBOL NO
  placeholder: "Tulis Sesuatu..", // PLACEHOLDER DI INPUT
  onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
  onNo: () => { /* KODE DI SINI, DEFAULT KOSONG */ }
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
> Notipin.full();
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