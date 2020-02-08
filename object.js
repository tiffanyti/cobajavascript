//secara literal
var mhs = {
	nama : "ティファニー",
	umur : 26,
	sekolah : "lulus",
	nomor : [3,4,5,6],
	alamat : {
		jalan : "jl.abc",
		kota : "jakarta",
		provinsi : "jawa"
	}
};

var mhs1 = {
	nama : "イルゴ",
	umur : 26,
	sekolah : "lulus",
	nomor : [3,4,9,6],
	alamat : {
		jalan : "jl.afd",
		kota : "jakarta",
		provinsi : "sumatra"
	}
};


// function declaration 

function daftarmhsnya(nama,umur,sekolah,nomor,alamat) {
	
	var siswa = {};
	siswa.nama = nama;
	siswa.umur = umur;
	siswa.sekolah = sekolah;
	siswa.nomor = nomor;
 	siswa.alamat = {}; // define parent first

	siswa.alamat.jalan = alamat[0];
	siswa.alamat.kota = alamat[1];
	siswa.alamat.provinsi = alamat[2];
	

	return siswa;
}


var mhs3 = daftarmhsnya("あか", "25","lulus",[45,100,200,100],["jl.agg","jakarta" ,"palu"]);


// // constructor (nama harus huruf besar)
function Mahasiswa(nama,umur,sekolah,nomor,alamat) {

	// var dan return udah otomatis kalo pake constructor
	this.nama = nama;
	this.umur = umur;
	this.sekolah = sekolah;
	this.nomor = nomor;
	this.alamat = {};
	this.alamat.jalan = alamat[0];
	this.alamat.kota = alamat[1];
	this.alamat.provinsi = alamat[2];



function Car(nama,umur,sekolah,nomor,alamat) {

	// var dan return udah otomatis kalo pake constructor
	this.nama = nama;
	this.umur = umur;
	this.sekolah = sekolah;
	this.nomor = nomor;
	this.alamat = {};
	this.alamat.jalan = alamat[0];
	this.alamat.kota = alamat[1];
	this.alamat.provinsi = alamat[2];

}
var mhs4 = new Mahasiswa("エリ" , "22" , "lulus" ,[3,4,5,6],["jl.agfg" , "jakarta" , "kupang"] );

var new_car = new car(); // call new class constructor

new_car.add_car('toyota','red','MT');
new_car.color = 'blue';



