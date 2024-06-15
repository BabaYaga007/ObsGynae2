/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';

import {AncPresc} from './AncPresc';
import {GynaePresc} from './GynaePresc';
import {InfyPresc} from './InfyPresc';
import {SurgPresc} from './SurgPresc';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import mustache from 'mustache';
function errorCB(err) {
  console.log('ha ha huhuSQL Error: ' + err.message);
}

const fetchDocDetails = callback => {
  // db.transaction(tx => {
  //   tx.executeSql(
  //     'SELECT * FROM tblDocMaster where nmc = ?',
  //     [global.nmc],
  //     (tx, results) => {
  //       const len = results.rows.length;
  //       if (len > 0) {
  //         const clinicAdd = results.rows.item(0).address;
  //         const prof_qual = results.rows.item(0).qualification;
  //         const clinicName = results.rows.item(0).clinic;
  //         const clinicPN = results.rows.item(0).clinic_phn;
  //         const designation = results.rows.item(0).designation;
  //         callback({clinicAdd, prof_qual, clinicName, clinicPN, designation});
  //       } else {
  //         console.log('Cannot find Doc Details for PDF');
  //         callback(null);
  //       }
  //     },
  //     errorCB,
  //   );
  // });
};

let prof_qual, clinicAdd, clinicName, clinicPN, designation;
let clinicLogo = require('../../../assets/images/gyno.png');

const GeneratePdf = async Presc_data => {
  //   const [pdfFilePath, setPdfFilePath] = useState(null);
  let currentDate = new Date();
  // Your HTML template with placeholders for variables

  console.log(global.nmc);
  const [docDetails, setDocDetails] = useState(null);

  useEffect(() => {
    fetchDocDetails(setDocDetails);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  let htmlTemplate, templateVariables;

  if (Presc_data.form === 'ANC') {
    htmlTemplate = AncPresc;
    // Variables to be filled into the template
    templateVariables = {
      Dr_Full_Name: global.gDocName,
      Clinic_Logo: clinicLogo,
      Professional_Qualification: prof_qual,
      Clinic_Name: clinicName,
      Clinic_Address: clinicAdd,
      Registration_Number: global.gDocNmc,
      Clinic_PhoneNumber: clinicPN,
      Designation_Hospital_Affiliation: designation,
      Patient_Name: Presc_data.patName,
      Age: Presc_data.patAge,
      Sex: 'Female',
      Height: Presc_data.height,
      Vitals_Table: '',
      Date: currentDate.toDateString(),
      Presenting_Complaints: Presc_data.presCompl,
      Medical_History: Presc_data.medHistory,
      Physical_Examination: Presc_data.phyExam,
      Provisional_Diagnosis: Presc_data.provDiag,
      // Investigations_Records: Presc_data.patName,
      Medicine: Presc_data.medicine1,
      // Frequency: ,
      // Duration: ,
      Investigations_Advised: Presc_data.favInvest,
      Advise: Presc_data.favAdvise,
      Follow_Up: Presc_data.followDate,
      //   Sign: require('../../assets/images/Wonho-Signature.png'),
      Gravida: Presc_data.gravida,
      Year: Presc_data.birth_year,
      Gestational_Age: Presc_data.parity,
      Mode_of_Birth: Presc_data.mode_birth,
      Outcome: Presc_data.outcome,
      Baby: Presc_data.baby,
      Birth_Weight: Presc_data.birth_wt,
      Comments: Presc_data.comments,
      USG_Date: Presc_data.usgDate,
      POG: Presc_data.pog,
      USG_Summary: Presc_data.usgSum,
      Placenta: Presc_data.placenta,
      Liquor: Presc_data.liquor,
      Ante_Date: Presc_data.anteMDate,
      AntePOG: Presc_data.antePog,
      Wt: Presc_data.anteWt,
      BP: Presc_data.antePE,
      Pallor: Presc_data.antePallor,
      Pedal_Edema: Presc_data.antePE,
      O_E: Presc_data.anteOE,
      BG: Presc_data.bg,
      Rubella_IgG: Presc_data.rubella,
      Husband_BG: Presc_data.husbBg,
      HPLC: Presc_data.hplc,
      ICT1: Presc_data.ict1,
      HIV: Presc_data.hiv,
      ICT2: Presc_data.ict2,
      HBsAg: Presc_data.hbsag,
      ICT3: Presc_data.ict3,
      HCV: Presc_data.hcv,
      Anti_D: Presc_data.antiD,
      VDRL: Presc_data.vdrl,
      Hb1: Presc_data.hb1,
      Hb2: Presc_data.hb2,
      Hb3: Presc_data.hb3,
      Hb1D: Presc_data.hb1D,
      Hb2D: Presc_data.hb2D,
      Hb3D: Presc_data.hb3D,
      Urine_Culture: Presc_data.urine,
      Td: Presc_data.td,
      ICT1D: Presc_data.ict1Date,
      ICT2D: Presc_data.ict2Date,
      ICT3D: Presc_data.ict3Date,
      GTT1: Presc_data.gtt1,
      GTT2: Presc_data.gtt2,
      GTT3: Presc_data.gtt3,
      GTT1D: Presc_data.gtt1D,
      GTT2D: Presc_data.gtt2D,
      GTT3D: Presc_data.gtt3D,
      TDaP: Presc_data.tDaP,
      Fluvac: Presc_data.fluvac,
      TSH3: Presc_data.tsh3,
      TSH1: Presc_data.tsh1,
      TSH2: Presc_data.tsh2,
      TSH3D: Presc_data.tsh3D,
      TSH1D: Presc_data.tsh1D,
      TSH2D: Presc_data.tsh2D,
      Dual_Screen: Presc_data.dualS,
      Quad_Screen: Presc_data.quadS,
      NIPT: Presc_data.nipt,
    };
  } else if (Presc_data.form === 'PRSC') {
    htmlTemplate = GynaePresc;
    // Variables to be filled into the template
    templateVariables = {
      Dr_Full_Name: global.gDocName,
      Clinic_Logo: clinicLogo,
      Professional_Qualification: prof_qual,
      Clinic_Name: clinicName,
      Clinic_Address: clinicAdd,
      Registration_Number: global.gDocNmc,
      Clinic_PhoneNumber: clinicPN,
      Designation_Hospital_Affiliation: designation,
      Patient_Name: Presc_data.patName,
      Age: Presc_data.patAge,
      Sex: 'Female',
      Height: Presc_data.height,
      Vitals_Table: Presc_data.vitalsTable,
      Date: currentDate.toDateString(),
      Presenting_Complaints: Presc_data.presCompl,
      Medical_History: Presc_data.medHistory,
      Physical_Examination: Presc_data.phyExam,
      Provisional_Diagnosis: Presc_data.provDiag,
      // Investigations_Records: Presc_data.patName,
      Medicine: Presc_data.medicine1,
      // Frequency: ,
      // Duration: ,
      Investigations_Advised: Presc_data.favInvest,
      Advise: Presc_data.favAdvise,
      Follow_Up: Presc_data.followDate,
      //   Sign: require('../../../assets/images/Wonho-Signature.png'),
    };
  } else if (Presc_data.form === 'SURG') {
    htmlTemplate = SurgPresc;
    // Variables to be filled into the template
    templateVariables = {
      Dr_Full_Name: global.gDocName,
      Clinic_Logo: clinicLogo,
      Professional_Qualification: prof_qual,
      Clinic_Name: clinicName,
      Clinic_Address: clinicAdd,
      Registration_Number: global.gDocNmc,
      Clinic_PhoneNumber: clinicPN,
      Designation_Hospital_Affiliation: designation,
      Patient_Name: Presc_data.patName,
      Age: Presc_data.patAge,
      Sex: 'Female',
      Height: Presc_data.height,
      Vitals_Table: Presc_data.vitalsTable,
      Date: currentDate.toDateString(),
      Presenting_Complaints: Presc_data.presCompl,
      Medical_History: Presc_data.medHistory,
      Physical_Examination: Presc_data.phyExam,
      Provisional_Diagnosis: Presc_data.provDiag,
      // Investigations_Records: Presc_data.patName,
      Medicine: Presc_data.medicine1,
      // Frequency: ,
      // Duration: ,
      Investigations_Advised: Presc_data.favInvest,
      Advise: Presc_data.favAdvise,
      Follow_Up: Presc_data.followDate,
      //   Sign: require('../../assets/images/Wonho-Signature.png'),
      surg: Presc_data.surgPro,
      intra: Presc_data.surgFind,
    };
  } else if (Presc_data.form === 'INF') {
    htmlTemplate = InfyPresc;
    // Variables to be filled into the template
    templateVariables = {
      Dr_Full_Name: global.gDocName,
      Clinic_Logo: clinicLogo,
      Professional_Qualification: prof_qual,
      Clinic_Name: clinicName,
      Clinic_Address: clinicAdd,
      Registration_Number: global.gDocNmc,
      Clinic_PhoneNumber: clinicPN,
      Designation_Hospital_Affiliation: designation,
      Patient_Name: Presc_data.patName,
      Age: Presc_data.patAge,
      Sex: 'Female',
      Height: Presc_data.height,
      Vitals_Table: Presc_data.vitalsTable,
      Date: currentDate.toDateString(),
      Presenting_Complaints: Presc_data.presCompl,
      Medical_History: Presc_data.medHistory,
      Physical_Examination: Presc_data.phyExam,
      Provisional_Diagnosis: Presc_data.provDiag,
      // Investigations_Records: Presc_data.patName,
      Medicine: Presc_data.medicine1,
      // Frequency: ,
      // Duration: ,
      Investigations_Advised: Presc_data.favInvest,
      Advise: Presc_data.favAdvise,
      Follow_Up: Presc_data.followDate,
      //   Sign: require('../../assets/images/Wonho-Signature.png'),
      Date1: Presc_data.femPDate,
      Date2: Presc_data.femPDate,
      Date3: Presc_data.fUDate,
      Date4: Presc_data.fEBDate,
      Date5: Presc_data.fHDate,
      Date6: Presc_data.hystDate,
      Date7: Presc_data.lapDate,
      Date8: Presc_data.husbDate,
      Date9: Presc_data.sDate,
      Date10: Presc_data.hUsgDate,
      Date11: Presc_data.hDfiDate,
      Date12: Presc_data.kDate,
      HB: Presc_data.fHb,
      BG: Presc_data.fBG,
      HBG: Presc_data.hBG,
      BS: Presc_data.fBS,
      HBS: Presc_data.hBS,
      HBsAg: Presc_data.fHbsAg,
      HHBsAg: Presc_data.hHBsAg,
      HIV: Presc_data.fHIV,
      HHIV: Presc_data.hHIV,
      VDRL: Presc_data.fVDRL,
      HVDRL: Presc_data.hVDRL,
      LH: Presc_data.fLH,
      FSH: Presc_data.fFSH,
      TSH: Presc_data.fTSH,
      E2: Presc_data.fE2,
      AMH: Presc_data.fAMH,
      Prol: Presc_data.fPro,
      USG: Presc_data.fUsg,
      EB: Presc_data.fEB,
      HSG: Presc_data.fHsg,
      Hyster: Presc_data.hyst,
      Laparo: Presc_data.lap,
      semen: Presc_data.semen,
      hUsg: Presc_data.hUsg,
      dfi: Presc_data.hDfi,
      karyo: Presc_data.karyo,
    };
  }

  // Use Mustache to render the template with variables
  const renderedHtml = mustache.render(htmlTemplate, templateVariables);

  // Configure PDF options
  const options = {
    html: renderedHtml,
    fileName: 'FirstFlow3',
    directory: 'Documents',
  };

  try {
    const pdf = await RNHTMLtoPDF.convert(options);
    // setPdfFilePath(pdf.filePath);
    console.log(pdf.filePath);
    return pdf.filePath;
  } catch (error) {
    console.error('Error generating PDF:', error);
  }

  //   return pdfFilePath;
};

export default GeneratePdf;
