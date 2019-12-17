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
var alamatt = {
		jalan : "",
		kota : "",
		provinsi : ""
	};

function daftarmhsnya(nama,umur,sekolah,nomor,alamat) {
	
	var siswa = {};
	siswa.nama = nama;
	siswa.umur = umur;
	siswa.sekolah = sekolah;
	siswa.nomor = [];
	siswa.alamat = {
		jalan : "",
		kota : "",
		provinsi : ""
	}

	return siswa;
}

var alamat3 = {
		jalan : "jl.agbg",
		kota : "jakarta",
		provinsi : "palu"
	};


var mhs3 = daftarmhsnya( "あか" , "25" , "lulus" , );


// concstructor
function Mahasiswa(nama,umur,sekolah,nomor,alamat) {
	this.nama = nama;
	this.nama = nama;
	this.umur = umur;
	this.sekolah = sekolah;
	this.nomor = [];
	this.alamat = {
		jalan : "",
		kota : "",
		provinsi : ""
	}
}

var mhs4 = new Mahasiswa("エリ" , "22" , "lulus" , );




