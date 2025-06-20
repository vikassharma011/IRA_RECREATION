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
  Grid
} from "@mui/material";
import Navbar from "./navbar";
import { useLanguage } from "./languageContext";

// Multilingual Translations
const translations = {
  en: {
    title: "Current Projects",
    subtitle: "A snapshot of our ongoing development and research programs",
    tableHeadings: ["S.No", "Project", "Sponsor", "Area"],
  },
  hi: {
    title: "वर्तमान परियोजनाएं",
    subtitle: "हमारे चल रहे विकास और अनुसंधान कार्यक्रमों की एक झलक",
    tableHeadings: ["क्रमांक", "परियोजना", "प्रायोजक", "क्षेत्र"],
  },
  mr: {
    title: "सध्याचे प्रकल्प",
    subtitle: "आमच्या चालू विकास आणि संशोधन कार्यक्रमांचा आढावा",
    tableHeadings: ["क्र.", "प्रकल्प", "प्रायोजक", "क्षेत्र"],
  },
  ta: {
    title: "தற்போதைய திட்டங்கள்",
    subtitle: "நடந்து கொண்டிருக்கும் மேம்பாடு மற்றும் ஆராய்ச்சி திட்டங்கள்",
    tableHeadings: ["எண்", "திட்டம்", "நிதியாளர்", "பகுதி"],
  },
  bn: {
    title: "বর্তমান প্রকল্পসমূহ",
    subtitle: "আমাদের চলমান উন্নয়ন এবং গবেষণা কার্যক্রমের ঝলক",
    tableHeadings: ["ক্রমিক", "প্রকল্প", "প্রযোজক", "অঞ্চল"],
  },
  gu: {
    title: "ચાલુ પ્રોજેક્ટ્સ",
    subtitle: "અમારા ચાલતા વિકાસ અને સંશોધન કાર્યક્રમોની ઝલક",
    tableHeadings: ["ક્રમ", "પ્રોજેક્ટ", "પ્રાયોજક", "વિસ્તાર"],
  },
  te: {
    title: "ప్రస్తుత ప్రాజెక్టులు",
    subtitle: "మా ప్రస్తుత అభివృద్ధి మరియు పరిశోధన కార్యక్రమాల స్నాప్షాట్",
    tableHeadings: ["క్ర.", "ప్రాజెక్ట్", "ప్రాయోజకుడు", "ప్రాంతం"],
  },
  kn: {
    title: "ಪ್ರಸ್ತುತ ಯೋಜನೆಗಳು",
    subtitle: "ನಮ್ಮ ಸಾಗುತ್ತಿರುವ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸಂಶೋಧನಾ ಕಾರ್ಯಕ್ರಮಗಳ ಚಿತ್ರಣ",
    tableHeadings: ["ಕ್ರಮ", "ಯೋಜನೆ", "ಹಿತಾಸಕ್ತಿ", "ಪ್ರದೇಶ"],
  },
  pa: {
    title: "ਮੌਜੂਦਾ ਪ੍ਰੋਜੈਕਟ",
    subtitle: "ਸਾਡੇ ਚੱਲ ਰਹੇ ਵਿਕਾਸ ਅਤੇ ਖੋਜ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਇੱਕ ਝਲਕ",
    tableHeadings: ["ਕ੍ਰ.", "ਪਰੋਜੈਕਟ", "ਪ੍ਰਾਯੋਜਕ", "ਖੇਤਰ"],
  },
  ur: {
    title: "موجودہ منصوبے",
    subtitle: "ہماری جاری ترقی اور تحقیق کے پروگراموں کی ایک جھلک",
    tableHeadings: ["نمبر", "منصوبہ", "معاون", "علاقہ"],
  },
};

// Your existing project data (unchanged)
const projectData = [
  {
    sno: 1,
    project: "AWCT (Anganwadi worker's training center) continuous till 1984- (on going)",
    sponsor: "Women and child development department , Govt of M.P",
    area: "Rural",
  },
  
  {
    sno: 2,
    project: "Backward Region Grant Fund, Sponsoring Agency",
    sponsor: "Sanjay Gandhi Rural Development Pachmadhi",
    area: "Rural",
  },
  {
    sno: 3,
    project: "Capacity building of Gram Sabha Members",
    sponsor: "Panchayat and rural development department Govt.of M.P ( Sanjay Gandhi youth leadership and Rural Development training institute)",
    area: "Rural",
  },
  {
    sno: 4,
    project: "Capacity Building for women elected representative panchayat villagers",
    sponsor: "Mahila or vidth vikas govt of M.P",
    area: "Rural",
  },
  {
    sno: 5,
    project: "Skilled training and placement for youth",
    sponsor: "World vision India - Indore",
    area: "Urban",
  },
  {
    sno: 6,
    project: "Skilled training and placement for youth",
    sponsor: "World vision India - Raipur",
    area: "Urban",
  },
  {
    sno: 7,
    project: "Three level panchayati raj institutions Training for women",
    sponsor: "Mahila or vidth vikas govt of M.P",
    area: "Urban / Rural",
  },
  {
    sno: 8,
    project: "Agriculture training for youth and farmers",
    sponsor: "Farmers and local N.G.O",
    area: "Rural",
  },
  {
    sno: 9,
    project: "Assessment of Mobile Health Clinic in Madhya Pradesh",
    sponsor: "United Nation Population Fund (UNFPA)",
    area: "Rural",
  },
  {
    sno: 10,
    project: "Kisan Mitra and Kisan Did Training Program of Indore District.",
    sponsor: "Indian Society of Agribusiness Professionals (ISAP), New Delhi.",
    area: "Rural",
  },
  {
    sno: 11,
    project: "India Program of Research on Human Development carried out in 26 districts M.P.",
    sponsor: "Collaboration with NCAER New Delhi and University of Chhattisgarh covering 1900 Household.",
    area: "Urban / Rural",
  },
  {
    sno: 12,
    project: "Awareness seminars on promotion Of Communal Harmony of (M.P.)",
    sponsor: "National Foundation of Communal Harmony, New Delhi",
    area: "Urban",
  },
  {
    sno: 13,
    project: "Economic Empowerment through Watershed Management in Muher sector -A pilot project for (PAPs) of Singrauli Coalfields, District Sidhi, Madhya Pradesh",
    sponsor: "India Canada Cooperation Office (A Project of CIDA) Canada High Commission New Delhi.",
    area: "Rural",
  },
  {
    sno: 14,
    project: "Concurrent Evaluation of Sampoorna Gramin Rozgar Yojana (SGRY)",
    sponsor: "Govt. of India, Ministry of Rural Development",
    area: "Rural",
  },
  {
    sno: 15,
    project: "Concurrent Evaluation of Swarnjayanti Gram Swarojgar Yojana (SGSY) of M.P. and Chhattisgarh",
    sponsor: "Govt. of India, Ministry of Rural Development",
    area: "Rural",
  },
];

const CurrentProjects = () => {
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
            sx={{
              fontWeight: "bold",
              fontFamily: "'Dancing Script', cursive",
              mt: 4,
              color: "white",
            }}
          >
            {t.title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              mb: 4,
              color: "#cfd8dc",
            }}
          >
            {t.subtitle}
          </Typography>
        </Grid>
      </Grid>

      <Paper sx={{ overflowX: "auto", backgroundColor: "#004d40" }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="project table">
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
                  <TableCell sx={{ color: "white" }}>{row.project}</TableCell>
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

export default CurrentProjects;
