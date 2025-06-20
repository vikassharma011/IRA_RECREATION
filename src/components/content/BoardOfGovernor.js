import React from "react";
import { useLanguage } from "./languageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import Navbar from "./navbar";

const translations = {
  en: {
    title: "About Institute of Regional Analysis",
    content: [
      "Institute of Regional Analysis, established in 1972 is a registered under M.P. firms & Societies Act as a voluntary non-profit research and action organization aiming at advancing applied research in the fields of rural development, regional analysis and planning based on in-depth analysis of socio-economic problems particularly at the micro level.",
      "The Institute seeks to analyze important economic and social facts using such methodology and techniques as would enable its findings carry conviction to all those who are concerned with the policy formulation and implementation of development programs.",
      "Institute of Regional Analysis is also engaged in operational planning for rural development with major emphasis on the role of rural women and their motivation for rural development.",
      "For this purpose IRA has created a demonstration cum-training unit at Palaskhedi, District Betul for innovative feed and fodder within available local resources, more efficient and optimum use of livestock as also of manpower for better use of overall energy resources and their fuller utilization.",
      "The Institute is governed by a body of professionals engaged in academic and research activities and subject matter specialists in the fields of regional planning, micro level planning, behavioral sciences, sociology, geography and public-administration."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  hi: {
    title: "क्षेत्रीय विश्लेषण संस्थान के बारे में",
    content: [
      "क्षेत्रीय विश्लेषण संस्थान, 1972 में स्थापित, एम.पी. फर्म्स एवं सोसाइटीज़ अधिनियम के तहत पंजीकृत एक स्वैच्छिक गैर-लाभकारी अनुसंधान एवं क्रियान्वयन संगठन है...",
      "संस्थान महत्वपूर्ण आर्थिक और सामाजिक तथ्यों का विश्लेषण करने के लिए ऐसी विधि और तकनीकों का उपयोग करता है...",
      "संस्थान ग्रामीण विकास की परिचालन योजना में भी संलग्न है...",
      "इस उद्देश्य के लिए IRA ने पलासखेड़ी, जिला बेतुल में एक प्रदर्शनी एवं प्रशिक्षण इकाई स्थापित की है...",
      "संस्थान का संचालन एक पेशेवरों के समूह द्वारा किया जाता है जो विभिन्न क्षेत्रों में विशेषज्ञ हैं।"
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  mr: {
    title: "प्रादेशिक विश्लेषण संस्थेबद्दल",
    content: [
      "प्रादेशिक विश्लेषण संस्था 1972 मध्ये स्थापन करण्यात आली असून ती एक स्वयंसेवी, नाफा न मिळवणारी संस्था आहे...",
      "ही संस्था आर्थिक व सामाजिक वास्तवाचे विश्लेषण करून धोरण निर्मितीस मदत करते...",
      "ग्रामीण महिलांच्या सहभागावर विशेष भर देऊन ग्रामीण विकासासाठी योजना तयार करणे हे संस्थेचे मुख्य उद्दिष्ट आहे...",
      "पलासखेळी, बेतुल येथे एक प्रशिक्षण युनिट स्थापन करण्यात आले आहे...",
      "संस्था विविध क्षेत्रातील तज्ज्ञ व संशोधकांच्या टीमने चालवली जाते."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  ta: {
    title: "மண்டல பகுப்பாய்வு நிறுவனம் பற்றி",
    content: [
      "மண்டல பகுப்பாய்வு நிறுவனம் 1972 ஆம் ஆண்டு நிறுவப்பட்ட ஒரு தன்னார்வ, லாப நோக்கமில்லாத ஆராய்ச்சி நிறுவனம்...",
      "இது சமூக மற்றும் பொருளாதார உண்மைகளை பகுப்பாய்வு செய்யும் முறைகளை பயன்படுத்துகிறது...",
      "கிராமப்புற மகளிரின் பங்கு மிக முக்கியமானது என்றும் திட்டமிடல் இதை மையமாகக் கொண்டு செய்யப்படுகிறது...",
      "IRA நிறுவனம் பலாஸ்கேடி, பெத்துல் மாவட்டத்தில் ஒரு பயிற்சி யூனிட் உருவாக்கியுள்ளது...",
      "இந்நிறுவனம் திட்டமிடல், மைக்ரோ திட்டமிடல், சமூகவியல் மற்றும் நிர்வாகம் ஆகியவற்றில் நிபுணர்களால் நடத்தப்படுகிறது."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  bn: {
    title: "আঞ্চলিক বিশ্লেষণ সংস্থার সম্পর্কে",
    content: [
      "আঞ্চলিক বিশ্লেষণ সংস্থা ১৯৭২ সালে প্রতিষ্ঠিত একটি স্বেচ্ছাসেবী গবেষণা প্রতিষ্ঠান...",
      "এই সংস্থা অর্থনৈতিক ও সামাজিক বাস্তবতাগুলি বিশ্লেষণ করে উন্নয়ন পরিকল্পনা তৈরিতে সহায়তা করে...",
      "গ্রামীণ মহিলাদের ভূমিকা বিশেষভাবে গুরুত্ব দেওয়া হয়...",
      "IRA পালাসখেদি, বেতুল জেলায় একটি প্রশিক্ষণ ইউনিট গঠন করেছে...",
      "এই সংস্থা বিভিন্ন বিষয়ে বিশেষজ্ঞদের দ্বারা পরিচালিত হয়।"
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  gu: {
    title: "પ્રાંતીય વિશ્લેષણ સંસ્થાની માહિતી",
    content: [
      "પ્રાંતીય વિશ્લેષણ સંસ્થા 1972 માં સ્થાપિત થયેલ એક ગેરલાભકારી સંસ્થા છે...",
      "આ સંસ્થા આર્થિક અને સામાજિક મુદ્દાઓના વિશ્લેષણ માટે જુદી જુદી પદ્ધતિઓનો ઉપયોગ કરે છે...",
      "ગ્રામ્ય મહિલાઓની ભૂમિકા મહત્વપૂર્ણ ગણવામાં આવે છે...",
      "IRA એ બેતૂલ જિલ્લાના પાલાસખેડીમાં ટ્રેનિંગ યુનિટ સ્થાપી છે...",
      "સંસ્થાનું સંચાલન વિવિધ ક્ષેત્રના નિષ્ણાતો દ્વારા કરવામાં આવે છે."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  te: {
    title: "ప్రాంతీయ విశ్లేషణ సంస్థ గురించి",
    content: [
      "ప్రాంతీయ విశ్లేషణ సంస్థ 1972 లో స్థాపించబడింది, ఇది లాభాపేక్షలేని స్వచ్ఛంద సంస్థ...",
      "సామాజిక మరియు ఆర్థిక అంశాలను విశ్లేషించే విధానాలను ఉపయోగిస్తారు...",
      "గ్రామీణ మహిళల పాత్ర ముఖ్యంగా దృష్టిలో ఉంచబడుతుంది...",
      "IRA పళస్కేడి, బేతుల్ జిల్లా వద్ద ట్రైనింగ్ యూనిట్ ఏర్పాటు చేసింది...",
      "సంస్థను ప్రొఫెషనల్స్ మరియు నిపుణులు నిర్వహిస్తున్నారు."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  kn: {
    title: "ಪ್ರಾದೇಶಿಕ ವಿಶ್ಲೇಷಣಾ ಸಂಸ್ಥೆಯ ಬಗ್ಗೆ",
    content: [
      "ಪ್ರಾದೇಶಿಕ ವಿಶ್ಲೇಷಣಾ ಸಂಸ್ಥೆ 1972ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದ ಸ್ವಯಂ ಸೇವಾ ಸಂಸ್ಥೆ...",
      "ಸಂಸ್ಥೆ ಆರ್ಥಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ವಿಷಯಗಳ ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತದೆ...",
      "ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರ ಪಾತ್ರಕ್ಕೆ ಹೆಚ್ಚಿನ ಮಹತ್ವ ನೀಡಲಾಗಿದೆ...",
      "ಪಲಾಸ್ಕೆಡಿ, ಬೇತೂಲ್ ಜಿಲ್ಲೆಯಲ್ಲಿ ತರಬೇತಿ ಘಟಕ ಸ್ಥಾಪಿಸಲಾಗಿದೆ...",
      "ವಿಭಿನ್ನ ಕ್ಷೇತ್ರಗಳ ತಜ್ಞರಿಂದ ಸಂಸ್ಥೆಯು ನಿರ್ವಹಣೆಯಾಗುತ್ತದೆ."
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  pa: {
    title: "ਖੇਤਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਸੰਸਥਾ ਬਾਰੇ",
    content: [
      "ਖੇਤਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਸੰਸਥਾ 1972 ਵਿੱਚ ਸਥਾਪਤ ਕੀਤੀ ਗਈ ਇੱਕ ਗੈਰ-ਮੁਨਾਫਾ ਸੰਸਥਾ ਹੈ...",
      "ਇਹ ਸੰਸਥਾ ਆਰਥਿਕ ਤੇ ਸਮਾਜਿਕ ਅੰਕੜਿਆਂ ਦੀ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦੀ ਹੈ...",
      "ਇਹ ਵਿੱਚ ਪਿੰਡ ਦੀਆਂ ਔਰਤਾਂ ਦੀ ਭੂਮਿਕਾ ਮਹੱਤਵਪੂਰਨ ਹੈ...",
      "ਪਲਾਸਖੇੜੀ, ਬੇਤੂਲ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਇੱਕ ਟਰੇਨਿੰਗ ਯੂਨਿਟ ਸਥਾਪਤ ਕੀਤੀ ਗਈ ਹੈ...",
      "ਇਸ ਸੰਸਥਾ ਨੂੰ ਵਿਭਿੰਨ ਖੇਤਰਾਂ ਦੇ ਮਾਹਰਾਂ ਵੱਲੋਂ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ।"
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
  ur: {
    title: "علاقائی تجزیاتی ادارہ کے بارے میں",
    content: [
      "علاقائی تجزیاتی ادارہ 1972 میں قائم ہوا، یہ ایک غیر منافع بخش تنظیم ہے...",
      "ادارہ معاشی اور سماجی حقائق کا تجزیہ کرتا ہے...",
      "دیہی خواتین کے کردار پر خاص زور دیا جاتا ہے...",
      "IRA نے پلاسخیدی، ضلع بیتول میں تربیتی یونٹ قائم کیا ہے...",
      "یہ ادارہ مختلف شعبوں کے ماہرین کی نگرانی میں چلایا جاتا ہے۔"
    ],
    image: "https://www.iraindia.co.in/Images/logo.jpg",
  },
};

const boardData = [
  { no: "1.", name: "Shri B.M Bharti", position: "Chairman" },
  { no: "2.", name: "Mr. S. C. Jain", position: "Treasurer", highlight: true },
  { no: "3.", name: "Dr. (Mrs) Sulbha Khanna", position: "Member" },
  { no: "4.", name: "Mr. Virendra Khare", position: "Member", highlight: true },
  { no: "5.", name: "Mr. Priyanath Tripathi", position: "Member" },
  { no: "6.", name: "Dr. Advity Goswami", position: "Member", highlight: true },
  {
    no: "7.",
    name: "Shri Ajay Kumar",
    position: "Executive Director & Member Secretary of IRA",
  },
];

const Section = ({ title, content, image }) => (
  <Grid item xs={12} md={8} sx={{ mb: 4 }}>
    <Box
      sx={{
        backgroundColor: "#00695c",
        borderRadius: 2,
        p: 3,
        mb: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          marginBottom: 16,
          border: "4px solid #fff",
          background: "#fff",
        }}
      />
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontFamily: "'Dancing Script', cursive",
          color: "white",
        }}
      >
        {title}
      </Typography>
      {content.map((para, idx) => (
        <Typography
          key={idx}
          variant="body1"
          align="justify"
          sx={{
            color: "#cfd8dc",
            mb: 2,
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {para}
        </Typography>
      ))}
    </Box>
  </Grid>
);

const BoardOfGovernorsTable = () => {

  const { language } = useLanguage();
    
      // Translations me se current language ka content le lo
  const fullProfile = translations[language] || translations["en"] || translations["hi"] || translations["mr"] || translations["ta"] || translations["bn"] || translations["gu"] || translations["te"] || translations["kn"] || translations["pa"] || translations["ur"];
  

  return (
    <Box sx={{ backgroundColor: "#004d40", color: "white", minHeight: "100vh", p: 4 }}>
      <Navbar />

      <Grid container justifyContent="center" sx={{ my: 4 }}>
         <Section {...fullProfile} />
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
            Board of Governors
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
            Our esteemed members and office holders
          </Typography>
        </Grid>
      </Grid>

      <Paper sx={{ overflowX: "auto", backgroundColor: "#004d40" }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="board table">
            <TableHead sx={{ backgroundColor: "#00796b" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>S.No.</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Office Held</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boardData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: row.highlight ? "#e8f5e9" : index % 2 === 0 ? "#00695c" : "#004d40",
                    color: row.highlight ? "black" : "white",
                  }}
                >
                  <TableCell sx={{ color: row.highlight ? "black" : "white" }}>{row.no}</TableCell>
                  <TableCell sx={{ color: row.highlight ? "black" : "white" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: row.highlight ? "black" : "white" }}>{row.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default BoardOfGovernorsTable;
