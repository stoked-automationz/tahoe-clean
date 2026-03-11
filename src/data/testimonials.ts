export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maureen K.",
    role: "Vacation Rental Owner",
    quote: "This is the first cleaning service that actually cleans things that other cleaning services always overlook. Baseboards, tops of fridge, they remove couch cushions and vacuum. The rentals are always spotless and sanitary for new renters.",
    rating: 5,
  },
  {
    name: "Ryan R.",
    role: "Homeowner",
    quote: "We needed a cleaning service that afternoon. They showed up that day, on time and did a wonderful job. They thorough and paid special attention to detail. They were in and out in two hours.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Property Manager",
    quote: "Tahoe Clean has been our go-to cleaning service for over two years now. They handle all of our vacation rental turnovers and the quality is always consistent. Highly recommend!",
    rating: 5,
  },
];