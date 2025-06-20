import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Divider,
  Paper,
} from '@mui/material';
import Navbar from './navbar';
import { useLanguage } from './languageContext';

const ContactFeedback = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
    contact: "Contact",
    feedback: "Feedback",
    institute: "Institute of Regional Analysis",
    mobile: "Mobile",
    email: "Email",
    website: "Website",
    fieldOffices: "Field Offices",
    center1: "Action Research and Training Centre",
    center2: "Anganwadi Worker Training Centre",
    organization: "Organization",
    name: "Name",
    designation: "Designation",
    phone: "Phone",
    yourEmail: "Your Email",
    feedbackLabel: "Feedback",
    send: "Send",
    clear: "Clear",
    village: "Village",
    taluka: "Taluka",
    district: "District",
    post: "Post Office",
    tehsil: "Tehsil",
    india: "India"
  },
  hi: {
    contact: "संपर्क",
    feedback: "प्रतिक्रिया",
    institute: "क्षेत्रीय विश्लेषण संस्थान",
    mobile: "मोबाइल",
    email: "ई-मेल",
    website: "वेबसाइट",
    fieldOffices: "क्षेत्रीय कार्यालय",
    center1: "क्रियात्मक अनुसंधान एवं प्रशिक्षण केंद्र",
    center2: "आंगनवाड़ी कार्यकर्ता प्रशिक्षण केंद्र",
    organization: "संगठन",
    name: "नाम",
    designation: "पद",
    phone: "फोन",
    yourEmail: "आपका ई-मेल",
    feedbackLabel: "प्रतिक्रिया",
    send: "भेजें",
    clear: "साफ़ करें",
    village: "गांव",
    taluka: "तालुका",
    district: "ज़िला",
    post: "डाकघर",
    tehsil: "तहसील",
    india: "भारत"
  },
  mr: {
    contact: "संपर्क",
    feedback: "अभिप्राय",
    institute: "प्रादेशिक विश्लेषण संस्था",
    mobile: "मोबाईल",
    email: "ई-मेल",
    website: "वेबसाईट",
    fieldOffices: "प्रादेशिक कार्यालय",
    center1: "क्रियाशील संशोधन आणि प्रशिक्षण केंद्र",
    center2: "आंगणवाडी कार्यकर्ता प्रशिक्षण केंद्र",
    organization: "संस्था",
    name: "नाव",
    designation: "पद",
    phone: "फोन",
    yourEmail: "तुमचा ई-मेल",
    feedbackLabel: "अभिप्राय",
    send: "पाठवा",
    clear: "साफ करा",
    village: "गाव",
    taluka: "तालुका",
    district: "जिल्हा",
    post: "पोस्ट ऑफिस",
    tehsil: "तालुका",
    india: "भारत"
  },
  ta: {
    contact: "தொடர்பு",
    feedback: "கருத்து",
    institute: "மண்டல பகுப்பாய்வு நிறுவனம்",
    mobile: "மொபைல்",
    email: "மின்னஞ்சல்",
    website: "வலைத்தளம்",
    fieldOffices: "துறையியல் அலுவலகங்கள்",
    center1: "செயல்பாட்டு ஆராய்ச்சி மற்றும் பயிற்சி மையம்",
    center2: "அங்கன்வாடி பணியாளர் பயிற்சி மையம்",
    organization: "அமைப்பு",
    name: "பெயர்",
    designation: "பதவி",
    phone: "தொலைபேசி",
    yourEmail: "உங்கள் மின்னஞ்சல்",
    feedbackLabel: "கருத்து",
    send: "அனுப்பு",
    clear: "அழி",
    village: "கிராமம்",
    taluka: "தாலுகா",
    district: "மாவட்டம்",
    post: "தபால் நிலையம்",
    tehsil: "தாலுகா",
    india: "இந்தியா"
  },
  bn: {
    contact: "যোগাযোগ",
    feedback: "মতামত",
    institute: "আঞ্চলিক বিশ্লেষণ ইনস্টিটিউট",
    mobile: "মোবাইল",
    email: "ই-মেইল",
    website: "ওয়েবসাইট",
    fieldOffices: "ক্ষেত্র অফিস",
    center1: "কার্যক্রম গবেষণা ও প্রশিক্ষণ কেন্দ্র",
    center2: "আঙ্গনওয়াড়ি কর্মী প্রশিক্ষণ কেন্দ্র",
    organization: "সংগঠন",
    name: "নাম",
    designation: "পদবী",
    phone: "ফোন",
    yourEmail: "আপনার ই-মেইল",
    feedbackLabel: "মতামত",
    send: "পাঠান",
    clear: "মুছুন",
    village: "গ্রাম",
    taluka: "তালুক",
    district: "জেলা",
    post: "ডাকঘর",
    tehsil: "তহসিল",
    india: "ভারত"
  },
  gu: {
    contact: "સંપર્ક",
    feedback: "પ્રતિસાદ",
    institute: "પ્રાદેશિક વિશ્લેષણ સંસ્થા",
    mobile: "મોબાઇલ",
    email: "ઇમેઇલ",
    website: "વેબસાઇટ",
    fieldOffices: "ક્ષેત્ર કચેરીઓ",
    center1: "ક્રિયાત્મક સંશોધન અને તાલીમ કેન્દ્ર",
    center2: "આંગણવાડી કાર્યકર તાલીમ કેન્દ્ર",
    organization: "સંસ્થા",
    name: "નામ",
    designation: "હોદ્દો",
    phone: "ફોન",
    yourEmail: "તમારું ઇમેઇલ",
    feedbackLabel: "પ્રતિસાદ",
    send: "મોકલો",
    clear: "સાફ કરો",
    village: "ગામ",
    taluka: "તાલુકો",
    district: "જિલ્લો",
    post: "પોસ્ટ ઓફિસ",
    tehsil: "તાલુકો",
    india: "ભારત"
  },
  te: {
    contact: "సంపర్కం",
    feedback: "అభిప్రాయం",
    institute: "ప్రాంతీయ విశ్లేషణ సంస్థ",
    mobile: "మొబైల్",
    email: "ఈమెయిల్",
    website: "వెబ్‌సైట్",
    fieldOffices: "ఫీల్డ్ కార్యాలయాలు",
    center1: "కార్యాచరణ పరిశోధన మరియు శిక్షణ కేంద్రం",
    center2: "ఆంగన్వాడీ కార్మికుల శిక్షణ కేంద్రం",
    organization: "సంస్థ",
    name: "పేరు",
    designation: "హోదా",
    phone: "ఫోన్",
    yourEmail: "మీ ఈమెయిల్",
    feedbackLabel: "అభిప్రాయం",
    send: "పంపించండి",
    clear: "తొలగించు",
    village: "గ్రామం",
    taluka: "తాలూకా",
    district: "జిల్లా",
    post: "పోస్ట్ ఆఫీస్",
    tehsil: "తహసీల్",
    india: "భారతదేశం"
  },
  kn: {
    contact: "ಸಂಪರ್ಕ",
    feedback: "ಪ್ರತಿಕ್ರಿಯೆ",
    institute: "ಪ್ರಾದೇಶಿಕ ವಿಶ್ಲೇಷಣಾ ಸಂಸ್ಥೆ",
    mobile: "ಮೊಬೈಲ್",
    email: "ಇಮೇಲ್",
    website: "ವೆಬ್‌ಸೈಟ್",
    fieldOffices: "ಕ್ಷೇತ್ರ ಕಚೇರಿಗಳು",
    center1: "ಕ್ರಿಯಾತ್ಮಕ ಸಂಶೋಧನೆ ಮತ್ತು ತರಬೇತಿ ಕೇಂದ್ರ",
    center2: "ಆಂಗನವಾಡಿ ಕಾರ್ಯಕರ್ತೆ ತರಬೇತಿ ಕೇಂದ್ರ",
    organization: "ಸಂಸ್ಥೆ",
    name: "ಹೆಸರು",
    designation: "ಪದವಿ",
    phone: "ದೂರವಾಣಿ",
    yourEmail: "ನಿಮ್ಮ ಇಮೇಲ್",
    feedbackLabel: "ಪ್ರತಿಕ್ರಿಯೆ",
    send: "ಕಳುಹಿಸಿ",
    clear: "ಅಳಿಸಿ",
    village: "ಹಳ್ಳಿ",
    taluka: "ತಾಲೂಕು",
    district: "ಜಿಲ್ಲೆ",
    post: "ಪೋಸ್ಟ್ ಆಫೀಸ್",
    tehsil: "ತಾಲೂಕು",
    india: "ಭಾರತ"
  },
  pa: {
    contact: "ਸੰਪਰਕ",
    feedback: "ਸੁਝਾਵ",
    institute: "ਖੇਤਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਸੰਸਥਾ",
    mobile: "ਮੋਬਾਈਲ",
    email: "ਈ-ਮੇਲ",
    website: "ਵੈੱਬਸਾਈਟ",
    fieldOffices: "ਖੇਤਰੀ ਦਫਤਰ",
    center1: "ਕਾਰਵਾਈ ਅਧਿਐਨ ਅਤੇ ਪ੍ਰਸ਼ਿਕਸ਼ਣ ਕੇਂਦਰ",
    center2: "ਆੰਗਨਵਾਡੀ ਵਰਕਰ ਟਰੇਨਿੰਗ ਕੇਂਦਰ",
    organization: "ਸੰਸਥਾ",
    name: "ਨਾਮ",
    designation: "ਹੁੰਦਾ",
    phone: "ਫੋਨ",
    yourEmail: "ਤੁਹਾਡਾ ਈ-ਮੇਲ",
    feedbackLabel: "ਸੁਝਾਵ",
    send: "ਭੇਜੋ",
    clear: "ਸਾਫ ਕਰੋ",
    village: "ਪਿੰਡ",
    taluka: "ਤਹਿਸੀਲ",
    district: "ਜ਼ਿਲ੍ਹਾ",
    post: "ਡਾਕਘਰ",
    tehsil: "ਤਹਿਸੀਲ",
    india: "ਭਾਰਤ"
  },
  ur: {
    contact: "رابطہ",
    feedback: "رائے",
    institute: "علاقائی تجزیاتی ادارہ",
    mobile: "موبائل",
    email: "ای میل",
    website: "ویب سائٹ",
    fieldOffices: "فیلڈ دفاتر",
    center1: "عملی تحقیق و تربیتی مرکز",
    center2: "آنگن واڑی ورکر ٹریننگ سینٹر",
    organization: "ادارہ",
    name: "نام",
    designation: "عہدہ",
    phone: "فون",
    yourEmail: "آپ کا ای میل",
    feedbackLabel: "رائے",
    send: "بھیجیں",
    clear: "صاف کریں",
    village: "گاؤں",
    taluka: "تحصیل",
    district: "ضلع",
    post: "ڈاکخانہ",
    tehsil: "تحصیل",
    india: "بھارت"
  },
    // Other languages remain unchanged, add the same new keys in each
  };

  const t = translations[language] || translations["en"];

  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', minHeight: '100vh', pb: 5, mt: '64px' }}>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: "'Dancing Script', cursive",
            color: 'white',
            mb: 3,
          }}
        >
          {t.contact}
        </Typography>

        <Paper sx={{ p: 3, mb: 4, backgroundColor: '#00695c', color: 'white' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {t.institute}
              </Typography>
              <Typography>602, Block 2</Typography>
              <Typography>Paras Hermitage</Typography>
              <Typography>Hoshangabad Road</Typography>
              <Typography>Bhopal (M.P.) 462026</Typography>
              <Typography>{t.india}</Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>{t.mobile}:</strong> +91-9926808850, 9329666025
              </Typography>
              <Typography>
                <strong>{t.email}:</strong>{' '}
                <a href="mailto:iraindia@gmail.com" style={{ color: '#ffecb3' }}>
                  iraindia@gmail.com
                </a>
              </Typography>
              <Typography>
                <strong>{t.website}:</strong>{' '}
                <a
                  href="http://www.iraindia.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffecb3' }}
                >
                  www.iraindia.co.in
                </a>
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/599/599502.png"
                alt="mailbox"
                width="100%"
                style={{ maxWidth: '200px', margin: 'auto', display: 'block' }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: '#b2dfdb' }} />

          <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
            {t.fieldOffices}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography color="error" fontWeight="bold">
                {t.center1}
              </Typography>
              <Typography>
                <strong>{t.village}:</strong> Bahiram (Karanja)
              </Typography>
              <Typography>
                <strong>{t.taluka}:</strong> Chandur Bazar
              </Typography>
              <Typography>
                <strong>{t.district}:</strong> Amrawati (Maharashtra), {t.india}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography color="error" fontWeight="bold">
                {t.center2}
              </Typography>
              <Typography>
                <strong>{t.village}:</strong> Palaskhedi (Bahiram)
              </Typography>
              <Typography>
                <strong>{t.post}:</strong> Muktagiri
              </Typography>
              <Typography>
                <strong>{t.tehsil}:</strong> Bhainsdehi
              </Typography>
              <Typography>
                <strong>{t.district}:</strong> Betul (Madhya Pradesh), {t.india}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="h3"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: "'Dancing Script', cursive",
            color: 'white',
            mb: 2,
          }}
        >
          {t.feedback}
        </Typography>

        <Paper sx={{ p: 3, backgroundColor: '#00695c', color: 'white' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label={t.organization} fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label={t.name} fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label={t.designation} fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label={t.phone} fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12}>
              <TextField label={t.yourEmail} fullWidth variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={t.feedbackLabel}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" gap={2}>
                <Button variant="contained" sx={{ backgroundColor: '#004d40' }}>
                  {t.send}
                </Button>
                <Button variant="outlined" color="error">
                  {t.clear}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactFeedback;