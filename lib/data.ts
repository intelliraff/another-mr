export type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: "events" | "registration" | "technical" | "general";
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I register for an upcoming event?",
    answer:
      "Go to the Events section on samagama.in and click 'Register' on any upcoming event. You'll receive a confirmation email after successful registration.",
    category: "events",
  },
  {
    id: 2,
    question: "Can I attend events without prior registration?",
    answer:
      "Most events require pre-registration due to limited capacity. Walk-ins may be allowed for some events at the organizer's discretion.",
    category: "events",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page. Enter your registered email and follow the reset link sent to your inbox.",
    category: "technical",
  },
  {
    id: 4,
    question: "Why is my profile not updating?",
    answer:
      "Clear your browser cache and try again. If the issue persists, try a different browser or raise a support query.",
    category: "technical",
  },
  {
    id: 5,
    question: "How do I get my membership ID?",
    answer:
      "Membership IDs are issued after completing the registration form and paying the membership fee. Check your email inbox — it arrives within a few minutes.",
    category: "registration",
  },
  {
    id: 6,
    question: "Can I transfer my registration to someone else?",
    answer:
      "Registrations are non-transferable. The person registered must attend. Contact the event organizer for special cases.",
    category: "registration",
  },
  {
    id: 7,
    question: "What is Samagama?",
    answer:
      "Samagama is a community platform connecting peers, organizing events, and facilitating knowledge sharing among members.",
    category: "general",
  },
  {
    id: 8,
    question: "How do I contact the core team?",
    answer:
      "Use the 'Raise a Query' page on this platform or email the team at support@samagama.in for direct assistance.",
    category: "general",
  },
  {
    id: 9,
    question: "Are events free to attend?",
    answer:
      "Some events are free and others may have a nominal fee. The event listing always shows whether it's free or paid before you register.",
    category: "events",
  },
  {
    id: 10,
    question: "How long does account verification take?",
    answer:
      "Account verification usually takes 24–48 hours after submitting your details. You'll get an email once your account is verified.",
    category: "registration",
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
