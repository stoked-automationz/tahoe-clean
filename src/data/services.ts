export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export const homeServices: Service[] = [
  {
    title: "Vacation Rentals",
    description: "Turnover cleaning for Airbnb, VRBO, HomeAway & more. Guest-ready every time.",
    icon: "House",
    slug: "vacation-rental-cleaning",
  },
  {
    title: "Handyman Services",
    description: "Home repairs, maintenance, and fixes — we handle it so you don't have to.",
    icon: "Wrench",
    slug: "handyman-services",
  },
  {
    title: "Recurring Cleans",
    description: "Weekly, bi-weekly, or monthly cleaning to keep your home spotless year-round.",
    icon: "CalendarDays",
    slug: "recurring-cleaning",
  },
];

export const allServices: Service[] = [
  {
    title: "Vacation Rental Cleaning",
    description: "Turnover cleaning for Airbnb, VRBO, HomeAway, and FlipKey rentals. We ensure your property is guest-ready with spotless results, restocked supplies, and fresh linens every time.",
    icon: "House",
    slug: "vacation-rental-cleaning",
  },
  {
    title: "Recurring Cleaning",
    description: "Weekly, bi-weekly, or monthly cleaning services for your home or office. Spend more time with your family and let us handle the cleaning.",
    icon: "CalendarDays",
    slug: "recurring-cleaning",
  },
  {
    title: "Handyman Services",
    description: "Home repairs, maintenance tasks, and fixes that you've been putting off. We have the right tools and expertise to get the job done.",
    icon: "Wrench",
    slug: "handyman-services",
  },
  {
    title: "Green Home & Commercial Cleaning",
    description: "Eco-friendly cleaning with green products, HEPA vacuums, and microfiber cloths that protect your health and the environment.",
    icon: "Leaf",
    slug: "green-cleaning",
  },
  {
    title: "Deep Cleaning Service",
    description: "Thorough deep cleaning that reaches every corner — baseboards, behind appliances, inside cabinets, and everywhere in between.",
    icon: "Sparkles",
    slug: "deep-cleaning",
  },
  {
    title: "Post Construction Cleaning",
    description: "Professional cleanup after construction or renovation. We remove dust, debris, and residue to make your newly built or renovated space shine.",
    icon: "HardHat",
    slug: "post-construction-cleaning",
  },
  {
    title: "Snow Removal",
    description: "South Lake Tahoe snow removal services to keep your property safe and accessible during the winter season.",
    icon: "Snowflake",
    slug: "snow-removal",
  },
  {
    title: "Business Moving Cleaning",
    description: "Moving in or out of a commercial space? We provide thorough cleaning services to prepare the space for its next chapter.",
    icon: "Building2",
    slug: "business-moving-cleaning",
  },
  {
    title: "Move-in / Move-out Cleaning",
    description: "Comprehensive vacancy cleaning for residential properties. Leave your old place spotless or move into a fresh, clean home.",
    icon: "PackageOpen",
    slug: "move-in-move-out-cleaning",
  },
];
