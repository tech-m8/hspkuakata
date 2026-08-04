export type GalleryCategory = "exterior" | "reception" | "rooms" | "interior" | "dining" | "signage";

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
  { src: "/images/reception/lobby-lounge.jpg", width: 960, height: 1280, category: "reception" },
  { src: "/images/reception/front-desk.jpg", width: 960, height: 1280, category: "reception" },
  { src: "/images/rooms/family-deluxe/twin-bed-marble.jpg", width: 1600, height: 1200, category: "rooms" },
  { src: "/images/rooms/super-deluxe/bed-dressed.jpg", width: 1600, height: 1200, category: "rooms" },
  { src: "/images/rooms/deluxe/bed-marble.jpg", width: 1600, height: 1025, category: "rooms" },
  { src: "/images/rooms/deluxe/desk-wardrobe.jpg", width: 1600, height: 1025, category: "rooms" },
  { src: "/images/rooms/deluxe/tv-wall.jpg", width: 1600, height: 1025, category: "rooms" },
  { src: "/images/rooms/deluxe/bed-angled.jpg", width: 1600, height: 1025, category: "rooms" },
  { src: "/images/rooms/deluxe/room-overview.jpg", width: 1600, height: 1025, category: "rooms" },
  { src: "/images/interior/corridor-303.jpg", width: 1200, height: 1425, category: "interior" },
  { src: "/images/interior/corridor-307.jpg", width: 1200, height: 1425, category: "interior" },
  { src: "/images/interior/corridor-lounge.jpg", width: 1200, height: 1425, category: "interior" },
  { src: "/images/interior/bathroom-vanity.jpg", width: 1200, height: 1425, category: "interior" },
  { src: "/images/interior/bathroom-shower.jpg", width: 1200, height: 1425, category: "interior" },
  { src: "/images/dining/dining-hall.jpg", width: 1600, height: 1025, category: "dining" },
];
