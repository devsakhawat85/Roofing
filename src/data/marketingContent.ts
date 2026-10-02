export interface ValueItem {
  id: number;
  title: string;
  description: string;
  value: number;
  badge: string;
  previewPoints: string[];
}

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: 1,
    title: "Specialized Keyword List",
    description:
      "We start by creating a keyword list tailored to your services, your area, and current search trends. Using state-of-the-art software, we'll identify the most sought-after Roofing keywords. Then we'll show you which ones are your golden ticket to increased website traffic. (Valued at $197)",
    value: 197,
    badge: "Keyword Intelligence",
    previewPoints: [
      "High-intent buyer keywords (e.g. 'emergency roof replacement')",
      "Localized search volume for your exact zip codes & metro radius",
      "Low-competition golden ticket opportunities for rapid #1 rankings",
    ],
  },
  {
    id: 2,
    title: "Your Current Ranking Snapshot",
    description:
      "We'll provide you with a ranking report and comprehensive competitor analysis showing where you rank for crucial 'money' keywords. (Valued at $97)",
    value: 97,
    badge: "Competitor Intel",
    previewPoints: [
      "Google 3-Pack local map visibility across your primary territory",
      "Direct spy audit on the top 3 competing roofing contractors in your area",
      "Money keyword gap analysis highlighting lost revenue opportunities",
    ],
  },
  {
    id: 3,
    title: "Website Optimization Review",
    description:
      "You'll get a complete analysis of why your website isn't ranking where you want it to be. We'll follow that up with actionable steps to launch your site to the top of search engine lists. (Valued at $97)",
    value: 97,
    badge: "Technical Audit",
    previewPoints: [
      "Core Web Vitals, mobile load speed, and crawlability audit",
      "On-page schema markup check (LocalBusiness, RoofingContractor)",
      "Exact architectural fixes to lift algorithmic penalties or indexing bottlenecks",
    ],
  },
  {
    id: 4,
    title: "Conversion Optimization Analysis",
    description:
      "We'll show you easy to implement strategies to optimize your website and turn your website visitors into paying customers. (Valued at $97)",
    value: 97,
    badge: "Lead Multiplier",
    previewPoints: [
      "Click-to-call mobile ergonomics and instant estimate form placement",
      "Trust trigger and social proof placement (BBB, GAF, Owens Corning)",
      "High-converting headline and call-to-action layout blueprints",
    ],
  },
  {
    id: 5,
    title: "Your Local Internet Marketing Strategy",
    description:
      "You'll get a step-by-step guide tailored to your business, your website, and your service area. This isn't a generic action plan; it's a custom blueprint designed just for you. (Valued at $197)",
    value: 197,
    badge: "Custom Blueprint",
    previewPoints: [
      "Custom 90-day execution roadmap tailored strictly to your capacity",
      "Local Google Business Profile (GBP) dominance checklist",
      "Exclusive territorial game plan so you outrank local competitors",
    ],
  },
];

export const CONTRACTOR_LOGOS = [
  { name: "Apex Peak Roofing", location: "Charlotte, NC", tag: "Residential & Slate" },
  { name: "Summit Shield Exteriors", location: "Austin, TX", tag: "Commercial & Shingle" },
  { name: "IronClad Roof Systems", location: "Denver, CO", tag: "Metal & Storm Restoration" },
  { name: "Vanguard Roofing Group", location: "Atlanta, GA", tag: "Full Replacement" },
  { name: "HighPoint Roofers", location: "Columbus, OH", tag: "Emergency Repair" },
];

export const PROOF_STATS = [
  { metric: "$48M+", label: "Contractor Revenue Generated", sub: "Documented roofer sales" },
  { metric: "3.8x", label: "Average Qualified Lead Spike", sub: "Within 90-120 days" },
  { metric: "100", label: "Roofer Growth Mission", sub: "Dedicated 5-year target" },
  { metric: "100%", label: "Exclusive Service Area", sub: "One roofer per territory" },
];
