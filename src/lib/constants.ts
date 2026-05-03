import { MenuItem, DaySchedule, Stat, GalleryImage } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  // Desayuno
  { id: "d1", name: "Tostadas de Palta", description: "Pan artesanal, palta, huevo pochado, semillas y microgreens", price: 8900, category: "desayuno", tag: "popular" },
  { id: "d2", name: "Pancakes de Avena", description: "Pancakes esponjosos con miel de abeja, frutos rojos y crema", price: 9500, category: "desayuno", tag: "vegano" },
  { id: "d3", name: "Bowl Açaí", description: "Base de açaí, granola casera, plátano, frutillas y miel", price: 8200, category: "desayuno" },
  { id: "d4", name: "Huevos Benedictinos", description: "Muffin inglés, jamón artesanal, huevos pochados y salsa holandesa", price: 10900, category: "desayuno", tag: "nuevo" },

  // Almuerzo
  { id: "a1", name: "Bowl de Quinoa", description: "Quinoa, vegetales asados, hummus, pepino y aderezo tahini", price: 11500, category: "almuerzo", tag: "vegano" },
  { id: "a2", name: "Sándwich Caprese", description: "Pan ciabatta, mozzarella fresca, tomate heirloom, albahaca y pesto", price: 9800, category: "almuerzo" },
  { id: "a3", name: "Ensalada Menta", description: "Mix de hojas, salmón ahumado, palta, pepino y vinagreta de limón", price: 12900, category: "almuerzo", tag: "popular" },
  { id: "a4", name: "Wrap de Pollo", description: "Tortilla integral, pollo a la plancha, lechuga, tomate y yogurt de hierbas", price: 10200, category: "almuerzo" },

  // Café
  { id: "c1", name: "Flat White", description: "Doble espresso con leche vaporizada sedosa, ratio 1:2", price: 4200, category: "cafe", tag: "popular" },
  { id: "c2", name: "Cold Brew", description: "Café extraído en frío por 18 horas, servido sobre hielo", price: 4800, category: "cafe" },
  { id: "c3", name: "Matcha Latte", description: "Matcha ceremonial japonés con leche de avena vaporizada", price: 5200, category: "cafe", tag: "nuevo" },
  { id: "c4", name: "Espresso Tónico", description: "Doble espresso sobre agua tónica con cáscara de naranja", price: 4900, category: "cafe" },

  // Postres
  { id: "p1", name: "Cheesecake de Maracuyá", description: "Base de galleta, crema de queso y coulis de maracuyá", price: 6500, category: "postres", tag: "popular" },
  { id: "p2", name: "Brownie Vegano", description: "Brownie de chocolate 70%, nueces y helado de coco", price: 5800, category: "postres", tag: "vegano" },
];

export const HORARIOS: DaySchedule[] = [
  { day: "Lunes", open: "08:00", close: "18:00" },
  { day: "Martes", open: "08:00", close: "18:00" },
  { day: "Miércoles", open: "08:00", close: "18:00" },
  { day: "Jueves", open: "08:00", close: "20:00" },
  { day: "Viernes", open: "08:00", close: "20:00" },
  { day: "Sábado", open: "09:00", close: "21:00" },
  { day: "Domingo", open: "09:00", close: "17:00" },
];

export const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Años de historia" },
  { value: 120, suffix: "k", label: "Visitas al año" },
  { value: 40, suffix: "+", label: "Platos en carta" },
  { value: 98, suffix: "%", label: "Clientes felices" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/tostadas.jpg", alt: "Tostadas de palta con huevo pochado", category: "platos" },
  { id: "g2", src: "/images/gallery/ambiente1.jpg", alt: "Interior cálido de Menta & Café", category: "ambiente" },
  { id: "g3", src: "/images/gallery/flatwhite.jpg", alt: "Flat white con latte art", category: "barista" },
  { id: "g4", src: "/images/gallery/bowl.jpg", alt: "Bowl de açaí con granola", category: "platos" },
  { id: "g5", src: "/images/gallery/ambiente2.jpg", alt: "Mesa junto a la ventana", category: "ambiente" },
  { id: "g6", src: "/images/gallery/barista.jpg", alt: "Barista preparando espresso", category: "barista" },
];

export const LOCAL_INFO = {
  nombre: "Menta & Café",
  direccion: "Av. Providencia 1234, Providencia, Santiago",
  telefono: "+56 9 1234 5678",
  email: "hola@mentaycafe.cl",
  instagram: "@mentaycafe",
  maps_url: "https://maps.google.com/?q=Av.+Providencia+1234+Santiago",
  maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9!2d-70.6!3d-33.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzQ4LjAiUyA3MMKwMzYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890",
};