export type Branch = {
  id: string; name: string; area?: string; address: string; shortAddress: string;
  phoneDisplay: string; phoneHref: string; whatsapp?: string; hours?: string[]; mapsUrl: string;
};

const maps = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const branches: Branch[] = [
  { id: "union", name: "Unión", address: "Av. 8 de Octubre 3560, 12000 Montevideo", shortAddress: "Av. 8 de Octubre 3560", phoneDisplay: "2506 6704", phoneHref: "tel:+59825066704", mapsUrl: maps("Av. 8 de Octubre 3560, 12000 Montevideo") },
  { id: "curva", name: "Curva", area: "zona Maroñas", address: "Av. 8 de Octubre 4750, 12000 Montevideo", shortAddress: "Av. 8 de Octubre 4750", phoneDisplay: "2514 9272", phoneHref: "tel:+59825149272", mapsUrl: maps("Av. 8 de Octubre 4750, 12000 Montevideo") },
  { id: "carrasco", name: "Carrasco", address: "Av. Bolivia 2885 bis, 11400 Montevideo", shortAddress: "Av. Bolivia 2885 bis", phoneDisplay: "2522 1885", phoneHref: "tel:+59825221885", mapsUrl: maps("Av. Bolivia 2885 bis, 11400 Montevideo") },
];

export const proposal = {
  whatsappDisplay: "+598 97 316 092",
  whatsappUrl: "https://wa.me/59897316092?text=Hola%2C%20vi%20la%20demo%20de%20Veterinaria%20La%20Cruz%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20la%20propuesta.",
  email: "damgmarin13@gmail.com",
  emailUrl: "mailto:damgmarin13@gmail.com?subject=Consulta%20sobre%20demo%20Veterinaria%20La%20Cruz",
};
