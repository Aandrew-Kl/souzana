import type { IconName } from "@/lib/icons"
import { assetPath } from "@/lib/asset"

export type ContentImage = {
  src: string
  alt: string
}

export type NavItem = {
  href: string
  label: string
}

export type PracticeArea = {
  title: string
  shortDescription: string
  icon: IconName
  slug: string
  bullets: string[]
}

export type TeamMember = {
  name: string
  title: string
  bullets: string[]
  image: ContentImage
}

export type PostBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }

export type Post = {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  image: ContentImage
  content: PostBlock[]
}

export type PrivacySection = {
  title: string
  items: string[]
}

export const site = {
  name: "Σουζάνα Κλημεντίδη",
  city: "Αθήνα",
  url: "https://www.souzana-klimentidi.gr",
  nav: [
    { href: "/practice-areas", label: "Τομείς" },
    { href: "/team", label: "Ομάδα" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Επικοινωνία" },
  ] satisfies NavItem[],
  contact: {
    address: "Βασιλίσσης Σοφίας 12, 106 74 Αθήνα",
    hours: "Δευ–Παρ 09:00–18:00",
    phone: "+30 210 000 0000",
    email: "contact@souzana-klimentidi.gr",
  },
  seo: {
    title: "Σουζάνα Κλημεντίδη | Δικηγορικό Γραφείο Αθήνα",
    description:
      "Νομική υποστήριξη με σαφήνεια, διακριτικότητα και υπεύθυνη επικοινωνία από την πρώτη επαφή.",
  },
  legal: {
    footer: [
      "Η παρούσα ιστοσελίδα παρέχει γενική ενημέρωση και δεν συνιστά νομική συμβουλή.",
      "Η αποστολή μηνύματος δεν δημιουργεί σχέση εντολέα–δικηγόρου.",
    ],
    message:
      "Η αποστολή μηνύματος δεν δημιουργεί σχέση εντολέα–δικηγόρου.",
  },
}

export const home = {
  hero: {
    eyebrow: "ΑΘΗΝΑ",
    title: "Νομική υποστήριξη με σαφήνεια και διακριτικότητα",
    subtitle:
      "Σύντομη εκτίμηση, καθαρό πλάνο και υπεύθυνη επικοινωνία από την πρώτη επαφή.",
    primaryCta: { label: "Κλείστε συνάντηση", href: "/contact" },
    secondaryCta: { label: "Οι τομείς μας", href: "/practice-areas" },
    trustLine:
      "Σαφής εκτίμηση υπόθεσης και υπεύθυνη επικοινωνία από την πρώτη επαφή.",
    image: {
      src: assetPath("/images/hero.jpg"),
      alt: "Διακριτικό γραφειακό περιβάλλον με νομικές λεπτομέρειες",
    },
  },
  practicePreview: {
    eyebrow: "Τομείς",
    title: "Επιλεγμένοι τομείς με καθαρή προσέγγιση",
    description: "Σύντομη κάλυψη, σαφή βήματα, πρακτική καθοδήγηση.",
    ctaLabel: "Δείτε όλους τους τομείς",
    ctaHref: "/practice-areas",
    image: {
      src: assetPath("/images/practice-1.jpg"),
      alt: "Διακριτική εικόνα δικαστικού χώρου",
    },
  },
  teamPreview: {
    eyebrow: "Ομάδα",
    title: "Μικρή ομάδα, προσωπική συνεργασία",
    description: "Σταθερό σημείο επαφής και υπεύθυνη συνέχεια σε κάθε υπόθεση.",
    ctaLabel: "Γνωρίστε την ομάδα",
    ctaHref: "/team",
  },
  trust: {
    eyebrow: "Τρόπος δουλειάς",
    title: "Σαφής διαδικασία, ήρεμος ρυθμός",
    description: "Εστιάζουμε στην πρόληψη και στη σαφή επικοινωνία.",
    bullets: [
      "Σαφής αποτύπωση επιλογών και ρίσκου από νωρίς.",
      "Έμφαση στην πρόληψη πριν γίνει διαφορά.",
      "Υπεύθυνη επικοινωνία και τήρηση χρονοδιαγραμμάτων.",
    ],
  },
  finalCta: {
    title: "Ας ξεκινήσουμε με μια σύντομη συζήτηση",
    description:
      "Στείλτε μήνυμα ή κλείστε συνάντηση για να δούμε το επόμενο βήμα.",
    ctaLabel: "Κλείστε συνάντηση",
    ctaHref: "/contact",
  },
}

export const practiceAreas: PracticeArea[] = [
  {
    title: "Εταιρικό Δίκαιο & Συμβάσεις",
    shortDescription:
      "Δομημένες συμβάσεις και καθαροί όροι για καθημερινές και σύνθετες συνεργασίες.",
    icon: "Briefcase",
    slug: "corporate-contracts",
    bullets: [
      "Σύνταξη και έλεγχος συμβάσεων",
      "Συμφωνίες συνεργασίας και προμηθειών",
      "Σταθερή νομική υποστήριξη",
    ],
  },
  {
    title: "Ακίνητα & Μισθώσεις",
    shortDescription:
      "Νομικός έλεγχος και ασφαλείς συμφωνίες για επαγγελματικά και ιδιωτικά ακίνητα.",
    icon: "Landmark",
    slug: "real-estate-leases",
    bullets: [
      "Έλεγχος τίτλων και βαρών",
      "Μισθώσεις επαγγελματικών χώρων",
      "Συμβάσεις αγοραπωλησίας",
    ],
  },
  {
    title: "Εργατικό Δίκαιο",
    shortDescription:
      "Υποστήριξη σε εργασιακές σχέσεις με καθαρές διαδικασίες και τεκμηρίωση.",
    icon: "Users",
    slug: "employment",
    bullets: [
      "Συμβάσεις εργασίας",
      "Εσωτερικοί κανονισμοί",
      "Διαχείριση διαφορών",
    ],
  },
  {
    title: "Αστικό Δίκαιο & Διαφορές",
    shortDescription:
      "Επίλυση διαφορών με έμφαση στην προετοιμασία και στη στρατηγική.",
    icon: "Gavel",
    slug: "civil-disputes",
    bullets: [
      "Απαιτήσεις και οφειλές",
      "Διαπραγμάτευση πριν τη δίκη",
      "Δικαστική εκπροσώπηση",
    ],
  },
  {
    title: "Οικογενειακό Δίκαιο",
    shortDescription:
      "Διακριτική υποστήριξη σε οικογενειακά ζητήματα με σεβασμό και σαφήνεια.",
    icon: "Handshake",
    slug: "family-law",
    bullets: [
      "Συναινετικά διαζύγια",
      "Ρυθμίσεις επικοινωνίας",
      "Συμφωνίες γονικής μέριμνας",
    ],
  },
  {
    title: "Κανονιστική Συμμόρφωση & GDPR",
    shortDescription:
      "Πρακτικές διαδικασίες συμμόρφωσης με έμφαση στη λειτουργικότητα.",
    icon: "ShieldCheck",
    slug: "compliance-gdpr",
    bullets: [
      "Χαρτογράφηση δεδομένων",
      "Πολιτικές απορρήτου",
      "Εκπαίδευση ομάδων",
    ],
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "Σουζάνα Κλημεντίδη",
    title: "Δικηγόρος",
    bullets: [
      "Εταιρικό δίκαιο & συμβάσεις",
      "Στρατηγική επίλυση διαφορών",
      "Ελληνικά, Αγγλικά",
    ],
    image: {
      src: assetPath("/images/team-1.jpg"),
      alt: "Πορτρέτο της Σουζάνα Κλημεντίδη",
    },
  },
  {
    name: "Ανδρέας Παπαγεωργίου",
    title: "Συνεργάτης",
    bullets: ["Ακίνητα & μισθώσεις", "Συμβάσεις", "Ελληνικά, Αγγλικά"],
    image: {
      src: assetPath("/images/team-2.jpg"),
      alt: "Προσωρινή εικόνα συνεργάτη",
    },
  },
  {
    name: "Μαρία Ιωάννου",
    title: "Συνεργάτιδα",
    bullets: ["Εργατικό δίκαιο", "Εσωτερικές πολιτικές", "Ελληνικά, Αγγλικά"],
    image: {
      src: assetPath("/images/team-3.jpg"),
      alt: "Προσωρινή εικόνα συνεργάτη",
    },
  },
  {
    name: "Νίκος Λεβέντης",
    title: "Συνεργάτης",
    bullets: ["Αστικό δίκαιο", "Διαφορές", "Ελληνικά, Αγγλικά"],
    image: {
      src: assetPath("/images/team-4.jpg"),
      alt: "Προσωρινή εικόνα συνεργάτη",
    },
  },
]

export const posts: Post[] = [
  {
    title: "Τι να προσέξετε πριν υπογράψετε μια σύμβαση",
    slug: "symvasi-prin-ypografi",
    date: "2025-12-03",
    category: "Συμβάσεις",
    excerpt:
      "Τρία σημεία που μειώνουν παρερμηνείες και ενισχύουν τη σαφήνεια.",
    image: {
      src: assetPath("/images/insights-1.jpg"),
      alt: "Σημειώσεις πάνω σε νομικά έγγραφα",
    },
    content: [
      {
        type: "paragraph",
        text: "Μια σύμβαση είναι χρήσιμη όταν είναι καθαρή, εφαρμόσιμη και συμβατή με την πραγματική συνεργασία.",
      },
      { type: "heading", level: 2, text: "Ορισμοί και ρόλοι" },
      {
        type: "paragraph",
        text: "Ορίστε με σαφήνεια τους ρόλους, τα αντικείμενα και τις ευθύνες των μερών.",
      },
      {
        type: "list",
        items: [
          "Περιγράψτε το αντικείμενο χωρίς ασάφειες",
          "Καθορίστε ευθύνες και προθεσμίες",
          "Ορίστε μηχανισμούς τροποποίησης",
        ],
      },
      { type: "heading", level: 2, text: "Λύση και αποχώρηση" },
      {
        type: "paragraph",
        text: "Προβλέψτε καθαρούς όρους λύσης ώστε να μειωθεί το ρίσκο σύγκρουσης.",
      },
    ],
  },
  {
    title: "Βασικά σημεία σε μισθώσεις επαγγελματικών ακινήτων",
    slug: "misthoseis-epaggelmatikon-akiniton",
    date: "2025-10-10",
    category: "Ακίνητα",
    excerpt: "Οι όροι που επηρεάζουν κόστος, διάρκεια και ευελιξία.",
    image: {
      src: assetPath("/images/insights-2.jpg"),
      alt: "Σύγχρονο επαγγελματικό κτήριο",
    },
    content: [
      {
        type: "paragraph",
        text: "Οι μισθώσεις επηρεάζουν την καθημερινή λειτουργία μιας επιχείρησης και απαιτούν σαφή όρια.",
      },
      { type: "heading", level: 2, text: "Διάρκεια και αναπροσαρμογές" },
      {
        type: "paragraph",
        text: "Ορίστε πλαίσιο αναπροσαρμογής και ευελιξία σε περίπτωση μεταβολών.",
      },
      {
        type: "list",
        items: [
          "Ρήτρες πρόωρης λύσης",
          "Κατανομή εξόδων",
          "Χρόνος παράδοσης",
        ],
      },
    ],
  },
  {
    title: "Πρακτικά βήματα σε εργατική διαφορά: τι ισχύει",
    slug: "ergatiki-diafora-vimata",
    date: "2025-09-12",
    category: "Εργατικό",
    excerpt: "Σύντομος οδηγός για ψύχραιμη αξιολόγηση και σωστή προετοιμασία.",
    image: {
      src: assetPath("/images/insights-3.jpg"),
      alt: "Συνάντηση σε γραφείο",
    },
    content: [
      {
        type: "paragraph",
        text: "Η ψύχραιμη αξιολόγηση και η σωστή τεκμηρίωση είναι τα πρώτα βήματα σε μια εργατική διαφορά.",
      },
      { type: "heading", level: 2, text: "Συλλογή στοιχείων" },
      {
        type: "paragraph",
        text: "Καταγράψτε χρονολόγιο, βασικά γεγονότα και σχετικά έγγραφα.",
      },
      {
        type: "list",
        items: [
          "Χρονολογική αποτύπωση",
          "Σχετική αλληλογραφία",
          "Εκτίμηση πιθανών εκβάσεων",
        ],
      },
    ],
  },
]

export const pages = {
  practice: {
    eyebrow: "Τομείς",
    title: "Τομείς με καθαρή, πρακτική καθοδήγηση",
    description:
      "Εστιάζουμε σε ζητήματα όπου η ακρίβεια και η πρόληψη ρίσκου είναι κρίσιμες.",
    ctaTitle: "Ας συζητήσουμε το κατάλληλο επόμενο βήμα",
    ctaDescription:
      "Στείλτε μήνυμα για μια αρχική αξιολόγηση με σαφή πλαίσιο και χρονοδιάγραμμα.",
    ctaLabel: "Επικοινωνία",
    ctaHref: "/contact",
  },
  team: {
    eyebrow: "Ομάδα",
    title: "Προσωπική συνεργασία, καθαρή γραμμή",
    description:
      "Μικρή ομάδα με σαφή ρόλους και σταθερό σημείο επαφής.",
  },
  insights: {
    eyebrow: "Insights",
    title: "Σύντομες σημειώσεις για κρίσιμα νομικά θέματα",
    description: "Καθαρή γλώσσα, πρακτικά σημεία, χωρίς υπερβολές.",
    note:
      "Το παρόν κείμενο είναι ενημερωτικό και δεν συνιστά νομική συμβουλή.",
    relatedLabel: "Σχετικά άρθρα",
  },
  contact: {
    eyebrow: "Επικοινωνία",
    title: "Στείλτε μας το θέμα σας συνοπτικά",
    description:
      "Θα απαντήσουμε με σαφή εικόνα για τα επόμενα βήματα.",
    consentText: "Με την αποστολή συμφωνείτε με την",
    successMessage: "Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε σύντομα.",
    officeImage: {
      src: assetPath("/images/office.jpg"),
      alt: "Αίθουσα συναντήσεων του γραφείου",
    },
  },
  privacy: {
    title: "Πολιτική Απορρήτου",
    intro:
      "Σύντομη ενημέρωση για τον τρόπο που διαχειριζόμαστε τα δεδομένα επικοινωνίας σας.",
    sections: [
      {
        title: "Τι συλλέγουμε",
        items: [
          "Ονοματεπώνυμο και στοιχεία επικοινωνίας",
          "Πληροφορίες που μας στέλνετε μέσω της φόρμας",
        ],
      },
      {
        title: "Γιατί το συλλέγουμε",
        items: [
          "Για να απαντήσουμε στο αίτημά σας",
          "Για να αξιολογήσουμε αν μπορούμε να αναλάβουμε την υπόθεση",
        ],
      },
      {
        title: "Πόσο το κρατάμε",
        items: [
          "Μόνο για όσο απαιτείται για την επικοινωνία και τη νόμιμη τεκμηρίωση",
        ],
      },
      {
        title: "Δικαιώματα χρήστη",
        items: [
          "Πρόσβαση, διόρθωση ή διαγραφή των δεδομένων",
          "Επικοινωνία για οποιοδήποτε αίτημα",
        ],
      },
      {
        title: "Επικοινωνία",
        items: [
          "Για ερωτήσεις σχετικά με το απόρρητο, επικοινωνήστε μαζί μας.",
        ],
      },
    ] satisfies PrivacySection[],
  },
}
