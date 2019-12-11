// function hitungan(a,b) {
// 	var total;
// 	total = (a*a*a) + (b*b*b);
// 	return total;
// }

// console.log(hitungan(2,3));

function arraynya() {
	var hasil = 0;
	for ( var i=0; i<arguments.length;i++) {
		hasil += arguments[i];
	}
	return hasil;
}

var coba = arraynya(3,3,3,3);
console.log(coba);