export const WHATSAPP_NUMBER = '2349054833327';
export const PHONE_DISPLAY = '09054833327';
export const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello AgroVision, I would like to register my farm for free under the AgroVision Farm-to-Market Advantage™."
)}`;

export interface PainPoint {
  title: string;
  body: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    title: 'The dictated price.',
    body: 'A buyer arrives when your produce is ready and your pocket is empty — and names the price. You can take it or watch your produce sit.',
  },
  {
    title: 'The invisible farm.',
    body: 'You produce 200kg. Big buyers want 4 tonnes. Your harvest is good — but too small to matter to the people who pay the best prices.',
  },
  {
    title: 'The transport trap.',
    body: 'You hear of a better price two towns away. But by the time you pay for transport, the profit has vanished on the road.',
  },
  {
    title: 'The ticking produce.',
    body: 'No storage, no cold chain. Every day unsold, your harvest loses weight, quality, and value.',
  },
  {
    title: 'The blind spot.',
    body: "You don't know today's price in the city. The buyer does. He negotiates with information. You negotiate with hope.",
  },
  {
    title: 'The forced sale.',
    body: 'Fees are due. Debts are due. The crop is perishable. You are not choosing to sell cheap — the calendar is choosing for you.',
  },
];

export interface FailedSolution {
  lead: string;
  detail: string;
}

export const FAILED_SOLUTIONS: FailedSolution[] = [
  {
    lead: 'Middlemen and dillali',
    detail: 'fast money, terrible prices, and under-weighing no scale of yours gets to correct.',
  },
  {
    lead: 'Cooperatives',
    detail: 'you joined, you contributed… and the leaders ate the money. The group collapsed. You were left holding promises.',
  },
  {
    lead: 'Government schemes and NGO projects',
    detail: 'they arrived with banners, took photographs, and left. Your village never saw the follow-up.',
  },
  {
    lead: 'Taking produce to the city yourself',
    detail: 'you hired a vehicle, spent two days on the road, paid loading and offloading… and the transport ate the margin.',
  },
  {
    lead: 'Storing and waiting for prices to rise',
    detail: 'the produce spoiled, or the price fell further, or storage cost more than the gain.',
  },
];

export interface StepItem {
  stepNumber: string;
  heading: string;
  body: string;
}

export const STEPS: StepItem[] = [
  {
    stepNumber: 'STEP 1',
    heading: 'Register Your Farm (Free).',
    body: 'Contact us on WhatsApp, by phone, or through our field representative. We record your name, location, crops, farm size, expected quantity, and harvest period. You receive a confirmation with your own farmer reference number.',
  },
  {
    stepNumber: 'STEP 2',
    heading: 'We Prepare Your Market.',
    body: 'We review your production details and research buyers whose requirements match your crop, quantity, quality, and location — while your crop is still in the ground.',
  },
  {
    stepNumber: 'STEP 3',
    heading: 'We Pool Your Harvest With Other Farmers.',
    body: 'If a buyer needs 4 tonnes and you have 200kg, we coordinate with other registered farmers growing the same crop. Your 200kg becomes part of a serious, buyer-sized supply. Small farm. Big market access.',
  },
  {
    stepNumber: 'STEP 4',
    heading: 'You Review Written Terms Before Anything Moves.',
    body: 'Price. Quantity. Quality standards. Payment terms. Collection point. Transportation arrangements. Every term is documented and shared with you before you commit your produce. You understand it. You accept it — or you decline it. The choice is yours.',
  },
  {
    stepNumber: 'STEP 5',
    heading: 'Collection, Delivery, Payment.',
    body: "We coordinate collection and transportation through our logistics partners. Your produce moves according to the agreed plan, and payment follows the agreed terms — with follow-up until it's completed.",
  },
];

export interface IncludedRow {
  included: string;
  benefit: string;
  value: string;
}

export const INCLUDED_ROWS: IncludedRow[] = [
  {
    included: 'Farmer Registration & Profiling',
    benefit: 'Your farm, crops, and expected harvest officially on record — with your own reference number',
    value: '₦2,000',
  },
  {
    included: 'Buyer Identification & Matching',
    benefit: 'We find and connect you with wholesalers, processors, and businesses looking for your crop',
    value: '₦10,000',
  },
  {
    included: 'Agricultural Market Information',
    benefit: 'Commodity prices, buyer demand, and market opportunities — negotiate with information, not hope',
    value: '₦5,000',
  },
  {
    included: 'Produce Assessment & Market Preparation',
    benefit: 'Your expected quantity, quality requirements, and buyer readiness prepared ahead of harvest',
    value: '₦5,000',
  },
  {
    included: 'Produce Aggregation Access',
    benefit: 'Your small harvest pooled with other farmers to meet big-buyer volumes',
    value: '₦10,000',
  },
  {
    included: 'Sales & Price Negotiation Support',
    benefit: 'Price, quantity, quality, and payment-term discussions coordinated on documented ground',
    value: '₦7,500',
  },
  {
    included: 'Transportation Coordination',
    benefit: "Collection and delivery arranged through logistics partners — you don't chase trucks alone",
    value: '₦5,000',
  },
  {
    included: 'Agricultural Guidance & Resources',
    benefit: "Practical guidance on farming and post-harvest practices that protect your crop's value",
    value: '₦7,500',
  },
  {
    included: 'Post-Sale Support & Follow-Up',
    benefit: 'Transaction follow-up, feedback, and future market opportunities — season after season',
    value: '₦2,500',
  },
];

export interface UrgencyPoint {
  lead: string;
  detail: string;
}

export const URGENCY_POINTS: UrgencyPoint[] = [
  {
    lead: 'Weeks, not hours, to find buyers',
    detail: 'we research and match while your crop is still growing.',
  },
  {
    lead: 'Time to meet buyer requirements',
    detail: 'quantity, quality, packaging standards communicated early, so you prepare properly.',
  },
  {
    lead: 'Aggregation planned ahead',
    detail: 'we identify farmers growing your crop now, so your 200kg can join a 4-tonne supply by harvest.',
  },
  {
    lead: 'Transport arranged before the rush',
    detail: 'collection points and logistics discussed calmly, not desperately.',
  },
  {
    lead: 'Early Farmer Network status',
    detail: 'our first registered farmers help shape the service and access introductory benefits as they genuinely become available.',
  },
];

export interface GuaranteePoint {
  lead: string;
  detail: string;
}

export const GUARANTEE_POINTS: GuaranteePoint[] = [
  {
    lead: 'Free initial registration',
    detail: 'you join and explore the service with zero upfront cost.',
  },
  {
    lead: 'No hidden charges',
    detail: 'every applicable fee or third-party cost is disclosed before you agree to anything.',
  },
  {
    lead: 'Written transaction agreements',
    detail: 'price, quantity, quality standards, payment terms, logistics, and charges are documented and shared before any commitment.',
  },
  {
    lead: 'Transparent pricing',
    detail: 'you see the proposed selling price and every deduction. You review it. Then you decide.',
  },
  {
    lead: 'Freedom to decline',
    detail: "no offer is forced on you. If the terms don't sit right, you say no. You keep your produce.",
  },
  {
    lead: 'Clear communication',
    detail: 'you always know your registration status, your opportunities, and anything involving your produce.',
  },
  {
    lead: 'Complaint & dispute channel',
    detail: 'a formal process exists for raising concerns and resolving transaction issues.',
  },
  {
    lead: 'Responsible data protection',
    detail: 'your personal and farm information is guarded and never shared beyond what agreed business requires.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '"What will it cost me?"',
    answer:
      'Registration and initial market-access support are free. Any future service charges or third-party costs (like actual vehicle hire) are disclosed and agreed with you before anything happens — in writing. No hidden charges.',
  },
  {
    question: '"I only have 150–200kg. Am I too small?"',
    answer:
      'No. Aggregation is built exactly for you. We combine your produce with other registered farmers to meet big-buyer volumes. Your 200kg becomes part of a serious supply.',
  },
  {
    question: '"When do I get paid?"',
    answer:
      'Payment terms are agreed and documented before the transaction. We follow up until payment is completed according to those terms — not "soon" — the agreed terms.',
  },
  {
    question: '"What if the buyer rejects my produce after I\'ve committed?"',
    answer:
      "Quality standards are agreed and documented before collection. You know exactly what's required before you commit. If there's a dispute, our resolution process addresses it.",
  },
  {
    question: '"How do I know you\'re not another scheme that will vanish?"',
    answer:
      "Fair question. We're new, and we've said so openly on this very page. Judge us by our structure: free registration, written terms before commitment, disclosed charges, your right to decline — and real documented results as they happen.",
  },
  {
    question: '"I don\'t have a smartphone / I\'m not tech-savvy."',
    answer:
      "You don't need to be. Register by phone call or through our field representative who comes to your community. WhatsApp is an option, not a requirement.",
  },
  {
    question: '"My village is far from the tarred road. Will you still reach me?"',
    answer:
      "Tell us your location during registration. We assess reachability honestly — if we can serve your area, we will; if not yet, we'll tell you plainly rather than waste your season.",
  },
  {
    question: '"What if I register and no buyer comes?"',
    answer:
      'Registration means your market preparation starts early — it does not guarantee an instant match. Buyer connections depend on real demand, your crop, quantity, quality, and location. What we guarantee: clear communication about status, and no false promises to keep you hanging.',
  },
  {
    question: '"What do you do with my information?"',
    answer:
      'Your details are used only to serve you — matching, coordination, communication — and protected against unauthorised access or disclosure.',
  },
];
