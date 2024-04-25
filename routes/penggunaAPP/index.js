var express = require('express');
var router = express.Router();

/* GET index adminSystem. */
router.get('/', function(req, res, next) {
  res.render('penggunaAPP/index', { 
    namaBrand: 'Hubadci', 
    namaSekolah: 'SMK Pusdikhubad Cimahi',
    namaPengguna: 'rangerMerah',
    tahunAjaran: '2023/2024',
    tahunLulusan: '2022/2023',
    //Pengumuman-Pengumuman Baiknya 8/9  Baris
    pengumumanTatausaha: 'Belum ada pengumuman dari Tata Usaha',
    pengumumanKurikulum: 'Belum ada pengumuman dari Kurikulum',
    pengumumanKesiswaan: 'Belum ada pengumuman dari Kesiswaan',
    pengumumanHubin: 'Belum ada pengumuman dari Hubin/Humas',
    pengumumanSarpras: 'Belum ada pengumuman dari Sarana Prasarana'
   });
});

module.exports = router;