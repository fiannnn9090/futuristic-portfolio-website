---
name: Obsidian Cyber-Editorial
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#fabc4e'
  on-tertiary: '#432c00'
  tertiary-container: '#bd871a'
  on-tertiary-container: '#3a2600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#fabc4e'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-precision, refined cyberpunk aesthetic tuned for elite technologists, creative developers, and systems architects. Moving away from chaotic visual noise, retro raster effects, and overt neon cliches, it embraces an austere cyber-editorial language: mathematically balanced whitespace, razor-sharp outlines, obsidian backgrounds, and disciplined electric accents.

### Visual Pillars
- **Calculated Precision:** Monospaced data displays paired with structural typography project high technical acumen without sacrificing visual elegance.
- **Architectural Dark Space:** Deep obsidian voids substitute for decorative background elements, allowing project artifacts, interactive demos, and code structures to command maximum focus.
- **Selective Energy:** Luminescent cyan and saturated violet highlights operate purely as directional cues and focal accents, never as indiscriminate fills.

## Colors

The color system operates on an asymmetric hierarchy: pitch-black obsidian foundations anchor the interface, while electric cyan and vibrant violet punctuate key focal interactions.

### Palette Architecture
- **Obsidian Canvas (`#0a0a0f`):** The ground level for the viewport and dominant backdrops.
- **Substrate Level 1 (`#12121a`):** Interactive cards, structural panels, and module containers.
- **Substrate Level 2 (`#1a1a24`):** Elevated overlays, modal dialogues, floating command palettes, and active hover states.
- **Primary Violet (`#a855f7`):** Editorial highlights, section metadata, badges, and creative work tags.
- **Secondary Electric Cyan (`#00f0ff`):** Terminal status lights, primary interactive triggers, active links, and execution points.
- **Structural Outlines (`rgba(255, 255, 255, 0.08)` / `#222233`):** 1px boundary lines separating content surfaces without introducing visual weight.
- **Text Tiers:** Primary headers and body content leverage high-clarity chalk white (`#f4f4f7`), secondary commentary uses muted pewter (`#9494a8`), and structural metadata uses deep slate (`#525266`).

## Typography

The typography system sets up a dual-engine structural rhythm: **Manrope** provides contemporary, geometric authority for high-impact headlines and narrative signposts, while **JetBrains Mono** provides technical precision across narrative prose, specifications, metrics, and interactive triggers.

### Typesetting Guidelines
- Keep line lengths for `body-lg` between 55 and 70 characters to maintain monospaced reading ease.
- Format all metadata labels, tags, statistics, and timestamps using uppercase characters with `label-sm` or `label-md` and expanded letter-spacing (`0.04em` to `0.08em`).
- Treat numerical readouts, percentages, and benchmark results with monospaced tabular figures to align data across columns cleanly.

## Layout & Spacing

The layout is built around an explicit 12-column modular grid resting inside wide lateral gutters, framing the interface like an editorial engineering schematic.

### Structural Flow
- **Desktop (1024px+):** 12-column grid, 1200px maximum inner container, 24px (`1.5rem`) column gutters, and minimum 48px (`3rem`) lateral viewport margins.
- **Tablet (768px - 1023px):** 8-column layout, 24px (`1.5rem`) gutters, and 32px (`2rem`) outer margins.
- **Mobile (<768px):** 4-column layout, 16px (`1rem`) gutters, and 20px (`1.25rem`) lateral margins. Stack complex interactive cards into singular vertical runs.
- **Rhythm:** Inter-section vertical spacing uses larger multiples (`space-xl` * 2 to 3) to enforce an airy, gallery-grade atmosphere that contrasts with high-density card interiors.

## Elevation & Depth

Spatial hierarchy is achieved through crisp tonal layering and hairline outlines rather than heavy skeuomorphic drop shadows or aggressive blur diffusion.

### Depth Hierarchy
- **Base Surface (`#0a0a0f`):** Canvas bedrock. No borders or shadows.
- **Card Substrates (`#12121a`):** Floating zero-depth layers defined solely by a sharp `1px solid rgba(255, 255, 255, 0.08)` border.
- **Active / Hover State:** On pointer hover, the perimeter border shifts to `rgba(0, 240, 255, 0.4)` with an instantaneous background step to `#1a1a24`.
- **Targeted Neon Glow:** Confined exclusively to focused action elements and high-priority primary triggers. Expressed strictly as `box-shadow: 0 0 15px rgba(0, 240, 255, 0.25)` or `box-shadow: 0 0 15px rgba(168, 85, 247, 0.25)`. Large-radius diffuse background glows must not exceed `0.05` opacity to preserve deep black contrast.

## Shapes

The interface embraces a tight, engineered shape language. Corners feature subtle chamfer-like softening without rounding into playful pills or soft app interfaces.

### Corner System
- **Standard (`0.25rem` / 4px):** Form controls, primary buttons, project tags, code snippet wrappers, and cards.
- **Extended (`0.5rem` / 8px):** Modal dialogs, floating inspector docks, and media viewports.
- **Pill Rule:** Never use fully circular or pill caps (`50%` or `9999px`) except for microscopic status indicators (such as 6px pulsing availability dots).

## Components

### Buttons
- **Primary CTA:** Background `#00f0ff`, text `#0a0a0f`, font `JetBrains Mono` 13px weight 600, border `1px solid #00f0ff`, border-radius `0.25rem`. Shadow `0 0 15px rgba(0, 240, 255, 0.25)`. On hover, background shifts to `#ffffff` with cyan flare `0 0 20px rgba(0, 240, 255, 0.45)`.
- **Secondary CTA:** Background transparent, text `#f4f4f7`, border `1px solid rgba(255, 255, 255, 0.15)`. On hover, border color shifts to `#a855f7` with violet text tint.
- **Ghost Action:** Background transparent, text `#9494a8`, monospaced bracket styling (e.g., `[ view_case_study ]`). On hover, text shifts to `#00f0ff`.

### Tags & Chips
- **Specification Badges:** Background `#12121a`, border `1px solid #222233`, text `#9494a8`, font `JetBrains Mono` 10px, uppercase, letter-spacing `0.08em`, padding `0.25rem 0.5rem`.
- **Status Indicator Chip:** Flex container with a 6px circular dot (`#00f0ff` with subtle pulse animation) alongside a label such as `SYS.READY` or `AVAILABLE_FOR_CONTRACT`.

### Cards & Project Tiles
- Built with background `#12121a`, 1px perimeter border of `rgba(255, 255, 255, 0.08)`, and `space-lg` internal padding.
- Card headers pair a monospaced index counter (e.g., `01 // ARCHITECTURE`) with a `Manrope` title.
- Structural divider lines inside cards are rendered via `1px solid #1a1a24`.

### Input Fields & Controls
- **Inputs:** Background `#0a0a0f`, border `1px solid #222233`, text `#f4f4f7`, font `JetBrains Mono` 13px. Focus state shifts border to `#00f0ff` with a tight `0 0 8px rgba(0, 240, 255, 0.2)` highlight; no browser default outlines.
- **Checkboxes & Radios:** Compact 14px squared frames (`0.25rem` radius) with `1px solid #222233`. Checked state applies an `#a855f7` solid center fill with a high-contrast dark interior mark.

### Lists & Data Tables
- Clean tabular rows separated by `1px solid rgba(255, 255, 255, 0.05)`.
- Key-value metadata displayed with key in `JetBrains Mono` (`#525266`) and value in `#f4f4f7`.
- Hovering over a row triggers a subtle horizontal translate (`translateX(4px)`) paired with a `#00f0ff` leading accent tick mark.