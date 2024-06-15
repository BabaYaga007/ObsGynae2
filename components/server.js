/* eslint-disable prettier/prettier */
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port
// Middleware to parse JSON requests
app.use(bodyParser.json());

// MySQL database configuration
const db = mysql.createConnection({
  host: '54.66.15.177',
  user: 'root',
  password: 'Obgyn@123',
  database: 'OBGYNDb',
  insecureAuth: true,
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Endpoint for inserting data into the doc table
app.post('/setDoc', (req, res) => {
  const {
    clinic_id,
    role_id,
    doc_name,
    nmc,
    pwd,
    doc_contact_id,
    email_id,
    qualification,
    designation,
    clinic,
    address,
    clinic_phn,
  } = req.body;

  const sql = `INSERT INTO tblDocMaster (clinic_id, role_id, doc_name, nmc, pwd, doc_contact_id, email, qualification, designation, clinic, address, clinic_phn) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    clinic_id,
    role_id,
    doc_name,
    nmc,
    pwd,
    doc_contact_id,
    email_id,
    qualification,
    designation,
    clinic,
    address,
    clinic_phn,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data tblDocMaster -', err);
      res.status(500).send('Error inserting data tblDocMaster -', err);
    } else {
      console.log('Data inserted successfully tblDocMaster-');
      res.status(200).send('Data inserted successfully tblDocMaster-');
    }
  });
});

// Endpoint for inserting data into the user table
app.post('/setUser', (req, res) => {
  const {nmc, doc_contact_id, role_id, pwd, status} = req.body;

  const sql = `INSERT INTO tblUserMaster (user_id, doc_contact_id, role_id, pwd , status) VALUES (?,?,?,?,?)`;
  const values = [nmc, doc_contact_id, role_id, pwd, status];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblUserMaster:', err);
      res.status(500).send('Error inserting data tblUserMaster', err);
    } else {
      console.log('Data inserted successfully tblUserMaster');
      res.status(200).send('Data inserted successfully tblUserMaster');
    }
  });
});

// Endpoint for inserting data into the Appointment table
app.post('/setAppoint', (req, res) => {
  const {
    docNmc,
    pat_name,
    pat_phone,
    pat_age,
    pat_dob,
    sch_date,
    sch_time,
    status,
  } = req.body;

  const sql = `INSERT INTO tblAppointment(doc_nmc, pat_name, pat_phone, pat_age, pat_dob, sch_date, sch_time, status) VALUES (?,?,?,?,?,?,?,?)`;
  const values = [
    docNmc,
    pat_name,
    pat_phone,
    pat_age,
    pat_dob,
    sch_date,
    sch_time,
    status,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblAppointment: ', err);
      res.status(500).send('Error inserting data tblAppointment', err);
    } else {
      console.log('Data inserted successfully tblAppointment');
      res.status(200).send('Data inserted successfully tblAppointment');
    }
  });
});

// Endpoint for inserting data into the Patient table
app.post('/setPatient', (req, res) => {
  const {
    docNmc,
    clinicId,
    pat_name,
    pat_gender,
    pat_phone,
    pat_email,
    pat_height,
    pat_dob,
  } = req.body;

  const sql = `INSERT INTO tblPatient(doc_nmc, clinic_id, pat_name, pat_gender, pat_phone, pat_email, pat_height, pat_dob) VALUES (?,?,?,?,?,?,?,?)`;
  const values = [
    docNmc,
    clinicId,
    pat_name,
    pat_gender,
    pat_phone,
    pat_email,
    pat_height,
    pat_dob,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblPatient:', err);
      res.status(500).send('Error inserting data tblPatient: ', err);
    } else {
      console.log('Data inserted successfully tblPatient');
      res.status(200).send('Data inserted successfully tblPatient');
    }
  });
});

// Endpoint for inserting data into the Prescription table
app.post('/setPresc', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
  } = req.body;

  const sql = `INSERT INTO tblPrescMaster (
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblPrescMaster:', err);
      res.status(500).send('Error inserting data tblPrescMaster: ', err);
    } else {
      console.log('Data inserted successfully tblPrescMaster');
      res.status(200).send('Data inserted successfully tblPrescMaster');
    }
  });
});

// Endpoint for inserting data into the Prescription table
app.post('/setSurg', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    surg_proc,
    surg_find,
  } = req.body;

  const sql = `INSERT INTO tblPrescMaster (
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    surg_proc,
    surg_find
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    surg_proc,
    surg_find,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblPrescMaster:', err);
      res.status(500).send('Error inserting data tblPrescMaster: ', err);
    } else {
      console.log('Data inserted successfully tblPrescMaster');
      res.status(200).send('Data inserted successfully tblPrescMaster');
    }
  });
});

// Endpoint for inserting data into the Prescription table
app.post('/setInf', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    infer_notes,
    patient_invest,
    femp_date,
    fem_u_date,
    fem_eb_date,
    fem_h_date,
    hyst_date,
    lap_date,
    fem_hb,
    fem_bg,
    fem_bs,
    fem_hiv,
    fem_hbsag,
    fem_vdrl,
    fem_lh,
    fem_fsh,
    fem_tsh,
    fem_e2,
    fem_amh,
    fem_prolac,
    fem_usg,
    fem_eb,
    fem_hsg,
    fem_hystero,
    fem_lapro,
    sdate,
    kdate,
    husb_date,
    h_usg_date,
    hdfi_date,
    husb_Invest,
    husb_bg,
    husb_bs,
    husb_hiv,
    husb_hbsag,
    husb_vdrl,
    semen,
    husb_usg,
    husb_dfi,
    husb_karyo,
  } = req.body;

  const sql = `INSERT INTO tblPrescMaster (
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    infer_notes,
    patient_invest,
    femp_date,
    fem_u_date,
    fem_eb_date,
    fem_h_date,
    hyst_date,
    lap_date,
    fem_hb,
    fem_bg,
    fem_bs,
    fem_hiv,
    fem_hbsag,
    fem_vdrl,
    fem_lh,
    fem_fsh,
    fem_tsh,
    fem_e2,
    fem_amh,
    fem_prolac,
    fem_usg,
    fem_eb,
    fem_hsg,
    fem_hystero,
    fem_lapro,
    sdate,
    kdate,
    husb_date,
    h_usg_date,
    hdfi_date,
    husb_Invest,
    husb_bg,
    husb_bs,
    husb_hiv,
    husb_hbsag,
    husb_vdrl,
    semen,
    husb_usg,
    husb_dfi,
    husb_karyo
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    infer_notes,
    patient_invest,
    femp_date,
    fem_u_date,
    fem_eb_date,
    fem_h_date,
    hyst_date,
    lap_date,
    fem_hb,
    fem_bg,
    fem_bs,
    fem_hiv,
    fem_hbsag,
    fem_vdrl,
    fem_lh,
    fem_fsh,
    fem_tsh,
    fem_e2,
    fem_amh,
    fem_prolac,
    fem_usg,
    fem_eb,
    fem_hsg,
    fem_hystero,
    fem_lapro,
    sdate,
    kdate,
    husb_date,
    h_usg_date,
    hdfi_date,
    husb_Invest,
    husb_bg,
    husb_bs,
    husb_hiv,
    husb_hbsag,
    husb_vdrl,
    semen,
    husb_usg,
    husb_dfi,
    husb_karyo,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblPrescMaster:', err);
      res.status(500).send('Error inserting data tblPrescMaster: ', err);
    } else {
      console.log('Data inserted successfully tblPrescMaster');
      res.status(200).send('Data inserted successfully tblPrescMaster');
    }
  });
});

// Endpoint for inserting data into the Prescription table
app.post('/setAnc', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    lmp_date,
    obs_hist,
    gravida,
    birth_year,
    parity,
    mode_birth,
    outcome,
    baby,
    birth_wt,
    comments,
    usg_date,
    pog,
    usg_summary,
    placenta,
    liquor,
    antem_date,
    antem_pog,
    antem_wt,
    antem_bp,
    antem_pallor,
    antem_ped,
    antem_oe,
    bg,
    rubella,
    antem_h_bg,
    ict_1visit,
    ict_2visit,
    ict_3visit,
    ict_1date,
    ict_2date,
    ict_3date,
    anti_D,
    hplc,
    hiv,
    hbsag,
    vdrl,
    hcv,
    urine,
    vaccination,
    td,
    tdap,
    fluvac,
    dual_screen,
    quad_screen,
    nipt,
    hb_1,
    hb_2,
    hb_3,
    gtt_1,
    gtt_2,
    gtt_3,
    tsh_1,
    tsh_2,
    tsh_3,
    hb_1date,
    hb_2date,
    hb_3date,
    gtt_1date,
    gtt_2date,
    gtt_3date,
    tsh_1date,
    tsh_2date,
    tsh_3date,
    other_invest,
  } = req.body;

  const sql = `INSERT INTO tblPrescMaster (
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    lmp_date,
    obs_hist,
    gravida,
    birth_year,
    parity,
    mode_birth,
    outcome,
    baby,
    birth_wt,
    comments,
    usg_date,
    pog,
    usg_summary,
    placenta,
    liquor,
    antem_date,
    antem_pog,
    antem_wt,
    antem_bp,
    antem_pallor,
    antem_ped,
    antem_oe,
    bg,
    rubella,
    antem_h_bg,
    ict_1visit,
    ict_2visit,
    ict_3visit,
    ict_1date,
    ict_2date,
    ict_3date,
    anti_D,
    hplc,
    hiv,
    hbsag,
    vdrl,
    hcv,
    urine,
    vaccination,
    td,
    tdap,
    fluvac,
    dual_screen,
    quad_screen,
    nipt,
    hb_1,
    hb_2,
    hb_3,
    gtt_1,
    gtt_2,
    gtt_3,
    tsh_1,
    tsh_2,
    tsh_3,
    hb_1date,
    hb_2date,
    hb_3date,
    gtt_1date,
    gtt_2date,
    gtt_3date,
    tsh_1date,
    tsh_2date,
    tsh_3date,
    other_invest
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    pat_name,
    pat_age,
    pat_phone,
    pat_gender,
    pres_compl,
    med_history,
    pres_notes,
    invest_rec,
    phy_exam,
    vitals,
    height,
    weight,
    blood_press,
    pulse,
    spot_bs,
    pallor,
    pedal_ed,
    prov_diag,
    medicine,
    fav_invest,
    fav_advise,
    follow_up,
    form,
    lmp_date,
    obs_hist,
    gravida,
    birth_year,
    parity,
    mode_birth,
    outcome,
    baby,
    birth_wt,
    comments,
    usg_date,
    pog,
    usg_summary,
    placenta,
    liquor,
    antem_date,
    antem_pog,
    antem_wt,
    antem_bp,
    antem_pallor,
    antem_ped,
    antem_oe,
    bg,
    rubella,
    antem_h_bg,
    ict_1visit,
    ict_2visit,
    ict_3visit,
    ict_1date,
    ict_2date,
    ict_3date,
    anti_D,
    hplc,
    hiv,
    hbsag,
    vdrl,
    hcv,
    urine,
    vaccination,
    td,
    tdap,
    fluvac,
    dual_screen,
    quad_screen,
    nipt,
    hb_1,
    hb_2,
    hb_3,
    gtt_1,
    gtt_2,
    gtt_3,
    tsh_1,
    tsh_2,
    tsh_3,
    hb_1date,
    hb_2date,
    hb_3date,
    gtt_1date,
    gtt_2date,
    gtt_3date,
    tsh_1date,
    tsh_2date,
    tsh_3date,
    other_invest,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblPrescMaster:', err);
      res.status(500).send('Error inserting data tblPrescMaster: ', err);
    } else {
      console.log('Data inserted successfully tblPrescMaster');
      res.status(200).send('Data inserted successfully tblPrescMaster');
    }
  });
});

// Endpoint for inserting data into the user table
app.post('/setUsg', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    usg_report,
    usg_date,
    pog,
    usg_sum,
    placenta,
    liquor,
  } = req.body;

  const sql = `INSERT INTO tblUsgMaster (patient_id,
    doc_nmc,
    clinic_id,
    usg_report, 
    usg_date, 
    pog, 
    usg_sum, 
    placenta, 
    liquor) VALUES (?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    usg_report,
    usg_date,
    pog,
    usg_sum,
    placenta,
    liquor,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblUsgMaster:', err);
      res.status(500).send('Error inserting data tblUsgMaster', err);
    } else {
      console.log('Data inserted successfully tblUsgMaster');
      res.status(200).send('Data inserted successfully tblUsgMaster');
    }
  });
});

// Endpoint for inserting data into the user table
app.post('/setObs', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    parity,
    mode_birth,
    baby,
    outcome,
    gravida,
    birth_year,
    birth_wt,
    comments,
  } = req.body;

  const sql = `INSERT INTO tblObsMaster (patient_id,
    doc_nmc,
    clinic_id,
    parity,
    mode_birth,
    baby,
    outcome,
    gravida,
    birth_year,
    birth_wt,
    comments
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    parity,
    mode_birth,
    baby,
    outcome,
    gravida,
    birth_year,
    birth_wt,
    comments,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblObsMaster:', err);
      res.status(500).send('Error inserting data tblObsMaster', err);
    } else {
      console.log('Data inserted successfully tblObsMaster');
      res.status(200).send('Data inserted successfully tblObsMaster');
    }
  });
});

// Endpoint for inserting data into the user table
app.post('/setMonit', (req, res) => {
  const {
    patient_id,
    doc_nmc,
    clinic_id,
    antem_bp,
    antem_oe,
    antem_date,
    antem_pog,
    antem_wt,
    antem_ped,
    antem_pallor,
  } = req.body;

  const sql = `INSERT INTO tblMonitMaster (patient_id,
    doc_nmc,
    clinic_id,
    ante_pog,
    ante_wt,
    ante_bp,
    ante_ped,
    ante_pal,
    ante_oe,
    antem_date
    ) VALUES (?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    patient_id,
    doc_nmc,
    clinic_id,
    antem_pog,
    antem_wt,
    antem_bp,
    antem_ped,
    antem_pallor,
    antem_oe,
    antem_date,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblMonitMaster:', err);
      res.status(500).send('Error inserting data tblMonitMaster', err);
    } else {
      console.log('Data inserted successfully tblMonitMaster');
      res.status(200).send('Data inserted successfully tblMonitMaster');
    }
  });
});

// Endpoint for inserting data into the Med table
app.post('/setMed', (req, res) => {
  const {doc_nmc, clinic_id, medicine} = req.body;

  const sql = `INSERT INTO tblFavMeds (doc_nmc,
    clinic_id,
    medicine) VALUES (?,?,?)`;
  const values = [doc_nmc, clinic_id, medicine];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblFavMeds:', err);
      res.status(500).send('Error inserting data tblFavMeds', err);
    } else {
      console.log('Data inserted successfully tblFavMeds');
      res.status(200).send('Data inserted successfully tblFavMeds');
    }
  });
});

// Endpoint for inserting data into the Inv table
app.post('/setInv', (req, res) => {
  const {doc_nmc, clinic_id, investigation} = req.body;

  const sql = `INSERT INTO tblFavInvest (doc_nmc,
    clinic_id,
    investigation) VALUES (?,?,?)`;
  const values = [doc_nmc, clinic_id, investigation];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblFavInv:', err);
      res.status(500).send('Error inserting data tblFavInv', err);
    } else {
      console.log('Data inserted successfully tblFavInv');
      res.status(200).send('Data inserted successfully tblFavInv');
    }
  });
});

// Endpoint for inserting data into the Adv table
app.post('/setAdv', (req, res) => {
  const {doc_nmc, clinic_id, advice} = req.body;

  const sql = `INSERT INTO tblFavAdvices (doc_nmc,
    clinic_id,
    advice) VALUES (?,?,?)`;
  const values = [doc_nmc, clinic_id, advice];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in tblFavAdvices:', err);
      res.status(500).send('Error inserting data tblFavAdvices', err);
    } else {
      console.log('Data inserted successfully tblFavAdvices');
      res.status(200).send('Data inserted successfully tblFavAdvices');
    }
  });
});

// Endpoint for getting data from Doc table
app.post('/getDoc', (req, res) => {
  const {nmc} = req.body;
  const sql = `SELECT * FROM tblDocMaster where nmc = ?`;
  const values = [nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching docs from tblDocMaster:', err);
      res.status(500).send('Error fetching doc from tblDocMaster', err);
    } else {
      console.log('Docs fetched successfully from tblDocMaster');
      res.status(200).json(results);
    }
  });
});

// Endpoint for getting data from User table
app.post('/getUser', (req, res) => {
  const {nmc, pwd} = req.body;
  const sql = `SELECT * FROM tblUserMaster where user_id = ? and pwd = ?`;
  const values = [nmc, pwd];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblUserMaster:', err);
      res.status(500).send('Error fetching users from tblUserMaster', err);
    } else {
      console.log('Users fetched successfully from tblUserMaster');
      res.status(200).json(results);
      // console.log(nmc + pwd);
      // console.log(results);
    }
  });
});

// Endpoint for getting data from Appointment table
app.post('/getAppoint', (req, res) => {
  const {nmc} = req.body;
  const sql = `SELECT * FROM tblAppointment where doc_nmc = ?`;
  const values = [nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblAppointmert:', err);
      res.status(500).send('Error fetching users from tblAppointmert', err);
    } else {
      console.log('Users fetched successfully from tblAppointmert');
      res.status(200).json(results);
      // console.log(nmc);
      // console.log(results);
    }
  });
});

// Endpoint for inserting data into the Patient table
app.post('/getPatients', (req, res) => {
  const {nmc} = req.body;
  const sql = `SELECT * FROM tblPatient where doc_nmc = ?`;
  const values = [nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching data from tblPatients:', err);
      res.status(500).send('Error fetching data from tblPatients', err);
      console.log(nmc);
      console.log(results);
    } else {
      console.log('Users fetched successfully from tblPatients');
      res.status(200).json(results);
      // console.log(nmc);
      // console.log(results);
    }
  });
});

// Endpoint for getting data from User table
app.post('/getUsg', (req, res) => {
  const {doc_nmc, patient_id} = req.body;
  const sql = `SELECT * FROM tblUsgMaster where doc_nmc = ? and patient_id = ?`;
  const values = [doc_nmc, patient_id];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblUsgMaster:', err);
      res.status(500).send('Error fetching users from tblUsgMaster', err);
    } else {
      console.log('Users fetched successfully from tblUsgMaster');
      res.status(200).json(results);
      // console.log(nmc + pwd);
      // console.log(results);
    }
  });
});

// Endpoint for getting data from Usg table
app.post('/getObs', (req, res) => {
  const {doc_nmc, patient_id} = req.body;
  const sql = `SELECT * FROM tblObsMaster where doc_nmc = ? and patient_id = ?`;
  const values = [doc_nmc, patient_id];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblObsMaster:', err);
      res.status(500).send('Error fetching users from tblObsMaster', err);
    } else {
      console.log('Users fetched successfully from tblObsMaster');
      res.status(200).json(results);
      // console.log(nmc + pwd);
      // console.log(results);
    }
  });
});

// Endpoint for getting data from Monit table
app.post('/getMonit', (req, res) => {
  const {doc_nmc, patient_id} = req.body;
  const sql = `SELECT * FROM tblMonitMaster where doc_nmc = ? and patient_id = ?`;
  const values = [doc_nmc, patient_id];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblMonitMaster:', err);
      res.status(500).send('Error fetching users from tblMonitMaster', err);
    } else {
      console.log('Users fetched successfully from tblMonitMaster');
      res.status(200).json(results);
    }
  });
});

// Endpoint for inserting data into the Med table
app.post('/getMed', (req, res) => {
  const {doc_nmc} = req.body;
  const sql = `SELECT med_id, medicine FROM tblFavMeds where doc_nmc = ?`;
  const values = [doc_nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblFavMeds:', err);
      res.status(500).send('Error fetching users from tblFavMeds', err);
    } else {
      console.log('Users fetched successfully from tblFavMeds');
      res.status(200).json(results);
    }
  });
});

// Endpoint for inserting data into the Inv table
app.post('/getInv', (req, res) => {
  const {doc_nmc} = req.body;
  const sql = `SELECT invest_id, investigation FROM tblFavInvest where doc_nmc = ?`;
  const values = [doc_nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblFavInv:', err);
      res.status(500).send('Error fetching users from tblFavInv', err);
    } else {
      console.log('Users fetched successfully from tblFavInv');
      res.status(200).json(results);
    }
  });
});

// Endpoint for inserting data into the Adv table
app.post('/getAdv', (req, res) => {
  const {doc_nmc} = req.body;
  const sql = `SELECT advice_id, advice FROM tblFavAdvices where doc_nmc = ?`;
  const values = [doc_nmc];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching users from tblFavAdvices:', err);
      res.status(500).send('Error fetching users from tblFavAdvices', err);
    } else {
      console.log('Users fetched successfully from tblFavAdvices');
      res.status(200).json(results);
    }
  });
});

// Endpoint for updating data into the Doc table
app.post('/updateDoc', (req, res) => {
  const {
    name,
    phone,
    email,
    qualification,
    designation,
    clinicN,
    address,
    clinicP,
    docNmc,
  } = req.body;

  const sql = `UPDATE tblDocMaster SET doc_name = ?, doc_contact_id = ?, email = ?, qualification = ?, designation = ?, clinic = ?, address = ?, clinic_phn = ? WHERE nmc = ?`;
  const values = [
    name,
    phone,
    email,
    qualification,
    designation,
    clinicN,
    address,
    clinicP,
    docNmc,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error Updating tblDocMaster: ', err);
      res.status(500).send('Error Updating tblDocMaster: ', err);
    } else {
      console.log('Data Updated tblDocMaster ');
      res.status(200).send('Data Updated tblDocMaster');
    }
  });
});

// Endpoint for updating data into the Pat table
app.post('/updatePat', (req, res) => {
  const {
    pat_name,
    pat_gender,
    pat_email,
    pat_height,
    pat_dob,
    docNmc,
    patient_id,
  } = req.body;

  console.log(
    pat_name,
    pat_gender,
    pat_email,
    pat_height,
    pat_dob,
    docNmc,
    patient_id,
  );

  const sql = `UPDATE tblPatient SET pat_name = ?, pat_gender = ?, pat_email = ?, pat_height = ?, pat_dob = ? WHERE doc_nmc = ? AND patient_id = ?`;
  const values = [
    pat_name,
    pat_gender,
    pat_email,
    pat_height,
    pat_dob,
    docNmc,
    patient_id,
  ];

  console.log(sql);
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error Updating tblPatient: ', err);
      res.status(500).send('Error Updating tblPatient: ', err);
    } else {
      console.log('Data Updated tblPatient');
      res.status(200).send('Data Updated tblPatient');
    }
  });
});

// Endpoint for getting data from Presction table
app.post('/getPresc', (req, res) => {
  const {nmc, patient_id} = req.body;
  const sql = `SELECT * FROM tblPrescMaster where doc_nmc = ? and patient_id = ?`;
  const values = [nmc, patient_id];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error fetching from tblPrescMaster:', err);
      res.status(500).send('Error fetching from tblPrescMaster', err);
    } else {
      console.log('Presc fetched successfully from tblPrescMaster');
      res.status(200).json(results);
    }
  });
});

// Endpoint for deleting data into the Advice table
app.post('/DelAdv', (req, res) => {
  const {doc_nmc, advice_id} = req.body;
  const sql = `DELETE FROM tblFavAdvices WHERE doc_nmc = ? AND advice_id = ?`;
  const values = [doc_nmc, advice_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting data in tblFavAdvices:', err);
      res.status(500).send('Error deleting data tblFavAdvices', err);
    } else {
      console.log('Data deleting successfully tblFavAdvices');
      res.status(200).send('Data deleting successfully tblFavAdvices');
    }
  });
});

// Endpoint for deleting data into the Inv table
app.post('/DelInv', (req, res) => {
  const {doc_nmc, invest_id} = req.body;
  const sql = `DELETE FROM tblFavInvest WHERE doc_nmc = ? AND invest_id = ?`;
  const values = [doc_nmc, invest_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting data in tblFavInvest:', err);
      res.status(500).send('Error deleting data tblFavInvest', err);
    } else {
      console.log('Data deleting successfully tblFavInvest');
      res.status(200).send('Data deleting successfully tblFavInvest');
    }
  });
});

// Endpoint for deleting data into the Med table
app.post('/DelMed', (req, res) => {
  const {doc_nmc, med_id} = req.body;
  const sql = `DELETE FROM tblFavMeds WHERE doc_nmc = ? AND med_id = ?`;
  const values = [doc_nmc, med_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting data in tblFavMeds:', err);
      res.status(500).send('Error deleting data tblFavMeds', err);
    } else {
      console.log('Data deleting successfully tblFavMeds');
      res.status(200).send('Data deleting successfully tblFavMeds');
    }
  });
});
// Endpoint for getting data from Presc table for ANC
// app.post('/getAncPresc', (req, res) => {
//   const {doc_nmc, patient_id} = req.body;
//   const sql = `SELECT *
//   FROM tblPrescMaster
//   WHERE doc_nmc = ?
//     AND patient_id = ?
//     AND form = ?
//     AND created_dt = (
//       SELECT MAX(created_dt)
//       FROM tblPrescMaster
//       WHERE doc_nmc = ?
//         AND patient_id = ?
//         AND form = ?
//   );`;
//   const values = [doc_nmc, patient_id];
//   db.query(sql, values, (err, results) => {
//     if (err) {
//       console.error('Error fetching users from tblObsMaster:', err);
//       res.status(500).send('Error fetching users from tblObsMaster', err);
//     } else {
//       console.log('Users fetched successfully from tblObsMaster');
//       res.status(200).json(results);
//       // console.log(nmc + pwd);s
//     }
//   });
// });
///////////////////////////////////////-----------------------------------------------------------
// Endpoint for inserting data into the user table
app.post('/loginTest', (req, res) => {
  const {username, email} = req.body;

  const sql = `INSERT INTO user (username, email) VALUES (?,?)`;
  const values = [username, email];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data in User -- TEST:', err);
      res.status(500).send('Error inserting data in User -- TEST', err);
    } else {
      console.log('Data inserted successfully in User -- TEST');
      res.status(200).send('Data inserted successfully in User -- TEST');
    }
  });
});

////////////////////////////////////////----------------------------------------------------------

// Start the Express server
app.listen(port, () => {
  // const  newval="amittttassasasa|jjjkjjkjkjk|Achint|gggfgfgf";
  // const fs = require('fs');
  // const PDFDocument = require('pdfkit');

  // // Define your string value
  // const stringValue = "This is |the string value |you want to print| to the PDF.";

  // // Create a PDF document
  // const doc = new PDFDocument();

  // // Pipe the PDF content to a writable stream
  // const writeStream = fs.createWriteStream('output.pdf');
  // doc.pipe(writeStream);

  // // Write the string value to the PDF
  // doc.text(stringValue.replace(/\|/g, '\n'));

  // // Finalize the PDF document
  // doc.end();

  // // Handle errors
  // writeStream.on('finish', () => {
  //   console.log('PDF file has been created successfully.');
  // });

  // writeStream.on('error', (err) => {
  //   console.error('Error creating PDF file:', err);
  // });

  console.log(`Server is running on port ${port}`);
});
