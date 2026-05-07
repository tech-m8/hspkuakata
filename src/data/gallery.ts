export type GalleryCategory = "exterior" | "rooms" | "signage";

export type GalleryItem = {
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
  captionKey?: string;
};

export const gallery: GalleryItem[] = [
  { src: "/images/exterior/facade-dusk-1.jpg", width: 1200, height: 1600, category: "exterior" },
  { src: "/images/exterior/facade-dusk-2.jpg", width: 1200, height: 1600, category: "exterior" },
  { src: "/images/exterior/facade-day.jpg", width: 1200, height: 1600, category: "exterior" },
  { src: "/images/exterior/street-view.jpg", width: 1200, height: 1600, category: "exterior" },
  { src: "/images/signage/entrance-sign.jpg", width: 1102, height: 826, category: "signage" },
  { src: "/images/rooms/family-deluxe/twin-bed-marble.jpg", width: 1600, height: 1200, category: "rooms" },
  { src: "/images/rooms/super-deluxe/bed-dressed.jpg", width: 1600, height: 1200, category: "rooms" },
  { src: "/images/rooms/deluxe/bed-balcony.jpg", width: 1600, height: 1200, category: "rooms" },
  { src: "/images/rooms/deluxe/desk-tv.jpg", width: 1600, height: 1200, category: "rooms" },
];
