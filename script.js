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

var jmlAngkot = 10;
var angkotjalan = 6;
var noangkot =1;

while(noangkot<=angkotjalan) {
	console.log ( 'angkot ' + noangkot + ' jalan');
noangkot++;
}

for(noangkot = angkotjalan+1; noangkot <= jmlAngkot; noangkot++) {
	console.log ( 'angkot ' + noangkot + ' ga jalan');
}