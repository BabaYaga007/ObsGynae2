/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
// import {openDatabase} from 'react-native-sqlite-storage';

const successcb = response => {
  console.log(`success`, response);
};

const errorcb = response => {
  console.log(`error in DB holo`, response);
};

// const db= await SQLite.openDatabase({ name: 'OBGYNDatabase', createFromLocation: "~OBGYNDatabase.db", location: 'Library' })
// const db = openDatabase(
//   {
//     name: 'OBGYNdb',
//     createFromLocation: '~OBGYNdb.db',
//     location: 'Library',
//   },
//   successcb,
//   errorcb,
// );

export default function CreateTable() {
  useEffect(() => {
    //'TblDocMaster user to be createddd'
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='TblDocMaster'",
        [],
        function (tx, res) {
          // console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS TblDocMaster', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS TblDocMaster(doc_id INTEGER PRIMARY KEY, clinic_id TEXT, role_id INTEGER, doc_name TEXT, nmc INTEGER, pwd TEXT, doc_contact_id TEXT, email TEXT, qualification TEXT, designation TEXT, clinic TEXT, address TEXT, clinic_phn INTEGER, logo BLOB, created_dt DATETIME DEFAULT CURRENT_TIMESTAMP)',
              [],
            );
            //  console.log('successfully created Doctable: ');
          } else {
            console.log('Table TblDocMaster Found');
          }
        },
      ),
        error => {
          console.log('error TblDocMaster ' + error);
        };
    });

    //'TblUserMaster user to be createddd'
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='TblUserMaster'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS TblUserMaster', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS TblUserMaster(user_id INTEGER, doc_contact_id INTEGER, role_id INTEGER, pwd TEXT, status INTEGER, created_dt DATETIME DEFAULT CURRENT_TIMESTAMP)',
              [],
            );
            // console.log('successfully created userTable: ');
          } else {
            console.log('Table TblUserMaster Found');
          }
        },
      ),
        error => {
          console.log('error TblUserMaster: ' + error);
        };
    });

    //'TblPatientuser to be createddd'
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='TblPatient'",
        [],
        function (tx, res) {
          // console.log('table patient created', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS TblPatient', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS TblPatient(patient_id INTEGER PRIMARY KEY, doc_nmc TEXT, clinic_id TEXT, pat_name TEXT, pat_gender TEXT, pat_phone INTEGER, pat_email TEXT, pat_height REAL, pat_dob TEXT, created_dt DATETIME DEFAULT CURRENT_TIMESTAMP)',
              [],
            );

            console.log('successfully created TblPatient: ');
          } else {
            console.log('Table TblPatient Found');
          }
        },
      ),
        error => {
          console.log('error2: ' + error);
        };
    });

    db.transaction(
      function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='TblAppointment'",
          [],
          function (tx, res) {
            if (res.rows.length == 0) {
              txn.executeSql(
                'DROP TABLE IF EXISTS TblAppointment',
                [],
                function () {
                  txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS TblAppointment(appoint_id INTEGER PRIMARY KEY, doc_nmc TEXT, pat_name TEXT, pat_phone INTEGER, pat_age INTEGER, pat_dob Text, sch_date DATE, sch_time TIME, status INTEGER, created_dt DATETIME DEFAULT CURRENT_TIMESTAMP)',
                    [],
                    function () {
                      console.log('Successfully created TblAppointment.');
                    },
                  );
                },
              );
            } else {
              console.log('Table TblAppointment found.');
            }
          },
        );
      },
      function (error) {
        console.log('Error TblAppointment: ' + error.message);
      },
    );

    //  // For creating Prescriptions - Lots of editing needed
    // db.transaction(function (txn) {
    //   txn.executeSql(
    //     "SELECT name FROM sqlite_master WHERE type='table' AND name='TblPrescMaster'",
    //     [],
    //     function (tx, res) {
    //       if (res.rows.length == 0) {
    //         txn.executeSql(
    //           'DROP TABLE IF EXISTS TblPrescMaster',
    //           [],
    //           function () {
    //             txn.executeSql(
    //   `CREATE TABLE IF NOT EXISTS TblPrescMaster(presc_id INTEGER PRIMARY KEY,
    // patient_id TEXT,
    // patName TEXT,
    // patAge INTEGER,
    // patPhone INTEGER,
    // presCompl TEXT,
    // medHistory TEXT,
    // presNotes TEXT,
    // investRec TEXT,
    // invest_upl1 TEXT,
    // invest_upl2 TEXT,
    // invest_upl3 TEXT,
    // phy_exam TEXT,
    // vitals TEXT,
    // height TEXT,
    // weight TEXT,
    // blood_press TEXT,
    // pulse TEXT,
    // spot_bs TEXT,
    // pallor TEXT,
    // pedal_ed TEXT,
    // userDef1 TEXT,
    // userDef2 TEXT,
    // userDef3 TEXT,
    // userDef4 TEXT,
    // userDef5 TEXT,
    // prov_diag TEXT,
    // medicine1 TEXT,
    // medicine2 TEXT,
    // medicine3 TEXT,
    // invest1 TEXT,
    // invest2 TEXT,
    // invest3 TEXT,
    // lmp_date date,
    // obs_hist TEXT,
    // obs_formula TEXT,
    // gravida INTEGER,
    // birth_year TEXT,
    // parity TEXT,
    // mode_birth TEXT,
    // outcome TEXT,
    // baby TEXT,
    // birth_wt INTEGER,
    // comments TEXT,
    // ante_invest TEXT,
    // bG TEXT,
    // husb_BG TEXT,
    // iCT_1visit TEXT,
    // iCT_3visit TEXT,
    // iCT_2visit TEXT,
    // anti_D DATE,
    // rubella_IgC TEXT,
    // hPLC TEXT,
    // hIV TEXT,
    // hbsAg TEXT,
    // vDRL TEXT,
    // hCV TEXT,
    // vaccination DATE,
    // td DATE,
    // tDaP DATE,
    // fluvac DATE,
    // dualScreen TEXT,
    // quadScreen TEXT,
    // nIPT TEXT,
    // urine TEXT,
    // hb_1 TEXT,
    // hb_2 TEXT,
    // hb_3 TEXT,
    // gTT_1 TEXT,
    // gTT_2 TEXT,
    // gTT_3 TEXT,
    // tSH_1 TEXT,
    // tSH_2 TEXT,
    // tSH_3 TEXT,
    // other_invest TEXT,
    // uSG_report TEXT,
    // usg_date DATE,
    // pOG TEXT,
    // usg_summary TEXT,
    // placenta TEXT,
    // liquor TEXT,
    // anteM_date DATE,
    // anteM_POG TEXT,
    // anteM_Wt FLOAT,
    // anteM_BP TEXT,
    // anteM_Pallor TEXT,
    // anteM_PE TEXT,
    // anteM_OE TEXT,
    // ho_Infertility TEXT,
    // patient_invest TEXT,
    // fem_date DATE,
    // fem_Hb TEXT,
    // fem_BG TEXT,
    // fem_BS TEXT,
    // fem_HIV TEXT,
    // fem_HBsAg TEXT,
    // fem_VDRL TEXT,
    // fem_LH TEXT,
    // fem_FSH TEXT,
    // fem_TSH TEXT,
    // fem_E2 TEXT,
    // fem_AMH TEXT,
    // fem_prolac TEXT,
    // fem_USG TEXT,
    // fem_EB TEXT,
    // fem_HSG TEXT,
    // fem_Hystero TEXT,
    // fem_lapro TEXT,
    // husb_Invest TEXT,
    // husb_date DATE,
    // husb_BG TEXT,
    // husb_BS TEXT,
    // husb_HIV TEXT,
    // husb_HBsAg TEXT,
    // husb_VDRL TEXT,
    // femen TEXT,
    // husb_usg TEXT,
    // husb_DFI TEXT,
    // husb_karyo TEXT,
    // surg_pro TEXT,
    // surg_find TEXT,
    // created_dt DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    //               [],
    //               function () {
    //                 console.log('Successfully created TblPrescMaster.');
    //               },
    //             );
    //           },
    //         );
    //       } else {
    //         console.log('Table TblPrescMaster found.');
    //       }
    //     },
    //     function (error) {
    //       console.log('Error checking TblPrescMaster: ' + error.message);
    //     },
    //   );
    // });

    return () => undefined;
  }, []);
  return null;
}
