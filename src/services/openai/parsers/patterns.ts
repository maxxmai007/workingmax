export const cardPatterns = {
  cardName: [
    /\*\*Card Name\*\*:\s*(.*?)(?:\n|$)/,
    /recommend the\s+\*\*([^*]+?)\*\*/i,
    /recommendation is the\s+["']([^"']+?)["']/i
  ],
  annualFee: [
    /\*\*Annual Fee\*\*:\s*(.*?)(?:\n|$)/,
    /Annual Fee:\s*(₹[\d,]+)/
  ],
  maxValue: [
    /\*\*Maximum Value of Rewards\*\*:\s*(.*?)(?:\n|$)/,
    /can earn up to\s*(₹[\d,]+)/i,
    /maximum value of\s*(₹[\d,]+)/i
  ],
  applyLink: [
    /\[(?:Apply|Apply Here|Click to Apply)[^\]]*\]\((https?:\/\/[^\s)]+)\)/,
    /Apply Here:\s*(https?:\/\/[^\s)]+)/
  ]
} as const;

export const sectionPatterns = {
  'Real-World Rewards': [
    /## Real-World Rewards\n\n(.*?)(?=\n\n##|$)/s,
    /## Real World Benefits\n\n(.*?)(?=\n\n##|$)/s
  ],
  'Why This Card': [
    /## Why This Card\?\n\n(.*?)(?=\n\n##|$)/s,
    /## Basic Information\n\n(.*?)(?=\n\n##|$)/s
  ],
  'Maximum Value Description': [
    /## Maximum Value Description\n\n(.*?)(?=\n\n##|$)/s,
    /## Maximum Value Details\n\n(.*?)(?=\n\n##|$)/s
  ]
} as const;