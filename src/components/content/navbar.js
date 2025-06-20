import React, { useState } from 'react';
import collage from "../images/collage.jpg";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Import your language context hook
import { useLanguage } from './languageContext';

const navigation = [
  { key: "home", link: "/" },
  { key: "history", link: "/history" },
  { key: "credibility", link: "/credibility" },
  { key: "workArea", link: "/work-area" },
  { key: "currentProjects", link: "/current-projects" },
  { key: "pastProjects", link: "/past-projects" },
  { key: "board", link: "/board-of-governors" },
  { key: "support", link: "/professional-support" },
  { key: "contact", link: "/contact" },
  { key: "donation", link: "/donation" },
];

// Translation strings for navigation and gallery
const translations = {
  en: {
    home: "Home",
    history: "History",
    credibility: "Credibility",
    workArea: "Work Area",
    currentProjects: "Current Projects",
    pastProjects: "Past Projects",
    board: "Board of Governors",
    support: "Professional Support",
    contact: "Contact",
    donation: "Donation",
    gallery: "Photo Gallery"
  },
  hi: {
    home: "मुखपृष्ठ",
    history: "इतिहास",
    credibility: "विश्वसनीयता",
    workArea: "कार्य क्षेत्र",
    currentProjects: "वर्तमान परियोजनाएँ",
    pastProjects: "पिछली परियोजनाएँ",
    board: "गवर्निंग बोर्ड",
    support: "पेशेवर समर्थन",
    contact: "संपर्क करें",
    donation: "दान",
    gallery: "फोटो गैलरी"
  },
  mr: {
    home: "मुख्यपृष्ठ",
    history: "इतिहास",
    credibility: "विश्वसनीयता",
    workArea: "कार्य क्षेत्र",
    currentProjects: "चालू प्रकल्प",
    pastProjects: "मागील प्रकल्प",
    board: "गव्हर्निंग बोर्ड",
    support: "व्यावसायिक समर्थन",
    contact: "संपर्क",
    donation: "देणगी",
    gallery: "फोटो गॅलरी"
  },
  ta: {
    home: "முகப்பு",
    history: "வரலாறு",
    credibility: "நம்பகத்தன்மை",
    workArea: "வேலைப்பகுதி",
    currentProjects: "தற்போதைய திட்டங்கள்",
    pastProjects: "முந்தைய திட்டங்கள்",
    board: "நிர்வாக குழு",
    support: "தொழில்முறை ஆதரவு",
    contact: "தொடர்பு",
    donation: "தானம்",
    gallery: "புகைப்பட கேலரி"
  },
  bn: {
    home: "হোম",
    history: "ইতিহাস",
    credibility: "বিশ্বাসযোগ্যতা",
    workArea: "কর্মক্ষেত্র",
    currentProjects: "বর্তমান প্রকল্প",
    pastProjects: "পূর্ববর্তী প্রকল্প",
    board: "গভর্নিং বোর্ড",
    support: "পেশাদার সহায়তা",
    contact: "যোগাযোগ",
    donation: "দান",
    gallery: "ফটো গ্যালারি"
  },
  gu: {
    home: "મુખ્ય પૃષ્ઠ",
    history: "ઇતિહાસ",
    credibility: "વિશ્વસનીયતા",
    workArea: "કાર્ય ક્ષેત્ર",
    currentProjects: "વર્તમાન પ્રોજેક્ટ્સ",
    pastProjects: "પાછલા પ્રોજેક્ટ્સ",
    board: "ગવર્નિંગ બોર્ડ",
    support: "વ્યાવસાયિક સપોર્ટ",
    contact: "સંપર્ક",
    donation: "દાન",
    gallery: "ફોટો ગેલેરી"
  },
  te: {
    home: "హోమ్",
    history: "చరిత్ర",
    credibility: "నమ్మకదగినతనం",
    workArea: "పని ప్రాంతం",
    currentProjects: "ప్రస్తుత ప్రాజెక్టులు",
    pastProjects: "గత ప్రాజెక్టులు",
    board: "గవర్నింగ్ బోర్డు",
    support: "వృత్తిపరమైన మద్దతు",
    contact: "సంప్రదించండి",
    donation: "దానం",
    gallery: "ఫోటో గ్యాలరీ"
  },
  kn: {
    home: "ಮುಖಪುಟ",
    history: "ಇತಿಹಾಸ",
    credibility: "ನಂಬಿಕೆ",
    workArea: "ಕೆಲಸದ ಪ್ರದೇಶ",
    currentProjects: "ಪ್ರಸ್ತುತ ಯೋಜನೆಗಳು",
    pastProjects: "ಹಿಂದಿನ ಯೋಜನೆಗಳು",
    board: "ಗವರ್ಣಿಂಗ್ ಬೋರ್ಡ್",
    support: "ವೃತ್ತಿಪರ ಬೆಂಬಲ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    donation: "ದಾನ",
    gallery: "ಫೋಟೋ ಗ್ಯಾಲರಿ"
  },
  pa: {
    home: "ਮੁੱਖ ਪੰਨਾ",
    history: "ਇਤਿਹਾਸ",
    credibility: "ਭਰੋਸੇਯੋਗਤਾ",
    workArea: "ਕੰਮ ਦਾ ਖੇਤਰ",
    currentProjects: "ਮੌਜੂਦਾ ਪ੍ਰੋਜੈਕਟ",
    pastProjects: "ਪਿਛਲੇ ਪ੍ਰੋਜੈਕਟ",
    board: "ਗਵਰਨਿੰਗ ਬੋਰਡ",
    support: "ਪੇਸ਼ੇਵਰ ਸਹਾਇਤਾ",
    contact: "ਸੰਪਰਕ ਕਰੋ",
    donation: "ਦਾਨ",
    gallery: "ਫੋਟੋ ਗੈਲਰੀ"
  },
  ur: {
    home: "ہوم",
    history: "تاریخ",
    credibility: "قابل اعتماد",
    workArea: "کام کا علاقہ",
    currentProjects: "موجودہ منصوبے",
    pastProjects: "ماضی کے منصوبے",
    board: "گورننگ بورڈ",
    support: "پیشہ ورانہ مدد",
    contact: "رابطہ کریں",
    donation: "عطیہ",
    gallery: "تصویری گیلری"
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Use language context instead of local state
  const { language, setLanguage } = useLanguage();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 280,
        bgcolor: "#004d40",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List>
        {navigation.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component="a"
              href={item.link}
              sx={{
                px: 3,
                py: 1.5,
                '&:hover': {
                  bgcolor: "#e3f2fd",
                },
              }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: "'Dancing Script', cursive",
                  color: "white",
                }}
                primary={translations[language][item.key]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Clickable Photo Gallery Section */}
      <Box sx={{ textAlign: "center", p: 2 }}>
        <a href="/photo-gallery" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            fontWeight={600}
            sx={{ cursor: 'pointer', color: "white", fontFamily: "'Dancing Script', cursive" }}
          >
            {translations[language].gallery}
          </Typography>
          <img
            src={collage}
            alt="Photo Gallery"
            style={{
              width: "50%",
              height: "50%",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: "pointer"
            }}
          />
        </a>
      </Box>
    </Box>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#004d40" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontFamily: "'Dancing Script', cursive" }}
          >
            Institute of Regional Analysis
          </Typography>

          {/* Language Selector using context */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              marginRight: "1rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: "5px",
              padding: "4px",
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
            <option value="ta">தமிழ்</option>
            <option value="bn">বাংলা</option>
            <option value="gu">ગુજરાતી</option>
            <option value="te">తెలుగు</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="ur">اردو</option>
          </select>

          <Button
            onClick={toggleDrawer(true)}
            variant="contained"
            sx={{ bgcolor: 'white', color: 'black' }}
          >
            <MenuBookIcon />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Navbar;
