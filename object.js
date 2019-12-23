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
	siswa.alamat =
		this.jalan = jalan,
		this.kota = kota,
		this.provinsi = provinsi
	}

	return siswa;
}


var mhs3 = daftarmhsnya( "あか" , "25" , "lulus" ,[3,4,5,6],["jl.agg" , "jakarta" , "palu"] );


// concstructor (nama harus huruf besar)
function Mahasiswa(nama,umur,sekolah,nomor,alamat) {
	// var dan return udah otomatis kalo pake constructor
	this.nama = nama;
	this.umur = umur;
	this.sekolah = sekolah;
	this.nomor = nomor;
	this.alamat = {
		this.jalan = jalan,
		this.kota = kota,
		this.provinsi = provinsi
	}

}

var mhs4 = new Mahasiswa("エリ" , "22" , "lulus" ,[3,4,5,6],["jl.agfg" , "jakarta" , "kupang"] );




