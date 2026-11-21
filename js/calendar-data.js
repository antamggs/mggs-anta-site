/* ============================================================
   ACADEMIC CALENDAR DATA — the ONLY file to edit for calendar changes.
   Source: Shivira Panchang 2026–27 (Rajasthan Education Department), PDF: assets/docs/shivira-panchang-2026-27.pdf
   No design or JavaScript changes are needed to edit this file.

   How to edit (keep the same structure, commas and quotes):
   - Change a date: edit "start" (and "end" for a range). Format YYYY-MM-DD. "end": null for a single day.
   - Rename or reword: edit "title" (Hindi, as in the PDF) and "description" (optional Hindi detail).
   - Move between Event and Holiday: change "category" to "Event" or "Holiday".
   - Subcategory: Exam, PTM, Competition, Festival, Observance, Activity, Admission, Notice, Holiday, Vacation.
   - Status: "Confirmed" (school calendar item), "Departmental" (state/board/ELC programme), "Proposed" (marked प्रस्तावित).
   - Add an entry: copy one block inside "entries", give it a NEW unique "id" (e.g. ev-20261225-200), keep the list sorted by "start" (sorting is also done by the code).
   - Remove an entry: delete its block.
   - Notes that have no date go in "monthNotes" (field "month" = YYYY-MM).
   - Next session (2027–28): add new entries and change "session"; the code reads the months from the entries, so no code change is needed.
   Rules: one event is written once only (no duplicates). Dates and titles must match the official PDF.
   ============================================================ */
window.ACADEMIC_CALENDAR = {
  "session": "2026–27",
  "sessionStart": "2026-04-01",
  "sessionEnd": "2027-03-31",
  "labels": {
    "category": {
      "Event": "Event / कार्यक्रम",
      "Holiday": "Holiday / अवकाश"
    },
    "subcategory": {
      "Exam": "Exam / परीक्षा",
      "PTM": "PTM / पीटीएम",
      "Competition": "Competition / प्रतियोगिता",
      "Festival": "Festival / उत्सव",
      "Observance": "Observance / दिवस",
      "Activity": "Activity / गतिविधि",
      "Admission": "Admission / प्रवेश",
      "Notice": "Notice / सूचना",
      "Holiday": "Holiday / अवकाश",
      "Vacation": "Vacation / छुट्टी"
    },
    "status": {
      "Confirmed": "School calendar",
      "Departmental": "Departmental programme",
      "Proposed": "Proposed (प्रस्तावित)"
    }
  },
  "pdfUrl": "assets/docs/shivira-panchang-2026-27.pdf",
  "pdfTitle": "शिविरा पंचांग 2026–27 (Original Government PDF)",
  "entries": [
    {
      "id": "ev-20260401-001",
      "start": "2026-04-01",
      "end": null,
      "title": "शिक्षण सत्र 2026–27 आरम्भ; विद्यालय समय परिवर्तन (एक पारी 7:30 AM–1:00 PM; दो पारी 7:00 AM–6:00 PM)",
      "description": "",
      "category": "Event",
      "subcategory": "Notice",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260401-002",
      "start": "2026-04-01",
      "end": "2026-04-25",
      "title": "विद्यालय प्रारंभ एवं प्रवेशोत्सव का प्रथम चरण / हाउस होल्ड सर्वे",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260401-003",
      "start": "2026-04-01",
      "end": "2026-05-02",
      "title": "नामांकन अभियान (CSR मॉड्यूल में प्रविष्टि)",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260402-004",
      "start": "2026-04-02",
      "end": null,
      "title": "श्री हनुमान जन्मोत्सव (उत्सव) / विश्व ऑटिज्म जागरूकता दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260403-005",
      "start": "2026-04-03",
      "end": null,
      "title": "गुडफ्राईडे (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260404-006",
      "start": "2026-04-04",
      "end": null,
      "title": "संस्था प्रधान द्वारा स्टाफ बैठक: सत्र के कार्यों की समीक्षा; SMC/SDMC साधारण सभा",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260407-007",
      "start": "2026-04-07",
      "end": null,
      "title": "विश्व स्वास्थ्य दिवस (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260408-008",
      "start": "2026-04-08",
      "end": "2026-04-10",
      "title": "स्थानीय पूरक परीक्षाएँ",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260411-009",
      "start": "2026-04-11",
      "end": null,
      "title": "महात्मा ज्योतिबा फुले जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260414-010",
      "start": "2026-04-14",
      "end": null,
      "title": "डॉ भीमराव अम्बेडकर जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260415-011",
      "start": "2026-04-15",
      "end": null,
      "title": "पूरक परीक्षा परिणाम",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260418-012",
      "start": "2026-04-18",
      "end": null,
      "title": "सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260419-013",
      "start": "2026-04-19",
      "end": null,
      "title": "श्री परशुराम जन्मोत्सव (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260420-014",
      "start": "2026-04-20",
      "end": "2026-04-21",
      "title": "सत्रारंभ की संस्था प्रधान वाक्पीठ (दो दिवसीय) — प्रा./उप्रा./मा./उमाविद्यालय",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260423-015",
      "start": "2026-04-23",
      "end": "2026-04-25",
      "title": "सत्र पर्यन्त प्रशिक्षण केन्द्र / खेल छात्रावासों में प्रवेश प्रक्रिया",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260504-016",
      "start": "2026-05-04",
      "end": "2026-07-04",
      "title": "प्रवेशोत्सव का द्वितीय चरण (शेष रहे बच्चों के चिन्हीकरण हेतु पुनः हाउस होल्ड सर्वे)",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260504-017",
      "start": "2026-05-04",
      "end": "2026-07-11",
      "title": "प्रवेशोत्सव के द्वितीय चरण अन्तर्गत नामांकन अभियान (CSR मॉड्यूल में प्रविष्टि)",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260507-018",
      "start": "2026-05-07",
      "end": null,
      "title": "रवीन्द्रनाथ टैगोर जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260513-019",
      "start": "2026-05-13",
      "end": "2026-05-15",
      "title": "प्रथम परख",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260516-020",
      "start": "2026-05-16",
      "end": null,
      "title": "PTM-I / सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "PTM",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260517-021",
      "start": "2026-05-17",
      "end": "2026-06-20",
      "title": "ग्रीष्मावकाश",
      "description": "",
      "category": "Holiday",
      "subcategory": "Vacation",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260528-022",
      "start": "2026-05-28",
      "end": null,
      "title": "वीर सावरकर जयन्ती / ईद उल जुहा (चन्द्र दर्शन अनुसार) (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260601-023",
      "start": "2026-06-01",
      "end": "2026-06-20",
      "title": "ग्रीष्मकालीन अवकाश जारी",
      "description": "",
      "category": "Holiday",
      "subcategory": "Vacation",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260617-024",
      "start": "2026-06-17",
      "end": null,
      "title": "महाराणा प्रताप जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260621-025",
      "start": "2026-06-21",
      "end": null,
      "title": "अन्तर्राष्ट्रीय योग दिवस (RSCERT): सभी विद्यालयों में प्रातः 7 से 8 बजे तक उत्सव आयोजन",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260621-026",
      "start": "2026-06-21",
      "end": "2026-06-30",
      "title": "व्यावसायिक शिक्षा संचालित विद्यालयों में योजना का प्रचार-प्रसार एवं नवीन विद्यार्थियों के प्रवेश हेतु काउंसलिंग कार्य",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Departmental",
      "notes": "केवल व्यावसायिक शिक्षा संचालित विद्यालयों पर लागू"
    },
    {
      "id": "ev-20260626-027",
      "start": "2026-06-26",
      "end": null,
      "title": "मोहर्रम (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260628-028",
      "start": "2026-06-28",
      "end": null,
      "title": "भामाशाह जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260701-029",
      "start": "2026-07-01",
      "end": "2026-07-04",
      "title": "प्रवेशोत्सव का द्वितीय चरण जारी: शेष रहे बच्चों का चिन्हीकरण — पुनः हाउस होल्ड सर्वे",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260701-030",
      "start": "2026-07-01",
      "end": "2026-07-11",
      "title": "प्रवेशोत्सव का द्वितीय चरण: नामांकन अभियान (CSR Module में प्रविष्टि) / सामुदायिक बाल सभा (विद्यालय स्तर)",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260711-031",
      "start": "2026-07-11",
      "end": null,
      "title": "प्रवेश की अंतिम तिथि (कक्षा 9 से 12 तक); विश्व जनसंख्या दिवस (उत्सव); नवीन प्रवेशित विद्यार्थियों की काउंसलिंग (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Admission",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260723-032",
      "start": "2026-07-23",
      "end": null,
      "title": "लोकमान्य बाल गंगाधर तिलक जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260728-033",
      "start": "2026-07-28",
      "end": null,
      "title": "प्रकृति संरक्षण दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260729-034",
      "start": "2026-07-29",
      "end": null,
      "title": "गुरु पूर्णिमा (उत्सव) / वृक्षारोपण दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260805-035",
      "start": "2026-08-05",
      "end": null,
      "title": "स्वर्णमुकुट मस्तक दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260808-036",
      "start": "2026-08-08",
      "end": null,
      "title": "कृमि मुक्ति दिवस — समस्त विद्यार्थियों को डीवर्मिंग दवा (एल्बेंडाज़ॉल) खिलवाना; सामुदायिक बाल सभा (विद्यालय स्तर)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260809-037",
      "start": "2026-08-09",
      "end": null,
      "title": "विश्व आदिवासी दिवस (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260813-038",
      "start": "2026-08-13",
      "end": null,
      "title": "वीर दुर्गादास राठौड़ जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260815-039",
      "start": "2026-08-15",
      "end": null,
      "title": "स्वतंत्रता दिवस (अवकाश–उत्सव अनिवार्य); मतदाता शपथ कक्षा 9–12 (ELC)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260817-040",
      "start": "2026-08-17",
      "end": "2026-08-19",
      "title": "द्वितीय परख",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260820-041",
      "start": "2026-08-20",
      "end": null,
      "title": "सद्भावना दिवस / राजीव गांधी जयन्ती",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260820-042",
      "start": "2026-08-20",
      "end": "2026-08-21",
      "title": "43वीं जिला स्तरीय (सब जूनियर) नेहरू हॉकी प्रतियोगिता",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260822-043",
      "start": "2026-08-22",
      "end": null,
      "title": "रोल प्ले एवं लोक नृत्य प्रतियोगिता विद्यालय स्तर पर (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260824-044",
      "start": "2026-08-24",
      "end": "2026-08-25",
      "title": "तहसील स्तरीय शिक्षक क्रीड़ा एवं सांस्कृतिक प्रतियोगिता (पुरुष व महिला)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260825-045",
      "start": "2026-08-25",
      "end": null,
      "title": "विद्यालयी खेलकूद प्रतियोगिताएँ (प्रथम / द्वितीय / तृतीय समूह) — 25 अगस्त से पूर्व",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260826-046",
      "start": "2026-08-26",
      "end": null,
      "title": "बारावफात (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260827-047",
      "start": "2026-08-27",
      "end": null,
      "title": "रक्षा सूत्र बन्धन दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260827-048",
      "start": "2026-08-27",
      "end": "2026-08-29",
      "title": "43वीं राज्य स्तरीय (सब जूनियर) नेहरू हॉकी प्रतियोगिता",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260828-049",
      "start": "2026-08-28",
      "end": null,
      "title": "रक्षा बंधन (अवकाश) / संस्कृत दिवस (उत्सव)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260829-050",
      "start": "2026-08-29",
      "end": null,
      "title": "खेल दिवस (मेजर ध्यानचन्द जयन्ती)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260830-051",
      "start": "2026-08-30",
      "end": "2026-09-03",
      "title": "जिला स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (प्रथम चरण/समूह), आयु वर्ग 14/17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260904-052",
      "start": "2026-09-04",
      "end": null,
      "title": "श्री कृष्ण जन्माष्टमी (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260905-053",
      "start": "2026-09-05",
      "end": null,
      "title": "शिक्षक दिवस (उत्सव) — राज्य स्तरीय शिक्षक सम्मान समारोह; झंडियों की बिक्री का शुभारम्भ",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260908-054",
      "start": "2026-09-08",
      "end": null,
      "title": "विश्व साक्षरता दिवस (उत्सव) / निबंध प्रतियोगिता (कक्षा 9–12, ELC)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260908-055",
      "start": "2026-09-08",
      "end": "2026-09-09",
      "title": "जिला स्तरीय शिक्षक क्रीड़ा एवं सांस्कृतिक प्रतियोगिताएँ (पुरुष एवं महिला)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260909-056",
      "start": "2026-09-09",
      "end": "2026-09-15",
      "title": "राज्य स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (प्रथम चरण/समूह), आयु वर्ग 14/17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260912-057",
      "start": "2026-09-12",
      "end": "2026-09-16",
      "title": "जिला स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (द्वितीय चरण/समूह), आयु वर्ग 14/17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260914-058",
      "start": "2026-09-14",
      "end": null,
      "title": "हिन्दी दिवस (उत्सव) / गणेश चतुर्थी (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260915-059",
      "start": "2026-09-15",
      "end": null,
      "title": "रोल प्ले एवं लोक नृत्य प्रतियोगिता जिला स्तरीय (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260918-060",
      "start": "2026-09-18",
      "end": "2026-09-19",
      "title": "शिक्षक सम्मेलन (जिला स्तर)",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260921-061",
      "start": "2026-09-21",
      "end": null,
      "title": "श्री रामदेव जयन्ती / श्री तेजा दशमी एवं खेजड़ली शहीद दिवस (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260922-062",
      "start": "2026-09-22",
      "end": "2026-09-28",
      "title": "राज्य स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (द्वितीय चरण/समूह), आयु वर्ग 14/17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260922-063",
      "start": "2026-09-22",
      "end": "2026-09-24",
      "title": "प्राथमिक विद्यालयी खेलकूद प्रतियोगिताएँ (जिला स्तरीय)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260923-064",
      "start": "2026-09-23",
      "end": null,
      "title": "किशोरी जागृति दिवस (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260924-065",
      "start": "2026-09-24",
      "end": "2026-09-28",
      "title": "जिला स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (तृतीय चरण/समूह), आयु वर्ग 17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20260926-066",
      "start": "2026-09-26",
      "end": null,
      "title": "विद्यालय स्तरीय विज्ञान मेला (एक दिवस) (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20260930-067",
      "start": "2026-09-30",
      "end": null,
      "title": "SMC/SDMC की कार्यकारिणी समिति में अनुमोदित कार्य योजना के अनुसार विद्यार्थी कोष / विकास कोष से कार्य/क्रय कार्यवाही पूर्ण करना",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261001-068",
      "start": "2026-10-01",
      "end": null,
      "title": "विद्यालय समय परिवर्तन: एक पारी 10:00 AM–4:00 PM; दो पारी 7:30 AM–5:30 PM (प्रत्येक पारी 5:00 घंटे)",
      "description": "",
      "category": "Event",
      "subcategory": "Notice",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261002-069",
      "start": "2026-10-02",
      "end": null,
      "title": "महात्मा गांधी जयन्ती (अवकाश–उत्सव) / लाल बहादुर शास्त्री जयन्ती (उत्सव)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261004-070",
      "start": "2026-10-04",
      "end": "2026-10-10",
      "title": "राज्य स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (तृतीय चरण/समूह), आयु वर्ग 17/19 (अधिकतम 5 दिन)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261006-071",
      "start": "2026-10-06",
      "end": "2026-10-07",
      "title": "रोल प्ले एवं लोक नृत्य प्रतियोगिता राज्य स्तरीय (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261010-072",
      "start": "2026-10-10",
      "end": null,
      "title": "विश्व मानसिक स्वास्थ्य दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261011-073",
      "start": "2026-10-11",
      "end": null,
      "title": "अन्तर्राष्ट्रीय बालिका दिवस (उत्सव) / नवरात्रा स्थापना एवं अग्रसेन जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261012-074",
      "start": "2026-10-12",
      "end": "2026-10-14",
      "title": "जिला स्तरीय विज्ञान मेला (तीन दिन) (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261013-075",
      "start": "2026-10-13",
      "end": "2026-10-17",
      "title": "जिला स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (तृतीय समूह, आयु वर्ग 14) और (चतुर्थ चरण, आयु वर्ग 17/19)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261015-076",
      "start": "2026-10-15",
      "end": "2026-10-29",
      "title": "अर्द्ध वार्षिक परीक्षा का आयोजन / CBA दक्षता आधारित आकलन — प्रथम (SA-2)",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261019-077",
      "start": "2026-10-19",
      "end": null,
      "title": "दुर्गाष्टमी (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261020-078",
      "start": "2026-10-20",
      "end": null,
      "title": "विजयदशमी (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261023-079",
      "start": "2026-10-23",
      "end": "2026-10-29",
      "title": "राज्य स्तरीय विद्यालयी खेलकूद प्रतियोगिताएँ (तृतीय समूह, आयु वर्ग 14) और (चतुर्थ चरण, आयु वर्ग 17/19)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261031-080",
      "start": "2026-10-31",
      "end": null,
      "title": "सरदार वल्लभ भाई पटेल जयन्ती (राष्ट्रीय एकता दिवस) / इन्दिरा गांधी पुण्य तिथि (संकल्प दिवस)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261104-081",
      "start": "2026-11-04",
      "end": "2026-11-15",
      "title": "मध्यावधि अवकाश",
      "description": "",
      "category": "Holiday",
      "subcategory": "Vacation",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261108-082",
      "start": "2026-11-08",
      "end": null,
      "title": "दीपावली (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261109-083",
      "start": "2026-11-09",
      "end": null,
      "title": "गोवर्धन पूजा (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261111-084",
      "start": "2026-11-11",
      "end": null,
      "title": "भाई दूज (अवकाश) / राष्ट्रीय शिक्षा दिवस (उत्सव)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261114-085",
      "start": "2026-11-14",
      "end": null,
      "title": "बाल दिवस / पं. जवाहरलाल नेहरू जयन्ती",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261118-086",
      "start": "2026-11-18",
      "end": "2026-11-21",
      "title": "राज्य स्तरीय विज्ञान मेला (चार दिन) (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261119-087",
      "start": "2026-11-19",
      "end": "2026-11-25",
      "title": "समरसता सप्ताह",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261121-088",
      "start": "2026-11-21",
      "end": null,
      "title": "कालिदास जयन्ती / PTM-II व सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "PTM",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261124-089",
      "start": "2026-11-24",
      "end": null,
      "title": "गुरुनानक जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261126-090",
      "start": "2026-11-26",
      "end": null,
      "title": "राष्ट्रीय संविधान दिवस (उत्सव); विद्यार्थियों को प्रार्थना समय में मतदान के संवैधानिक अधिकार व नैतिक मतदान के बारे में जागरूक करना",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261127-091",
      "start": "2026-11-27",
      "end": "2026-11-28",
      "title": "शिक्षक सम्मेलन (राज्य स्तर)",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261201-092",
      "start": "2026-12-01",
      "end": null,
      "title": "विश्व एकता दिवस (उत्सव) / विश्व एड्स दिवस (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261203-093",
      "start": "2026-12-03",
      "end": null,
      "title": "विश्व विशेष योग्यजन दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261208-094",
      "start": "2026-12-08",
      "end": "2026-12-09",
      "title": "53वीं राज्य स्तरीय शिक्षा विभागीय मंत्रालयिक कर्मचारी खेलकूद एवं सांस्कृतिक प्रतियोगिताएँ (जिला स्तरीय)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": "कर्मचारी प्रतियोगिता; विद्यालय की भूमिका विभाग द्वारा तय"
    },
    {
      "id": "ev-20261210-095",
      "start": "2026-12-10",
      "end": null,
      "title": "अन्तर्राष्ट्रीय मानवाधिकार दिवस (उत्सव); कक्षा 9–12 भाषण प्रतियोगिता (शीर्षक: वोट का संवैधानिक अधिकार एवं नैतिक मतदान का महत्व) (ELC)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261212-096",
      "start": "2026-12-12",
      "end": null,
      "title": "सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261215-097",
      "start": "2026-12-15",
      "end": "2026-12-16",
      "title": "53वीं राज्य स्तरीय मंत्रालयिक कर्मचारी खेलकूद (मण्डल स्तर)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261216-098",
      "start": "2026-12-16",
      "end": null,
      "title": "शिक्षा विभागीय (राज्य स्तरीय) मंत्रालयिक एवं सहायक कर्मचारी पुरस्कार एवं सम्मान समारोह",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20261217-099",
      "start": "2026-12-17",
      "end": "2026-12-19",
      "title": "तृतीय परख",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261220-100",
      "start": "2026-12-20",
      "end": null,
      "title": "नेशनल मीन्स कम मेरिट स्कॉलरशिप (NMMSS) राज्य स्तरीय चयन परीक्षा–2026",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Departmental",
      "notes": "कक्षा 8 के विद्यार्थियों हेतु NMMS परीक्षा (विभागीय)"
    },
    {
      "id": "ev-20261225-101",
      "start": "2026-12-25",
      "end": null,
      "title": "क्रिसमस डे (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261226-102",
      "start": "2026-12-26",
      "end": null,
      "title": "वीर बाल दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20261231-103",
      "start": "2026-12-31",
      "end": "2027-01-10",
      "title": "शीतकालीन अवकाश",
      "description": "",
      "category": "Holiday",
      "subcategory": "Vacation",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270101-104",
      "start": "2027-01-01",
      "end": "2027-01-10",
      "title": "शीतकालीन अवकाश जारी",
      "description": "",
      "category": "Holiday",
      "subcategory": "Vacation",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270104-105",
      "start": "2027-01-04",
      "end": null,
      "title": "लुई ब्रेल दिवस (विश्व ब्रेल दिवस); SMC/SDMC प्रशिक्षण में सदस्यों की सक्रिय भागीदारी",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270110-106",
      "start": "2027-01-10",
      "end": null,
      "title": "विश्व हिन्दी दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270112-107",
      "start": "2027-01-12",
      "end": null,
      "title": "स्वामी विवेकानन्द जयन्ती (उत्सव) / राष्ट्रीय युवा दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270113-108",
      "start": "2027-01-13",
      "end": null,
      "title": "लोहड़ी पर्व (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270114-109",
      "start": "2027-01-14",
      "end": null,
      "title": "मकर संक्रान्ति (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270115-110",
      "start": "2027-01-15",
      "end": null,
      "title": "करियर डे (उत्सव) / गुरु गोविन्द सिंह जयन्ती (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270116-111",
      "start": "2027-01-16",
      "end": null,
      "title": "PTM-III / सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "PTM",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270122-112",
      "start": "2027-01-22",
      "end": null,
      "title": "प्रभु श्रीरामलला प्राण प्रतिष्ठा दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270123-113",
      "start": "2027-01-23",
      "end": null,
      "title": "नेताजी सुभाष चन्द्र बोस जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270124-114",
      "start": "2027-01-24",
      "end": null,
      "title": "राष्ट्रीय बालिका दिवस (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270125-115",
      "start": "2027-01-25",
      "end": null,
      "title": "राष्ट्रीय मतदाता दिवस: विद्यालय में नाटक, चित्र-पोस्टर-रंगोली प्रतियोगिता (कक्षा 9/10), वाद-विवाद व निबंध (कक्षा 11/12), प्रश्नोत्तरी (कक्षा 9–12) (ELC)",
      "description": "",
      "category": "Event",
      "subcategory": "Competition",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270126-116",
      "start": "2027-01-26",
      "end": null,
      "title": "गणतंत्र दिवस (अवकाश–उत्सव अनिवार्य); मतदाता शपथ कक्षा 9–12 (ELC)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270130-117",
      "start": "2027-01-30",
      "end": null,
      "title": "शहीद दिवस (प्रातः 11:00 बजे दो मिनट का मौन) — महात्मा गांधी पुण्य तिथि",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270209-118",
      "start": "2027-02-09",
      "end": null,
      "title": "सुरक्षित इंटरनेट दिवस (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20270211-119",
      "start": "2027-02-11",
      "end": null,
      "title": "बसन्त पंचमी / सरस्वती जयन्ती (उत्सव) / गार्गी पुरस्कार वितरण",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270212-120",
      "start": "2027-02-12",
      "end": null,
      "title": "सूर्य नमस्कार (उत्सव) (सूर्य सप्तमी के पूर्व दिवस)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270213-121",
      "start": "2027-02-13",
      "end": null,
      "title": "देवनारायण जयन्ती (अवकाश) / सूर्य सप्तमी (सूर्य नमस्कार दिवस)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270213-122",
      "start": "2027-02-13",
      "end": null,
      "title": "मातृ-पितृ पूजन दिवस (कक्षा 9–12; पाती मां और पिता के नाम) — 14.02.2027 रविवार होने के कारण 13.02.2027 को आयोज्य (ELC)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270219-123",
      "start": "2027-02-19",
      "end": null,
      "title": "छत्रपति शिवाजी महाराज जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270220-124",
      "start": "2027-02-20",
      "end": null,
      "title": "सन्त रविदास जयन्ती / सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270228-125",
      "start": "2027-02-28",
      "end": null,
      "title": "राष्ट्रीय विज्ञान दिवस / महाराणा प्रताप राज्यारोहण दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270302-126",
      "start": "2027-03-02",
      "end": null,
      "title": "स्वामी दयानन्द सरस्वती जयन्ती (उत्सव)",
      "description": "",
      "category": "Event",
      "subcategory": "Festival",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270306-127",
      "start": "2027-03-06",
      "end": null,
      "title": "महाशिवरात्रि (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270308-128",
      "start": "2027-03-08",
      "end": null,
      "title": "अन्तर्राष्ट्रीय महिला दिवस (उत्सव) (RSCERT)",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Departmental",
      "notes": ""
    },
    {
      "id": "ev-20270308-129",
      "start": "2027-03-08",
      "end": "2027-03-20",
      "title": "वार्षिक परीक्षा / एस.ए 3 आकलन (प्रस्तावित)",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Proposed",
      "notes": ""
    },
    {
      "id": "ev-20270310-130",
      "start": "2027-03-10",
      "end": null,
      "title": "ईदुलफितर (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270313-131",
      "start": "2027-03-13",
      "end": null,
      "title": "सामुदायिक बाल सभा (विद्यालय स्तर पर)",
      "description": "",
      "category": "Event",
      "subcategory": "Activity",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270315-132",
      "start": "2027-03-15",
      "end": null,
      "title": "विश्व उपभोक्ता दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270317-133",
      "start": "2027-03-17",
      "end": null,
      "title": "विश्व दिव्यांग दिवस",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270321-134",
      "start": "2027-03-21",
      "end": null,
      "title": "होलिका दहन (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270322-135",
      "start": "2027-03-22",
      "end": null,
      "title": "धुलेण्डी (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270325-136",
      "start": "2027-03-25",
      "end": null,
      "title": "स्थानीय वार्षिक परीक्षा परिणाम",
      "description": "",
      "category": "Event",
      "subcategory": "Exam",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270326-137",
      "start": "2027-03-26",
      "end": null,
      "title": "गुडफ्राईडे (अवकाश)",
      "description": "",
      "category": "Holiday",
      "subcategory": "Holiday",
      "status": "Confirmed",
      "notes": ""
    },
    {
      "id": "ev-20270329-138",
      "start": "2027-03-29",
      "end": "2027-03-30",
      "title": "सत्रान्त की संस्था प्रधान वाक्पीठ (दो दिवसीय) — प्रा./उप्रा./मा./उमाविद्यालय का आयोजन",
      "description": "",
      "category": "Event",
      "subcategory": "Observance",
      "status": "Confirmed",
      "notes": ""
    }
  ],
  "monthNotes": [
    {
      "id": "note-2026-04-01",
      "month": "2026-04",
      "text": "ग्राम पंचायत की यात्रा, कक्षा 9–12 (भारत निर्वाचन आयोग की ELC मार्गदर्शिका अनुसार)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-05-02",
      "month": "2026-05",
      "text": "संस्था प्रधान ग्रीष्मावकाश में मुख्यालय से बाहर हों तो विद्यार्थियों को टी.सी. जारी करने हेतु पत्र",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-05-03",
      "month": "2026-05",
      "text": "मस्ती, दोस्ती और मतदान फिल्म प्रदर्शन, कक्षा 9–12 (ELC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-06-04",
      "month": "2026-06",
      "text": "माध्यमिक शिक्षा बोर्ड राजस्थान द्वारा सुधारात्मक परीक्षा–2026 (प्रस्तावित)",
      "status": "Proposed"
    },
    {
      "id": "note-2026-06-05",
      "month": "2026-06",
      "text": "विशेष आवश्यकता वाले बालक-बालिकाओं का विद्यालयों में प्रवेश सुनिश्चित करें",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-07-06",
      "month": "2026-07",
      "text": "वर्षा आरम्भ होते ही वृक्षारोपण का कार्य (प्रथम चरण)",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-07-07",
      "month": "2026-07",
      "text": "लोकसभा 2019 फिल्म प्रदर्शन कक्षा 11–12 और जागरूक मतदाता कार्ड खेल कक्षा 9 (ELC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-08-08",
      "month": "2026-08",
      "text": "माध्यमिक शिक्षा बोर्ड: मुख्य परीक्षा 2027 के परीक्षा आवेदन पत्र ऑनलाइन भरे जाने हैं",
      "status": "Departmental"
    },
    {
      "id": "note-2026-08-09",
      "month": "2026-08",
      "text": "कक्षा 1 से 5 के अन्तर्गत प्रथम योगात्मक आकलन (अगस्त 2026, अंतिम सप्ताह; लगभग 45% पाठ्यक्रम)",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-08-10",
      "month": "2026-08",
      "text": "केआरपी/आरपी प्रशिक्षण (SMC/SDMC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-09-11",
      "month": "2026-09",
      "text": "राष्ट्रीय शिक्षक कल्याण प्रतिष्ठान: झंडियों की बिक्री से प्राप्त राशि का बैंक ड्राफ्ट (सचिव, RKPT, माध्यमिक शिक्षा, राजस्थान बीकानेर) भेजना",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-09-12",
      "month": "2026-09",
      "text": "नोटा, मतदाता पंजीकरण, चुनाव यंत्र व मतपत्र निर्माण, अपने उम्मीदवार को जानें (कक्षा 10–12, ELC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-10-13",
      "month": "2026-10",
      "text": "माध्यमिक शिक्षा बोर्ड राजस्थान: विद्यार्थियों की सृजनात्मक प्रतियोगिता का राज्य स्तर पर आयोजन (प्रस्तावित)",
      "status": "Proposed"
    },
    {
      "id": "note-2026-10-14",
      "month": "2026-10",
      "text": "स्टेप अप कक्षा 10 और फॉर्म 6 भरना एवं पंजीकृत होना कक्षा 12 (ELC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-11-15",
      "month": "2026-11",
      "text": "द्वितीय योगात्मक आकलन, कक्षा 1–5 (नवम्बर 2026, अंतिम सप्ताह; लगभग 35% पाठ्यक्रम)",
      "status": "Confirmed"
    },
    {
      "id": "note-2026-11-16",
      "month": "2026-11",
      "text": "माध्यमिक शिक्षा बोर्ड: एकल पुत्री–द्विपुत्री पुरस्कार योजना",
      "status": "Departmental"
    },
    {
      "id": "note-2026-11-17",
      "month": "2026-11",
      "text": "शब्दों का खेल कक्षा 12 (ELC)",
      "status": "Departmental"
    },
    {
      "id": "note-2026-12-18",
      "month": "2026-12",
      "text": "माध्यमिक शिक्षा बोर्ड: सामान्य वर्ग के आर्थिक रूप से पिछड़े प्रतिभावान छात्र-छात्राओं को छात्रवृत्ति योजना (EWS)",
      "status": "Departmental"
    },
    {
      "id": "note-2027-01-19",
      "month": "2027-01",
      "text": "प्रायोगिक परीक्षाओं का आयोजन (सत्र 2027)",
      "status": "Departmental"
    },
    {
      "id": "note-2027-02-20",
      "month": "2027-02",
      "text": "माध्यमिक शिक्षा बोर्ड: सत्र 2027 की मुख्य बोर्ड परीक्षा (माध्यमिक व उच्च माध्यमिक) का आयोजन (प्रस्तावित)",
      "status": "Proposed"
    },
    {
      "id": "note-2027-03-21",
      "month": "2027-03",
      "text": "कक्षा 1 से 5 तृतीय योगात्मक आकलन (मार्च 2027, लगभग 20% पाठ्यक्रम; प्रारंभिक शिक्षा पूर्णता प्रमाण पत्र से पूर्व)",
      "status": "Confirmed"
    },
    {
      "id": "note-2027-03-22",
      "month": "2027-03",
      "text": "माध्यमिक शिक्षा बोर्ड: मुख्य बोर्ड परीक्षा 2027 (प्रस्तावित)",
      "status": "Proposed"
    }
  ]
};
