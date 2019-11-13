var x = 10;
console.log('hello world!');
console.log('isi dari variable x adalah' + x);

alert('first alert');
alert('coba sekali lagi');

var nama = prompt('namanya siapa?');
alert(nama + ' ya');

var tes = confirm('yakin?');

if ( tes == true ) {
	alert('user oke');
}	
else {
	alert('user cancel');
}

alert('tunggu');
var lagi = true;

while (lagi == true) {
	var nama = prompt('namanya');
	alert('halo ' + nama);

	lagi = confirm('coba lagi?');
}

alert('terima kasih');