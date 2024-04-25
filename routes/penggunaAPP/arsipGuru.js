const express = require('express');
const router = express.Router();
const connection = require('../../config/database');

/* TAMPIL GURU */
router.get('/arsipGuru', function(req, res, next) {
  connection.query(
      'SELECT * FROM tbl_arsipguru ' +
      'INNER JOIN tbl_guru ON tbl_arsipguru.noIdGuru = tbl_guru.noIdGuru ;',
      function(err, rows, fields) {
          if (err) {
              req.flash('error', err);
              // Handle the error, you might want to redirect or render an error page
              res.render('penggunaAPP/kearsipan/arsipGuru', {
                  sa: 'noIdArsip',
                  du: 'Dapodik',
                  ti: '2 Tahun Mengajar',
                  pat: 'KTP',
                  ma: 'Ijasah SD',
                  nam: 'Ijasah SMP',
                  juh: 'Ijasah SMA/SMK',
                  pan: 'Ijasah S1',
                  lan: 'SK Pengangkatan',
                  luh: 'SK Pembagian Tugas',
                  las: 'Nama Guru',
                  data: [],
                  data_guru: []
              });
          } else {
              connection.query('SELECT * FROM tbl_guru;', function(err, rows_guru) {
                  if (err) {
                      req.flash('error', err);
                      // Handle the error, you might want to redirect or render an error page
                      res.render('penggunaAPP/kearsipan/arsipGuru', {
                          sa: 'noIdArsip',
                          du: 'Dapodik',
                          ti: '2 Tahun Mengajar',
                          pat: 'KTP',
                          ma: 'Ijasah SD',
                          nam: 'Ijasah SMP',
                          juh: 'Ijasah SMA/SMK',
                          pan: 'Ijasah S1',
                          lan: 'SK Pengangkatan',
                          luh: 'SK Pembagian Tugas',
                          las: 'Nama Guru',
                          data: [],
                          data_guru: []
                      });
                  } else {
                      connection.query('SELECT * FROM tbl_pengguna;', function(err, rows_pengguna) {
                          if (err) {
                              req.flash('error', err);
                              // Handle the error, you might want to redirect or render an error page
                          } else {
                              res.render('penggunaAPP/kearsipan/arsipGuru', {
                                  sa: 'noIdArsip',
                                  du: 'Dapodik',
                                  ti: '2 Tahun Mengajar',
                                  pat: 'KTP',
                                  ma: 'Ijasah SD',
                                  nam: 'Ijasah SMP',
                                  juh: 'Ijasah SMA/SMK',
                                  pan: 'Ijasah S1',
                                  lan: 'SK Pengangkatan',
                                  luh: 'SK Pembagian Tugas',
                                  las: 'Nama Guru',
                                  data: rows,
                                  data_guru: rows_guru
                              });
                          }
                      });
                  }
              });
          }
      }
  );
});




//tambah arsip
router.post('/arsipGuru/tambaharsip', function(req, res, next){
    //let noIdArsip = req.body.noIdArsip;
    
    let dapodik =req.body.dapodik;
    let Thn = req.body.Thn;
    let KTP = req.body.KTP;
    let ijasahSD = req.body.ijasahSD;
    let ijasahSMP = req.body.ijasahSMP;
    let ijasahSMA= req.body.ijasahSMA;
    let ijasahS1 = req.body.ijasahS1;
    let skPengangkatan= req.body.skPengangkatan;
    let skPembagianTugas= req.body.skPembagianTugas;
    let noIdGuru= req.body.noIdGuru;
   
    
  
    let errors = false;
    
        
    /*if (noIdArsip.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }*/
    
    if (dapodik.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }

    if (Thn.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (KTP.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (ijasahSD.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (ijasahSMP.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (ijasahSMA.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (ijasahS1.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (skPengangkatan.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (skPembagianTugas.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    if (noIdGuru.length === 0) {
      errors = true;
      req.flash('error', "No Id Guru");
      return res.redirect('/kearsipan/arsipGuru');
    }
    
    
    if(!errors){
      let formData = {
  
        dapodik:dapodik,
        Thn:Thn,
        KTP:KTP,
        ijasahSD:ijasahSD,
        ijasahSMP:ijasahSMP,
        ijasahSMA:ijasahSMA,
        ijasahS1:ijasahS1,
        skPengangkatan:skPengangkatan,
        skPembagianTugas: skPembagianTugas,
        noIdGuru:noIdGuru
        
          
  }
  connection.query('INSERT INTO tbl_arsipguru SET ?', formData, function(err, result) {
    if (err) {
      req.flash('error', err);
      res.redirect('/kearsipan/arsipGuru');
    } else {
      req.flash('success', 'Data Berhasil Disimpan!');
      res.redirect('/kearsipan/arsipGuru');
    }
  })
}
})
//tambah arsip

//edit

//edit
    

//hapus//
router.get('/arsipGuru/hapusArsip/:noIdArsip', function(req, res, next) {
  let noIdArsip = req.params.noIdArsip;
  
  connection.query('DELETE FROM tbl_arsipguru WHERE noIdArsip = ?', [noIdArsip], function(err, result) {
    if (err) {
      // Set flash message
      req.flash('error', err);
      res.redirect('/kearsipan/arsipGuru');
    } else {
      // Set flash message
      req.flash('success', 'Data Berhasil Dihapus!');
      // Redirect to posts page
      res.redirect('/kearsipan/arsipGuru');
    }
  });
});



module.exports = router;