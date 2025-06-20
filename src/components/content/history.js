import React from "react";
import { useLanguage } from "./languageContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Navbar from "./navbar";

const translations = {
  en: {
    heading: "History",
    tableTitle: "Eminent Board Members (1972–2008)",
    quote: `WE DO NOT SAY\nWE HAVE DONE\nANYTHING THE POOR\nHAVE FUELED US FOR ENERGY\nWE WILL WALK WITH THEM, NOT RUN.\n\nWE DESIRE YOUR GOOD WILL\nEVEN CONTEMPT IS WORTH WHILE,\nBUT NOT INDIFFERENCE!\n\nGIVE US YOUR SMILE\nAND WE GIVE YOU OUR HAND.`,
    tableHeaders: ["Name", "Occupation", "Designation"],
    content: `A group of social scientists, educationists and administrators met one of the days in July, 1972 at Bhopal (India) and urged themselves to work for the advancement of social sciences research and planning for development, especially in a State where research culture was a forbidden fruit for non-governmental institutions. A series of further meetings gave form to ideas and defined the scope and objectives of a non-profit making body.

The Institute of Regional Analysis (IRA) was, thus, informally born and formally announced its birth with the registration under the M.P. Firms and Societies Act, on October 10, 1972. The first signatories became members and a Governing Body with three national level professionals and four founders was elected with Late Prof. V.S. Krishnan, Vice-Chancellor of the Bhopal University as the first Chairman and Dr. Davendra K. Sharma as the first Honorary Executive Director.

The funds for such a task in a state like M.P. were always a problem and establishing operational and non-profit making body was an uphill task which appeared impossible to achieve at the initiation stage. In September 1976 the Ford Foundation released an Institutional Development Grant of dollar 100 thousand for a period of 3 years. This was to be supplemented by generating internal resources after the expiry of the first initial phase. The IRA was able to generate internal resources through projects from Union and State Governments, autonomous Institutions and International Organizations like the UNICEF to the extent of 70 percent in its third year.

Ford support was thus a critical one. The second phase started with the Ford Grant for fiscal years 1981-83 of dollar 160 thousand, the major portion going for the development of Rural Development Action Research Cum-Demonstration Cell for testing unconventional strategies for rural development. The major emphasis is on the improvement in the quality of life of the rural community through rural women, made aware, equipped better, capable of generating income for their households and improving the child who is an important agent for community’s future.

For bringing small innovations and insignificant looking changes/adaptations of technology, or methods or tools and implements, the role of cheap demonstration institutions has to be encouraged. The IRA has agreed to associate with Satpura Integrated Rural Development Institution (SIRDI), a voluntary agency involved in rural development strategies. The frictions, both visible and invisible in the community have to be reduced; the poorest and the smallest have to be helped walk along instead of trudging alone. Once a stage is reached, the speed can be improved to 2 kms/hr and later 5 kms/hr. Eventually, development will take time to match even small 'moped' speeds.`,
  },

  hi: {
    heading: "इतिहास",
    tableTitle: "प्रख्यात बोर्ड सदस्य (1972–2008)",
    quote: `हम यह नहीं कहते\nकि हमने कुछ किया है\nगरीबों ने हमें ऊर्जा दी है\nहम उनके साथ चलेंगे, दौड़ेंगे नहीं।\n\nहम आपकी शुभेच्छा चाहते हैं\nतिरस्कार भी स्वीकार्य है,\nलेकिन उदासीनता नहीं!\n\nहमें अपनी मुस्कान दें\nहम आपको अपना हाथ देंगे।`,
    tableHeaders: ["नाम", "पेशा", "पदनाम"],
    content: `समाज वैज्ञानिकों, शिक्षाविदों और प्रशासकों के एक समूह ने जुलाई, 1972 में भोपाल (भारत) में एक दिन बैठक की और खुद को सामाजिक विज्ञान अनुसंधान और विकास की योजना को बढ़ावा देने के लिए प्रेरित किया, विशेष रूप से एक ऐसे राज्य में जहाँ अनुसंधान संस्कृति गैर-सरकारी संस्थानों के लिए निषिद्ध फल था।

इस प्रकार, 'इंस्टिट्यूट ऑफ रीज़नल एनालिसिस (IRA)' अनौपचारिक रूप से अस्तित्व में आया और 10 अक्टूबर, 1972 को एम.पी. फर्म्स और सोसाइटीज एक्ट के तहत पंजीकरण के साथ अपने गठन की घोषणा की। पहले हस्ताक्षरकर्ता सदस्य बने और एक संचालन निकाय का गठन किया गया जिसमें तीन राष्ट्रीय स्तर के पेशेवर और चार संस्थापक शामिल थे, और स्वर्गीय प्रो. वी.एस. कृष्णन को अध्यक्ष तथा डॉ. देवेंद्र के. शर्मा को मानद कार्यकारी निदेशक नियुक्त किया गया।

ऐसे राज्य में एक गैर-लाभकारी संस्था की स्थापना एक कठिन कार्य था। सितंबर 1976 में फोर्ड फाउंडेशन ने तीन वर्षों के लिए 1 लाख डॉलर का अनुदान प्रदान किया। यह प्रारंभिक चरण के बाद आंतरिक संसाधन उत्पन्न करने से पूरक था। IRA ने संघ और राज्य सरकारों, स्वायत्त संस्थानों और अंतर्राष्ट्रीय संगठनों (जैसे UNICEF) से परियोजनाओं के माध्यम से तीसरे वर्ष में 70% तक संसाधन उत्पन्न किए।

फोर्ड का समर्थन निर्णायक था। 1981-83 के लिए 1.6 लाख डॉलर का दूसरा अनुदान मिला, जिसका एक बड़ा हिस्सा ग्रामीण विकास डेमोन्स्ट्रेशन और रिसर्च सेल के विकास में गया। इसका मुख्य उद्देश्य ग्रामीण महिलाओं को सशक्त बनाना, परिवार की आय बढ़ाना और बच्चों के भविष्य को बेहतर बनाना था।

IRA ने सतपुड़ा इंटीग्रेटेड रूरल डेवेलपमेंट इंस्टीट्यूशन (SIRDI) के साथ भागीदारी की जो ग्रामीण नवाचारों पर कार्य कर रही थी। विकास की गति को बढ़ाने से पहले समाज के सबसे कमजोर वर्गों को साथ चलाना आवश्यक था, ताकि वे अकेले संघर्ष न करें।`,
  },
  mr: {
    heading: "इतिहास",
    tableTitle: "प्रसिद्ध मंडळ सदस्य (1972–2008)",
    quote: `आम्ही म्हणत नाही\nआम्ही काही केले आहे\nगरिबांनी आम्हाला ऊर्जा दिली आहे\nआम्ही त्यांच्यासोबत चालू, धावणार नाही.\n\nआम्हाला तुमच्या शुभेच्छा हव्यात\nतिरस्कार चालेल,\nपण उदासीनता नाही!\n\nतुमची एक स्मित द्या\nआणि आम्ही तुम्हाला आपला हात देऊ.`,
    tableHeaders: ["नाव", "व्यवसाय", "पद"],
    content: `जुलै 1972 मध्ये, भोपाल (भारत) येथे समाजशास्त्रज्ञ, शिक्षाविद आणि प्रशासनिक अधिकार्यांच्या एका गटाने बैठक घेऊन सामाजिक विज्ञान संशोधन व विकास नियोजनाला चालना देण्याचे उद्दिष्ट ठरविले, विशेषतः अशा राज्यात जिथे संशोधन संस्कृती गैर‑सरकारी संस्थांसाठी 'निषिद्ध फल' होती.

इंस्टिट्यूट ऑफ रीज़नल एनालिसिस (IRA) ची स्थापना 10 ऑक्टोबर 1972 रोजी एम.पी. फर्म्स आणि सोसायटीज अॅक्ट अन्तर्गत औपचारिकरित्या करण्यात आली. पहिल्या कार्यकारी मंडळात स्वर्गीय प्रो. वी.एस. कृष्णन यांना अध्यक्ष आणि डॉ. देवेंद्र के. शर्मा यांना पहिले मानद कार्यकारी संचालक म्हणून नियुक्त करण्यात आले.

या संस्थेसाठी निधी मिळवणं आव्हानात्मक होतं, पण सप्टेंबर 1976 मध्ये Ford Foundation ने $100,000 चे अनुदान दिले. त्यानंतर राज्य व केंद्र सरकार, स्वायत्त संस्था आणि UNICEF सारख्या आंतरराष्ट्रीय संस्थांसह IRA ने आपल्या तिसर्‍या वर्षात 70% निधीचा स्रोत निर्माण केला.

1981–83 या आर्थिक वर्षात $160,000 चे दुसरे Ford अनुदान मिळाले, ज्याचा उपयोग ग्रामीण विकासाच्या अनुसंधान व प्रदर्शन यंत्रणेमध्ये केला गेला. हे अनुदान ग्रामीण महिलांच्या सक्षमीकरणासाठी व मुलांच्या भविष्यांच्या सुधारण्यासाठी वापरण्यात आले.

IRA ने Satpura Integrated Rural Development Institution (SIRDI) सोबत भागीदारी केली, ज्यामुळे ग्रामीण विकास योजनांमध्ये स्थानिक स्तरावर सुधारणा करण्यात मदत झाली. या प्रक्रियेमध्ये गटातील गरीब व लहान सदस्यांना एकट्याने न राहता समाजात सामील केले.

हे अनुवादित करणे पूर्ण होताच दिल्लीतील ‘प्रोफेशनल’ महिलांच्या जीवनाचा दर्जा सुधारणे आणि ‘मोपेड’ व ‘सायकल' चालवण्यiajवडे त्यांनी अनुभव घेतला.`,
  },
  ta: {
    heading: "வரலாறு",
    tableTitle: "பாராட்டப்பட்ட வாரிய உறுப்பினர்கள் (1972–2008)",
    quote: `நாங்கள் சொல்வதில்லை\nநாங்கள் எதையோ செய்தோம் என\nஏழைகள் நமக்கு சக்தி வழங்கினர்\nநாம் அவர்களுடன் நடைபோகிறோம், ஓட மாட்டோம்.\n\nஉங்கள் நல்வாழ்த்தைகளை வேண்டும்\nநாஸ்பேஂஓ ஆக்கத்தக்கது,\nஆனால் பராமரிப்பு இல்லை!\n\nஉங்கள் ஒரு புன்னகையை எங்களுக்குத் தாருங்கள்\nநாம் உங்களிடம் எங்கள் கையை நீட்டுவோம்.`,
    tableHeaders: ["பெயர்", "தொழில்", "பதவி"],
    content: `1972 ஆம் ஆண்டு, ஜூலை மாதம் ஒரு சமூகக் கல்வியியல் மற்றும் நிர்வாகக் குழு, போபால் (இந்தியாவில்) ஒருபோதும் அமர்ச்சி கொண்டது. முக்கிய நோக்கம் சமூக அறிவியலின் ஆராய்ச்சி மற்றும் வளர்ச்சிக்கான திட்டங்களை ஊக்குவிப்பது. தொடர்ந்து நடைபெற்றப் பிரத்தியேக கூட்டங்களின் மூலம் நிலைப்படுத்தப்படுவன.

"இன்ஸ்டிடியூட் ஆஃப் ரீஜனல் அனலிஸிஸ் (IRA)" 10 அக்டோபர் 1972 அன்று M.P நூலக நடவடிக்கையின் கீழ் அதிகாரப்பூர்வமாக தொடங்கப்பட்டது. முதற்கூட்டக் தலைவர் இயக்குநராக Prof. V.S. கிருஷ்ணன் மற்றும் Dr. Davendra K. Sharma ஆகியோர் தேர்ந்தெடுக்கப்பட்டனர்.

நிதியின்மைக்காக போராட வேண்டும், ஆனால் செப்டம்பர் 1976 இல் Ford Foundation க்கு $100,000 அனुदானம் வழங்கப்பட்டது. இதன் வழியாக IRA, ஒன்றிணைந்த மற்றும் மாநில அரசாங்கங்களின், சுயாட்சி நிறுவனங்களின் மற்றும் UNICEF போன்ற நிலையான நிறுவனங்களின் திட்டங்களால் 3வது ஆண்டில் 70% வரையான நிதி பெற்றது.

1981–83 ஆண்டுகளில் மீண்டும் Ford Foundation $160,000 அனுதானம் வழங்கியது. இது அளவிடப்பட்ட வளர்ச்சி கட்டமைப்பிற்கான செயல்பாடுகளுக்காக பயன்படுத்தப்பட்டது. இது குறிப்பாக கிராமப்புற பெண்களின் நல வளர்ச்சிக்கு திட்டமிட்டது.

IRA Satpura Integrated Rural Development Institution (SIRDI) உடன் கூட்டு முயற்சியிலிஸ்தான்மான மறுமொழிகள் மற்றும் விளக்கப் பணிகளை துவங்கியது. சேதமின்றிப் போது பேராசிரியர் செய்வதும், பிரச்சினைகளை சமாளிப்பதும் போன்ற தொகுதிகள் உருவானன. பின் கட்டளை 2 கிமீ/மணிக்கு இருந்து 5 கிமீ/மணிக்கு மேம்படுத்தப்பட்டது.`,
  },

  bn: {
    heading: "ইতিহাস",
    tableTitle: "প্রখ্যাত বোর্ড সদস্য (1972–2008)",
    quote: `আমরা বলি না\nযে আমরা কিছু করেছি\nগরিবরা আমাদের শক্তি দিয়েছে\nআমরা তাদের সাথে হাঁটব, দৌড়াব না।\n\nআমরা আপনার শুভেচ্ছা চায়\nতাচ্ছিল্য সহ্যযোগ্য,\nতবে উদাসীনতা নয়!\n\nআমাদের একটি হাসি দিন\nআমরা আপনাকে আমাদের হাত দেব।`,
    tableHeaders: ["নাম", "পেশা", "পদবী"],
    content: `1972 সালের জুলাই মাসে, ভোপাল (ভারত)–এ সমাজবিজ্ঞানীরা, শিক্ষাবিদ ও প্রশাসকরা একটি বৈঠকে মিলিত হন। মূল লক্ষ্য ছিল সামাজিক বিজ্ঞান গবেষণা ও উন্নয়ন উদ্যোগকে এগিয়ে নেয়া। পরবর্তী বৈঠকে বিস্তারিত পরিকল্পনা নির্ধারণ করা হয়।

"ইনস্টিটিউট অফ রিজিওনাল অ্যানালিসিস (IRA)" 10 অক্টোবর 1972-এ M.P. ফার্মস অ্যান্ড সোসাইটিজ আইন অনুসারে প্রতিষ্ঠিত হয়। প্রথম চেয়ারম্যান হিসেবে প্রয়াত প্রফেসর V.S. Krishna এবং প্রথম সম্মানসূচক নির্বাহী পরিচালকের দায়িত্বে Dr. Davendra K. Sharma নিযুক্ত হন।

বর্তমান পরিস্থিতিতে সাংগঠনিক ও অলাভজনক প্রতিষ্ঠানের জন্য তহবিল সংগ্রহ কঠিন ছিল, তবে সেপ্টেম্বর 1976-এ Ford Foundation 100,000 ডলারের ত্রৈমাসিক অনুদান প্রদান করে। এরপর IRA কেন্দ্র ও রাজ্য সরকার, স্বায়ত্তশাসিত প্রতিষ্ঠান ও UNICEF–এর মতো আন্তর্জাতিক সংস্থার প্রকল্প মাধ্যমে তৃতীয় বছরে 70% তহবিল সংগ্রহ করে।

1981–83 অর্থবছরে Ford Foundation পুনরায় 160,000 ডলারের অনুদান দেয়, যা রুরাল ডেভেলপমেন্ট অ্যাকশন রিসার্চ এবং ডেমোনস্ট্রেশন সেলের গঠনে ব্যবহার করা হয়। এর মূল লক্ষ্য ছিল গ্রামীণ মহিলাদের ক্ষমতায়ন এবং শিশুদের ভবিষ্যতের উন্নতি।

IRA Satpura Integrated Rural Development Institution (SIRDI)-এর সাথে সংযুক্ত হয়ে গ্রামীণ উন্নয়নিত প্রচারণা পরিচালিত হয়। এতে ছোট ধাপে উন্নয়ন গৃহীত ও ‘মোপেড-গতিতে’ উন্নয়ন অর্জিত হয়।`,
  },

  gu: {
    heading: "ઈતિહાસ",
    tableTitle: "પ્રખ્યાત બોર્ડ સભ્યો (1972–2008)",
    quote: `અમે નહીં કહીએ\nકે અમે કંઈ કર્યું છે\nગરીબોએ અમને શક્તિ આપી છે\nઅમે તેમની સાથે ચાલશું, દોડીશું નહીં.\n\nઅમે તમારી શુભેચ્છા માંગીએ છીએ\nઅવગણના સ્વીકાર્ય છે,\nપણી ઉદાસીનતા નહીં!\n\nતમારી મુસ્કાન આપો\nઅમે તમને આપણો હાથ આપશું.`,
    tableHeaders: ["નામ", "પેશા", "હોદ્દો"],
    content: `1972 ની જુલાઈમાં, બોપાલ (ભારત) ખાતેના સમાજશાસ્ત્રી, શિક્ષણવાયો અને પ્રશાસકોની એક બેઠક યોજાઈ, જેનો મુખ્ય ઉદ્દેશ હતો સામાજિક વિજ્ઞાન સંશોધન અને વિકાસના આયોજનને આગળ વધારવું. આગળ ની બેઠકઓમાં આ વિચાર વિકસિત કરવામાં આવ્યો.

“ઇન્સ્ટિટ્યૂટ ઓફ રીજનલ એનાલિસિસ (IRA)” 10 ઑક્ટોબર 1972 ના રોજ M.P. ફર્મ્સ એન્ડ સોસાયટીઝ એક્ટ હેઠળ સત્તાવાર રીતે સ્થાપિત કરી. પ્રથમ ચેરમેન તરીકે પ્રોફ. V.S. કૃષ્ણન અને પ્રથમornermi નિભાવક તરીકે Dr. Devendra K. Sharma ની નિમણૂંક કરવામાં આવી.

નાણાકીય અડચણો સરકારી સહા આરંભ સમયે સામે આવી; પરંતુ સપ્ટેંબર 1976 માં Ford Foundation 100,000 ડોલરની સહાય પુરી પાડે છે. ત્યારબાદ IRA એ કેન્દ્ર સરકાર, રાજ્ય સરકાર, સ્વાયત્ત સંસ્થાઓ અને UNICEF જેવા આંતરરાષ્ટ્રીય સંસ્થાઓ પાસેથી 70% નાણાકીય જરૂરિયાત પૂરી કરી.

1981–83 માટે Ford Foundation દ્વારા 160,000 ડોલરની બીજી સહાય આપવામાં આવી, જેના ઉપયોગ વડે ગ્રામ્ય વિકાસના સંશોધન અને પ્રદર્શન વિસ્તારમાં થાય. જેનો ઉદ્દેશ ગ્રામ્ય મહિલાના સશક્તિકરણથી તેમના પરિવારની આવક વધારવી અને બાળમંડળના ભવિષ્યની સુધારણા કરવાનો હતો.

IRA એ Satpura Integrated Rural Development Institution (SIRDI) સાથે સંલગ્ન થવા માટે પગલાં લીધા. જેથી સ્થાનિક સ્તરે ટેક્નોલોજીના નાની સુધારણા અને “મોપેડ” ગતિ જેટલી વિકાસ ઝડપ મેળવવાનો પ્રયત્ન થયો.`,
  },

  te: {
    heading: "చరిత్ర",
    tableTitle: "ప్రముఖ బోర్డు సభ్యులు (1972–2008)",
    quote: `మేము చెప్పము\nమేము ఏదైనా చేశామని\nపేదలు మనకు శక్తినిచ్చారు\nమేము వారి తో పాటు నడుస్తాము, పరుగు తీసుకోము.\n\nమేము మీ మంచిని కోరుకుంటున్నాము\nఅవమానం అంగీకరించదగినది,\nకానీ నిర్లక్ష్యం కాదు!\n\nమీ చిరునవ్వు ఇవ్వండి\nమేము మన చేతిని ఇస్తాము.`,
    tableHeaders: ["పేరు", "వృత్తి", "హోదా"],
    content: `1972 జులై లో, భోపాల్ (భారత్) లో ప్రజా శాస్త్రవేత్తలు, విద్యావేత్తలు మరియు నిర్వాహకుల సంఘం సమావేశమై, ముఖ్యంగా సామాజిక శాస్త్ర పరిశోధన ప్రమోట్ చేయడం మొదలుపెట్టింది. తదుపరి సమావేశాల్లో ఈ ఆలోచనల పొడిగింపు కుదిరింది.

‘ఇన్‌స్టిట్యూట్ ఆఫ్ రీజినల్ ఎనాలిసిస్ (IRA)’ను 10 అక్టోబరు 1972 న M.P. వ్యాపార, సంఘాల చట్టం ప్రకారం అధికారికంగా స్థాపించబడింది. మొదటి ఛైర్మన్‌గా ప్రొ. V.S. కృష్ణన్ & మొదటి గౌరవనీయ కార్యనిర్వాహక డైరెక్టర్‌గా డాక్టర్ రోజు K. శర్మ నియమితులయ్యారు.

ఆర్థికమైన పరిస్థితుల వల్ల ప్రారంభంలో నిధుల పొందడం కష్టంగా ఉంది. సెప్టెంబర్ 1976లో Ford Foundation ద్వారా $100,000 అనువండి లభించింది. తరువాత IRA కేంద్ర/రాష్ట్ర/స్వయంకృష సంస్థలు, UNICEF వంటి అంతర్జాతీయ సంస్ధలతో ప్రాజెక్టుల ద్వారా తన 3వ సంవత్సరంలో 70% ఆర్థిక అవసరాలను తీర్చుకుంది.

1981–83 సంవత్సరాల కోసం Ford Foundation ఇరుది స్థాయి అనువండి ద్వారా $160,000 ఉపకరణములు అందజేసింది, ఇది గ్రామీణ అభివృద్ధి శోధన & ప్రదర్శన విభాగంలో నిర్వహించబడింది. ఇది ముఖ్యంగా గ్రామీణ మహిళల సాధికారత & పిల్లల భవిష్యతై మద్దతు ఇచ్చింది.

IRA Satpura Integrated Rural Development Institution (SIRDI)తో భాగవైక్యమై, గ్రామీణ అభివృద్ధి మరియు “మోపెడ్కి వేగం” ద్వారా మార్పులను కొనసాగించింది.`,
  },

  kn: {
    heading: "ಇತಿಹಾಸ",
    tableTitle: "ಪ್ರಖ್ಯಾತ ಮಂಡಳಿ ಸದಸ್ಯರು (1972–2008)",
    quote: `ನಾವು ಹೇಳುವುದಿಲ್ಲ\nನಾವು ಏನಾದರೂ ಮಾಡಿದೇವೆ ಎಂದು\nಬಡವರು ನಮಗೆ ಶಕ್ತಿ ನೀಡಿದ್ದಾರೆ\nನಾವು ಅವರೊಂದಿಗೆ ನಡೆಯುತ್ತೇವೆ, ಓಡುವುದಿಲ್ಲ.\n\nನಾವು ನಿಮ್ಮ ಶುಭಾಶಯಗಳನ್ನು ಬಯಸುತ್ತೇವೆ\nಅವಮಾನ ಸಹನೀಯವಾಗಿದೆ,\nಆದರೆ ನಿರ್ಲಕ್ಷ್ಯವಿಲ್ಲ!\n\nನಿಮ್ಮ ನಗೆ ನೀಡಿ\nನಾವು ನಮಗೆ ಕೈ ನೀಡುತ್ತೇವೆ.`,
    tableHeaders: ["ಹೆಸರು", "ವೃತ್ತಿ", "ಪದವಿ"],
    content: `1972 ರ ಜುಲೈ ತಿಂಗಳಿನಲ್ಲಿ, ಭೋಪಾಲ್ (ಭಾರತ)ನಲ್ಲಿ ಸಾಮಾಜಿಕ ವಿಜ್ಞಾನಿ, ಶಿಕ್ಷಣತಜ್ಞ ಮತ್ತು ಆಡಳಿತ ಪ್ರಾಧಿಕಾರಿಗಳ ತಂಡವು ಸಭೆ ನಡೆಸಿತು. ಅದರ ಉದ್ದೇಶ ಸಾಮಾಜಿಕ ವಿಜ್ಞಾನ ಸಂಶೋಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.

“ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ರೀಜನಲ್ ಅನಾಲಿಸಿಸ್ (IRA)” ಯನ್ನು 10 ಅಕ್ಟೋಬರ್ 1972 ರಂದು M.P. ಫಾರ್ಮ್ಸ್ ಮತ್ತು ಸೊಸೈಟೀಸ್ ಕಾಯ್ದಾ ಪ್ರಕಾರ ಅಧಿಕೃತವಾಗಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಮೊದಲ ಅಧ್ಯಕ್ಷರಾಗಿದ್ದರು ಪ್ರೊ. V.S. ಕೃಷ್ಣನ್ ಮತ್ತು ಮೊದಲ ಗೌರವ ಕಾರ್ಯದರ್ಶಿ Dr. Devendra K. Sharma ನೇಮಕಗೊಂಡರು.

ಆರ್ಥಿಕತೆಯ ಸವಾಲು ಎದುರಿಸುತ್ತಿದ್ದಾಗ, ಸೆಪ್ಟೆಂಬರ್ 1976 ರಲ್ಲಿ Ford Foundation $100,000 ಅಂಶವನ್ನು ನೀಡಿತು. ಇದರಿಂದ IRA ಕೇಂದ್ರ / ರಾಜ್ಯ ಸರ್ಕಾರ, ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳು ಮತ್ತು UNICEF ಮುಂತಾದ ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಸಂಸ್ಥೆಯ ಮೂರನೇ ವರ್ಷದಲ್ಲಿ 70% ಹಣ ಸಂಗ್ರಹಿಸಿತು.

1981–83 ವರ್ಷದ Ford ನಾಣಕೀ ಸಹಾಯ $160,000 ತೆರೆಯಿತು, ಇದನ್ನು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಸಂಶೋಧನೆ ಮತ್ತು ಪ್ರದರ್ಶನ ಘಟಕಕ್ಕಾಗಿ ಬಳಸಿದಳು. ಇದರ ಉದ್ದೇಶ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರ ಅಧಿಕಾರವರ್ಧನೆ ಮತ್ತು ಮಕ್ಕಳ ಭವಿಷ್ಯದ ಸುಧಾರಣೆ.

IRA Satpura Integrated Rural Development Institution (SIRDI) ಜತೆ ಸೇರಿಕೊಂಡು, ಸ್ಥಳೀಯ ಮಟ್ಟದಲ್ಲಿಯೇ ಸುಕ್ಷ್ಮ ತಂತ್ರಜ್ಞಾನ ಉದ್ಬವಗಳನ್ನು ಮಾಡುವ ಪ್ರক্রಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿತು. ಮೇಲಂತರವಾಗಿ ‘ಮೊಪೆಡ್‌ಗಾಗಿ ವೇಗ’ ಹಂತಸ್ಥಿತಿಯಲ್ಲಿಟ್ಟಿತು.`,
  },

  pa: {
    heading: "ਇਤਿਹਾਸ",
    tableTitle: "ਪ੍ਰਸਿੱਧ ਬੋਰਡ ਮੈਂਬਰ (1972–2008)",
    quote: `ਅਸੀਂ ਨਹੀਂ ਕਹਿੰਦੇ\nਅਸੀਂ ਕੁਝ ਕੀਤਾ ਹੈ\nਗਰੀਬਾਂ ਨੇ ਸਾਨੂੰ ਸ਼ਕਤੀ ਦਿੱਤੀ ਹੈ\nਅਸੀਂ ਉਹਨਾਂ ਨਾਲ ਤੁਰਾਂਗੇ, ਦੌੜਾਂਗੇ ਨਹੀਂ।\n\nਅਸੀਂ ਤੁਹਾਡੇ ਚੰਗੇ ਇਚਛਾਵਾਂ ਦੀ ਮੰਗ ਕਰਦੇ ਹਾਂ\nਤਿਰਸਕਾਰ ਵੀ ਸਵੀਕਾਰਯੋਗ ਹੈ,\nਪਰ ਬੇਪਰਵਾਹੀ ਨਹੀਂ!\n\nਸਾਨੂੰ ਆਪਣੀ ਮੁਸਕਾਨ ਦਿਓ\nਅਸੀਂ ਤੁਹਾਨੂੰ ਆਪਣਾ ਹੱਥ ਦਿੱਤਾ ਜਾਵੇਗਾ।`,
    tableHeaders: ["ਨਾਮ", "ਪੇਸ਼ਾ", "ਅਹੁਦਾ"],
    content: `1972 ਦੇ ਜੁਲਾਈ ਵਿਚ, ਭੋਪਾਲ (ਭਾਰਤ) ਵਿੱਚ ਸਮਾਜ ਸ਼ਾਸਤਰੀ, ਸ਼ਿਕਸ਼ਾ ਵਿਦ ਤੇ ਪ੍ਰਸ਼ਾਸਕਾਂ ਦੀ ਇਕ ਰਾਕਾਂਡ ਚੇਅਰੇ ਮਿਲੀ. ਉਸਦਾ ਮੁੱਖ ਮਕਸਦ ਸੀ ਸਮਾਜਕ ਵਿਗਿਆਨ ਦੀ ਖੋਜ ਅਤੇ ਵਿਕਾਸ ਯੋਜਨਾਂ ਨੂੰ ਤੇਜ਼ ਕਰਨਾ.

“ਇੰਸਟਿਟਿਊਟ ਆਫ ਰੀਜਨਲ ਐਨਾਲਿਸਿਸ (IRA)” 10 ਅਕਤੂਬਰ 1972 ਨੂ ਪੰਜਾਬ ਸਰਕਾਰ ਦੇ ਕਾਨੂੰਨ ਹੇਠ ਆਧਿਕਾਰਕ ਤੌਰ ਤੇ ਬਣਾਇਆ ਗਿਆ. ਪਹਿਲੇ ਚੇਅਮੈਨ ਪ੍ਰੋ. V.S. ਕਰਿਸ਼ਨਨਾ ਅਤੇ ਪਹਿਲੇ ਮਾਨਦਕਾਰੀ ਨਿਰਦੇਸ਼ਕ ਡਾ. ਦਵੇਂਦਰਾ ਕੇ. ਸ਼ਰਮਾ ਰਿਹਾ.

ਮਾਲੀ ਸੰਕਟ ਬਿਰਪਰੀ ਦੇਖੀ ਗਈ, ਪਰ ਸਤੰਬਰ 1976 ਵਿੱਚ Ford Foundation ਨੇ $100,000 ਦਿਸ਼ਾ ਲਾਈਨ ਮੁਹੱਈਆ ਕਰਾਈ। ਇਸਦੇ ਨਾਲ IRA ਨੇ ਕੇਂਦਰੀ/ਰਾਜ ਸਰਕਾਰ, ਸਵੈ-ਸ਼ਾਸਨ ਸ团ਥਾਤਿ ਅਤੇ UNICEF ਵਰਗੀਆਂ ਸੰਸਥਾਵਾਂ ਦੇ ਸਹਿਯੋਗ ਨਾਲ 3ਵੇਂ ਸਾਲ ਵਿੱਚ 70% ਵਿੱਤੀ ਲੋੜ ਪੂਰੀ ਕੀਤੀ।

1981–83 ਲਈ Ford ਨੇ $160,000 ਦਾ ਦੂਜਾ ਦਾਨ ਦਿੱਤਾ, ਜੋ ਪੰਜਾਬ ਵਿੱਚ ਪਿੰਡ ਵਿਕਾਸ ਖੋਜ ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਵਿਚ ਵਰਤਿਆ ਗਿਆ। ਇਹ ਪਿੰਡ ਦੀਆਂ ਮਹਿਲਾਵਾਂ ਦੇ ਸਸ਼ਕਤੀਕਰਨ ਅਤੇ ਬੱਚਿਆਂ ਦੇ ਭਵਿੱਖ ਨੂੰ ਸੁਧਾਰਨ ਲਈ ਸੀ।

IRA ਨੇ Satpura Integrated Rural Development Institution (SIRDI) ਨਾਲ ਸਾਂਝ ਕੀਤੀ, ਜੋ ਪਿੰਡ ਵਿਕਾਸ ਅਤੇ “ਮੋਪੇਡ-ਗਤਿਤ” ਵਿਕਾਸ ਲਈ ਪ੍ਰਮੁੱਖ ਰੂਪ।
`,
  },

  ur: {
    heading: "تاریخ",
    tableTitle: "معروف بورڈ اراکین (1972–2008)",
    quote: `ہم یہ نہیں کہتے\nکہ ہم نے کچھ کیا ہے\nغریبوں نے ہمیں توانائی دی ہے\nہم ان کے ساتھ چلیں گے، دوڑیں گے نہیں۔\n\nہم آپ کی نیک خواہشات کے خواہاں ہیں\nتہذیب بھی قابل قبول ہے،\nلیکن بے اعتنائی نہیں!\n\nہمیں اپنی مسکراہٹ دیجئے\nہم آپ کو اپنا ہاتھ دیں گے۔`,
    tableHeaders: ["نام", "پیشہ", "عہدہ"],
    content: `جولائی 1972 میں، بھوپال (بھارت) میں ایک سماجی سائنسدانوں، تعلیمی ماہرین اور انتظام کاروں کی میٹنگ ہوئی۔ بنیادی مقصد تھا کہ سماجی سائنس کی تحقیق اور ترقیاتی منصوبہ بندی کو فروغ دیا جائے۔ اگلی ملاقاتوں میں ان منصوبوں کے گہرائی میں خاکہ تیار کیا گیا۔

“انسٹی ٹیوٹ آف ریجنل اینالیسس (IRA)” 10 اکتوبر 1972 کو M.P. فَرمز اینڈ سوسائٹیز ایکٹ کے تحت باضابطہ طور پر قائم کیا گیا۔ پہلے چئیرمین کے طور پر مرحوم پروف. V.S. کرشنن اور پہلے اعزازی ایگزیکٹو ڈائریکٹر کے طور پر ڈاکٹر دوندرا کے. شرما مقرر ہوئے۔

مالی مشکلات کا سامنا رہتا تھا، لیکن ستمبر 1976 میں Ford Foundation نے $100,000 کا گرانٹ فراہم کیا۔ اس کے بعد IRA نے ریاستی/وفاقی حکومتوں، خود مختار اداروں اور UNICEF جیسی بین الاقوامی تنظیموں کے منصوبوں کے ذریعے تیسری سال میں 70٪ فنڈز جمع کیے۔

1981–83 کے عرصے کے دوران Ford Foundation نے دوبارہ $160,000 فراہم کیے جو کی زرعی ترقی تحقیق اور مظاہرے کے سیل کی ترقی کے لئے استعمال ہوئے۔ اس کا مقصد دیہی خواتین کو بااختیار بنانا اور بچوں کے مستقبل کو بہتر بنانا تھا۔

IRA نے Satpura Integrated Rural Development Institution (SIRDI) کے ساتھ شراکت داری کی، جس کے نتیجے میں مقامی تبدیلیاں، چھوٹے پیمانے پر ترقیاتی تجربات اور آخر کار “موبائل رفتار” کی ترقی ممکن ہو سکی۔`,
  }
};

const boardMembers = [
  { name: "Prof. V. S. Krishnan", occupation: "Ex Vice-Chancellor, Bhopal University", designation: "Chairman" },
  { name: "Shri B. K. Dubey (IAS)", occupation: "Member, Board of Revenue, Govt. of M.P., Farmer Chief Secretary, M.P.", designation: "Member" },
  { name: "Shri M. N. Buch (IAS)", occupation: "Director & Special Secretary, Town & Country Planning, Govt. of M.P. Bhopal", designation: "Member" },
  { name: "Prof. Bijit Ghosh", occupation: "Director, School of Planning, New Delhi", designation: "Director" },
  { name: "Dr. V. L. S. Prakash Rao", occupation: "Senior Fellow & Head, Institute of Social & Economic Change, Bangalore", designation: "Chairman" },
  { name: "Dr. Yoginder K. Alagh", occupation: "Adviser (PP), Planning Commission, Yojna Bhavan, New Delhi", designation: "—" },
  { name: "Dr. Kissen Kanungo", occupation: "Dean, Indian Agri. Research Institute, New Delhi", designation: "—" },
  { name: "Prof. Fatehbir Bahadur (IAS Retd.)", occupation: "Former Director, Tribal Research Institute, Mumbai", designation: "—" },
];

const HistoryPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <Box sx={{ backgroundColor: "#004d40", color: "white", minHeight: "100vh", p: 4 }}>
      <Navbar />

      <Grid container spacing={4} sx={{ my: 3, justifyContent: "center" }}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", fontFamily: "'Dancing Script', cursive", mt: 5 }}>
            {t.heading}
          </Typography>
        </Grid>

        <Grid item xs={12} container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph sx={{ fontFamily: "'Dancing Script', cursive", lineHeight: 1.9, whiteSpace: "pre-line" }}>
              {t.content}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#00695c", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <Avatar
                alt="Dr. D K Sharma"
                src="https://www.iraindia.co.in/images/founder.jpg"
                sx={{width: 200, height: 250, mb: 2,}}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
                  <b>Dr. D K Sharma</b>
                </Typography>
                <Typography sx={{ color: "white", whiteSpace: "pre-line" }}>
                  {t.quote}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center" sx={{ mt: 6 }}>
            {t.tableTitle}
          </Typography>

          <Paper sx={{ overflowX: "auto", mt: 2 }}>
            <Table sx={{ minWidth: 700 }}>
              <TableHead sx={{ backgroundColor: "#00796b" }}>
                <TableRow>
                  {t.tableHeaders.map((header, idx) => (
                    <TableCell key={idx} sx={{ color: "white" }}><b>{header}</b></TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {boardMembers.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.occupation}</TableCell>
                    <TableCell>{row.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HistoryPage;
