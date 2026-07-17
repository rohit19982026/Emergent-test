// Central place for all site copy/branding. Change the name, email, and copy here.
export const brand = {
  name: "Vertex",
  fullName: "Vertex Studio",
  tagline: "Creative craft. Intelligent systems.",
  email: "hello@vertexstudio.co",
  regions: "Serving clients across the US & Europe",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: brand.regions,
  headline: "A creative agency and AI studio, fused into one team.",
  subhead:
    "We produce the marketing content, video, and design that gets you noticed — and build the AI agents and automations that get work done behind the scenes.",
  primaryCta: { label: "Book a call", href: `mailto:${brand.email}` },
  secondaryCta: { label: "See what we do", href: "#services" },
};

export type Service = {
  title: string;
  description: string;
  icon:
    | "PenTool"
    | "Film"
    | "Palette"
    | "TrendingUp"
    | "Bot"
    | "Workflow"
    | "Sparkles"
    | "LifeBuoy";
};

export const servicePillars: {
  id: string;
  label: string;
  title: string;
  description: string;
  services: Service[];
}[] = [
  {
    id: "creative",
    label: "Creative & Marketing",
    title: "Content that earns attention",
    description:
      "End-to-end creative production for brands that need to show up consistently across every channel.",
    services: [
      {
        title: "Marketing Content",
        description:
          "Campaign concepts, copywriting, and content calendars built around what your audience actually engages with.",
        icon: "PenTool",
      },
      {
        title: "Video Editing",
        description:
          "Short-form and long-form edits — social cuts, ads, product videos, and everything in between.",
        icon: "Film",
      },
      {
        title: "Graphic Design",
        description:
          "Brand identity, social templates, ad creative, and visual systems that stay consistent at scale.",
        icon: "Palette",
      },
      {
        title: "Video Strategy",
        description:
          "Platform-specific strategy for YouTube, Shorts/Reels, and paid video — planned around real growth goals.",
        icon: "TrendingUp",
      },
    ],
  },
  {
    id: "tech",
    label: "AI & Automation",
    title: "Systems that run without you",
    description:
      "We design and build the AI agents and automations that take repetitive work off your team's plate.",
    services: [
      {
        title: "AI Agent Automation",
        description:
          "Custom AI agents that handle support, research, reporting, and other recurring work end-to-end.",
        icon: "Bot",
      },
      {
        title: "Workflow Automation",
        description:
          "Connecting your tools and data so information moves automatically instead of by hand.",
        icon: "Workflow",
      },
      {
        title: "Claude Code Agent Skills",
        description:
          "Building custom Claude Code skills, subagents, and workflows tailored to how your team actually works.",
        icon: "Sparkles",
      },
      {
        title: "Ongoing Support",
        description:
          "Hands-on help as your systems evolve — monitoring, iterating, and troubleshooting as you grow.",
        icon: "LifeBuoy",
      },
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your brand, your audience, and where the manual work in your business actually lives.",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "Our creative and technical teams work in parallel — producing content and building your systems together.",
  },
  {
    step: "03",
    title: "Automate",
    description:
      "We wire up the AI agents and workflows so the repeatable parts of your operation run on their own.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "We stay on as a long-term partner, refining creative and automations as your business changes.",
  },
];

export const whyUs = [
  {
    title: "One team, not two vendors",
    description:
      "Your creative partner and your AI/automation partner are the same team — no handoffs, no lost context.",
  },
  {
    title: "Built on Claude Code",
    description:
      "We build directly on modern AI tooling, including custom Claude Code skills, so automations are maintainable and transparent.",
  },
  {
    title: "US & Europe coverage",
    description:
      "We work across US and European time zones, so communication never becomes the bottleneck.",
  },
];

export const contact = {
  title: "Let's build something exceptional.",
  description:
    "Tell us what you're working on — a rebrand, a campaign, an AI agent, or all of the above.",
  email: brand.email,
};
