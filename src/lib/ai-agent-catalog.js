export const MAIN_AGENTS = [
  {
    name: "AI Reservation Agent",
    summary: "Handles incoming table bookings, reservation requests, and syncs directly with your restaurant POS system.",
    subAgents: [
      { name: "Table Booker", description: "Collects guest counts, times, dates, and automatically books tables." },
      { name: "POS Sync", description: "Integrates reservation slots directly with major POS terminals." }
    ]
  },
  {
    name: "AI Receptionist Agent",
    summary: "Answers restaurant phones 24/7, handles questions about opening hours, directions, and menu item availability.",
    subAgents: [
      { name: "FAQ Call Assistant", description: "Answers guest questions dynamically with voice response." },
      { name: "Call Forwarder", description: "Intelligently routes critical calls to manager lines." }
    ]
  },
  {
    name: "AI Order Assistant",
    summary: "Collects takeout and delivery orders directly over chat and voice, handling up-sells automatically.",
    subAgents: [
      { name: "Menu Recommender", description: "Recommends high-margin dishes and pairings based on past orders." },
      { name: "Cart Checkout", description: "Finalizes order list and directs guests to secure checkout links." }
    ]
  }
];

export function slugifyAgentName(name) {
  if (!name) return "";
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getMainAgentProductHref(name) {
  return `/ai-agent/${slugifyAgentName(name)}`;
}
