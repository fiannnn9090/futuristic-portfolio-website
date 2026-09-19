# Brief Eksekusi: Redesain Portfolio Website (Stitch → Next.js)

## Konteks
Repo existing: `futuristic-portfolio-website` (Next.js 16 + Tailwind v4 + TypeScript + shadcn/ui + framer-motion).
Referensi desain baru: hasil export Google Stitch, tema **"Obsidian Cyber-Editorial"** — cyberpunk minimal, bukan neon-heavy.

Tujuan redesain ini BUKAN cuma ganti tampilan, tapi juga **memperbaiki performa** (lag saat scroll/animasi) yang ada di kode lama. Jangan bawa pola-pola berikut dari kode lama:
- ❌ `window.addEventListener("scroll", ...)` tanpa throttle yang men-trigger `backdrop-blur-xl`
- ❌ Puluhan elemen `motion.div` dianimasikan satu-satu dengan stagger delay individual (mis. grid 84 kotak commit graph)
- ❌ `Math.random()` dipanggil langsung di render tanpa memo
- ❌ Diffuse glow/blur radius besar (`blur-[150px]`) menumpuk di banyak elemen
- ❌ `images.unoptimized: true` tanpa alasan kuat

## Design System (WAJIB diikuti persis)

```
Warna:
  background:        #0a0a0f   (obsidian canvas, ground level)
  card/substrate-1:   #12121a   (card, panel)
  substrate-2:        #1a1a24   (hover/active state)
  primary-violet:      #a855f7   (editorial highlight, badge, tag)
  secondary-cyan:      #00f0ff   (CTA, link aktif, status indikator)
  border:              rgba(255,255,255,0.08) / #222233  (1px hairline, BUKAN shadow tebal)
  text-primary:        #f4f4f7
  text-secondary:      #9494a8
  text-tertiary:       #525266

Tipografi:
  Heading:  Manrope (600–800)
  Body/label/data: JetBrains Mono

Radius: 4px (default: card, button, badge) — 8px (modal/media) — JANGAN pakai pill/rounded-full kecuali micro status dot (6px)

Glow (SANGAT dibatasi):
  Hanya di primary CTA & elemen fokus/hover.
  box-shadow: 0 0 15px rgba(0,240,255,0.25)  → cyan
  box-shadow: 0 0 15px rgba(168,85,247,0.25) → violet
  Large-radius diffuse background glow max opacity 0.05.

Layout: 12-column grid, max-width 1200px, gutter 24px, margin 48px (desktop) / 20px (mobile)
```

## Mapping Section (mockup Stitch → komponen existing)

Header/Navbar (`navbar.tsx`):
- Ganti scroll-based state jadi berbasis `IntersectionObserver` pada sentinel element di atas, BUKAN `window.scrollY` di setiap event scroll. Efek `backdrop-blur-xl` boleh tetap tapi hanya toggle lewat observer (jarang re-render).
- Ganti brand jadi "A." / monogram (pakai logo hasil Stitch, lihat bagian Aset).
- Status chip "AVAILABLE FOR Q3" → ganti teks sesuai status kamu (mis. "OPEN TO WORK").

Hero (`hero-section.tsx`):
- Nama: **Aliffian Alham Maesanjaya** (atau nama panggilan "Fian" jika lebih personal untuk hero besar)
- Role/tagline: fokuskan ke arah baru → contoh: `Full-Stack Developer → Data Analyst/Data Scientist in progress`
- Deskripsi singkat: mahasiswa Teknik Informatika Udinus, terbiasa membangun aplikasi full-stack, sekarang memperdalam analisis data.
- Stat strip: sesuaikan (mis. "4+ Projects Shipped", "Python/SQL", dst — isi sesuai realita, jangan angka fiktif)
- HAPUS `useScroll/useTransform` parallax yang berat kalau tidak signifikan menambah nilai; kalau dipertahankan, batasi ke 1 elemen saja (bukan di setiap sub-elemen hero).

About:
- Foto: placeholder dulu di `/public/profile-photo.jpg` — Fian akan upload foto asli, ukuran disarankan persegi/potret, dioptimasi (`next/image` dengan `unoptimized: false` kalau assetnya nanti berbobot).
- Narasi: gabungkan latar belakang developer + transisi ke data analyst/data scientist. Tekankan software engineering fundamentals sebagai modal analitis (problem solving, SQL/database experience dari project-project backend).

Skills (`skills-section.tsx`):
Restrukturisasi kategori jadi 4 kolom seperti mockup, dengan urutan yang menonjolkan arah baru duluan:
1. **Data & Analytics** (kategori BARU, taruh paling depan): Python, SQL, Excel, Power BI
2. **Core Systems / Backend**: Node.js, Express, PHP, Laravel, MySQL, MongoDB
3. **Frontend**: React, Next.js, TypeScript, Tailwind
4. **Tools & Infra**: Git, Supabase, Docker (isi sesuai yang benar-benar dipakai)

Projects (`projects-section.tsx`) — 3 card, isi dengan project asli, framing diarahkan ke storytelling yang relevan untuk data analyst/data scientist tanpa mengada-ada:

1. **Number Shift** — game puzzle Flutter offline-first
   - Spec badge: `Flutter`, `Dart`, `Offline-first`
   - Highlight: sistem scoring/combo multiplier & deterministic level design (6 Challenge level terkunci) — tunjukkan sisi logika & aturan berbasis data (game rules terdokumentasi di GAME_RULES_FINAL.md)
2. **RAPI — Personal Finance Tracker**
   - Spec badge: `Next.js`, `Capacitor`, `Supabase`
   - Highlight: financial analytics layer (health score gauge, 50/30/20 budget allocation, rule-based advice) — ini paling relevan untuk narasi data analyst, tonjolkan bagian analisis & visualisasi data keuangan
3. **E-Voting Blockchain**
   - Spec badge: `Node.js`, `MySQL`, `RSA-2048`, `Merkle Tree`
   - Highlight: tiga ledger paralel (Vote/Candidate/Audit), integrity validation, dan hasil riset dipublikasikan sebagai naskah jurnal SINTA 3 — tunjukkan sisi rigor akademik/analitis

Achievements:
- Ketua Divisi Free Fire, UKM Esport Universitas Dian Nuswantoro (2023–2025)
- Publikasi jurnal SINTA 3 (dari project E-Voting Blockchain)
- (Isi milestone lain kalau ada — sertifikasi, kompetisi, dsb.)

GitHub Stats & Telemetry (`github-section.tsx`) — **PALING PENTING secara teknis:**
- JANGAN hardcode angka apapun.
- Buat API route `app/api/github-stats/route.ts` yang fetch server-side ke:
  - `https://api.github.com/users/fiannnn9090` (untuk followers, public_repos)
  - `https://api.github.com/users/fiannnn9090/repos?sort=updated&per_page=100` (untuk total stars = sum stargazers_count, bahasa terbanyak, repo terbaru)
- Tampilkan hasil fetch tsb di 4 metric tile + "Recent Repos" (ganti "Recent Commit Feed" fiktif jadi daftar repo yang di-update terakhir, karena GitHub REST API publik tidak expose commit message tanpa auth token per-repo).
- Commit intensity matrix: GANTI dari heatmap fiktif jadi placeholder statis netral (grid abu-abu seragam) DENGAN catatan komentar `{/* TODO: perlu GitHub GraphQL API + token untuk contribution calendar asli, tidak tersedia lewat REST publik */}` — supaya tidak menyesatkan dengan data palsu.
- Beri loading skeleton & error fallback (kalau API rate-limited/gagal fetch, tampilkan pesan graceful, jangan crash).

Gallery/Lab & Experiments:
- Ganti isi jadi cuplikan visual dari project asli (screenshot Number Shift, RAPI, dashboard E-voting) — placeholder dulu kalau screenshot belum ada, styling ikuti card style Stitch (border tipis, bukan glow tebal).

Footer/Contact:
- Update semua link (GitHub: `fiannnn9090`, email, dsb — isi sesuai data asli Fian)

## Aset dari Stitch yang bisa dipakai langsung
- Logo monogram "A" (cyan/violet) → simpan sebagai `/public/logo-monogram.svg`, dipakai di navbar & favicon
- Palet warna & DESIGN.md → jadi acuan `tailwind.config`/`globals.css` (`@theme` block, karena project pakai Tailwind v4)
- Foto portrait di mockup adalah AI-generated placeholder (bukan Fian) — JANGAN dipakai, tunggu upload foto asli

## Checklist Validasi Sebelum Selesai
- [ ] Tidak ada scroll listener yang setState tanpa throttle/observer
- [ ] Tidak ada lebih dari ~10 elemen framer-motion yang dianimasikan individual dalam satu section
- [ ] Semua angka GitHub stats berasal dari fetch API, bukan hardcode
- [ ] Semua nama/project/achievement adalah data asli Fian, tidak ada sisa teks "Kai Vane"/AETHER/NEXUS-OS/CHROMA-SYNTH
- [ ] Build sukses (`npm run build`) tanpa error
- [ ] Cek responsif di breakpoint mobile (375px, 390px) — khususnya grid Skills & Projects
- [ ] Lighthouse performance score dicek sebelum & sesudah untuk validasi bahwa lag berkurang
