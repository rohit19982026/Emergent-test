// Central place for all site copy/branding. Change the name, email, and copy here.
export const brand = {
  name: "Vertex",
  fullName: "Vertex Studio",
  tagline: "Video editing & graphics agency",
  email: "hello@vertexstudio.co",
  regions: "US & Europe",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// Mixed-style display headlines: each segment renders filled, outline
// (hollow stroke), or lime. Consumed by SectionHeading / Hero.
export type HeadlineSegment = {
  text: string;
  style: "fill" | "outline" | "lime";
};

export const hero = {
  eyebrow: `The video & graphics team behind brands in the ${brand.regions}`,
  headline: [
    { text: "VIDEO", style: "fill" },
    { text: "AGENCY", style: "outline" },
  ] as HeadlineSegment[],
  subhead:
    "Edits, motion graphics & design that stop the scroll — for creators and brands that need to show up every single day.",
  primaryCta: { label: "See our work", href: "#work" },
  secondaryCta: { label: "Email us", href: `mailto:${brand.email}` },
};

// CONFIRM BEFORE LAUNCH — these numbers are conservative drafts, not
// verified figures. Correct them here (one line each) before promoting
// the site anywhere.
export const stats = [
  { value: 150, suffix: "+", label: "Videos delivered" },
  { value: 12, suffix: "+", label: "Brands served" },
  { value: 48, suffix: "h", label: "Avg. turnaround" },
];

export const marqueeItems = [
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "Color Grading",
  "Short-Form Content",
  "Thumbnails",
  "AI Automation",
];

export type Service = {
  title: string;
  description: string;
  icon: "Film" | "Clapperboard" | "Palette" | "Image" | "Smartphone" | "Bot";
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Motion Graphics",
    description:
      "Animated titles, lower thirds, explainers, and brand animations that give static content a pulse.",
    icon: "Clapperboard",
  },
  {
    title: "Video Editing",
    description:
      "Long-form and short-form edits — YouTube, ads, product films, and everything in between, cut to hold attention.",
    icon: "Film",
    featured: true,
  },
  {
    title: "Graphic Design",
    description:
      "Brand identity, social templates, and ad creative built as systems that stay consistent at scale.",
    icon: "Palette",
  },
  {
    title: "Thumbnails & Packaging",
    description:
      "Click-worthy thumbnails, titles, and channel art engineered around what actually gets clicked.",
    icon: "Image",
  },
  {
    title: "Short-Form & Social Cuts",
    description:
      "Reels, Shorts, and TikToks repurposed from your long-form — platform-native pacing, captions, and hooks.",
    icon: "Smartphone",
  },
  {
    title: "AI & Automation",
    description:
      "On the side: AI agents and workflow automation that take repetitive production work off your plate.",
    icon: "Bot",
  },
];

export const about = {
  eyebrow: "Who we are",
  headline: [
    { text: "CRAFT", style: "fill" },
    { text: "MEETS", style: "lime" },
    { text: "OBSESSION.", style: "outline" },
  ] as HeadlineSegment[],
  body: "We're a small team of editors and designers who obsess over the first three seconds, the cut nobody notices, and the thumbnail that earns the click. One team for everything your content needs to look like it matters.",
  checklist: [
    "Platform-native editing for YouTube, Reels, Shorts & TikTok",
    "Fast, predictable turnarounds — most edits back within days",
    "Design systems for thumbnails, templates & brand consistency",
  ],
  tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Figma"],
};

// The statement section replaces the template's testimonial slot with a
// bold claim about the studio itself — no invented client quotes.
export const statement: HeadlineSegment[] = [
  { text: "WE", style: "fill" },
  { text: "ARE", style: "fill" },
  { text: "EDITORS,", style: "lime" },
  { text: "DESIGNERS,", style: "outline" },
  { text: "AND", style: "fill" },
  { text: "STORYTELLERS", style: "lime" },
];

export const workSection = {
  eyebrow: "Our work",
  headline: [
    { text: "OUR WORK", style: "fill" },
    { text: "SPEAKS", style: "lime" },
    { text: "FOR ITSELF.", style: "outline" },
  ] as HeadlineSegment[],
  description: "Real projects, added as they wrap. No stock, no mockups.",
};

export const process = [
  {
    step: "01",
    title: "Brief",
    description:
      "We dig into your channel, brand, and audience — what you need, what's working, and what the content has to do.",
  },
  {
    step: "02",
    title: "Cut",
    description:
      "First edit lands fast. Structure, pacing, and story first — the shape of the piece before the polish.",
  },
  {
    step: "03",
    title: "Polish",
    description:
      "Motion graphics, sound design, color, captions — the layer that makes it feel expensive.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Every format and aspect ratio you need, plus the automations that keep your pipeline running between projects.",
  },
];

export const contact = {
  eyebrow: "Start a project",
  headline: [
    { text: "LET'S MAKE", style: "fill" },
    { text: "SOMETHING", style: "outline" },
    { text: "PEOPLE ACTUALLY WATCH.", style: "lime" },
  ] as HeadlineSegment[],
  description:
    "Tell us what you're working on — a channel, a campaign, a rebrand, or a one-off edit.",
  email: brand.email,
};
