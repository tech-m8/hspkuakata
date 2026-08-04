export const hotel = {
  name: "Hotel Silver Pearl",
  city: "Kuakata",
  district: "Patuakhali",
  country: "Bangladesh",
  email: "hspkuakata@gmail.com",
  phones: ["+8801968014750", "+8801942704560"],
  whatsapp: "8801942704560",
  website: "https://hspkuakata.com",
  coordinates: { lat: 21.8204, lng: 90.11816 },
  priceRangeBdt: { min: 2475, max: 3301 },
} as const;

export type HotelInfo = typeof hotel;
