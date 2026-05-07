export type AmenityIconName =
  | "breakfast"
  | "drink"
  | "water"
  | "wifi"
  | "kettle"
  | "parking"
  | "ac"
  | "tv"
  | "balcony"
  | "frontDesk"
  | "housekeeping"
  | "linens"
  | "bathroom";

export type Amenity = {
  id: string;
  icon: AmenityIconName;
  labelKey: string;
};

export const amenities: Amenity[] = [
  { id: "buffetBreakfast", icon: "breakfast", labelKey: "amenities.items.buffetBreakfast" },
  { id: "welcomeDrink", icon: "drink", labelKey: "amenities.items.welcomeDrink" },
  { id: "water", icon: "water", labelKey: "amenities.items.water" },
  { id: "wifi", icon: "wifi", labelKey: "amenities.items.wifi" },
  { id: "kettle", icon: "kettle", labelKey: "amenities.items.kettle" },
  { id: "parking", icon: "parking", labelKey: "amenities.items.parking" },
  { id: "ac", icon: "ac", labelKey: "amenities.items.ac" },
  { id: "tv", icon: "tv", labelKey: "amenities.items.tv" },
  { id: "balcony", icon: "balcony", labelKey: "amenities.items.balcony" },
  { id: "frontDesk", icon: "frontDesk", labelKey: "amenities.items.frontDesk" },
  { id: "housekeeping", icon: "housekeeping", labelKey: "amenities.items.housekeeping" },
  { id: "linens", icon: "linens", labelKey: "amenities.items.linens" },
];

export const inclusions = [
  { id: "breakfast", icon: "breakfast" as const, labelKey: "inclusions.breakfast" },
  { id: "welcomeDrink", icon: "drink" as const, labelKey: "inclusions.welcomeDrink" },
  { id: "water", icon: "water" as const, labelKey: "inclusions.water" },
  { id: "wifi", icon: "wifi" as const, labelKey: "inclusions.wifi" },
  { id: "kettle", icon: "kettle" as const, labelKey: "inclusions.kettle" },
  { id: "parking", icon: "parking" as const, labelKey: "inclusions.parking" },
];
