// Central place for all site copy/branding. Change the name, email, and copy here.
export const brand = {
  name: "Vertex",
  fullName: "Vertex Studio",
  tagline: "Creative studio for video, design, web & AI",
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
  eyebrow: `The creative team behind growing brands in the ${brand.regions}`,
  headline: [
    { text: "CREATIVE", style: "fill" },
    { text: "STUDIO", style: "outline" },
  ] as HeadlineSegment[],
  subhead:
    "Scroll-stopping edits, motion design & brand graphics — backed by the websites and AI systems that turn your content into a growth engine.",
  primaryCta: { label: "See our work", href: "#work" },
  secondaryCta: { label: "Email us", href: `mailto:${brand.email}` },
};

// Hero left rail: the whole offer at a glance, so a cold visitor knows
// every service line within seconds of landing. Numbers live only in the
// bottom StatsBand.
export const heroServices = [
  "Video Editing & Motion",
  "Logos, Posters & Brand",
  "Websites & Apps",
  "AI Agents & Automation",
];

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
  "Logo & Brand Design",
  "Poster & Ad Creative",
  "Short-Form Content",
  "Web Design & Dev",
  "AI Agents",
  "Workflow Automation",
];

export type Service = {
  title: string;
  description: string;
  icon: "Film" | "Clapperboard" | "Palette" | "Smartphone" | "Globe" | "Bot";
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Motion Graphics",
    description:
      "Animated titles, explainers, logo stings, and brand animations that give static content a pulse.",
    icon: "Clapperboard",
  },
  {
    title: "Video Editing",
    description:
      "Long-form and short-form edits — YouTube, ads, product films — cut to hold attention and match how each platform is watched.",
    icon: "Film",
    featured: true,
  },
  {
    title: "Graphic & Brand Design",
    description:
      "Logos, posters, thumbnails, ad creative, and full identity systems — designed once, consistent everywhere.",
    icon: "Palette",
  },
  {
    title: "Short-Form & Social",
    description:
      "Reels, Shorts, and TikToks repurposed from your long-form — native pacing, captions, hooks, and packaging.",
    icon: "Smartphone",
  },
  {
    title: "Websites & Apps",
    description:
      "Design and development of fast, modern sites and apps — from landing page to full product, by the team that already knows your brand.",
    icon: "Globe",
  },
  {
    title: "AI Agents & Automation",
    description:
      "Custom agents and skills embedded into your existing workflow — so the repetitive parts of production, publishing, and ops run themselves.",
    icon: "Bot",
  },
];

// The business narrative for prospects: engagements start with content
// and expand into owned systems — this section is what tells a cold
// visitor how working with us actually unfolds.
export const growthPath = {
  eyebrow: "How engagements grow",
  headline: [
    { text: "START WITH CONTENT.", style: "fill" },
    { text: "SCALE", style: "lime" },
    { text: "INTO SYSTEMS.", style: "outline" },
  ] as HeadlineSegment[],
  steps: [
    {
      step: "01",
      title: "Content",
      description:
        "Most clients start here: a consistent pipeline of edits, motion graphics, and design that makes the brand impossible to ignore.",
    },
    {
      step: "02",
      title: "Brand & Web",
      description:
        "Then we harden what works into assets you own — identity systems, templates, and a website built to convert the audience your content earns.",
    },
    {
      step: "03",
      title: "AI & Automation",
      description:
        "Finally we wire AI agents and custom skills into your workflow, so publishing, repurposing, and ops scale without headcount.",
    },
  ],
};

export const about = {
  eyebrow: "Who we are",
  headline: [
    { text: "CRAFT", style: "fill" },
    { text: "MEETS", style: "lime" },
    { text: "OBSESSION.", style: "outline" },
  ] as HeadlineSegment[],
  body: "We're a small team of editors, designers, and engineers who obsess over the first three seconds, the cut nobody notices, and the workflow that saves you ten hours a week. One team for everything your brand needs to look — and run — like it matters.",
  checklist: [
    "Platform-native editing for YouTube, Reels, Shorts & TikTok",
    "Fast, predictable turnarounds — most edits back within days",
    "Websites, apps & AI agents built by the same team that runs your content",
  ],
  tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "Next.js", "Claude"],
};

// The statement section replaces the template's testimonial slot with a
// bold claim about the studio itself — no invented client quotes.
export const statement: HeadlineSegment[] = [
  { text: "WE", style: "fill" },
  { text: "ARE", style: "fill" },
  { text: "EDITORS,", style: "lime" },
  { text: "DESIGNERS,", style: "fill" },
  { text: "BUILDERS", style: "outline" },
  { text: "&", style: "fill" },
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
      "We dig into your brand, channel, or product — what you need, what's working, and what the work has to do.",
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
    "Tell us what you're working on — a channel, a campaign, a rebrand, a website, or a workflow you want automated.",
  email: brand.email,
};
