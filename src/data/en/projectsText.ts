// English titles/descriptions for projects, keyed by the project slug in projects.generated.ts.
export const projectsTextEn: Record<
  string,
  { title: string; desc: string; metric: string | null; location?: string; period?: string; captions?: string[] }
> = {
  "alikahya-stadyum-tramvay-hatti": {
    title: "Alikahya Stadium Tram Line Construction Works",
    desc: "Tram line construction works — Sigma – Emreray Joint Venture",
    metric: null,
    location: "Alikahya – Kartepe, Kocaeli",
    period: "Contract 29.11.2023 — completed September 2026",
    captions: [
      "Alikahya Stadium Tram Line — Kartepe route",
      "Kartepe tram line — general view",
      "Kartepe line opening run",
    ],
  },
  "eskisehir-tramvay-deposu-insaati": {
    title: "Eskişehir Tram Depot Construction",
    desc: "Construction of the depot maintenance hall and administrative building; steel roof system; maintenance pits and roof-access platforms; depot yard tracks and catenary system",
    metric: null,
    captions: [
      "Maintenance hall steel roof erection",
      "Administrative building and maintenance hall — shell construction",
      "Maintenance hall columns and roof system",
      "Administrative building reinforced-concrete frame",
      "Administrative building façade works and catenary line",
      "Maintenance hall entrance doors and depot tracks",
      "Depot yard — catenary system and trams",
      "Maintenance hall interior — roof-access platforms",
      "Roof-access platform and maintenance track",
      "Maintenance pit and platforms",
      "Tram in the maintenance hall",
      "Maintenance hall — tram front view",
    ],
  },
  "ibb-tramvay-deposu": {
    title: "İBB Tram Depot",
    desc: "",
    metric: null,
    captions: ["İBB Tram Depot — building façade and depot tracks"],
  },
  "ankara-esenkent-sincan-yuksek-hizli-tren-projesi": {
    title: "Ankara (Esenkent–Sincan) High-Speed Rail Project",
    desc: "Infrastructure, superstructure and electrification construction works (25 kV AC, 250 km/h, 32 km double track)",
    metric: "32 km double track",
  },
  "ankara-istanbul-hizli-tren-1-asama": {
    title: "Ankara–İstanbul High-Speed Rail, Phase 1",
    desc: "Electrification project (catenary) (25 kV AC, 250 km/h, 230 km double track)",
    metric: "230 km double track",
  },
  "eskisehir-hasanbey-inonu-yuksek-hizli-tren-projesi": {
    title: "Eskişehir (Hasanbey) – İnönü High-Speed Rail Project",
    desc: "Electrification construction works (25 kV AC, 250 km/h, 42 km double track)",
    metric: "42 km double track",
  },
  "eskisehir-kosekoy-ii-etap-yuksek-hizli-tren-projesi": {
    title: "Eskişehir–Köseköy Stage II High-Speed Rail Project",
    desc: "Electrification construction works for the DT 26 bypass line (25 kV AC, 250 km/h, 16 km double track)",
    metric: "16 km double track",
  },
  "ankara-istanbul-yuksek-hizli-tren-1-asama-projesi": {
    title: "Ankara – İstanbul High-Speed Rail Phase 1 Project",
    desc: "Civil works, installation and testing of signalling, SCADA and telecommunication systems (414 km double track)",
    metric: "414 km double track",
  },
  "ankara-istanbul-hizli-tren-projesi": {
    title: "Ankara–İstanbul High-Speed Rail Project",
    desc: "Signalling and telecommunication installation works on the Esenkent–Sincan–Eskişehir high-speed line, together with laying, jointing, earthing and termination of communication, signal, power and fibre-optic cables, and construction of buried cable trenches, concrete cable troughs and manholes (32 km double track)",
    metric: "32 km double track",
  },
  "hasanbey-eskisehir-inonu-ve-sincan-esenkent-kesimleri": {
    title: "Hasanbey – Eskişehir – İnönü and Sincan – Esenkent Sections",
    desc: "Installation and testing of signalling systems and cabling (74 km double track)",
    metric: "74 km double track",
  },
  "ankara-eskisehir-arasi-yuksek-hizli-tren-hatlari": {
    title: "Ankara–Eskişehir High-Speed Rail Lines",
    desc: "Maintenance and repair of electrification systems (25 kV AC, 250 km/h, 260 km double track)",
    metric: "260 km double track",
  },
  "polatli-konya-arasi-yuksek-hizli-tren-hatlari": {
    title: "Polatlı–Konya High-Speed Rail Lines",
    desc: "Maintenance and repair of electrification systems (25 kV AC, 250 km/h, 231 km double track)",
    metric: "231 km double track",
  },
  "eskisehir-haric-alayunt-kutahya-balikesir-hat-kesimine": {
    title: "Eskişehir (excl.) – Alayunt – Kütahya – Balıkesir Line Section",
    desc: "Construction of electrification facilities, Parts I, II, III, IV and V (6 substations of 154/27.5 kV, 2x25 MVA; 497 km catenary line)",
    metric: "497 km",
  },
  "balikesir-bandirma-manisa-menemen-haric-hat-kesimine": {
    title: "Balıkesir – Bandırma – Manisa – Menemen (excl.) Line Section",
    desc: "Construction of electrification facilities, Parts I, II, III and IV (431 km catenary line)",
    metric: "431 km",
  },
  "kayseri-bogazkopru-ulukisla-yenice-adana-toprakkale-hat-kesimine": {
    title: "Kayseri – Boğazköprü – Ulukışla – Yenice – Adana – Toprakkale Line Section",
    desc: "Installation of electrification facilities, Parts II, III and V (443 km catenary line)",
    metric: "443 km",
  },
  "iskenderun-dahil-km-59-097-ile-toprakkale-dahil-1-272-arasi": {
    title: "İskenderun (incl.) km: 59+097 to Toprakkale (incl.) 1+272",
    desc: "Replacement of catenary contact wire, messenger wire, droppers and connection clamps (58 km)",
    metric: "58 km",
  },
  "izmir-alsancak-cumaovasi-basmane-menemen-aliaga": {
    title: "İzmir Alsancak – Cumaovası, Basmane – Menemen – Aliağa",
    desc: "Railway electrification project (catenary, SCADA, traction power), 2 substations of 154/27.5 kV, 2x25 MVA (237 km catenary line)",
    metric: "237 km",
  },
  "cumaovasi-tepekoy-hat-kesimine": {
    title: "Cumaovası–Tepeköy Line Section",
    desc: "Installation of electrification facilities (81 km catenary line)",
    metric: "81 km",
  },
  "kayas-irmak-kirikkale-cetinkaya": {
    title: "Kayaş–Irmak–Kırıkkale–Çetinkaya",
    desc: "Construction of electrification facilities, Part I (161 km catenary line)",
    metric: "161 km",
  },
  "nenek-seffatli-arasi": {
    title: "Nenek–Şeffatli Section",
    desc: "Electrification construction works for the line section and the TÜPRAŞ connecting line (310 km)",
    metric: "310 km",
  },
  "kayseri-bogazkopru-ulukisla-yenice-mersin-yenice-adana-toprakkale-hat-": {
    title: "Kayseri–Boğazköprü–Ulukışla–Yenice, Mersin–Yenice–Adana–Toprakkale Line Section",
    desc: "Installation of electrification facilities, Part III completion works (138 km)",
    metric: "138 km",
  },
  "ankara-sincan-demiryolu": {
    title: "Ankara – Sincan Railway",
    desc: "Electrification project for the 3rd and 4th tracks (30 km)",
    metric: "30 km",
  },
  "pehlivankoy-uzunkopru-hudut-pityon-hat-kesimine": {
    title: "Pehlivanköy – Uzunköprü – Border (Pityon) Line Section",
    desc: "Equipping with electrification systems (30 km)",
    metric: "30 km",
  },
  "sapanca-kosekoy-arasi-konvansiyonel-hatlarin": {
    title: "Sapanca–Köseköy Conventional Lines",
    desc: "Completion of catenary systems (40 km double track)",
    metric: "40 km double track",
  },
  "eskisehir-gar-tali-yollari": {
    title: "Eskişehir Station Secondary Tracks",
    desc: "Catenary installation works (14 km)",
    metric: "14 km",
  },
  "mevcut-yakacik-iskenderun-katener-hattinin": {
    title: "Existing Yakacık–İskenderun Catenary Line",
    desc: "Extension to the transfer station (12 km)",
    metric: "12 km",
  },
  "demiryolu-elektrifikasyon-kapsaminda": {
    title: "Railway Electrification Works",
    desc: "Stringing of the feeder line between the Kayaş traction post and the Nenek substation",
    metric: null,
  },
  "bozuyuk-mekece-yolu-iyilestirme-projesi": {
    title: "Bozüyük – Mekece Line Improvement Project",
    desc: "(Part 1) Construction – catenary works (4 km)",
    metric: "4 km",
  },
  "torbali-haric-odemis-catal-tire-hat-kesimine": {
    title: "Torbalı (excl.) – Ödemiş – Çatal – Tire Line Section",
    desc: "Construction of electrification facilities (74 km)",
    metric: "74 km",
  },
  "haydarpasa-gebze-elektrifikasyon": {
    title: "Haydarpaşa–Gebze Electrification",
    desc: "Systems renewal works (60 km)",
    metric: "60 km",
  },
  "kosekoy-pamukova-hat-kesimine": {
    title: "Köseköy – Pamukova Line Section",
    desc: "Installation of signalling and telecommunication systems (140 km double track)",
    metric: "140 km double track",
  },
  "eskisehir-haric-alayunt-kutahya-balikesir-ve-alayunt-afyon-arasi-hat-k": {
    title: "Eskişehir (excl.) – Alayunt – Kütahya – Balıkesir and Alayunt – Afyon Line Sections",
    desc: "Signalling and telecommunication works (430 km)",
    metric: "430 km",
  },
  "cukurhisar-ve-karagozler-varyanti": {
    title: "Çukurhisar and Karagözler Variants",
    desc: "Signalling systems relocation project (20 km)",
    metric: "20 km",
  },
  "eskisehir-kosekoy-arasi": {
    title: "Eskişehir–Köseköy Section",
    desc: "Additional electromechanical relocation works at crossings between the high-speed line and the conventional line (30 km)",
    metric: "30 km",
  },
  "kayas-sincan-telekomand-sisteminden": {
    title: "Kayaş – Sincan Telecontrol System",
    desc: "Supply and installation of relay panels and ancillary equipment for controlling field devices on the Hertzian (radio) links from the telecontrol system",
    metric: null,
  },
  "pehlivankoy-uzunkopru-hudut-pityon-hat-kesimine-2": {
    title: "Pehlivanköy – Uzunköprü – Border (Pityon) Line Section",
    desc: "Installation of signalling and telecommunication systems (30 km)",
    metric: "30 km",
  },
  "izmir-alsancak-cumaovasi-basmane-menemen-aliaga-2": {
    title: "İzmir Alsancak – Cumaovası, Basmane – Menemen – Aliağa",
    desc: "Railway signalling project (partial works) (80 km)",
    metric: "80 km",
  },
  "bozuyuk-mekece-yolu": {
    title: "Bozüyük – Mekece Line",
    desc: "Improvement Project (Part 1) Construction – signalling works (4 km)",
    metric: "4 km",
  },
  "sekapark-plajyolu-arasi-2-etap-tramvay-hatti": {
    title: "Sekapark–Plajyolu Stage 2 Tram Line",
    desc: "Construction works (4.4 km)",
    metric: "4.4 km",
  },
  "eskisehir-hafif-rayli-sistem-projesi": {
    title: "Eskişehir Light Rail System Project",
    desc: "(17 km)",
    metric: "17 km",
  },
  "bursa-tramvayi-katener-isleri-10-km": {
    title: "Bursa Tram Catenary Works (10 km)",
    desc: "",
    metric: "10 km",
  },
  "antalya-hafif-rayli-sistem-1-asama": {
    title: "Antalya Light Rail System, Phase 1",
    desc: "Traction power, electrification, catenary system, SCADA system, and traffic and junction control systems (32 km, 60 km/h, double track)",
    metric: "32 km double track",
  },
  "kadikoy-moda-nostaljik-tramvay-hatti": {
    title: "Kadıköy–Moda Heritage Tram Line",
    desc: "Overhead catenary system (3.2 km)",
    metric: "3.2 km",
  },
  "sultanciftligi-edirnekapi-rayli-toplu-tasima-sistemlerinin": {
    title: "Sultançiftliği – Edirnekapı Rail Mass Transit Systems",
    desc: "Execution of electromechanical works (12 km)",
    metric: "12 km",
  },
  "eminonu-kabatas-rayli-toplu-tasima-sistem": {
    title: "Eminönü–Kabataş Rail Mass Transit System",
    desc: "Construction and electromechanical works (7.3 km)",
    metric: "7.3 km",
  },
  "edirnekapi-topkapi-rayli-toplu-tasima": {
    title: "Edirnekapı – Topkapı Rail Mass Transit",
    desc: "System completion construction works (3 km)",
    metric: "3 km",
  },
  "sincan-esenkent-arasi": {
    title: "Sincan – Esenkent Section",
    desc: "Clearing of slopes at various locations on the high-speed line and removal of the cleared material, together with laying grass-paver stones and constructing crest ditches on the side slopes of the UK-1 road overpass (32 km)",
    metric: "32 km",
  },
  "eskisehir-alayunt-kutahya-balikesir-hatti": {
    title: "Eskişehir – Alayunt – Kütahya – Balıkesir Line",
    desc: "Supply and laying of a total of 77 UIC 60 turnouts for the signalling and telecommunication project",
    metric: "77 UIC 60 turnouts",
  },
  "yuksek-hizli-tren-hatti": {
    title: "High-Speed Rail Line",
    desc: "Replacement and relocation of the Sincan West turnout for connection to the conventional line",
    metric: null,
  },
  "ankara-istanbul-arasi-hizli-tren-projesi": {
    title: "Ankara–İstanbul High-Speed Rail Project",
    desc: "(Sincan–Eskişehir section) Earthing of the trackside metal security fences and provision of electrical continuity in line with the earthing concept",
    metric: null,
  },
  "sincan-esenkent-hizli-tren-hattinda-hatta-erisim-amacli-kapi-yapilmasi": {
    title: "Construction of Track-Access Gates, Completion of Missing Fencing and Cleaning of Drainage Channels and Ditches in Cuttings and Embankments on the Sincan–Esenkent High-Speed Line",
    desc: "",
    metric: null,
  },
  "eskisehir-kayseri-arasindaki-konvansiyonel-hatlarda-calistirilmak-uzer": {
    title: "Hire of Tamping and Ballast Regulator Machines for Use on the Conventional Lines between Eskişehir and Kayseri",
    desc: "",
    metric: null,
  },
  "izmir-metrosu-isi-kapsaminda-tcdd-halkapinar-istasyon-binasi-insaati": {
    title: "Construction of the TCDD Halkapınar Station Building as Part of the İzmir Metro Works",
    desc: "",
    metric: null,
    location: "Halkapınar, İzmir",
    captions: ["İzmir Halkapınar Station Building"],
  },
  "ehrs-projesi": {
    title: "EHRS Project",
    desc: "Construction of the workshop administration building and electromechanical installation works within the project scope",
    metric: null,
  },
  "incebel-hes-erzurum-7-3-mva": {
    title: "İncebel HEPP, Erzurum, 7.3 MVA",
    desc: "",
    metric: "7.3 MVA",
  },
  "siirt-botan-hes-van-kockopru-hes-ve-mus-malazgirt-hes-isletmeciligi": {
    title: "Operation of Siirt Botan HEPP, Van Koçköprü HEPP and Muş Malazgirt HEPP",
    desc: "",
    metric: null,
  },
  "duruca-hes-isletmeciligi": {
    title: "Operation of Duruca HEPP",
    desc: "",
    metric: null,
  },
  "istanbul-ayedas-4-a-g-o-g-sebeke-tevsii-isi": {
    title: "İstanbul – AYEDAŞ-4 LV/MV Network Extension Works",
    desc: "",
    metric: null,
  },
  "kedas-elektrik-dagitim-a-s-elektrik-tesisi-yapim-isi": {
    title: "KEDAŞ Elektrik Dağıtım A.Ş. Electrical Installation Construction Works",
    desc: "Kahramanmaraş Province: Merkez District – Fatih, Fatmalı and Döngele townships; Türkoğlu District – Yeşilyöre township; Pazarcık District – Evri township; Çağlayancerit District – district centre and Bozlar township",
    metric: null,
  },
  "mus-ili-kirsali-ile-malazgirt-bulanik-ve-varto-ilceleri-ag-yg-og-elekt": {
    title: "Fault Repair and Maintenance of LV/HV (MV) Electricity Distribution Networks in Rural Muş Province and the Malazgirt, Bulanık and Varto Districts",
    desc: "",
    metric: null,
  },
  "mus-merkez-ve-varto-koyleri-elektrik-tesis-sebeke-tevsii": {
    title: "Electrical Installation Network Extension for Muş Central and Varto Villages",
    desc: "",
    metric: null,
  },
  "mus-sungu-altinova-beldeleri-96-49-seh-02-grup-isleri": {
    title: "Muş Sungu and Altınova Townships 96.49 SEH/02 Group Works",
    desc: "",
    metric: null,
  },
  "mus-muhtelif-koyler-ag-og-elektrik-tesisi-yapilmasi-isi": {
    title: "Construction of LV+MV Electrical Installations in Various Villages of Muş",
    desc: "",
    metric: null,
  },
  "eskisehir-haric-alayunt-kutahya-balikesir-hat-kesimine-2": {
    title: "Eskişehir (excl.) – Alayunt – Kütahya – Balıkesir Line Section",
    desc: "Construction of electrification facilities, Part 5 (6 substations): Kızılinler Substation 2x20 MVA, Alayunt Substation 2x20 MVA, Tavşanlı Substation 2x20 MVA, Uluçam Substation 2x25 MVA, Selimağa Substation 2x25 MVA, Mahmudiye Substation 2x20 MVA",
    metric: "6 substations",
  },
  "tcdd-aliaga-alsancak-cumaovasi-tepekoy-izmir-banliyo-sisteminde-olusan": {
    title: "Construction of a 25 kV 2x25 MVA Substation at Cumaovası, a 154 kV Power Transmission Line and SVC Reactive Power Compensation to Meet the Electrical Energy Demand of the TCDD Aliağa–Alsancak–Cumaovası–Tepeköy İzmir Suburban System (2x25 MVA)",
    desc: "",
    metric: "2x25 MVA",
  },
  "izmir-alsancak-cumaovasi-basmane-menemen-aliaga-demiryolu-elektrifikas": {
    title: "İzmir Alsancak – Cumaovası, Basmane – Menemen – Aliağa Railway Electrification Project",
    desc: "Construction of 2 substations within the project scope: Hilal Substation (2x10 MVA) and Menemen Substation (2x10 MVA)",
    metric: "2x10 MVA",
  },
  "154-36-kv-pasinler-trafo-merkezi-yapim-isi-50-mva": {
    title: "154/36 kV Pasinler Substation Construction Works (50 MVA)",
    desc: "",
    metric: "50 MVA",
  },
  "154-36-kv-horasan-trafo-merkezi-yapim-isi-50-mva": {
    title: "154/36 kV Horasan Substation Construction Works (50 MVA)",
    desc: "",
    metric: "50 MVA",
  },
  "154-36-kv-arhavi-trafo-merkezi-yapim-isi-50-mva": {
    title: "154/36 kV Arhavi Substation Construction Works (50 MVA)",
    desc: "",
    metric: "50 MVA",
  },
  "kalburcu-trafo-merkezi-yapim-isi-2x25-mva": {
    title: "Kalburcu Substation Construction Works (2x25 MVA)",
    desc: "",
    metric: "2x25 MVA",
  },
  "nenek-trafo-merkezi-yapim-isi-2x25-mva": {
    title: "Nenek Substation Construction Works (2x25 MVA)",
    desc: "",
    metric: "2x25 MVA",
  },
  "hipodrom-trafo-merkezi-salt-sahasi-demontaj-ve-nakliyesi": {
    title: "Dismantling and Transport of the Hipodrom Substation Switchyard",
    desc: "",
    metric: null,
  },
  "alasehir-derbent-tire-ve-kemalpasa-trafo-merkezlerinin-isletilmesi": {
    title: "Operation of Alaşehir, Derbent, Tire and Kemalpaşa Substations",
    desc: "",
    metric: null,
  },
  "bergama-saruhanli-ulucak-ve-arslanlar-trafo-merkezlerinin-isletilmesi": {
    title: "Operation of Bergama, Saruhanlı, Ulucak and Arslanlar Substations",
    desc: "",
    metric: null,
  },
  "bostanli-guzelyali-hilal-karsiyaka-viking-trafo-merkezlerinin-isletilm": {
    title: "Operation of Bostanlı, Güzelyalı, Hilal, Karşıyaka and Viking Substations",
    desc: "",
    metric: null,
  },
  "ambarli-buyukcekmece-hadimkoy-sagmancilar-silivri-beylikduzu-trafo-mer": {
    title: "Operation of Ambarlı, Büyükçekmece, Hadımköy, Sağmancılar, Silivri and Beylikdüzü Substations",
    desc: "",
    metric: null,
  },
  "4-adet-25-mva-guc-trafosu-10-adet-154-kv-devre-kesici-ve-54-adet-27-5-": {
    title: "Sale of 4 × 25 MVA Power Transformers, 10 × 154 kV Circuit Breakers and 54 × 27.5 kV Circuit Breakers",
    desc: "",
    metric: "25 MVA",
  },
  "yazihan-malatya-kanalizasyon-insaati-yapim-isi-30-km": {
    title: "Yazıhan (Malatya) Sewerage Construction Works (30 km)",
    desc: "",
    metric: "30 km",
  },
  "gulnar-mersin-300-350-mm-duktil-boru-ile-icme-suyu-insaati-yapim-isi-5": {
    title: "Gülnar (Mersin) Drinking Water Construction Works with 300–350 mm Ductile Pipe (58 km)",
    desc: "",
    metric: "58 km",
  },
  "paket-mp-2-korkut-merkez-yibo-ve-kumbet-yunus-emre-yibo-guclendirme-ve": {
    title: "Package MP-2: Strengthening and General Repair of Korkut Merkez YİBO and Kümbet Yunus Emre YİBO",
    desc: "",
    metric: null,
  },
  "mus-korkut-guneyik-koyu-ilkogretim-okulunun-ek-tesis-isinin-yapilmasi": {
    title: "Construction of an Annex Facility for Muş Korkut Güneyik Village Primary School",
    desc: "",
    metric: null,
  },
  "haskoy-merkez-ilkokulu-drenaj-ve-kanalizasyon-insaati-yapilmasi-is": {
    title: "Drainage and Sewerage Construction Works for Hasköy Central Primary School",
    desc: "",
    metric: null,
  },
  "bitlis-merkez-100-yil-ataturk-ilkogretim-okulu-onarim-isi": {
    title: "Repair Works at Bitlis Central 100th Year Atatürk Primary School",
    desc: "",
    metric: null,
  },
  "proses-suyu-tikineri-yapilmasi-yapim-isi": {
    title: "Construction of a Process Water Thickener",
    desc: "",
    metric: null,
  },
  "7-bolge-elektrifikasyon-sistemlerinde-kullanilmak-uzere-yedek-malzeme-": {
    title: "Procurement of Spare Parts for Use in 7th Region Electrification Systems",
    desc: "",
    metric: null,
  },
  "2-bolge-mudurlugu-sincan-eskisehir-elektrifikasyon-sistemi-icin-132-ad": {
    title: "2nd Regional Directorate: Supply and Installation of 132 Automatic Tensioning Devices for the Sincan–Eskişehir Electrification System",
    desc: "",
    metric: "132 tensioning devices",
  },
  "3-bolge-elektrifikasyon-sistemlerinde-kullanilmak-uzere-yedek-malzeme-": {
    title: "Procurement of Spare Parts for Use in 3rd Region Electrification Systems",
    desc: "",
    metric: null,
  },
  "6-bolge-mudurlugu-iskenderun-narli-elektrifikasyon-sistemi-icin-yedek-": {
    title: "6th Regional Directorate: Procurement of Spare Parts for the İskenderun – Narlı Electrification System",
    desc: "",
    metric: null,
  },
  "6-bolge-mudurlugu-iskenderun-narli-elektrifikasyon-sistemi-icin-5352-a": {
    title: "6th Regional Directorate: Procurement of 5,352 Silicone Insulators for the İskenderun – Narlı Electrification System",
    desc: "",
    metric: "5,352 insulators",
  },
  "ankara-istanbul-yuksek-hizli-tren-1-asama-projesi-2": {
    title: "Ankara–İstanbul High-Speed Rail Phase 1 Project",
    desc: "Partial supply of materials for signalling, SCADA and telecommunication systems within the project scope (207 km double track)",
    metric: "207 km double track",
  },
  "ankara-istanbul-hizli-tren-projesi-2": {
    title: "Ankara–İstanbul High-Speed Rail Project",
    desc: "Supply of materials, excluding cable material, for laying, jointing, earthing and termination of communication, signal, power and fibre-optic cables, together with buried cable trench, concrete cable trough and manhole materials, within the scope of the signalling and telecommunication installation works on the Sincan–Esenkent–Eskişehir high-speed line",
    metric: null,
  },
  "gebze-alifuatpasa-km-158-000-arasi-katener-sistemlerinde-kullanilmak-u": {
    title: "Supply of 160 Y-Stitch Wires 35 mm² BZ II (18 m), 2,000 Droppers 12 mm² BZII (incl. Clamps), 300 Standard Cantilever Assemblies and 50 Tension Insulators for the Catenary Systems between Gebze and Alifuatpaşa (km: 158+000)",
    desc: "",
    metric: null,
  },
  "yuksek-hizli-tren-hatlari-bolge-mudurlugu-ankara-istanbul-2-etap-elekt": {
    title: "High-Speed Rail Lines Regional Directorate: Procurement of Spare Parts for Ankara–İstanbul Stage 2 Electrification",
    desc: "",
    metric: null,
  },
  "107-mm2-seyir-teli-temini-100-km": {
    title: "Supply of 107 mm2 Contact Wire (100 km)",
    desc: "",
    metric: "100 km",
  },
  "6-bolge-narli-cetinkaya-arasi-elektrifikasyon-sistemlerinde-kullanilma": {
    title: "Procurement of Materials for Use in the Narlı–Çetinkaya Electrification Systems, 6th Region",
    desc: "",
    metric: null,
  },
  "3-bolge-elektrifikasyon-sefliklerinde-kullanilmak-uzere-yedek-malzeme-": {
    title: "Procurement of Spare Parts for Use by 3rd Region Electrification Divisions",
    desc: "",
    metric: null,
  },
  "ankara-esenkent-sincan-yuksek-hizli-tren-projesi-ongoing": {
    title: "Ankara (Esenkent–Sincan) High-Speed Rail Project",
    desc: "Infrastructure, superstructure and electrification construction works (25 kV AC, 250 km/h, 32 km double track)",
    metric: "32 km double track",
  },
  "ankara-istanbul-hizli-tren-1-asama-kapsaminda-elektrifikasyon-projesi-": {
    title: "Electrification Project for Ankara–İstanbul High-Speed Rail, Phase 1",
    desc: "(Catenary) (25 kV AC, 250 km/h, 230 km double track)",
    metric: "230 km double track",
  },
  "eskisehir-hasanbey-inonu-yuksek-hizli-tren-projesi-ongoing": {
    title: "Eskişehir (Hasanbey) – İnönü High-Speed Rail Project",
    desc: "Electrification construction works (25 kV AC, 250 km/h, 42 km double track)",
    metric: "42 km double track",
  },
  "eskisehir-kosekoy-ii-etap-yuksek-hizli-tren-projesi-dt-26-by-pass-hatt": {
    title: "Eskişehir–Köseköy Stage II High-Speed Rail Project, DT 26 Bypass Line",
    desc: "Electrification construction works (25 kV AC, 250 km/h, 16 km double track)",
    metric: "16 km double track",
  },
  "ankara-istanbul-yuksek-hizli-tren-1-asama-projesi-ongoing": {
    title: "Ankara – İstanbul High-Speed Rail Phase 1 Project",
    desc: "Civil works, installation and testing of signalling, SCADA and telecommunication systems within the project scope (414 km double track)",
    metric: "414 km double track",
  },
  "ankara-istanbul-hizli-tren-projesi-ongoing": {
    title: "Ankara–İstanbul High-Speed Rail Project",
    desc: "Signalling and telecommunication installation works on the Esenkent–Sincan–Eskişehir high-speed line, together with laying, jointing, earthing and termination of communication, signal, power and fibre-optic cables, and construction of buried cable trenches, concrete cable troughs and manholes (32 km double track)",
    metric: "32 km double track",
  },
};
