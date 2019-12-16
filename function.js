// function hitungan(a,b) {
// 	var total;
// 	total = (a*a*a) + (b*b*b);
// 	return total;
// }

// console.log(hitungan(2,3));



// function arraynya() {
// 	var hasil = 0;
// 	for ( var i=0; i<arguments.length;i++) {
// 		hasil += arguments[i];
// 	}
// 	return hasil;
// }

// var coba = arraynya(3,3,3,3);
// console.log(coba);


// function faktorial(n){
// 	if (n===0) return 1;
// 	return n*faktorial(n-1);
// }

// console.log(faktorial(5));



// var binatang=["kucing","anjing","bebek"];
// console.log(binatang[1]);
// console.log(typeof(binatang));
// console.log(binatang.length);

// function punpun(){
// alert("hello");
// }

// var campur=[3,4,'err',punpun, [2,5,6]];

// console.log(campur[4][1]);


// //nambah array
// var arr = [];
// arr[0]=2;
// arr[1]=33;
// arr[2]=4;
// arr[3]=5;

// console.log(arr[1]);


// // hapus array
// var arra=[3,4,5,6,7];
// arra[3]=undefined;

// console.log(arra);


// // menampilkan isi array
// for(var i=0; i<5;i++) {
// 	console.log("nomor " + (i+1) + " adalah " + arra[i]);
// }


// // push and pop
// arr.push(9);
// arr.pop();

// // unshift and shift
// arr.unshift(9);
// arr.shift();


// // splice and slice
// arr.splice(0,0,8,3);
// arr.splice(0,1,7);

// var arr22= arr.slice(2,4);


// foreach map
// var angkaa = [1,2,3,4,5,6,7,8,9];
// var namaa = ['yaya','aaki','ann', "mawn"];
// // angkaa.forEach(function(e) {
// // 	console.log(e);
// // });

// // namaa.forEach(function(e,i) {
// // 	console.log("nomor " + (i+1) + ' : ' + e);
// // })

// var angkaa2 = angkaa.map(function(e) {
// 	return e * 2;
// });
// console.log(angkaa2.join(' & '));


//sort
var angka3 = [1,2,10,4,50,18];
angka3.sort(function(a,b) {
	return a-b;
});
console.log(angka3.join(' - '));

// filter & find
var angka33 = angka3.filter(function(x) {
	return x > 10;
});
console.log(angka33.join(' ^ '));


var angka34 = angka3.find(function(x) {
	return x < 10;
});
console.log(angka34);




//  // join
// console.log(arr.join("-"));
// console.log(arr22.join(" "));