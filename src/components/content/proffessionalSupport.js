import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Navbar from "./navbar";
import { useLanguage } from "./languageContext"; // Add this

// Multilingual Translations
const translations = {
  en: {
    title: "Professional Support",
    sections: [
      {
        title: "Agriculture",
        people: [
          { name: "Mr. Ajit Kelkar", desc: "Consultant in agriculture and organic farming" },
          {
            name: "Mr. Rajesh Tiwari",
            desc: "Engineer by profession but agriculturist by practice. Specialises in biodynamic agriculture",
          },
          { name: "Mr. Ravi Kelkar", desc: "Consultant in agriculture and organic farming" },
        ],
      },
      {
        title: "CSR",
        people: [
          {
            name: "Mr. Ajay Kumar",
            desc: "Experience of working with CSR projects especially in area of livelihood and agriculture",
          },
          {
            name: "Mr. Pankaj Shrotriya",
            desc: "Engineer by profession; has experience of working with large CSR projects",
          },
        ],
      },
      {
        title: "Media",
        people: [
          { name: "Mr. Arvind Tiwari", desc: "Specialises in communication and media" },
          { name: "Mr. B. M. Bharati", desc: "Specialises in communication and media" },
        ],
      },
      {
        title: "Health",
        people: [
          {
            name: "Dr. Advity Goswami",
            desc: "Specialises in holistic health; experience of Internet marketing and NGOs",
          },
          {
            name: "Dr. Jyoti Prakash",
            desc:
              "Practicing homoeopathic doctor with interest in rural health; deep interest in legal issues and in RTI; expert in communications",
          },
          {
            name: "Dr. Raj Kumar Nema",
            desc: "Practicing homoeopathic doctor with interest in rural health",
          },
          {
            name: "Dr. S. S. Bardia",
            desc: "Practicing doctor with interest in rural health",
          },
        ],
      },
    ],
  },

  hi: {
    title: "पेशेवर समर्थन",
    sections: [
      {
        title: "कृषि",
        people: [
          { name: "श्री अजित केलकर", desc: "कृषि और जैविक खेती में सलाहकार" },
          {
            name: "श्री राजेश तिवारी",
            desc: "पेशे से इंजीनियर लेकिन अभ्यास में कृषक। बायोडायनामिक कृषि में विशेषज्ञता",
          },
          { name: "श्री रवि केलकर", desc: "कृषि और जैविक खेती में सलाहकार" },
        ],
      },
      {
        title: "सीएसआर",
        people: [
          {
            name: "श्री अजय कुमार",
            desc: "सीएसआर परियोजनाओं में कार्य का अनुभव विशेष रूप से आजीविका और कृषि क्षेत्र में",
          },
          {
            name: "श्री पंकज श्रौतिया",
            desc: "पेशे से इंजीनियर; बड़े सीएसआर परियोजनाओं में कार्य का अनुभव",
          },
        ],
      },
      {
        title: "मीडिया",
        people: [
          { name: "श्री अरविंद तिवारी", desc: "संचार और मीडिया में विशेषज्ञ" },
          { name: "श्री बी. एम. भारती", desc: "संचार और मीडिया में विशेषज्ञ" },
        ],
      },
      {
        title: "स्वास्थ्य",
        people: [
          {
            name: "डॉ. अद्विति गोस्वामी",
            desc: "समग्र स्वास्थ्य में विशेषज्ञ; इंटरनेट मार्केटिंग और एनजीओ में अनुभव",
          },
          {
            name: "डॉ. ज्योति प्रकाश",
            desc: "ग्रामीण स्वास्थ्य में रुचि रखने वाले होम्योपैथिक डॉक्टर; कानूनी मुद्दों और आरटीआई में गहरी रुचि; संचार में विशेषज्ञ",
          },
          {
            name: "डॉ. राज कुमार नेमा",
            desc: "ग्रामीण स्वास्थ्य में रुचि रखने वाले होम्योपैथिक डॉक्टर",
          },
          {
            name: "डॉ. एस. एस. बर्दिया",
            desc: "ग्रामीण स्वास्थ्य में रुचि रखने वाले डॉक्टर",
          },
        ],
      },
    ],
  },
    mr: {
    title: "व्यावसायिक समर्थन",
    sections: [
      {
        title: "शेती",
        people: [
          { name: "श्री अजित केळकर", desc: "शेती आणि सेंद्रिय शेतीत सल्लागार" },
          {
            name: "श्री राजेश तिवारी",
            desc: "व्यवसायाने अभियंता पण शेतीत तज्ज्ञ; बायोडायनामिक शेतीत विशेष ज्ञान",
          },
          { name: "श्री रवि केळकर", desc: "शेती आणि सेंद्रिय शेतीत सल्लागार" },
        ],
      },
      {
        title: "सीएसआर",
        people: [
          { name: "श्री अजय कुमार", desc: "उपजीविका आणि शेती संबंधित CSR प्रकल्पांचा अनुभव" },
          { name: "श्री पंकज श्रौतिया", desc: "अभियंता; मोठ्या CSR प्रकल्पांचा अनुभव" },
        ],
      },
      {
        title: "मीडिया",
        people: [
          { name: "श्री अरविंद तिवारी", desc: "संचार आणि मीडिया तज्ज्ञ" },
          { name: "श्री बी. एम. भारती", desc: "संचार आणि मीडिया तज्ज्ञ" },
        ],
      },
      {
        title: "आरोग्य",
        people: [
          {
            name: "डॉ. अद्विती गोस्वामी",
            desc: "संपूर्ण आरोग्यतज्ज्ञ; इंटरनेट मार्केटिंग आणि NGO मध्ये अनुभव",
          },
          {
            name: "डॉ. ज्योति प्रकाश",
            desc: "गावाकडील आरोग्य, कायदे आणि RTI मध्ये रस; संप्रेषण तज्ज्ञ",
          },
          {
            name: "डॉ. राजकुमार नेमा",
            desc: "गावाकडील आरोग्यात रस असलेले होमिओपॅथिक डॉक्टर",
          },
          {
            name: "डॉ. एस. एस. बर्दिया",
            desc: "गावाकडील आरोग्यात रस असलेले डॉक्टर",
          },
        ],
      },
    ],
  },

  ta: {
    title: "தொழில்முறை ஆதரவு",
    sections: [
      { title: "விவசாயம்", people: [{ name: "முனைவர்...", desc: "..." }] },
      { title: "CSR", people: [{ name: "முனைவர்...", desc: "..." }] },
      { title: "மீடியா", people: [{ name: "முனைவர்...", desc: "..." }] },
      { title: "ஆரோக்கியம்", people: [{ name: "முனைவர்...", desc: "..." }] },
    ],
  },

  bn: {
    title: "পেশাগত সহায়তা",
    sections: [
      { title: "কৃষি", people: [{ name: "জনাব...", desc: "..." }] },
      { title: "CSR", people: [{ name: "জনাব...", desc: "..." }] },
      { title: "মিডিয়া", people: [{ name: "জনাব...", desc: "..." }] },
      { title: "স্বাস্থ্য", people: [{ name: "জনাব...", desc: "..." }] },
    ],
  },

  gu: {
    title: "વ્યાવસાયિક સહાય",
    sections: [
      { title: "કૃષિ", people: [{ name: "શ્રી...", desc: "..." }] },
      { title: "CSR", people: [{ name: "શ્રી...", desc: "..." }] },
      { title: "મીડિયા", people: [{ name: "શ્રી...", desc: "..." }] },
      { title: "આરોગ્ય", people: [{ name: "ડૉ...", desc: "..." }] },
    ],
  },

  te: {
    title: "వృత్తిపరమైన మద్దతు",
    sections: [
      { title: "వ్యవసాయం", people: [{ name: "శ్రీ...", desc: "..." }] },
      { title: "CSR", people: [{ name: "శ్రీ...", desc: "..." }] },
      { title: "మీడియా", people: [{ name: "శ్రీ...", desc: "..." }] },
      { title: "ఆరోగ్యము", people: [{ name: "డాక్టర్...", desc: "..." }] },
    ],
  },

  kn: {
    title: "ವೃತ್ತಿಪರ ಬೆಂಬಲ",
    sections: [
      { title: "ಕೃಷಿ", people: [{ name: "ಶ್ರೀ...", desc: "..." }] },
      { title: "CSR", people: [{ name: "ಶ್ರೀ...", desc: "..." }] },
      { title: "ಮಾಧ್ಯಮ", people: [{ name: "ಶ್ರೀ...", desc: "..." }] },
      { title: "ಆರೋಗ್ಯ", people: [{ name: "ಡಾ...", desc: "..." }] },
    ],
  },

  pa: {
    title: "ਪੇਸ਼ਾਵਰ ਸਹਾਇਤਾ",
    sections: [
      { title: "ਖੇਤੀਬਾੜੀ", people: [{ name: "ਸ਼੍ਰੀ...", desc: "..." }] },
      { title: "CSR", people: [{ name: "ਸ਼੍ਰੀ...", desc: "..." }] },
      { title: "ਮੀਡੀਆ", people: [{ name: "ਸ਼੍ਰੀ...", desc: "..." }] },
      { title: "ਸਿਹਤ", people: [{ name: "ਡਾ...", desc: "..." }] },
    ],
  },

  ur: {
    title: "پیشہ ورانہ مدد",
    sections: [
      { title: "زراعت", people: [{ name: "جناب...", desc: "..." }] },
      { title: "CSR", people: [{ name: "جناب...", desc: "..." }] },
      { title: "میڈیا", people: [{ name: "جناب...", desc: "..." }] },
      { title: "صحت", people: [{ name: "ڈاکٹر...", desc: "..." }] },
    ],
  },
};

  // You can add more languages here (mr, gu, bn, ur, ta, te, kn, pa etc.)

const ProfessionalSupport = () => {
  const { language } = useLanguage(); // Use current language
  const t = translations[language] || translations.en; // fallback to English

  return (
    <Box sx={{ backgroundColor: "#004d40", color: "white", minHeight: "100vh", p: 5 }}>
      <Navbar />

      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
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

          <Paper sx={{ backgroundColor: "#004d40", p: 3 }}>
            {t.sections.map((section, idx) => (
              <Box key={idx} sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffcc80",
                    fontWeight: "bold",
                    borderBottom: "1px solid #ccc",
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                <List>
                  {section.people.map((person, i) => (
                    <ListItem key={i} alignItems="flex-start" sx={{ px: 0 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "white" }}>
                            {person.name}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: "#cfd8dc" }}>
                            {person.desc}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ borderColor: "#00695c", mt: 2 }} />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalSupport;
