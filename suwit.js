// alert("main yuk");

// var tanya=true;

// while(tanya) {

// 	var kita = prompt("pilih gunting, kertas, batu?");

// 	var comp = Math.random();
// 		if (comp < 0.34) {
// 			comp = "gunting";
// 		} else if (comp >= 0.34 && comp < 0.67) {
// 			comp = "kertas";
// 		} else {
// 			comp = "batu";
// 		}

// 	var hasil = "";

// 	if ( kita == comp ) {
// 		hasil = "seri!";
// 	} else if ( kita == "gunting") {
// 		hasil = (comp == 'kertas') ? "menang!" : "kalah...";
// 	} else if (kita == "kertas") {
// 		hasil = (comp == 'batu') ? "menang!" : "kalah..." ;
// 	} else if (kita == "batu") {
// 		hasil = (comp == "gunting") ? "menang!" : "kalah...";
// 	}else {
// 		hasil = "pilihannya salah nih..";
// 	}

// 	alert("pilihan kamu " + kita + " pilihanku " + comp +"\n jadi hasilnya " + hasil);

// tanya = confirm("lagi?"); 
// }

// alert("makasih ya");







// alert ("Bermain Tebak-Tebakan Angka")
// let chance = 3; 
// while(chance>=1) { 
// let p = prompt("masukan Angka mulai Dari 1-10"); 
// var bot = Math.floor(Math.random() * 10) + 1  
// if(p ==  bot ) { 
//     alert("Tebakan Anda Benar")
//     break;
// }else{ 
//     alert("tebakan anda salah")
// }
// chance--;
// }





// var hasil='';
// var tanya=true;

// while(tanya){
//  var comp=Math.floor(Math.random()*10)+1;
//  alert('Selamat Datang Di Game Tebak Angka, Anda Punya 3x Kesempatan Untuk Menjawab');
//  var i=3;
//  while(i>0){
//   var user=prompt('[KESEMPATAN Ke-'+i+']\nMasukkan Pilihan Angka: \n(1 - 10)');
//   if(user==comp){
//    hasil='TEBAKAN BENAR!';
//    i=false;
//    alert('Angka Anda:\t'+user+'\nAngka Acak:\t'+comp+'\nHasil:\tSelamat '+hasil);

//   }else if(user<comp){
//    hasil='TEBAKAN TERLALU KECIL';
//   }else{
//    hasil='TEBAKAN TERLALU BESAR';
//   }

//   if(i>1){
//    alert('Angka Anda:\t'+user+'\nHasil:\t'+hasil+'\nAnda Masih Punya '+(i-1)+'x Kesempatan,Silahkan Tebak Lagi');
//   }
//   if(i==1){
//    alert('ANDA KALAH, ANGKA ACAK:\t'+comp);
//   }
//   i--;
//  }
//  tanya=confirm('Main Lagi?');
// }
// alert('Terimakasih Telah Bermain');
