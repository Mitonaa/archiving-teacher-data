const express = require('express');
const router = express.Router();
const connection = require('../../config/database');

/* TAMPIL GURU */
router.get('/guru', function(req, res, next) {
  connection.query(
      'SELECT * FROM tbl_guru ' +
      'INNER JOIN tbl_pengguna ON tbl_guru.noIdPengguna = tbl_pengguna.noIdPengguna ' +
      'INNER JOIN tbl_jabatanstruktural ON tbl_guru.noIdJabatan = tbl_jabatanstruktural.noIdJabatan;',
      function(err, rows, fields) {
          if (err) {
              req.flash('error', err);
              // Handle the error, you might want to redirect or render an error page
              res.render('penggunaAPP/kearsipan/guru', {
                  sa: 'Id Guru',
                  du: 'Id pengguna',
                  ti: 'Nama Jabatan',
                  pat: 'Nama Guru',
                  ma: 'NIK',
                  nam: 'Tempat Lahir',
                  juh: 'Tanggal Lahir',
                  pan: 'Agama',
                  lan: 'No HP',
                  luh: 'Alamat',
                  las: 'Pendidikan Terakhir',
                  dulas: 'Wali Kelas',
                  tilas: 'Id Jabatan',
                  data: [],
                  data_pengguna: [],
                  data_jabatan: []
              });
          } else {
              connection.query('SELECT * FROM tbl_pengguna;', function(err, rows_pengguna) {
                  if (err) {
                      req.flash('error', err);
                      // Handle the error, you might want to redirect or render an error page
                      res.render('penggunaAPP/kearsipan/guru', {
                          sa: 'Id Guru',
                          du: 'Id pengguna',
                          ti: 'Nama Jabatan',
                          pat: 'Nama Guru',
                          ma: 'NIK',
                          nam: 'Tempat Lahir',
                          juh: 'Tanggal Lahir',
                          pan: 'Agama',
                          lan: 'No HP',
                          luh: 'Alamat',
                          las: 'Pendidikan Terakhir',
                          dulas: 'Wali Kelas',
                          tilas: 'Id Jabatan',
                          data: [],
                          data_pengguna: [],
                          data_jabatan: []
                      });
                  } else {
                      connection.query('SELECT * FROM tbl_jabatanstruktural;', function(err, rows_jabatan) {
                          if (err) {
                              req.flash('error', err);
                              // Handle the error, you might want to redirect or render an error page
                              res.render('penggunaAPP/kearsipan/guru', {
                                  sa: 'Id Guru',
                                  du: 'Id pengguna',
                                  ti: 'Nama Jabatan',
                                  pat: 'Nama Guru',
                                  ma: 'NIK',
                                  nam: 'Tempat Lahir',
                                  juh: 'Tanggal Lahir',
                                  pan: 'Agama',
                                  lan: 'No HP',
                                  luh: 'Alamat',
                                  las: 'Pendidikan Terakhir',
                                  dulas: 'Wali Kelas',
                                  tilas: 'Id Jabatan',
                                  data: [],
                                  data_pengguna: [],
                                  data_jabatan: []
                              });
                          } else {
                              connection.query('SELECT * FROM tbl_pengguna;', function(err, rows_pengguna) {
                                  if (err) {
                                      req.flash('error', err);
                                      // Handle the error, you might want to redirect or render an error page
                                  } else {
                                      res.render('penggunaAPP/kearsipan/guru', {
                                          sa: 'Id Guru',
                                          du: 'Id pengguna',
                                          ti: 'Nama Jabatan',
                                          pat: 'Nama Guru',
                                          ma: 'NIK',
                                          nam: 'Tempat Lahir',
                                          juh: 'Tanggal Lahir',
                                          pan: 'Agama',
                                          lan: 'No HP',
                                          luh: 'Alamat',
                                          las: 'Pendidikan Terakhir',
                                          dulas: 'Wali Kelas',
                                          tilas: 'Id Jabatan',
                                          data: rows,
                                          data_pengguna: rows_pengguna,
                                          data_jabatan: rows_jabatan
                                      });
                                  }
                              });
                          }
                      });
                  }
              });
          }
      }
  );
});

// Fungsi untuk memformat tanggal
function formatDate(dateStr) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

const originalDateStr = 'Wed Aug 30 2023 00:00:00 GMT+0700 (Western Indonesia Time)';
const formattedDate = formatDate(originalDateStr);

console.log(formattedDate); // Output: "30 Aug 2023"

/* */

router.post('/guru/tambahguru', function(req, res, next){
    //let noIdGuru = req.body.noIdGuru;
    let noIdPengguna =req.body.noIdPengguna;
    let noIdJabatan = req.body.noIdJabatan;
    let namaGuru = req.body.namaGuru;
    let nomorInduk = req.body.nomorInduk;
    let tempatLahir = req.body.tempatLahir;
    let tanggalLahir= req.body.tanggalLahir;
    let agama= req.body.agama;
    let noHP= req.body.noHP;
    let alamat= req.body.alamat;
    let pendidikanTerakhir= req.body.pendidikanTerakhir;
    let walikelas= req.body.walikelas;
  
    let errors = false;
    
        
    /*if (noIdGuru.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }*/
     
    if (noIdPengguna.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }

    if (noIdJabatan.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (namaGuru.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (nomorInduk.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (tempatLahir.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (tanggalLahir.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (agama.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (noHP.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (alamat.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (pendidikanTerakhir.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if (walikelas.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/guru');
    }
    if(!errors){
      let formData = {
        
        noIdPengguna:noIdPengguna,
        noIdJabatan:noIdJabatan,
        namaGuru: namaGuru,
        nomorInduk: nomorInduk,
        tempatLahir: tempatLahir,
        tanggalLahir: tanggalLahir,
        agama: agama,
        noHP: noHP,
        alamat: alamat,
        pendidikanTerakhir: pendidikanTerakhir,
        walikelas:walikelas
          
  }
  connection.query('INSERT INTO tbl_guru SET ?', formData, function(err, result) {
    if (err) {
      req.flash('error', err);
      res.redirect('/kearsipan/guru');
    } else {
      req.flash('success', 'Data Berhasil Disimpan!');
      res.redirect('/kearsipan/guru');
    }
  })
}
})
   
//edit
    
router.post('/guru/editguru/:noIdGuru', function(req, res, next) {
  let noIdGuru = req.params.noIdGuru;
  let noIdPengguna = req.body.noIdPengguna;
  let noIdJabatan = req.body.noIdJabatan;
  let namaGuru = req.body.namaGuru;
  let nomorInduk = req.body.nomorInduk;
  let tempatLahir = req.body.tempatLahir;
  let tanggalLahir = req.body.tanggalLahir;
  let agama = req.body.agama;
  let noHP = req.body.noHP;
  let alamat = req.body.alamat;
  let pendidikanTerakhir = req.body.pendidikanTerakhir;
  let walikelas = req.body.walikelas;

  let errors = false;

  if (noIdGuru.length === 0) {
    errors = true;
    req.flash('error', 'No Id Guru');
  }

  /*if (noIdPengguna.length === 0) {
    errors = true;
    req.flash('error', 'No Id Pengguna');
  }*/

  if (noIdJabatan.length === 0) {
    errors = true;
    req.flash('error', 'No Id Jabatan');
  }
  
  if (namaGuru.length === 0) {
    errors = true;
    req.flash('error', 'Nama Guru');
  }

  if (nomorInduk.length === 0) {
    errors = true;
    req.flash('error', 'Nomor Induk');
  }

  if (tempatLahir.length === 0) {
    errors = true;
    req.flash('error', 'Tempat Lahir');
  }

  if (tanggalLahir.length === 0) {
    errors = true;
    req.flash('error', 'Tanggal Lahir');
  }

  if (agama.length === 0) {
    errors = true;
    req.flash('error', 'Agama');
  }

  if (noHP.length === 0) {
    errors = true;
    req.flash('error', 'Nomor HP');
  }

  if (alamat.length === 0) {
    errors = true;
    req.flash('error', 'Alamat');
  }

  if (pendidikanTerakhir.length === 0) {
    errors = true;
    req.flash('error', 'Pendidikan Terakhir');
  }

  if (walikelas.length === 0) {
    errors = true;
    req.flash('error', 'Wali Kelas');
  }

  if (!errors) {
    let formData = {
      noIdGuru: noIdGuru,
      
      noIdJabatan: noIdJabatan,
      namaGuru: namaGuru,
      nomorInduk: nomorInduk,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      agama: agama,
      noHP: noHP,
      alamat: alamat,
      pendidikanTerakhir: pendidikanTerakhir,
      walikelas: walikelas
    };

    connection.query('UPDATE tbl_guru SET ? WHERE noIdGuru = ' + noIdGuru, formData, function(err, result) {
      if (err) {
        req.flash('error', err);
      } else {
        req.flash('success', 'Data Berhasil Disimpan!');
      }
      res.redirect('/kearsipan/guru');
    });
  } else {
    res.redirect('/kearsipan/guru');
  }
});




//hapus//
router.get('/guru/hapusguru/(:noIdGuru)', function(req, res, next) {

  let noIdGuru = req.params.noIdGuru;
   
  connection.query('DELETE FROM tbl_guru WHERE noIdGuru = ' + noIdGuru, function(err, result) {
      if (err) {
          // set flash message
          req.flash('error', err)
          res.redirect('/kearsipan/guru')
      } else {
          // set flash message
          req.flash('success', 'Data Berhasil Dihapus!')
          // redirect to posts page
          res.redirect('/kearsipan/guru')
      }
  });
});


module.exports = router;