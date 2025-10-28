# Diriyah Emergency Mobile Website (Prototype)

A lightweight, mobile‑first bilingual (Arabic/English) site to show **evacuation points** and **emergency contacts** per zone. Numbers are clickable (`tel:` links).

## How to use
1. Open `index.html` on any phone or desktop browser.
2. Pick **English** or **العربية**.
3. Choose your **Zone** → view **Evacuation Point(s)** and **Emergency Contacts**.
4. Tap a number to **call** directly.

## Customize the data
Edit `script.js`:
- Update `DATA.defaults` if you want global emergency numbers.
- Add/modify zones in `DATA.zones`.
- Each zone supports:
  - `evac` array (name, status: `ok|limited|full`, note)
  - `contacts` array (role, name, phone)

## Notes
- This is a static prototype (no backend). You can host it on any static host (Netlify, GitHub Pages, Vercel, S3).
- Map view is a placeholder (ready for future embedding of a real map).
- RTL is supported when Arabic is active.
