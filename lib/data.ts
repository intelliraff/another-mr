export type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: "about" | "timing" | "technical" | "general";
  section?: string;
};

export const faqs: FAQ[] = [
  // About the internship
  {
    id: 1,
    question: "What is the Vicharanashala internship?",
    answer: "A two-month, full-time engagement at the Vicharanashala Lab, a research lab at IIT Ropar. You will work on a real open-source project under a mentor, after a short training phase tailored to where you already are. The internship is free — we do not charge, and the work is real.",
    category: "about",
    section: "About the internship",
  },
  {
    id: 2,
    question: "What is VINS?",
    answer: "VINS is the Vicharanashala Internship — an online programme open to anyone who clears our interview. The work is real open-source contribution under a mentor, the certificate is from the Vicharanashala Lab for Education Design at IIT Ropar, and the programme itself is free (we charge nothing). There is no stipend.",
    category: "about",
    section: "About the internship",
  },
  {
    id: 3,
    question: "What are the phases of VINS, and what do the badges mean?",
    answer: "VINS is structured as four phases. Bronze (Phase 1) — a short training period at the start. Silver (Phase 2) — the main work on a real open-source project. Gold (Phase 3) — a recognition awarded if your contribution is a meaningful feature. Platinum (Phase 4) — an invitation to visit the lab with travel support.",
    category: "about",
    section: "About the internship",
  },
  {
    id: 4,
    question: "Who is the internship for? Are alumni eligible?",
    answer: "The internship is open to all students, including alumni. We prioritize candidates with a strong interest in open-source development and research.",
    category: "about",
    section: "About the internship",
  },
  {
    id: 5,
    question: "Is this the same as IIT Ropar's official Summer Research Internship?",
    answer: "No, this is a separate programme run by the Vicharanashala Lab for Education Design at IIT Ropar. It is not the official summer internship programme.",
    category: "about",
    section: "About the internship",
  },
  {
    id: 6,
    question: "I have to attend my class tomorrow/today/some day — can I take leave?",
    answer: "The internship is a full-time commitment. Plan your academic schedule accordingly. Discuss any scheduling conflicts with your mentor before joining.",
    category: "about",
    section: "About the internship",
  },

  // Timing and dates
  {
    id: 7,
    question: "When can I start?",
    answer: "Start dates vary by cohort and depend on when your mentor is available and when you complete the interview and onboarding process.",
    category: "timing",
    section: "Timing and dates",
  },
  {
    id: 8,
    question: "How long is the internship?",
    answer: "The internship is a two-month, full-time commitment. Some mentors may negotiate flexible schedules based on individual circumstances.",
    category: "timing",
    section: "Timing and dates",
  },
  {
    id: 9,
    question: "Can I start in July, August or later if I have exams now?",
    answer: "Yes, you can apply and interview anytime. Discuss your availability with the programme coordinators, and we'll match you with a mentor when you're ready to start.",
    category: "timing",
    section: "Timing and dates",
  },
  {
    id: 10,
    question: "Can I start with the cohort and take a relaxation during my exam window?",
    answer: "This depends on your mentor and the project timeline. Discuss exam schedules during the interview so we can plan accordingly.",
    category: "timing",
    section: "Timing and dates",
  },
  {
    id: 11,
    question: "Can I take leave or get an exemption during the internship for an exam scheduled in June?",
    answer: "Similar to exams, discuss this upfront with coordinators during the application process. We aim to be flexible, but the internship is a committed full-time programme.",
    category: "timing",
    section: "Timing and dates",
  },
  {
    id: 12,
    question: "Are orientation session recordings shared with interns, and can project assignments be changed after watching them?",
    answer: "Yes, recordings are shared with interns. Project assignments may be adjusted if there's a strong reason, but discuss this with your mentor early in the internship.",
    category: "timing",
    section: "Timing and dates",
  },

  // Technical (legacy - keep for compatibility)
  {
    id: 13,
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page. Enter your registered email and follow the reset link sent to your inbox.",
    category: "technical",
  },
  {
    id: 14,
    question: "Why is my profile not updating?",
    answer: "Clear your browser cache and try again. If the issue persists, try a different browser or raise a support query.",
    category: "technical",
  },
];

export const categoryColors: Record<string, string> = {
  events:       "bg-emerald-50 text-emerald-700 border-emerald-200",
  registration: "bg-amber-50 text-amber-700 border-amber-200",
  technical:    "bg-blue-50 text-blue-700 border-blue-200",
  general:      "bg-gray-100 text-gray-600 border-gray-200",
};

export const aiResponses: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["register", "registration", "sign up", "enroll", "event"],
    answer:
      "To register for an event, go to the Events section on samagama.in and click 'Register'. You'll get a confirmation email right after.",
  },
  {
    keywords: ["password", "forgot", "reset", "login", "sign in"],
    answer:
      "To reset your password, click 'Forgot Password' on the login page and follow the link sent to your email. It expires in 24 hours.",
  },
  {
    keywords: ["membership", "member id", "id", "card"],
    answer:
      "Membership IDs are issued after registration and payment are complete. Check your inbox — it should arrive within a few minutes.",
  },
  {
    keywords: ["samagama", "what is", "about", "platform"],
    answer:
      "Samagama is a community platform for peers to connect, attend events, and share knowledge together.",
  },
  {
    keywords: ["profile", "update", "not working", "bug", "error"],
    answer:
      "Try clearing your browser cache and refreshing. If that doesn't help, try a different browser or raise a query and we'll investigate.",
  },
  {
    keywords: ["contact", "team", "support", "help", "reach"],
    answer:
      "You can reach the core team via the 'Raise a Query' page here, or email support@samagama.in directly.",
  },
  {
    keywords: ["transfer", "someone else", "friend", "give"],
    answer:
      "Registrations are non-transferable. The registered person must attend. For special cases, contact the event organizer.",
  },
  {
    keywords: ["free", "cost", "fee", "price", "paid"],
    answer:
      "Some events are free and others have a nominal fee. The event listing always shows the price before you register.",
  },
  {
    keywords: ["verify", "verification", "account", "pending"],
    answer:
      "Account verification takes 24–48 hours after submitting your details. You'll receive an email once it's done.",
  },
];
