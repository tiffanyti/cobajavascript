// var x = 10;
// console.log('hello world!');
// console.log('isi dari variable x adalah' + x);

// alert('first alert');
// alert('coba sekali lagi');

// var nama = prompt('namanya siapa?');
// alert(nama + ' ya');

// var tes = confirm('yakin?');

// if ( tes == true ) {
// 	alert('user oke');
// }	
// else {
// 	alert('user cancel');
// }

// alert('tunggu');
// var lagi = true;

// while (lagi == true) {
// 	var nama = prompt('namanya');
// 	alert('halo ' + nama);

// 	lagi = confirm('coba lagi?');
// }

// alert('terima kasih');



// for (var i = 0; i < 5; i++) {
// 	alert('coba pake "for" sampe 5x');
// 


// var nilaiAwal = 1;
// while(nilaiAwal <=5) {
// 	console.log ('hello world ' + nilaiAwal);
// 	nilaiAwal++;
// }

// var jmlAngkot = 10;
// var angkotjalan = 6;
// var noangkot =1;

// while(noangkot<=angkotjalan) {
// 	console.log ( 'angkot ' + noangkot + ' jalan');
// noangkot++;
// }

// for(noangkot = angkotjalan+1; noangkot <= jmlAngkot; noangkot++) {
// 	console.log ( 'angkot ' + noangkot + ' ga jalan');
// }


// var angka = 1;
// if (angka == 1) {
// 	alert ("anda 1");
// }

// var angka = prompt('tulis angka');
// if (angka % 2 == 0) {
// 	alert (angka + ' genap');
// } else if (angka % 2 == 1) {
// 	alert (angka + ' ganjil');
// }else {
// 	alert ( 'masukan angka!');
// }


var noangkot=1;
var jmlAngkot =10;
var angkotjalan=6;
var angkotlembur=8;

for (noangkot; noangkot<=jmlAngkot; noangkot++) {
	if( noangkot<=angkotjalan && noangkot !=5 ) {
	console.log ("angkot jalan " + noangkot);
} else if (noangkot==8 || noangkot==5) {
	console.log ("angkotnya lembur " + noangkot);
} else {
	console.log ("angkot ga jalan " + noangkot);
}
}