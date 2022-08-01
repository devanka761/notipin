# NOTIPIN
### Ganti Alert, Confirm, & Prompt kamu menjadi lebih menarik versi Notipin!
Sesuai keterangannya, notifin menghadirkan 3 jenis interaction box yang dapat digunakan. Yuk, simak cara pemakaiannya!
## INSTALASI
Letakkan tag script ini pada bagian sebelum penutup tag body
### Versi: 1.24.49
```html
<script src="https://cdn.statically.io/gh/devanka761/notipin/v1.24.49/all.js"></script>
```
> Silakan update ke versi 1.24.49 jika menggunakan versi lama agar bisa menggunakan fitur-fitur terbaru dan mendapat perbaikan bug dari versi sebelum-sebelumnya.
## PENGGUNAAN
Kita cukup gunakan interaksi yang akan dipakai.<br>
contoh: ```Notipin.Alert({msg: "Selamat Datang!"});```<br>
Tidak perlu menggunakan semua opsi, cukup pilih satu atau beberapa yang ingin dipakai seperti msg, type, mode atau yang lainnya.<br>

> Kapitalisasi juga berpengaruh ya.. Selamat mencoba!

Berikut beberapa opsi yang bisa digunakan
> ### CONFIRM
```javascript
Notipin.Confirm({
  msg: "TEKS KAMU DI SINI", // Pesan kamu
  yes: "OKE", // Tulisan di tombol 'Yes'
  no: "BATAL", // Tulisan di tombol 'No'
  onYes: () => { /* Kode di sini */ },
  onNo: () => { /* Kode di sini */ },
  type: "NORMAL",
  mode: "LIGHT",
})
/* keterangan:
"msg" wajib digunakan
"yes" tidak wajib - default tulisan: "OK"
"no" tidak wajib - default tulisan: "CANCEL"
"onYes & onNo" tidak wajib - default tidak terjadi apa-apa
"type" tidak wajib - pilihan: normal, danger, info, blue - default normal
"mode" tidak wajib - pilihan: light, dark - default light
*/
```
> ### ALERT
```javascript
Notipin.Alert({
  msg: "TEKS KAMU DI SINI", // Pesan kamu
  yes: "OKE", // Tulisan di tombol 'Yes'
  onYes: () => { /* Kode di sini */ },
  type: "NORMAL",
  mode: "LIGHT",
})
/* keterangan:
"msg" wajib digunakan
"yes" tidak wajib - default tulisan: "OK"
"onYes" tidak wajib - default tidak terjadi apa-apa
"type" tidak wajib - pilihan: normal, danger, info, blue - default normal
"mode" tidak wajib - pilihan: light, dark - default light
*/
```
> ### PROMPT
```javascript
Notipin.Prompt({
  msg: "TEKS KAMU DI SINI", // Pesan kamu
  placeholder: "Tulis Sesuatu..",
  max: 0, // Maksimal karakter (integer)
  textarea: false, // tag element (boolean)
  yes: "OKE", // Tulisan di tombol 'Yes'
  no: "BATAL", // Tulisan di tombol 'No'
  onYes: (res) => { /* Kode di sini */ },
  onNo: (res) => { /* Kode di sini */ },
  type: "NORMAL",
  mode: "LIGHT",
})
/* keterangan:
"msg" wajib digunakan
"placeholder" tidak wajib - default: 'Type Here'

"max" tidak wajib - default: 0 (unset/unlimited)
- jika diisi, gunakan integer -

"textarea" tidak wajib - pilihan: false, true
- jika diisi, gunakan boolean -
- false: akan menggunakan tag 'input' -
- true: akan menggunakan tag 'textarea' -

"yes" tidak wajib - default: "OK"
"no" tidak wajib - default: "CANCEL"

"onYes & onNo" tidak wajib - default tidak terjadi apa-apa
- gunakan parameter untuk mengambil hasil isiannya -
- contoh onYes: (res) => console.log(res) -

"type" tidak wajib - pilihan: normal, danger, info, blue - default normal
"mode" tidak wajib - pilihan: light, dark - default light
*/
```
## KOSTUMISASI (OPSIONAL)
> ### TEMPLATE WARNA SENDIRI
> Setelah Meletakkan Script Instalasi, jalankan
> ```javascript
> Notipin.custom();
> ```
> Template ini bisa digunakan di dalam file css atau di dalam tag style:
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
> Dengan begitu, kalian bisa bebas sesuka hati untuk mendesain setiap elementnya. Berikut list element yang ada di dalam Notipin beserta urutuannya:
> ```scss
> div.Notipin {
>   div.box {
>     div.symbol { }
>     div.msg { }
>     input { }
>     textarea { }
>     div.buttons {
>       div.btn.confirm.no { }
>       div.btn.confirm.yes { }
>     }
>   }
> }
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
> Pastikan fontnya sudah diimport terlebih dahulu ya

[SUBSCRIBE DEVANKA761 :V](https://www.youtube.com/c/RG761)

My Other Projects:
1. [Font Awesome Pro (v6.1.1)](https://devanka761.github.io/font-awesome-pro)
2. [D-Audio (Custom Audio Tag Design)](https://github.com/devanka761/d-audio)
3. [Kirimin (Live Chat App)](https://github.com/devanka761/chat-app)
4. [Ucapin (Kartu Ucapan)](https://github.com/devanka761/ucapin)
