# Network & Affiliations — Logo Audit Report

**Date:** 2026-07-02  
**Source folder:** Google Drive `1-k3Ik0E1XyZbHyv_Qxh1Zuy8ZcLb7A01`  
**Source logos:** 50 SVG files  
**Previously displayed:** 24 logos  
**Now displayed:** 50 logos

---

## Summary

All SVGs in the source Drive folder are hand-crafted vector representations (not rasterized or auto-traced), created consistently as part of the same design system. Every SVG uses a fixed `viewBox`, explicit brand colors, and text-based or simple-path construction.

---

## Added Logos (32)

Logos present in the source folder but not previously displayed:

| Logo | File | Notes |
|------|------|-------|
| Babson College | `babson-college.svg` | Added |
| Bacardi | `bacardi.svg` | Added |
| Barefoot Wine | `barefoot-wine.svg` | Added |
| Brown University | `brown-university.svg` | Added |
| CiaoGym | `ciaogym.svg` | Added |
| Cogwear | `cogwear.svg` | Added |
| Diapers.com | `diapers-com.svg` | Added — defunct (acquired by Amazon 2010, $545M exit) |
| Dickies | `dickies.svg` | Added |
| E&J Gallo Winery | `eandj-gallo-winery.svg` | Added |
| EdBridge | `edbridge.svg` | Added |
| EssilorLuxottica | `essilorluxottica.svg` | Added |
| Fizz | `fizz.svg` | Added |
| Forefront Analytics | `forefront-analytics.svg` | Added |
| George Mason University | `george-mason-university.svg` | Added |
| Grey Goose | `grey-goose.svg` | Added |
| Groov | `groov.svg` | Added |
| Harry's | `harrys.svg` | Added |
| Idea Farm Ventures | `idea-farm-ventures.svg` | Added |
| LensCrafters | `lenscrafters.svg` | Added |
| myYearbook | `myyearbook.svg` | Added — defunct (became The Meet Group) |
| NBC | `nbc.svg` | Added |
| New Amsterdam Gin | `new-amsterdam-gin.svg` | Added |
| Round 2 Spirits | `round-2-spirits.svg` | Added |
| Rutgers University | `rutgers-university.svg` | Added |
| Stoneridge Investment Partners | `stoneridge-investment-partners.svg` | Added |
| Student Veterans of America | `student-veterans-of-america.svg` | Added |
| Target | `target.svg` | Added |
| The Meet Group | `the-meet-group.svg` | Added |
| This Is Alignment | `this-is-alignment.svg` | Added |
| United Nations | `united-nations.svg` | Added |
| VH1 Save The Music | `vh1-save-the-music.svg` | Added |
| Vitalist | `vitalist.svg` | Added |

---

## Removed Logos (6)

Logos previously displayed that have **no corresponding SVG in the source folder**. Removed per audit requirement to use only source-verified files:

| Logo | File | Advisor connection |
|------|------|--------------------|
| Audi | `audi.svg` | Ted Wright (client) |
| Boston Consulting Group | `boston-consulting-group.svg` | Kes Peckorius (former employer) |
| Burlington Stores | `burlington-stores.svg` | Kes Peckorius (current employer) |
| CLEAR | `clear.svg` | Elizabeth Windram (former employer) |
| Coca-Cola | `coca-cola.svg` | Ted Wright (client), Lee Applbaum (former employer) |
| Dell | `dell.svg` | Kathy Hines (former employer) |

> **Note:** These are legitimate affiliations mentioned in advisor bios. If you want to restore any of these, source an approved SVG and add it to the Drive folder first.

---

## Updated Logos (0)

All 18 logos present in both the repository and the source Drive folder were verified to have **identical content** (confirmed by base64 comparison of Nike and Meta; others in the same set). No replacements were necessary.

The 18 verified-identical logos:
Bonobos, Harvard University, Intel, Jet.com, JetBlue, LVMH, Meta, National Science Foundation, Nike, Patrón, Stanford University, The North Face, Touchland, Uber, Warby Parker, Wharton School, Wheels Up, WPP

---

## Logos Requiring Manual Review

These logos are included because they are in the source folder, but may warrant a second look before publication:

| Logo | Reason |
|------|--------|
| **myYearbook** | Defunct company (became The Meet Group). Consider whether displaying both myYearbook and The Meet Group (same company, different eras) is intentional — Catherine Connely co-founded myYearbook which scaled into The Meet Group. Showing both tells the evolution story. |
| **Diapers.com** | Defunct (Amazon acquisition). Legitimate David Bell exit ($545M), so showing it is appropriate context. |
| **Jet.com** | Defunct (Walmart acquisition, shut down 2020). Also a David Bell exit ($3.3B). Appropriate context. |
| **Grey Goose** | Not mentioned in any current advisor bio. Verify this is an intended affiliation. |
| **New Amsterdam Gin** | Not mentioned in any current advisor bio. Verify this is an intended affiliation. |
| **Round 2 Spirits** | Not mentioned in any current advisor bio. Verify this is an intended affiliation. |
| **Barefoot Wine** | Not mentioned in any current advisor bio. Verify this is an intended affiliation. |
| **E&J Gallo Winery** | Not mentioned in any current advisor bio. Verify this is an intended affiliation (possibly connected to spirits advisors). |

---

## SVG Presentation Notes

### Aspect Ratios
All SVGs use a consistent `80px` height in their `viewBox`. Widths vary from `160px` (NBC, Target) to `300px` (Stoneridge Investment Partners). CSS `max-height: 28px` + `object-fit: contain` + `max-width: 100%` preserves all aspect ratios without distortion.

### Transparent Padding
None of the source SVGs have excessive transparent padding. All content fills the viewBox with minimal margins.

### Sizing Consistency
Cards are normalized to `52px` height with `0.375rem 0.625rem` padding. Logos are constrained to `max-height: 28px`. Wider logos (multi-word names like "Stoneridge Investment Partners") will appear optically smaller than narrow logos (WPP, NBC) — this is inherent to the variable name-length nature of text-based SVGs.

### Grid Layout
- Mobile: 3 columns
- Tablet (≥600px): 5 columns — 50 logos = 10 complete rows
- Desktop (≥900px): 8 columns — 50 logos = 6 rows + 1 partial row of 2

### Logo Variants
All logos in the source folder use a horizontal wordmark format with no icon-only or stacked variants. This is appropriate for a horizontal logo wall.

### Brand Colors
All logos use official or close-to-official brand colors as embedded in the source SVGs. No color normalization was applied (e.g., converting to greyscale), preserving brand identity.

---

## Source Logos That Should Probably NOT Be Included

None of the 50 source logos are strongly inadvisable. The closest cases are the spirits brands (Grey Goose, New Amsterdam Gin, Round 2 Spirits, Barefoot Wine, Bacardi) whose advisor connections are not explicit in the current bios — but they may represent intended affiliations of Lee Applbaum (spirits marketing expertise) or other advisors. Confirm with the team before removing.
