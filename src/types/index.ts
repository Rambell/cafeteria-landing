// Menú
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "desayuno" | "almuerzo" | "cafe" | "postres";
  tag?: "popular" | "nuevo" | "vegano";
}

// Galería
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "platos" | "ambiente" | "barista";
}

// Horarios
export interface DaySchedule {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

// Formulario de reserva
export interface ReservaForm {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: number;
  mensaje?: string;
}

// Stats para sección About
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}