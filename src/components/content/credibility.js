import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardMedia,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { useLanguage } from "./languageContext";
import credibilityImage from "./../images/credibility.jpg";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#004d40",
    },
    background: {
      default: "#00251a",
      paper: "#003824",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Dancing Script", "cursive"].join(","),
  },
});

const translations = {
 en: {
    title: "Credibility",
    description:
      "IRA seeks study projects not merely to collect and analyse important economic and social facts, but to do so by using such methodology and techniques that make its findings carry conviction with all those who are concerned with policy formulation and development programs. The Institute avoids recommendations on public policy, but it does not avoid objective analysis. With this objective in view the Institute had established credibility about its purpose and research capability with the governments, semi government bodies and international organizations. Some of the major project sponsoring agencies, which have utilized the services of the Institute, include:",
    sponsors: [
      "Ford Foundation",
      "UNICEF",
      "IDRC",
      "DANIDA",
      "World Bank",
      "UNFPA",
      "ICCO",
      "Government of India",
      "ICSSR",
      "NIUA",
      "NABARD",
      "Govt. of Madhya Pradesh etc.",
    ],
  },
  hi: {
    title: "विश्वसनीयता",
    description:
      "IRA केवल महत्वपूर्ण आर्थिक और सामाजिक तथ्यों को एकत्र करने और विश्लेषण करने के लिए अध्ययन परियोजनाएं नहीं करता, बल्कि ऐसी पद्धतियों और तकनीकों का उपयोग करके करता है जिससे इसकी खोजें नीति निर्माण और विकास कार्यक्रमों से जुड़े सभी लोगों को विश्वास दिला सकें। संस्थान सार्वजनिक नीति पर सिफारिशों से बचता है, लेकिन उद्देश्यपूर्ण विश्लेषण से नहीं। इस उद्देश्य के साथ संस्थान ने सरकारों, अर्ध-सरकारी निकायों और अंतर्राष्ट्रीय संगठनों के साथ अपने उद्देश्य और अनुसंधान क्षमता के प्रति विश्वसनीयता स्थापित की है। कुछ प्रमुख परियोजना प्रायोजक एजेंसियां जिन्होंने संस्थान की सेवाओं का उपयोग किया है, उनमें शामिल हैं:",
    sponsors: [
      "फोर्ड फाउंडेशन",
      "यूनिसेफ",
      "आईडीआरसी",
      "डेनिडा",
      "वर्ल्ड बैंक",
      "यूएनएफपीए",
      "आईसीसीओ",
      "भारत सरकार",
      "आईसीएसएसआर",
      "एनआईयूए",
      "नाबार्ड",
      "मध्यप्रदेश सरकार आदि।",
    ],
  },
  mr: {
    title: "विश्वसनीयता",
    description:
      "IRA केवळ महत्त्वाचे आर्थिक व सामाजिक तथ्य गोळा व विश्लेषण करण्यासाठीच नव्हे, तर अशा पद्धतीने व तंत्रांचा वापर करून करतो जेणेकरून त्याचे निष्कर्ष धोरण तयार करणाऱ्यांना विश्वास देतात. संस्थान सार्वजनिक धोरणांवरील शिफारसींपासून दूर राहतो, पण वस्तुनिष्ठ विश्लेषण टाळत नाही. या उद्दिष्टासाठी संस्थेने सरकारे, अर्ध-शासकीय संस्था व आंतरराष्ट्रीय संघटनांमध्ये आपल्या उद्देश व संशोधन क्षमतेसंदर्भात विश्वासार्हता निर्माण केली आहे. काही प्रमुख प्रायोजक संस्था ज्या संस्थेच्या सेवांचा उपयोग करतात, त्या म्हणजे:",
    sponsors: [
      "फोर्ड फाउंडेशन",
      "यूनिसेफ",
      "IDRC",
      "DANIDA",
      "वर्ल्ड बँक",
      "UNFPA",
      "ICCO",
      "भारत सरकार",
      "ICSSR",
      "NIUA",
      "नाबार्ड",
      "मध्य प्रदेश शासन इत्यादी",
    ],
  },
  ta: {
    title: "நம்பகத்தன்மை",
    description:
      "IRA முக்கியமான பொருளாதார மற்றும் சமூக உண்மைகளை மட்டுமே சேகரித்து பகுப்பாய்வு செய்யும் திட்டங்களை மட்டுமல்லாமல், அதன் முடிவுகள் கொள்கை உருவாக்கத்திலும் திட்ட தயாரிப்பிலும் உள்ளவர்களுக்கு நம்பிக்கை ஏற்படும்படி செய்யும் முறைகளைப் பயன்படுத்துகிறது. நிறுவனத்துக்கு நம்பிக்கையூட்டும் திறன் அரசுகள், அரை அரசு நிறுவனங்கள் மற்றும் சர்வதேச அமைப்புகளுடன் நிறுவப்பட்டுள்ளது. இந்த நிறுவனத்தின் சேவைகளை பயன்படுத்திய முக்கிய நிறுவனங்கள்:",
    sponsors: [
      "ஃபோர்டு பவுண்டேஷன்",
      "யூனிசெஃப்",
      "IDRC",
      "DANIDA",
      "உலக வங்கி",
      "UNFPA",
      "ICCO",
      "இந்திய அரசு",
      "ICSSR",
      "NIUA",
      "NABARD",
      "மத்திய பிரதேச அரசு மற்றும் பல",
    ],
  },
  bn: {
    title: "বিশ্বাসযোগ্যতা",
    description:
      "IRA শুধুমাত্র গুরুত্বপূর্ণ অর্থনৈতিক ও সামাজিক তথ্য সংগ্রহ ও বিশ্লেষণের জন্য প্রকল্প গ্রহণ করে না, বরং এমন পদ্ধতি ও প্রযুক্তি ব্যবহার করে যা এর ফলাফলকে নীতিনির্ধারণ ও উন্নয়ন প্রোগ্রামে যুক্ত সকলের কাছে বিশ্বাসযোগ্য করে তোলে। প্রতিষ্ঠানটি নীতিগত সুপারিশ থেকে বিরত থাকে, কিন্তু বস্তুনিষ্ঠ বিশ্লেষণ করে। এই উদ্দেশ্যেই প্রতিষ্ঠানটি সরকার, আধা-সরকারি সংস্থা ও আন্তর্জাতিক সংস্থার সাথে নিজের উদ্দেশ্য ও গবেষণার বিশ্বাসযোগ্যতা প্রতিষ্ঠা করেছে। যারা এই প্রতিষ্ঠানটির সেবা গ্রহণ করেছে, তাদের মধ্যে রয়েছে:",
    sponsors: [
      "ফোর্ড ফাউন্ডেশন",
      "ইউনিসেফ",
      "IDRC",
      "DANIDA",
      "ওয়ার্ল্ড ব্যাংক",
      "UNFPA",
      "ICCO",
      "ভারত সরকার",
      "ICSSR",
      "NIUA",
      "NABARD",
      "মধ্যপ্রদেশ সরকার ইত্যাদি",
    ],
  },
  gu: {
    title: "વિશ્વસનીયતા",
    description:
      "IRA માત્ર મહત્વપૂર્ણ આર્થિક અને સામાજિક તથ્યો એકત્રિત કરવા અને વિશ્લેષણ કરવા માટે અભ્યાસ પ્રોજેક્ટ્સ કરતું નથી, પરંતુ એવી પદ્ધતિઓ અને ટેકનિક્સનો ઉપયોગ કરે છે જે તેના શોધને નીતિ ઘડાવનારા અને વિકાસ કાર્યક્રમોમાં લાગેલા લોકોને વિશ્વાસ અપાવે છે. સંસ્થા જાહેર નીતિ પર ભલામણોથી દૂર રહે છે પરંતુ નિષ્પક્ષ વિશ્લેષણથી નહીં. આ ઉદ્દેશ્ય સાથે સંસ્થાએ સરકારો, અર્ધ-સરકારી સંસ્થાઓ અને આંતરરાષ્ટ્રીય સંસ્થાઓ સાથે પોતાના હેતુ અને સંશોધન ક્ષમતા વિશે વિશ્વસનીયતા સ્થાપી છે. જે મુખ્ય પ્રોજેક્ટ પ્રાયોજક સંસ્થાઓએ સંસ્થાની સેવાઓનો ઉપયોગ કર્યો છે, તેમાં સમાવેશ થાય છે:",
    sponsors: [
      "ફોર્ડ ફાઉન્ડેશન",
      "યુનિસેફ",
      "IDRC",
      "DANIDA",
      "વર્લ્ડ બેંક",
      "UNFPA",
      "ICCO",
      "ભારત સરકાર",
      "ICSSR",
      "NIUA",
      "નાબાર્ડ",
      "મધ્ય પ્રદેશ સરકાર વગેરે",
    ],
  },
  te: {
    title: "నమ్మకత్వం",
    description:
      "IRA ముఖ్యమైన ఆర్థిక మరియు సామాజిక వాస్తవాలను సేకరించి విశ్లేషించడమే కాకుండా, దాని ఫలితాలు విధాన రూపకల్పన మరియు అభివృద్ధి కార్యక్రమాలలో పాల్గొనేవారికి నమ్మకాన్ని కలిగించే విధంగా పద్ధతులు మరియు సాంకేతికతను ఉపయోగిస్తుంది. సంస్థ ప్రజా విధానాలపై సిఫారసులను నివారిస్తుంది, కానీ పరపక్ష విశ్లేషణను నివారించదు. ఈ లక్ష్యంతో సంస్థ ప్రభుత్వాలతో, అర్ధ-ప్రభుత్వ సంస్థలతో మరియు అంతర్జాతీయ సంస్థలతో దాని ఉద్దేశ్యం మరియు పరిశోధన సామర్థ్యం గురించి నమ్మకాన్ని ఏర్పరిచింది. ఈ సంస్థ సేవలను ఉపయోగించిన ప్రాముఖ్యమైన ప్రాజెక్ట్ స్పాన్సర్లు:",
    sponsors: [
      "ఫోర్డ్ ఫౌండేషన్",
      "యూనిసెఫ్",
      "IDRC",
      "DANIDA",
      "వరల్డ్ బ్యాంక్",
      "UNFPA",
      "ICCO",
      "భారత ప్రభుత్వం",
      "ICSSR",
      "NIUA",
      "NABARD",
      "మధ్యప్రదేశ్ ప్రభుత్వం మొదలైనవి",
    ],
  },
  kn: {
    title: "ನಂಬಿಕೆ",
    description:
      "IRA ಕೇವಲ ಪ್ರಮುಖ ಆರ್ಥಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ತಥ್ಯಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ವಿಶ್ಲೇಷಿಸುವ ಯೋಜನೆಗಳನ್ನು ಹಮ್ಮಿಕೊಳ್ಳುವುದಲ್ಲದೆ, ಆ ಫಲಿತಾಂಶಗಳು ಧೋರಣಾ ರೂಪರೇಷೆಗಳಲ್ಲಿರುವ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಂಡಿರುವವರಿಗೆ ನಂಬಿಕೆ ಮೂಡಿಸುವಂತಹ ವಿಧಾನಗಳನ್ನು ಬಳಸುತ್ತದೆ. ಸಂಸ್ಥೆ ಸಾರ್ವಜನಿಕ ನೀತಿಗಳ ಕುರಿತು ಶಿಫಾರಸುಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ, ಆದರೆ ವಸ್ತುನಿಷ್ಠ ವಿಶ್ಲೇಷಣೆಯನ್ನು ತಪ್ಪಿಸದು. ಈ ಉದ್ದೇಶದೊಂದಿಗೆ ಸಂಸ್ಥೆ ತನ್ನ ಉದ್ದೇಶ ಮತ್ತು ಸಂಶೋಧನಾ ಸಾಮರ್ಥ್ಯಗಳ ಬಗ್ಗೆ ಸರ್ಕಾರಗಳು, ಅರ್ಧ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ನಂಬಿಕೆ ಸ್ಥಾಪಿಸಿದೆ. ಈ ಸಂಸ್ಥೆಯ ಸೇವೆಗಳನ್ನು ಬಳಸಿದ ಪ್ರಮುಖ ಪ್ರಾಯೋಜಕ ಸಂಸ್ಥೆಗಳು:",
    sponsors: [
      "ಫೋರ್ಡ್ ಫೌಂಡೇಶನ್",
      "ಯುನಿಸೆಫ್",
      "IDRC",
      "DANIDA",
      "ವಿಶ್ವ ಬ್ಯಾಂಕ್",
      "UNFPA",
      "ICCO",
      "ಭಾರತ ಸರ್ಕಾರ",
      "ICSSR",
      "NIUA",
      "NABARD",
      "ಮಧ್ಯ ಪ್ರದೇಶ ಸರ್ಕಾರ ಇತ್ಯಾದಿ",
    ],
  },
  pa: {
    title: "ਭਰੋਸਾ",
    description:
      "IRA ਸਿਰਫ਼ ਮਹੱਤਵਪੂਰਨ ਆਰਥਿਕ ਅਤੇ ਸਮਾਜਕ ਤੱਥ ਇਕੱਠੇ ਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਅਧਿਐਨ ਪਰੋਜੈਕਟ ਨਹੀਂ ਲੈਂਦੀ, ਸਗੋਂ ਉਹਨਾਂ ਤਰੀਕਿਆਂ ਅਤੇ ਤਕਨੀਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ ਜੋ ਇਸਦੇ ਨਤੀਜੇ ਨੀਤੀ ਬਣਾਉਣ ਅਤੇ ਵਿਕਾਸ ਪਰੋਗਰਾਮਾਂ ਨਾਲ ਜੁੜੇ ਲੋਕਾਂ ਨੂੰ ਭਰੋਸਾ ਦਿਵਾਉਂਦੇ ਹਨ। ਇਹ ਸੰਸਥਾ ਸਰਵਜਨਿਕ ਨੀਤੀ ’ਤੇ ਸਿਫਾਰਸ਼ਾਂ ਤੋਂ ਪਰਹੇਜ਼ ਕਰਦੀ ਹੈ, ਪਰ ਨਿਰਪੱਖ ਵਿਸ਼ਲੇਸ਼ਣ ਨਹੀਂ। ਇਸ ਉਦੇਸ਼ ਨਾਲ, ਇਹ ਸੰਸਥਾ ਸਰਕਾਰਾਂ, ਅਰਧ-ਸਰਕਾਰੀ ਅਦਾਰਿਆਂ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਸਥਾਵਾਂ ਨਾਲ ਆਪਣੇ ਉਦੇਸ਼ ਅਤੇ ਖੋਜ ਸਮਰੱਥਾ ਸੰਬੰਧੀ ਭਰੋਸਾ ਬਣਾਉਣ ਵਿੱਚ ਸਫਲ ਰਹੀ ਹੈ। ਕੁਝ ਮੁੱਖ ਪਰੋਜੈਕਟ ਸਪਾਂਸਰ ਏਜੰਸੀਆਂ ਜਿਨ੍ਹਾਂ ਨੇ ਇਸ ਦੀਆਂ ਸੇਵਾਵਾਂ ਲਈਆਂ ਹਨ:",
    sponsors: [
      "ਫੋਰਡ ਫਾਊਂਡੇਸ਼ਨ",
      "ਯੂਨਿਸੇਫ",
      "IDRC",
      "DANIDA",
      "ਵਿਸ਼ਵ ਬੈਂਕ",
      "UNFPA",
      "ICCO",
      "ਭਾਰਤ ਸਰਕਾਰ",
      "ICSSR",
      "NIUA",
      "NABARD",
      "ਮੱਧ ਪ੍ਰਦੇਸ਼ ਸਰਕਾਰ ਆਦਿ",
    ],
  },
  ur: {
    title: "اعتماد",
    description:
      "IRA نہ صرف اہم اقتصادی اور سماجی حقائق کو جمع اور تجزیہ کرنے کے لیے مطالعاتی منصوبے بناتا ہے بلکہ ایسی طریقہ کار اور تکنیک استعمال کرتا ہے جو اس کے نتائج کو پالیسی سازوں اور ترقیاتی پروگراموں سے وابستہ افراد کے لیے قابلِ اعتبار بناتے ہیں۔ ادارہ عوامی پالیسی پر سفارشات سے گریز کرتا ہے، لیکن معروضی تجزیہ سے نہیں۔ اس مقصد کے تحت ادارے نے حکومتوں، نیم سرکاری اداروں اور بین الاقوامی تنظیموں کے ساتھ اپنے مقصد اور تحقیقی صلاحیت پر اعتماد قائم کیا ہے۔ کچھ اہم ادارے جنہوں نے ادارے کی خدمات حاصل کیں، یہ ہیں:",
    sponsors: [
      "فورڈ فاؤنڈیشن",
      "یونیسف",
      "IDRC",
      "DANIDA",
      "ورلڈ بینک",
      "UNFPA",
      "ICCO",
      "حکومت ہند",
      "ICSSR",
      "NIUA",
      "NABARD",
      "مدھیہ پردیش حکومت وغیرہ",
    ],
  },
};

const Credibility = () => {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ p: 8 }}>
        <motion.div
          initial={{ opacity: 3, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" color="dark" gutterBottom justifyContent={"center"} align="center" sx={{ fontWeight: "bold", mb: 3 }} marginTop={2}>
            {content.title}
          </Typography>
        </motion.div>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: "#e0f2f1" }}>
              <Typography variant="body1" color="black">
                {content.description}
              </Typography>
            </Paper>

            <Box mt={2}>
              {content.sponsors.map((agency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1,
                      mt: 1,
                      bgcolor: index % 2 === 0 ? "#f5f5dc" : "#ffffff",
                    }}
                  >
                    <Typography variant="subtitle1" color="black">
                      {agency}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ maxWidth: 400, margin: "auto" }}>
              <CardMedia
                component="img"
                height="300"
                image={credibilityImage}
                alt="Credibility"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Credibility;
