// --- Data (replace numbers with real ones) ---
const DATA = {
  defaults: {
    ambulance: "997",
    civilDefense: "998",
    police: "999",
  },
  zones: [
    {
      id: "albujairi",
      name_en: "AlBujairi",
      name_ar: "البجيري",
      evac: [
        { name_en: "Main Plaza Assembly", name_ar: "ساحة التجمع الرئيسية", status: "ok", note_en: "Follow green route markers", note_ar: "اتبع العلامات الخضراء" }
      ],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000001" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    {
      id: "minzal",
      name_en: "Minzal",
      name_ar: "منزل",
      evac: [{ name_en: "Gate 2 Assembly", name_ar: "نقطة تجمع بوابة ٢", status: "limited", note_en: "Use secondary path if crowded", note_ar: "استخدم المسار البديل عند الازدحام" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000002" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "al-murrayeh", name_en: "Al-Murrayeh (Layali AlDiriyah)", name_ar: "المريّة (ليالي الدرعية)",
      evac: [{ name_en: "Parking B Assembly", name_ar: "تجمع مواقف ب", status: "ok", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000003" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "adhwaihrah", name_en: "Adhwaihrah", name_ar: "الذويهره",
      evac: [{ name_en: "Service Lane Assembly", name_ar: "نقطة تجمع الممر الخدمي", status: "limited", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000004" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "wadi-safar", name_en: "Wadi Safar", name_ar: "وادي صفار",
      evac: [{ name_en: "Terrace Assembly", name_ar: "تجمع التراس", status: "ok", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000005" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "altawalie", name_en: "AlTawalie", name_ar: "الطوالي",
      evac: [{ name_en: "Visitor Center Assembly", name_ar: "تجمع مركز الزوار", status: "ok", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000006" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "at-turaif", name_en: "At‑Turaif", name_ar: "الطُريف",
      evac: [{ name_en: "North Gate Assembly", name_ar: "تجمع البوابة الشمالية", status: "full", note_en: "Use Gate 3 overflow", note_ar: "استخدم بوابة ٣ عند الازدحام" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000007" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "samhan-shamalat", name_en: "Samhan & Shamalat", name_ar: "سمحان وشملات",
      evac: [{ name_en: "Main Roundabout Assembly", name_ar: "تجمع الدوار الرئيسي", status: "ok", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Health & Safety Manager", role_ar: "مدير الصحة والسلامة", name: "—", phone: "+966500000008" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    },
    { id: "eoc", name_en: "EOC", name_ar: "مركز العمليات (EOC)",
      evac: [{ name_en: "EOC Assembly", name_ar: "تجمع مركز العمليات", status: "ok", note_en: "", note_ar: "" }],
      contacts: [
        { role_en: "Duty Officer", role_ar: "مسؤول المناوبة", name: "—", phone: "+966500000009" },
        { role_en: "Ambulance", role_ar: "الإسعاف", phone: "997" },
        { role_en: "Civil Defense", role_ar: "الدفاع المدني", phone: "998" }
      ]
    }
  ]
};

// --- i18n strings ---
const I18N = {
  en: {
    title: "Emergency & Safety",
    subtitle: "Choose your language",
    findZone: "Find Your Zone",
    listView: "List view",
    mapView: "Map view",
    searchZones: "Search zones…",
    mapPlaceholder: "Map coming soon. Use the list view for now.",
    contacts: "Emergency Contacts",
    evacPoints: "Evacuation Point(s)",
    callAmbulance: "Call Ambulance",
    callCivil: "Call Civil Defense",
    locate: "Locate",
    lang: "العربية",
    status_ok: "Open",
    status_limited: "Busy",
    status_full: "Full"
  },
  ar: {
    title: "الطوارئ والسلامة",
    subtitle: "اختر اللغة",
    findZone: "اختر منطقتك",
    listView: "عرض القائمة",
    mapView: "عرض الخريطة",
    searchZones: "ابحث عن منطقة…",
    mapPlaceholder: "الخريطة قريباً، استخدم عرض القائمة الآن.",
    contacts: "جهات الاتصال للطوارئ",
    evacPoints: "نقاط الإخلاء",
    callAmbulance: "اتصال بالإسعاف",
    callCivil: "اتصال بالدفاع المدني",
    locate: "المناطق",
    lang: "English",
    status_ok: "متاح",
    status_limited: "ازدحام",
    status_full: "ممتلئ"
  }
};

let currentLang = "en";

// Helpers
function $(sel){ return document.querySelector(sel); }
function el(tag, cls){ const e = document.createElement(tag); if(cls) e.className = cls; return e; }

// Screens navigation
function go(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

// Language set
function setLang(lang){
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // swap text
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (dict[key]) node.setAttribute("placeholder", dict[key]);
  });

  // rebuild lists to reflect language
  renderZoneList();
  const title = $("#zoneTitle");
  if(title && title.dataset.id){
    const z = DATA.zones.find(z => z.id === title.dataset.id);
    if(z) renderZone(z);
  }
}

function statusBadge(status){
  const span = el("span", "badge");
  if(status === "ok"){ span.classList.add("ok"); span.textContent = I18N[currentLang].status_ok; }
  else if(status === "limited"){ span.classList.add("limited"); span.textContent = I18N[currentLang].status_limited; }
  else { span.classList.add("full"); span.textContent = I18N[currentLang].status_full; }
  return span;
}

// Render zones list
function renderZoneList(){
  const list = $("#zoneList");
  list.innerHTML = "";
  const term = ($("#zoneSearch").value || "").toLowerCase();

  DATA.zones.forEach(z => {
    const name = currentLang === "ar" ? z.name_ar : z.name_en;
    if(term && !name.toLowerCase().includes(term)) return;

    const item = el("button", "zone-item");
    item.addEventListener("click", () => { renderZone(z); go("screen-zone"); });
    const title = el("div");
    title.innerHTML = `<div class="title" style="font-weight:800">${name}</div>
      <div class="muted" style="font-size:12px">${(currentLang==='ar'?'منطقة فعالية':'Event Zone')}</div>`;
    item.appendChild(title);

    // status based on first evac point
    const s = (z.evac?.[0]?.status) || "ok";
    item.appendChild(statusBadge(s));
    list.appendChild(item);
  });
}

// Render zone details
function renderZone(z){
  const title = $("#zoneTitle");
  title.textContent = currentLang === "ar" ? z.name_ar : z.name_en;
  title.dataset.id = z.id;

  const evacList = $("#evacList");
  evacList.innerHTML = "";
  (z.evac || []).forEach(p => {
    const li = el("li", "evac-item");
    const row = el("div"); row.style.display="flex"; row.style.justifyContent="space-between"; row.style.alignItems="center";
    const name = el("div"); name.style.fontWeight="800";
    name.textContent = currentLang === "ar" ? p.name_ar : p.name_en;
    row.appendChild(name);
    row.appendChild(statusBadge(p.status));
    li.appendChild(row);

    const meta = el("div","evac-meta");
    if(p.note_en || p.note_ar){
      const chip = el("span","chip");
      chip.textContent = currentLang === "ar" ? p.note_ar : p.note_en;
      meta.appendChild(chip);
    }
    li.appendChild(meta);
    evacList.appendChild(li);
  });

  const contacts = $("#contactList");
  contacts.innerHTML = "";
  (z.contacts || []).forEach(c => {
    const row = el("div","contact");
    const left = el("div");
    const role = currentLang === "ar" ? c.role_ar : c.role_en;
    left.innerHTML = `<div style="font-weight:800">${role}${c.name ? ' • ' + c.name : ''}</div>
                      <div class="muted" style="font-size:12px">${c.phone}</div>`;
    row.appendChild(left);
    const call = el("a");
    call.href = `tel:${c.phone}`;
    call.textContent = currentLang === "ar" ? "اتصال" : "Call";
    row.appendChild(call);
    contacts.appendChild(row);
  });
}

// --- Event wiring ---
document.addEventListener("DOMContentLoaded", () => {
  // Splash language select
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      go('screen-zones');
    });
  });

  // Back buttons
  document.querySelectorAll('.back').forEach(b => b.addEventListener('click', e => go(b.dataset.go)));

  // Segmented control
  document.querySelectorAll('.seg').forEach(s => s.addEventListener('click', e => {
    document.querySelectorAll('.seg').forEach(x=>x.classList.remove('active'));
    s.classList.add('active');
    const isMap = s.dataset.view === 'map';
    document.getElementById('mapPlaceholder').classList.toggle('hidden', !isMap);
    document.getElementById('zoneList').style.display = isMap ? 'none' : 'grid';
  }));

  document.getElementById('zoneSearch').addEventListener('input', renderZoneList);

  document.getElementById('toggleLang').addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'ar' : 'en');
  });

  // Initial render
  setLang('en');
  renderZoneList();
});

