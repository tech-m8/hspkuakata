export type RoomFeatureKey =
  | "ac"
  | "tv"
  | "wifi"
  | "wardrobe"
  | "desk"
  | "kettle"
  | "balcony"
  | "bathroom"
  | "view";

export type Room = {
  id: "family-deluxe" | "super-deluxe" | "deluxe";
  nameKey: `rooms.${"familyDeluxe" | "superDeluxe" | "deluxe"}.name`;
  summaryKey: `rooms.${"familyDeluxe" | "superDeluxe" | "deluxe"}.summary`;
  guests: number;
  baseBdt: number;
  discountBdt: number;
  serviceBdt: number;
  vatBdt: number;
  netBdt: number;
  images: { src: string; width: number; height: number; altKey: string }[];
  features: RoomFeatureKey[];
};

export const rooms: Room[] = [
  {
    id: "family-deluxe",
    nameKey: "rooms.familyDeluxe.name",
    summaryKey: "rooms.familyDeluxe.summary",
    guests: 3,
    baseBdt: 4000,
    discountBdt: 1000,
    serviceBdt: 75,
    vatBdt: 461.25,
    netBdt: 3536,
    images: [
      {
        src: "/images/rooms/family-deluxe/twin-bed-marble.jpg",
        width: 1600,
        height: 1200,
        altKey: "rooms.familyDeluxe.name",
      },
    ],
    features: ["ac", "tv", "wifi", "wardrobe", "desk", "kettle", "bathroom", "view"],
  },
  {
    id: "super-deluxe",
    nameKey: "rooms.superDeluxe.name",
    summaryKey: "rooms.superDeluxe.summary",
    guests: 2,
    baseBdt: 3500,
    discountBdt: 875,
    serviceBdt: 65,
    vatBdt: 403.6,
    netBdt: 3094,
    images: [
      {
        src: "/images/rooms/super-deluxe/bed-dressed.jpg",
        width: 1600,
        height: 1200,
        altKey: "rooms.superDeluxe.name",
      },
    ],
    features: ["ac", "tv", "wifi", "wardrobe", "desk", "kettle", "bathroom"],
  },
  {
    id: "deluxe",
    nameKey: "rooms.deluxe.name",
    summaryKey: "rooms.deluxe.summary",
    guests: 2,
    baseBdt: 3000,
    discountBdt: 750,
    serviceBdt: 56.25,
    vatBdt: 337.5,
    netBdt: 2643,
    images: [
      {
        src: "/images/rooms/deluxe/bed-marble.jpg",
        width: 1600,
        height: 1025,
        altKey: "rooms.deluxe.name",
      },
      {
        src: "/images/rooms/deluxe/desk-wardrobe.jpg",
        width: 1600,
        height: 1025,
        altKey: "rooms.deluxe.name",
      },
      {
        src: "/images/rooms/deluxe/tv-wall.jpg",
        width: 1600,
        height: 1025,
        altKey: "rooms.deluxe.name",
      },
    ],
    features: ["ac", "tv", "wifi", "wardrobe", "desk", "kettle", "balcony", "bathroom", "view"],
  },
];
