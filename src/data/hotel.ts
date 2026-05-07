export const hotel = {
  name: "Hotel Silver Pearl",
  city: "Kuakata",
  district: "Patuakhali",
  country: "Bangladesh",
  email: "hspkuakata@gmail.com",
  phones: ["+8801968014750", "+8801942704560"],
  whatsapp: "8801942704560",
  website: "https://hspkuakata.com",
  // Approximate Kuakata center; replace with the hotel's exact coords once owner confirms.
  coordinates: { lat: 21.8167, lng: 90.1167 },
  priceRangeBdt: { min: 2643, max: 3536 },
} as const;

export type HotelInfo = typeof hotel;
