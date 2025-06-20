// PastProjects.jsx

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import Navbar from "./navbar";
import { useLanguage } from "./languageContext";

// Translations
const translations = {
  en: {
    title: "Past Projects",
    subtitle: "IRA effectively completed several study projects. Here is a list of some important study projects",
    tableHeadings: ["S.No", "Study Projects Completed", "Sponsoring Agency", "Area of Operation"],
  },
  hi: {
    title: "पूर्व परियोजनाएं",
    subtitle: "IRA ने कई अध्ययन परियोजनाएं सफलतापूर्वक पूरी कीं। यहां कुछ महत्वपूर्ण परियोजनाओं की सूची दी गई है।",
    tableHeadings: ["क्रमांक", "अध्ययन परियोजनाएं पूर्ण", "प्रायोजक एजेंसी", "कार्य क्षेत्र"],
  },
  mr: {
    title: "मागील प्रकल्प",
    subtitle: "IRA ने अनेक अभ्यास प्रकल्प यशस्वीरीत्या पूर्ण केले. काही महत्त्वाचे प्रकल्प खाली दिले आहेत.",
    tableHeadings: ["अनुक्रमांक", "अभ्यास प्रकल्प पूर्ण", "प्रायोजक संस्था", "कार्य क्षेत्र"],
  },
  ta: {
    title: "முந்தைய திட்டங்கள்",
    subtitle: "IRA பல ஆய்வு திட்டங்களை வெற்றிகரமாக நிறைவு செய்தது. சில முக்கியமான திட்டங்கள் கீழே உள்ளன.",
    tableHeadings: ["எண்", "முடிக்கப்பட்ட ஆய்வு திட்டங்கள்", "நிதியளித்த நிறுவனம்", "செயல்பாட்டு பகுதி"],
  },
  bn: {
    title: "অতীত প্রকল্পসমূহ",
    subtitle: "IRA বেশ কয়েকটি গবেষণা প্রকল্প সফলভাবে সম্পন্ন করেছে। এখানে কিছু গুরুত্বপূর্ণ প্রকল্পের তালিকা দেওয়া হলো।",
    tableHeadings: ["ক্রমিক", "সম্পন্ন গবেষণা প্রকল্প", "প্রায়োজক সংস্থা", "কার্য এলাকা"],
  },
  gu: {
    title: "ગત પ્રોજેક્ટ્સ",
    subtitle: "IRA એ અનેક અભ્યાસ પ્રોજેક્ટ સફળતાપૂર્વક પૂર્ણ કર્યા છે. અહીં કેટલીક મહત્વપૂર્ણ પ્રોજેક્ટ્સની યાદી છે.",
    tableHeadings: ["ક્રમ", "પૂર્ણ થયેલ અભ્યાસ પ્રોજેક્ટ્સ", "પ્રાયોજક સંસ્થા", "કાર્યક્ષેત્ર"],
  },
  te: {
    title: "గత ప్రాజెక్టులు",
    subtitle: "IRA అనేక అధ్యయన ప్రాజెక్టులను విజయవంతంగా పూర్తి చేసింది. కొన్ని ముఖ్యమైన ప్రాజెక్టుల జాబితా ఇక్కడ ఉంది.",
    tableHeadings: ["క్రమ సంఖ్య", "పూర్తయిన అధ్యయన ప్రాజెక్టులు", "ప్రాయోజక సంస్థ", "ఆపరేషన్ ప్రాంతం"],
  },
  kn: {
    title: "ಹಳೆಯ ಯೋಜನೆಗಳು",
    subtitle: "IRA ಹಲವಾರು ಅಧ್ಯಯನ ಯೋಜನೆಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿದೆ. ಇಲ್ಲಿವೆ ಕೆಲವು ಪ್ರಮುಖ ಯೋಜನೆಗಳು.",
    tableHeadings: ["ಕ್ರ.ಸಂ", "ಪೂರ್ಣಗೊಂಡ ಅಧ್ಯಯನ ಯೋಜನೆಗಳು", "ಹಿಂಬಾಲಕ ಸಂಸ್ಥೆ", "ಕಾರ್ಯ ಪ್ರದೇಶ"],
  },
  pa: {
    title: "ਪਿਛਲੇ ਪ੍ਰੋਜੈਕਟ",
    subtitle: "IRA ਨੇ ਕਈ ਅਧਿਐਨ ਪ੍ਰੋਜੈਕਟ ਸਫਲਤਾਪੂਰਕ ਪੂਰੇ ਕੀਤੇ ਹਨ। ਇੱਥੇ ਕੁਝ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰੋਜੈਕਟਾਂ ਦੀ ਸੂਚੀ ਦਿੱਤੀ ਗਈ ਹੈ।",
    tableHeadings: ["ਕ੍ਰਮ", "ਪੂਰੇ ਹੋਏ ਅਧਿਐਨ ਪ੍ਰੋਜੈਕਟ", "ਪ੍ਰਾਯੋਜਕ ਏਜੰਸੀ", "ਕਾਰਜ ਖੇਤਰ"],
  },
  ur: {
    title: "ماضی کے منصوبے",
    subtitle: "IRA نے کئی تحقیقی منصوبے کامیابی سے مکمل کیے۔ یہاں کچھ اہم منصوبوں کی فہرست دی گئی ہے۔",
    tableHeadings: ["نمبر", "مکمل شدہ تحقیقی منصوبے", "معاون ادارہ", "عملیاتی علاقہ"],
  },
};

const projectData = [
  {
    sno: 1,
    project: `Socio-Economic Study and Evaluation of Pilot Intensive Rural Employment Project (PIREP) of two Development Blocks.\n(i) Alirajpur (M.P.)\n(ii) Bukhia (Rajasthan)`,
    sponsor: "Ministry of Agriculture, Department of Rural Development, Govt. of India, New Delhi.",
    area: "Rural",
  },
  {
    sno: 2,
    project: "Urban Housing in Madhya Pradesh, A case study in five cities Indore, Bhopal, Raipur, Bhilai and Durg.",
    sponsor: "Department of Housing and Environment, Govt. of M.P., Bhopal.",
    area: "Urban",
  },
  {
    sno: 3,
    project: "New Horizons of Rural Development - Planning for the poor.",
    sponsor: "IRA Research and Development.",
    area: "Rururban",
  },
  {
    sno: 4,
    project: "Fight Against Hunger, Ignorance and Poverty (FAHIP).",
    sponsor: "IRA Research and Development.",
    area: "Rururban",
  },
  {
    sno: 5,
    project: "A survey of interaction between Administration and Tribals in Bijadandi T.D. Block Mandla district.",
    sponsor: "Ministry of Home Affairs (Tribal welfare), Govt. of India, New Delhi.",
    area: "Rural",
  },
  {
    sno: 6,
    project: "Tribal Employment and Linkage pattern - A case study of Mining Area of M.P.",
    sponsor: "Indian Council of Social Science Research (ICSSR), New Delhi.",
    area: "Rural",
  },
  {
    sno: 7,
    project: "Study of Social Inputs in Shajapur Area Development Project - 8 Development Blocks.",
    sponsor: "UNICEF and Rural Development Department, Govt. of M.P.",
    area: "Rural",
  },
  {
    sno: 8,
    project: "Role of women in the changing Economic Landscape - A case study in the Bhilai sub-region of Chhattisgarh.",
    sponsor: "Indian Council of Social Science Research (ICSSR), New Delhi.",
    area: "Rural",
  },
  {
    sno: 9,
    project: "Socio-Economic study of areas coming under submergence of Medium and Minor projects - Chirpani (Rajnandgaon).",
    sponsor: "Irrigation Department, Govt. of M.P., for IBRD.",
    area: "Rural",
  },
  {
    sno: 10,
    project: "Socio-Economic study of area coming under submergence of medium and minor project - Gaumukh (Guna).",
    sponsor: "Irrigation Department, Govt. of M.P., for IBRD.",
    area: "Rural",
  },
  {
    sno: 11,
    project: "Developmental problems & Perspectives - SADA Durg - Bhilai: A Rural urban Micro Region - A case study.",
    sponsor: "SADA Durg & IRA Bhopal.",
    area: "Rururban",
  },
];

const PastProjects = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <Box sx={{ backgroundColor: "#004d40", color: "white", minHeight: "100vh", p: 4 }}>
      <Navbar />
      <Grid container justifyContent="center" sx={{ my: 4 }}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", fontFamily: "'Dancing Script', cursive", mt: 4 }}
          >
            {t.title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontFamily: "'Dancing Script', cursive", mb: 4, color: "#cfd8dc" }}
          >
            {t.subtitle}
          </Typography>
        </Grid>
      </Grid>

      <Paper sx={{ overflowX: "auto", backgroundColor: "#004d40" }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="past projects table">
            <TableHead sx={{ backgroundColor: "#00796b" }}>
              <TableRow>
                {t.tableHeadings.map((heading, index) => (
                  <TableCell key={index} sx={{ color: "white", fontWeight: "bold" }}>
                    {heading}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {projectData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ backgroundColor: index % 2 === 0 ? "#00695c" : "#004d40" }}
                >
                  <TableCell sx={{ color: "white" }}>{row.sno}</TableCell>
                  <TableCell sx={{ color: "white", whiteSpace: "pre-line" }}>{row.project}</TableCell>
                  <TableCell sx={{ color: "white" }}>{row.sponsor}</TableCell>
                  <TableCell sx={{ color: "white" }}>{row.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default PastProjects;
