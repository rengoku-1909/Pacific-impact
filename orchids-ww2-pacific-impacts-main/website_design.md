
<high_level_design>
## 1. Brand & Art Direction Overview

This is a historical educational website with a sophisticated, serious tone befitting its subject matter (WW2 Pacific Theater impact). The design employs a **modern, clean aesthetic** with strong typography and a **professional documentary-style presentation**. 

The visual language combines:
- **Dramatic hero sections** with gradient overlays on atmospheric backgrounds
- **Card-based layouts** for organized information presentation
- **Historical photography** integrated as hero images for country sections
- **Clean, spacious layouts** with generous white space
- **Subtle shadows and borders** for depth without distraction
- **Professional color palette** dominated by slate/navy blues with white content areas

The overall impression is **academic yet accessible**, balancing gravitas with modern web design patterns.

## 2. Color Palette (Light Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Background Hero | #3C4C5C → #475569 → #3C4C5C | Hero gradient (slate-900 → slate-800 → slate-900) | Gradient background |
| Text on Hero | #FFFFFF | Hero headings and text | Pure white for contrast |
| Hero Subtitle | #CBD5E1 | Hero subtitle text (slate-200) | Softer white variant |
| Page Background | #FFFFFF | Main content background | Clean white |
| Card Background | #FFFFFF | Card surfaces | White with border |
| Text Primary | #0F172A | Body text, headings | Near-black (slate-900) |
| Text Muted | #64748B | Secondary text, descriptions | Muted gray (slate-500) |
| Border | #E2E8F0 | Card borders, dividers | Light gray (slate-200) |
| Accent/Primary | #0F172A | Buttons, links, active states | Dark slate |
| Button Hover | rgba(15, 23, 42, 0.9) | Primary button hover | 90% opacity primary |
| Secondary Button BG | rgba(255, 255, 255, 0.1) | Hero secondary button | Semi-transparent white |
| Secondary Button Hover | rgba(255, 255, 255, 0.2) | Hero secondary button hover | More opaque white |
| Secondary Button Border | rgba(255, 255, 255, 0.3) | Hero button borders | Subtle white border |
| Accent Hover | #F1F5F9 | Navigation hover, card hover (slate-100) | Very light gray |
| Focus Ring | rgba(15, 23, 42, 0.5) | Focus states | 50% opacity primary |
| Bullet Points | #0F172A | List item bullets | Matches primary |
| Footer Background | #FFFFFF | Footer background | White with border-top |
| Muted Section BG | rgba(241, 245, 249, 0.5) | Alternate section (muted/50) | Very subtle gray tint |

## 3. Typography Scale

**Font Family:**
- Primary: System font stack (appears to use default sans-serif, likely Inter or similar via Next.js)
- Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

**Type Scale:**

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero H1 | 60px (3.75rem) / 72px+ (4.5rem) MD | 700 (bold) | 1.0 | -0.025em (tight) | Main hero heading |
| Hero Subtitle | 20px (1.25rem) / 24px+ (1.5rem) MD | 400 | 1.4 | Normal | Hero description |
| Section H2 | 36px (2.25rem) | 700 (bold) | 1.2 | Normal | Section headings |
| Card Title | 24px (1.5rem) | 600 (semibold) | 1.3 | Normal | Country/card titles |
| Stat Display | 30px (1.875rem) | 700 (bold) | 1.2 | Normal | Statistics numbers |
| Stat Label | 14px (0.875rem) | 400 | 1.4 | Normal | Stat descriptions (muted) |
| Body Large | 18px (1.125rem) | 400 | 1.75 | Normal | Introduction paragraphs |
| Body | 16px (1rem) | 400 | 1.6 | Normal | Card descriptions |
| Body Small | 14px (0.875rem) | 400 | 1.5 | Normal | List items, footer |
| Button Large | 18px (1.125rem) | 500 (medium) | 1 | Normal | Hero CTAs |
| Button | 14px (0.875rem) | 500 (medium) | 1 | Normal | Card buttons |
| Nav Link | 14px (0.875rem) | 500 (medium) | 1 | Normal | Navigation items |
| Logo | 20px (1.25rem) | 700 (bold) | 1 | Normal | Site branding |

## 4. Spacing & Layout Grid

**Container:**
- Max width: ~1280px (container mx-auto)
- Horizontal padding: 16px (1rem) mobile, maintained on desktop

**Spacing Scale (Tailwind-based):**
- xs: 4px (0.25rem)
- sm: 8px (0.5rem)  
- base: 16px (1rem)
- md: 24px (1.5rem)
- lg: 32px (2rem)
- xl: 48px (3rem)
- 2xl: 64px (4rem)
- 3xl: 80px (5rem)

**Section Spacing:**
- Hero height: 600px (37.5rem)
- Section padding Y: 80px (5rem) top/bottom
- Card gap: 32px (2rem)
- Card internal padding: 24px (1.5rem)

**Grid Layouts:**
- Stats cards: 3 columns on MD+ (grid-cols-3)
- Country cards: 2 columns on MD+ (grid-cols-2)
- Gap: 32px (2rem)

**Component Spacing:**
- Heading to content: 24px (1.5rem)
- Paragraph spacing: 16px (1rem)
- Button spacing: 16px (1rem) between buttons
- List item spacing: 8px (0.5rem)

## 5. Visual Effects & Treatments

**Shadows:**
- Card default: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (shadow-sm)
- Card hover: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` (shadow-lg)
- Button: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (shadow-xs)

**Border Radius:**
- Cards: 12px (0.75rem) - rounded-xl
- Buttons: 6px (0.375rem) - rounded-md
- Small elements: 6px (0.375rem)

**Borders:**
- Card borders: 1px solid #E2E8F0
- Nav border: 1px solid (border-b)
- All borders: 1px width

**Backgrounds:**
- Hero gradient: `linear-gradient(to bottom right, #0f172a, #475569, #0f172a)`
- Hero overlay: opacity 20% on background pattern
- Muted section: rgba(241, 245, 249, 0.5)
- Card hover: subtle elevation change

**Transitions:**
- Default: `transition-all` or `transition-shadow`
- Duration: 300ms (implied)
- Easing: ease-in-out (default)
- Button icon translate: `group-hover:translate-x-1`
- Nav dropdown rotate: `group-data-[state=open]:rotate-180` (180deg)

**Focus States:**
- Ring: 3px (ring-[3px])
- Ring color: rgba(15, 23, 42, 0.5) (ring-ring/50)
- Outline: 1px (outline-1)

**Hover Effects:**
- Cards: shadow elevation increase
- Buttons: background opacity change (90%)
- Nav items: background color change
- Arrow icons: translate-x-1

**Backdrop Effects:**
- Nav: `backdrop-blur` with `bg-background/95` and `supports-[backdrop-filter]:bg-background/60`

## 6. Component Styles

### Navigation Bar
- Position: Sticky top-0, z-50
- Background: Semi-transparent white with backdrop blur
- Border: Bottom border
- Height: 64px (4rem) - h-16
- Logo: Bold 20px, left-aligned
- Nav items: 14px medium, rounded-md, hover bg-accent
- Active state: bg-accent/50
- Focus: 3px ring

### Hero Section
- Height: 600px fixed
- Background: Gradient slate-900 → slate-800 → slate-900
- Overlay: 20% opacity pattern
- Text: White, centered
- H1: 60-72px bold, tight tracking
- Subtitle: 20-24px slate-200
- Buttons: Horizontally centered, 16px gap
  - Primary: Dark solid, white text
  - Secondary: White/10 bg, white text, white/30 border

### Stats Cards (3-column)
- Background: White
- Border: 1px light gray
- Padding: 24px vertical, 24px horizontal
- Border radius: 12px
- Shadow: sm
- Text: Centered
- Number: 30px bold
- Label: 14px muted, below number
- Description: 14px muted, small paragraph

### Country Cards (2-column)
- Background: White
- Border: 1px light gray
- Border radius: 12px
- Shadow: sm, hover: lg
- Image: 192px height, cover, top
- Padding: 24px (excluding image)
- Title: 24px semibold
- Description: 16px muted
- List: 8px spacing, bullet points
- Button: Full width, black, white text, arrow icon

### Buttons
**Primary (Dark):**
- Background: #0F172A
- Text: White
- Padding: 10px 24px (h-10, px-6)
- Border radius: 6px
- Shadow: xs
- Hover: 90% opacity
- Font: 14-18px medium

**Secondary (Hero):**
- Background: rgba(255,255,255,0.1)
- Text: White
- Border: 1px rgba(255,255,255,0.3)
- Hover: rgba(255,255,255,0.2)

**With Icon:**
- Arrow icon: 16px, right-aligned
- Transition: translate-x on hover

### Text Blocks
- Max width: 896px (56rem) - max-w-4xl
- Centered: mx-auto
- Paragraph spacing: 16px
- Line height: 1.75 for body
- Color: Muted gray for body

### Footer
- Background: White
- Border top: 1px
- Padding: 48px vertical
- Text: Centered, muted
- Font: 14-16px

### Lists (Bullet Points)
- Bullet: 6px circle (1.5 h-1.5 rounded-full)
- Color: Primary
- Gap: 8px vertical
- Font: 14px
- Flexbox layout with gap-2

## 7. Site Sections (In Order)

1. **Navigation Header**
   - Logo: "WW2 Pacific Impact"
   - Nav items: Home (active), Countries (dropdown trigger), Timeline, About
   - Sticky positioning

2. **Hero Section**
   - Full-width gradient background with overlay
   - Main heading: "The Pacific War's Lasting Impact"
   - Subtitle text
   - Two CTAs: "Learn More" + "Explore Countries"

3. **Understanding Section**
   - White background
   - Section heading: "Understanding the Pacific Theater"
   - Three paragraphs of explanatory text
   - Max-width container, centered

4. **Statistics Cards Section**  
   - White background
   - Three stat cards in horizontal row:
     - "5 Countries Explored"
     - "1945-1955 Critical Decade"
     - "∞ Lasting Legacy"

5. **Countries Explorer Section**
   - Subtle gray background (muted/50)
   - Section heading: "Explore by Country"
   - Grid of 5 country cards (2 columns):
     - Japan (Tokyo street image)
     - China (Great Wall image)
     - Korea (Seoul street image)
     - Vietnam (city skyline image)
     - Thailand (natural landscape image)
   - Each card: Image, title, description, 3 bullet points, CTA button

6. **Footer**
   - White background with top border
   - Copyright notice centered
   - "© 2024 WW2 Pacific Impact. Educational resource exploring historical effects."
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/navigation-bar.tsx</file_path>
    <design_instructions>
Clone the sticky navigation bar with a semi-transparent backdrop blur effect. The navigation should have a white background with 95% opacity, a border-bottom, and support backdrop-filter blur. Layout includes a container with max-width, horizontal padding of 1rem (16px), and a flex layout with space-between alignment. Left side contains the logo text "WW2 Pacific Impact" in bold xl font. Right side contains a horizontal navigation menu with items: "Home" (with active state), "Countries" (with dropdown trigger and chevron-down icon), "Timeline", and "About". Navigation items should have hover states with accent background color, rounded corners, and smooth transitions. The active "Home" link should have a distinct accent background. Use height of 64px (h-16) for the navigation container. Include focus-visible ring states for accessibility with 3px ring width. The bar should be position sticky with top-0 and z-index 50.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
Clone the hero section with a dramatic gradient background featuring wind turbines silhouettes. The section should be 600px height (h-[600px]), using a gradient from slate-900 via slate-800 to slate-900 (bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900). Include an absolute positioned overlay with 20% opacity. Center all content using flex items-center justify-center with relative z-10. The main headline "The Pacific War's Lasting Impact" should be 5xl on mobile, 7xl on desktop (text-5xl md:text-7xl), bold weight (font-bold), with tight tracking (tracking-tight) and 1.5rem bottom margin. Subheading "Exploring how World War II reshaped nations, societies, and futures across the Pacific theater" in xl on mobile, 2xl on desktop (text-xl md:text-2xl), with slate-200 color, max-width 3xl, centered, and 2rem bottom margin. Include two call-to-action buttons in a flex row with 1rem gap and center alignment: primary button "Learn More" with solid background and secondary button "Explore Countries" with white/10 background, white text, and white/30 border. Both buttons should be text-lg, have rounded corners, horizontal padding of 1.5rem, and hover state transformations.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_6.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/understanding-section.tsx</file_path>
    <design_instructions>
Clone the "Understanding the Pacific Theater" content section with white background. The section should have 5rem vertical padding (py-20). Include a container with max-width and horizontal padding of 1rem. Center a max-width-4xl content block with text-center alignment and 4rem bottom margin. The h2 heading "Understanding the Pacific Theater" should be 4xl font size, bold weight, and 1.5rem bottom margin. Below, include three paragraphs of body text in text-lg size, muted-foreground color, relaxed line-height (leading-relaxed), with 1rem vertical spacing (space-y-4), and left-aligned text. The paragraphs discuss WWII's impact on Asian countries covering political, economic, and social transformations. Below the text content, include a grid with three statistic cards (md:grid-cols-3 gap-8) with max-width-5xl and centered. Each card should display: "5" (Countries Explored), "1945-1955" (Critical Decade), and "∞" (Lasting Legacy) with their respective descriptions in smaller muted text below.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/countries-grid-section.tsx</file_path>
    <design_instructions>
Clone the "Explore by Country" section with a light muted background (bg-muted/50) and 5rem vertical padding (py-20). Include centered h2 heading "Explore by Country" in 4xl font, bold weight, with 3rem bottom margin. Create a two-column grid (md:grid-cols-2) with 2rem gap (gap-8) and max-width-6xl centered container. Include five country cards for Japan, China, Korea, Vietnam, and Thailand. Each card should have: (1) A 192px height hero image with background-cover and background-center positioning using the respective country images, (2) Card header with country name in 2xl bold font and a description in base size with muted-foreground color, (3) Card content section with three bullet points listing key impacts (use 1.5px rounded dots with primary background color), (4) A full-width primary button at bottom with "Explore [Country]" text, an arrow-right icon that translates on hover, and group hover states. Cards should have rounded-xl borders, shadow-sm that increases to shadow-lg on hover, with smooth transition-shadow animations. The Thailand card should span both columns on smaller screens to maintain grid balance.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_1.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_2.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_3.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_4.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fa45385a-d1ad-42f1-8ba5-ea5edd8e0eb7-ww2-pacific-impact-tracker-vercel-app/assets/images/images_5.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the minimal footer section with 3rem vertical padding (py-12), white background (bg-background), and top border (border-t). Include a container with max-width and horizontal padding of 1rem. Center-align text with muted-foreground color. Display copyright text: "© 2024 WW2 Pacific Impact. Educational resource exploring historical effects." The footer should be simple, clean, and maintain consistent spacing with the rest of the design system.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
