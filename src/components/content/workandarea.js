import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './navbar';
import { useLanguage } from './languageContext';

// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40',
    },
    background: {
      default: '#004d40',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

// Multilingual Translations
const translations = {
  en: {
    title: 'Our Work Area',
    subtitle: 'IRA mostly covers work areas like:',
    workAreas: [
      {
        title: 'Research & Evaluation',
        description:
          'We undertake Research and Evaluation projects of various development planning and programs sponsored by governments, semi government bodies and International organizations.',
      },
      {
        title: 'Study & Monitoring Projects',
        description:
          'We carry out study and monitoring projects, which are mainly the feasibility studies and besides, projects involve impact study over the other related social areas.',
      },
      {
        title: 'Training of Grassroot Social Workers',
        description:
          'We provide training facilities in rural environment for grassroot social workers and also for students and teachers.',
      },
      {
        title: 'Implementation (Research cum action)',
        description:
          'In this work area we execute research and training firstly for implementation of any project with having economical-social values; Projects like Bee keeping, Fisheries, Vegetable production & Marketing, Floriculture, Weaving & Tailoring, worm culture, Irrigation & Sanitation, Entrepreneur Development Programs etc.',
      },
    ],
  },
  hi: {
    title: 'हमारा कार्य क्षेत्र',
    subtitle: 'IRA मुख्य रूप से इन क्षेत्रों में कार्य करता है:',
    workAreas: [
      {
        title: 'अनुसंधान और मूल्यांकन',
        description:
          'हम विभिन्न विकास योजनाओं और कार्यक्रमों पर अनुसंधान और मूल्यांकन परियोजनाएं करते हैं, जिन्हें सरकार, अर्ध-सरकारी निकाय और अंतर्राष्ट्रीय संगठन प्रायोजित करते हैं।',
      },
      {
        title: 'अध्ययन और निगरानी परियोजनाएं',
        description:
          'हम अध्ययन और निगरानी परियोजनाएं करते हैं, जिनमें मुख्यतः व्यवहार्यता अध्ययन और संबंधित सामाजिक क्षेत्रों पर प्रभाव अध्ययन शामिल होता है।',
      },
      {
        title: 'जमीनी सामाजिक कार्यकर्ताओं का प्रशिक्षण',
        description:
          'हम ग्रामीण परिवेश में जमीनी सामाजिक कार्यकर्ताओं, छात्रों और शिक्षकों के लिए प्रशिक्षण सुविधाएं प्रदान करते हैं।',
      },
      {
        title: 'कार्यान्वयन (अनुसंधान सह क्रिया)',
        description:
          'इस कार्य क्षेत्र में हम परियोजनाओं को लागू करने हेतु अनुसंधान और प्रशिक्षण करते हैं; जैसे मधुमक्खी पालन, मत्स्य पालन, सब्जी उत्पादन एवं विपणन, पुष्पवृद्धि, बुनाई एवं सिलाई, कीट संस्कृति, सिंचाई एवं स्वच्छता, उद्यमिता विकास कार्यक्रम आदि।',
      },
    ],
  },
  mr: {
    title: 'आमचा कार्य क्षेत्र',
    subtitle: 'IRA मुख्यतः या क्षेत्रांमध्ये कार्य करते:',
    workAreas: [
      {
        title: 'संशोधन आणि मूल्यांकन',
        description:
          'आम्ही विविध विकास योजना आणि कार्यक्रमांचे संशोधन व मूल्यांकन करतो, जे सरकार, निमसरकारी संस्था आणि आंतरराष्ट्रीय संस्था प्रायोजित करतात.',
      },
      {
        title: 'अभ्यास व निरीक्षण प्रकल्प',
        description:
          'आम्ही अभ्यास व निरीक्षण प्रकल्प राबवतो, जे मुख्यतः व्यवहार्यता अभ्यास असतात व सामाजिक क्षेत्रांवर प्रभावाचा अभ्यास करतात.',
      },
      {
        title: 'स्थानिक सामाजिक कार्यकर्त्यांचे प्रशिक्षण',
        description:
          'आम्ही ग्रामीण वातावरणात स्थानिक सामाजिक कार्यकर्ते, विद्यार्थी व शिक्षक यांना प्रशिक्षण सुविधा पुरवतो.',
      },
      {
        title: 'अंमलबजावणी (संशोधन व कृती)',
        description:
          'या कार्यक्षेत्रात आम्ही सामाजिक-आर्थिक मूल्ये असलेल्या प्रकल्पांची अंमलबजावणी करण्यासाठी संशोधन व प्रशिक्षण करतो; उदाहरणार्थ मधमाशी पालन, मत्स्य पालन, भाजीपाला उत्पादन व विपणन, फुलशेती, विणकाम व शिवणकाम, गांडूळशेती, सिंचन व स्वच्छता, उद्योजक विकास कार्यक्रम इत्यादी.',
      },
    ],
  },
  ta: {
    title: 'எங்கள் பணிப் பகுதிகள்',
    subtitle: 'IRA பெரும்பாலும் பின்வரும் பணிப் பகுதிகளில் செயல்படுகிறது:',
    workAreas: [
      {
        title: 'ஆராய்ச்சி மற்றும் மதிப்பீடு',
        description: 'அரசுகள், அரை அரசு மற்றும் சர்வதேச அமைப்புகள் மூலம் அனுசரிக்கப்பட்ட திட்டங்களை ஆராய்ச்சி மற்றும் மதிப்பீடு செய்கின்றோம்.',
      },
      {
        title: 'ஆய்வு மற்றும் கண்காணிப்பு திட்டங்கள்',
        description: 'தகுதி ஆய்வுகள் மற்றும் சமூக தாக்கத்தை மதிப்பீடு செய்யும் திட்டங்களை செய்கிறோம்.',
      },
      {
        title: 'மூலதன சமூக பணியாளர்களுக்கு பயிற்சி',
        description: 'கிராமப்புறத்தில் சமூக பணியாளர்கள், மாணவர்கள் மற்றும் ஆசிரியர்களுக்குப் பயிற்சி அளிக்கிறோம்.',
      },
      {
        title: 'இடைநிலை செயல் திட்டங்கள்',
        description: 'முதலில் பயிற்சி மற்றும் ஆராய்ச்சியுடன் திட்டங்களை செயல்படுத்துகிறோம்: தேன் வளர்ப்பு, மீன்வள வளர்ப்பு, காய்கறி உற்பத்தி மற்றும் சந்தைப்படுத்தல், பூச்செடி வளர்ப்பு, நெய்தல், வெர்மிகல்சர், நீர்ப்பாசனம் மற்றும் சுகாதாரம் போன்றவை.',
      },
    ],
  },
  bn: {
    title: 'আমাদের কাজের ক্ষেত্র',
    subtitle: 'IRA প্রধানত এইসব ক্ষেত্রে কাজ করে:',
    workAreas: [
      {
        title: 'গবেষণা ও মূল্যায়ন',
        description: 'সরকার ও আন্তর্জাতিক সংস্থার পৃষ্ঠপোষকতায় গবেষণা ও মূল্যায়ন প্রকল্প পরিচালনা করি।',
      },
      {
        title: 'অধ্যয়ন ও পর্যবেক্ষণ প্রকল্প',
        description: 'ব্যবহারিকতা ও প্রভাব সম্পর্কিত প্রকল্প পর্যবেক্ষণ করি।',
      },
      {
        title: 'গ্রামীণ সমাজকর্মীদের প্রশিক্ষণ',
        description: 'গ্রামীণ পরিবেশে সমাজকর্মী, ছাত্র ও শিক্ষকদের প্রশিক্ষণ দিই।',
      },
      {
        title: 'বাস্তবায়ন (গবেষণা ও কার্য)',
        description: 'অর্থনৈতিক ও সামাজিক মূল্যের প্রকল্প বাস্তবায়নের জন্য গবেষণা ও প্রশিক্ষণ দিই যেমন: মৌ চাষ, মাছ চাষ, সবজি উৎপাদন, ফুল চাষ, সেলাই, কম্পোস্টিং ইত্যাদি।',
      },
    ],
  },
  gu: {
    title: 'અમારું કાર્યક્ષેત્ર',
    subtitle: 'IRA મુખ્યત્વે નીચેના ક્ષેત્રોમાં કાર્ય કરે છે:',
    workAreas: [
      {
        title: 'અનુસંધાન અને મૂલ્યાંકન',
        description: 'સરકારો અને આંતરરાષ્ટ્રીય સંસ્થાઓ દ્વારા ભંડોળિત યોજનાઓ માટે અનુસંધાન અને મૂલ્યાંકન કરીએ છીએ.',
      },
      {
        title: 'અભ્યાસ અને મોનિટરિંગ પ્રોજેક્ટ્સ',
        description: 'અભ્યાસ અને સંબંધિત સામાજિક ક્ષેત્રોમાં અસરનું મૂલ્યાંકન કરીએ છીએ.',
      },
      {
        title: 'ગ્રાસરૂટ સામાજિક કાર્યકરો માટે તાલીમ',
        description: 'અમે ગ્રામ્ય વિસ્તારોમાં તાલીમ આપીશું.',
      },
      {
        title: 'અમલ (અનુસંધાન સાથે ક્રિયા)',
        description: 'અર્થવ્યવસ્થા અને સામાજિક મૂલ્ય ધરાવતા પ્રોજેક્ટોનો અમલ માટે પ્રથમ તાલીમ અને સંશોધન કરીએ છીએ: મધમાખી પાલન, માછલી ઉછેર, શાકભાજી ઉત્પાદકતા, હાર્ટીકલ્ચર વગેરે.',
      },
    ],
  },
  te: {
    title: 'మా పని ప్రాంతం',
    subtitle: 'IRA ప్రధానంగా ఈ క్రింది పని ప్రాంతాల్లో పనిచేస్తుంది:',
    workAreas: [
      {
        title: 'పరిశోధన & మూల్యాంకనం',
        description: 'ప్రభుత్వాలు, అర్ధ ప్రభుత్వ మరియు అంతర్జాతీయ సంస్థల మద్దతుతో పలు ప్రణాళికలపై పరిశోధనలు నిర్వహిస్తాము.',
      },
      {
        title: 'అధ్యయన మరియు పర్యవేక్షణ ప్రాజెక్టులు',
        description: 'వ్యవహారిక అధ్యయనాలు మరియు సామాజిక ప్రభావం ఆధారంగా పర్యవేక్షణ చేపడతాము.',
      },
      {
        title: 'గ్రామీణ సామాజిక కార్యకర్తలకు శిక్షణ',
        description: 'గ్రామీణ ప్రాంతాల్లో శిక్షణ కేంద్రాలు ఏర్పాటు చేస్తాము.',
      },
      {
        title: 'అమలు (పరిశోధనతో కూడిన చర్య)',
        description: 'పూర్తిగా సామాజిక-ఆర్థిక విలువలతో ప్రాజెక్టుల అమలుకు పరిశోధన మరియు శిక్షణ చేస్తాము: తేనెటీగలు, చేపల పెంపకం, కూరగాయల ఉత్పత్తి, పూల తోటలు, కుట్టు పనులు, కీటక సంస్కరణలు, నీటిపారుదల, పరిశుభ్రత, ఉపాధి అభివృద్ధి కార్యక్రమాలు.',
      },
    ],
  },
  kn: {
    title: 'ನಮ್ಮ ಕೆಲಸದ ಪ್ರದೇಶ',
    subtitle: 'IRA ಮುಖ್ಯವಾಗಿ ಈ ಕೆಲಸದ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ:',
    workAreas: [
      {
        title: 'ಸಂಶೋಧನೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ',
        description: 'ವಿವಿಧ ಯೋಜನೆಗಳಿಗಾಗಿ ಸರ್ಕಾರಗಳು ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಥೆಗಳ ಸಹಕಾರದೊಂದಿಗೆ ಸಂಶೋಧನೆ ಮಾಡುತ್ತೇವೆ.',
      },
      {
        title: 'ಅಧ್ಯಯನ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಯೋಜನೆಗಳು',
        description: 'ವ್ಯವಹಾರಯೋಗ್ಯತೆ ಅಧ್ಯಯನ ಮತ್ತು ಸಾಮಾಜಿಕ ಪ್ರಭಾವದ ಅಧ್ಯಯನ.',
      },
      {
        title: 'ಗ್ರಾಮೀಣ ಸಮಾಜಕಾರ್ಯಕರ್ತರಿಗೆ ತರಬೇತಿ',
        description: 'ಮಕ್ಕಳಿಗೆ ಮತ್ತು ಶಿಕ್ಷಕರಿಗೆ ಗ್ರಾಮೀಣ ಪರಿಸರದಲ್ಲಿ ತರಬೇತಿ ಒದಗಿಸುತ್ತೇವೆ.',
      },
      {
        title: 'ಅಮಲಾತ್ಮಕ ಯೋಜನೆಗಳು',
        description: 'ಆರ್ಥಿಕ-ಸಾಮಾಜಿಕ ಮೌಲ್ಯ ಹೊಂದಿದ ಯೋಜನೆಗಳ ಅನುಷ್ಠಾನಕ್ಕಾಗಿ ಸಂಶೋಧನೆ ಮತ್ತು ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆ.',
      },
    ],
  },
  pa: {
    title: 'ਸਾਡਾ ਕੰਮ ਦਾ ਖੇਤਰ',
    subtitle: 'IRA ਮੁੱਖ ਤੌਰ ਤੇ ਹੇਠਾਂ ਦਿੱਤੇ ਖੇਤਰਾਂ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ:',
    workAreas: [
      {
        title: 'ਖੋਜ ਅਤੇ ਮੁਲਾਂਕਣ',
        description: 'ਸਰਕਾਰੀ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਪੱਧਰ ਦੀਆਂ ਯੋਜਨਾਵਾਂ ਲਈ ਖੋਜ ਅਤੇ ਮੁਲਾਂਕਣ ਕਰਦੇ ਹਾਂ।',
      },
      {
        title: 'ਅਧਿਐਨ ਅਤੇ ਨਿਗਰਾਨੀ ਪ੍ਰੋਜੈਕਟ',
        description: 'ਸਮਾਜਕ ਖੇਤਰਾਂ ਵਿੱਚ ਪ੍ਰਭਾਵ ਅਧਿਐਨ ਕਰਦੇ ਹਾਂ।',
      },
      {
        title: 'ਜਮੀਨੀ ਸਤ੍ਹਾ ਤੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਕੰਮੀਆਂ ਦੀ ਟ੍ਰੇਨਿੰਗ',
        description: 'ਪਿੰਡਾਂ ਵਿੱਚ ਵਿਦਿਆਰਥੀਆਂ, ਅਧਿਆਪਕਾਂ ਅਤੇ ਜਨਸੇਵਕਾਂ ਨੂੰ ਸਿਖਲਾਈ ਦਿੰਦੇ ਹਾਂ।',
      },
      {
        title: 'ਲਾਗੂ ਕਰਨਾ (ਖੋਜ ਨਾਲ ਕਾਰਵਾਈ)',
        description: 'ਤਤਕਾਲੀ ਖੋਜ ਅਤੇ ਸਿਖਲਾਈ ਨਾਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗੂ ਕਰਦੇ ਹਾਂ: ਸ਼ਹਿਦੀ ਮੱਖੀ ਪਾਲਣਾ, ਮੱਛੀ ਪਾਲਣ, ਸਬਜ਼ੀਆਂ ਉਤਪਾਦਨ, ਫੁੱਲ ਪਾਲਣਾ, ਸਿਲਾਈ, ਕੀੜੇ ਪਾਲਣ, ਸਿੰਚਾਈ, ਸਫਾਈ, ਆਤਮਨਿਰਭਰਤਾ ਪ੍ਰੋਗਰਾਮ ਆਦਿ।',
      },
    ],
  },
  ur: {
    title: 'ہمارا کام کا علاقہ',
    subtitle: 'IRA بنیادی طور پر ان شعبوں میں کام کرتا ہے:',
    workAreas: [
      {
        title: 'تحقیق اور تجزیہ',
        description: 'ہم مختلف ترقیاتی منصوبوں پر حکومت، نیم سرکاری اور بین الاقوامی اداروں کی معاونت سے تحقیق کرتے ہیں۔',
      },
      {
        title: 'مطالعہ اور نگرانی کے منصوبے',
        description: 'ہم مطالعہ اور سماجی اثرات کی نگرانی کے منصوبے چلاتے ہیں۔',
      },
      {
        title: 'سماجی کارکنوں کی تربیت',
        description: 'دیہی ماحول میں سماجی کارکنوں، طلباء اور اساتذہ کو تربیت فراہم کرتے ہیں۔',
      },
      {
        title: 'عمل درآمد (تحقیق کے ساتھ عمل)',
        description: 'ہم سماجی و اقتصادی منصوبوں کی تحقیق اور تربیت کے ذریعے عمل درآمد کرتے ہیں جیسے شہد کی مکھی، مچھلی کی پرورش، سبزیوں کی کاشت، پھولوں کی کاشت، سلائی، کیڑے پالنا، آبپاشی، صفائی، کاروباری ترقی کے پروگرام وغیرہ۔',
      },
    ],
  },
};

// Static images list (not language-dependent)
const images = [
  'https://www.iraindia.co.in/Images/team-work.jpg',
  'https://static.watanfirst.com/_files/ErpCourses/Covers/cbp-professional-project-management.png',
  'https://www.iraindia.co.in/Images/work2.jpg',
  'https://www.indiafilings.com/learn/wp-content/uploads/2019/07/BIG-Scheme.jpg',
];

const WorkAreaPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6, mt: 5 }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {t.title}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.primary"
              mb={5}
              sx={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {t.subtitle}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {t.workAreas.map((area, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={6}
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.03)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="primary"
                        gutterBottom
                        sx={{ fontFamily: "'Dancing Script', cursive" }}
                      >
                        {area.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <img src={images[index]} alt="img" style={{ width: 150, height: 150 }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                          {area.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default WorkAreaPage;
