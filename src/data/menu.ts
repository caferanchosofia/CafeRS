export type VenueId = "cafe" | "crepe" | "bikery";

export type Variant = {
  label: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  variants?: Variant[];
  tag?: string;
  popular?: boolean;
};

export type Category = {
  id: string;
  name: string;
  kicker: string;
  blurb: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

export type Venue = {
  id: VenueId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accent: "gold" | "pink" | "mint";
  categories: Category[];
};

export type EnrichedItem = MenuItem & {
  venueId: VenueId;
  venueName: string;
  categoryId: string;
  categoryName: string;
};

export const IMG = {
  latteArt:
    "https://images.pexels.com/photos/10206600/pexels-photo-10206600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  barista:
    "https://images.pexels.com/photos/34255748/pexels-photo-34255748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  cappuccino:
    "https://images.pexels.com/photos/27638178/pexels-photo-27638178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  coffeeDark:
    "https://images.pexels.com/photos/26953408/pexels-photo-26953408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  crepeSweet:
    "https://images.pexels.com/photos/23833880/pexels-photo-23833880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  crepeBerries:
    "https://images.pexels.com/photos/6732239/pexels-photo-6732239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  crepeSavory:
    "https://images.pexels.com/photos/11094175/pexels-photo-11094175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  crepeSavoryTwo:
    "https://images.pexels.com/photos/20582728/pexels-photo-20582728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  frappe:
    "https://images.pexels.com/photos/23708982/pexels-photo-23708982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  vacaLola: "/vaca-lola.jpg",
  smoothies:
    "https://images.pexels.com/photos/8394976/pexels-photo-8394976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  smoothiesTwo:
    "https://images.pexels.com/photos/33516474/pexels-photo-33516474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  naturals:
    "https://images.pexels.com/photos/12119029/pexels-photo-12119029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  pinkDrink:
    "https://images.pexels.com/photos/18142610/pexels-photo-18142610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  dragonFruit:
    "https://images.pexels.com/photos/18467148/pexels-photo-18467148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  pancakes:
    "https://images.pexels.com/photos/7937382/pexels-photo-7937382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  pancakesTwo:
    "https://images.pexels.com/photos/37648012/pexels-photo-37648012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  panini:
    "https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  paniniTwo:
    "https://images.pexels.com/photos/17804208/pexels-photo-17804208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  churros:
    "https://images.pexels.com/photos/12035620/pexels-photo-12035620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  waffles:
    "https://images.pexels.com/photos/20081528/pexels-photo-20081528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  strawberriesCream:
    "https://images.pexels.com/photos/17633037/pexels-photo-17633037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  tea:
    "https://images.pexels.com/photos/30335661/pexels-photo-30335661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  teaGlass:
    "https://images.pexels.com/photos/7565515/pexels-photo-7565515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  cafeInterior:
    "https://images.pexels.com/photos/11439363/pexels-photo-11439363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300",
  cafeBar:
    "https://images.pexels.com/photos/4551158/pexels-photo-4551158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300",
  brownie:
    "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  cheesecake:
    "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=850&w=1000",
  bikeryLogo: "/ranchos-bikery-logo.jpg",
} as const;

export const VENUES: Venue[] = [
  {
    id: "cafe",
    name: "Café Rancho Sofía",
    shortName: "Rancho Sofía",
    tagline: "Café de especialidad",
    description:
      "Espresso, lattes y bebidas frías preparadas al momento. Granos seleccionados y recetas de la casa.",
    accent: "gold",
    categories: [
      {
        id: "calientes",
        name: "Bebidas calientes",
        kicker: "Espresso & clásicos",
        blurb:
          "El punto de partida de cada mañana. Espresso extraído con paciencia y leche vaporizada al momento.",
        image: IMG.cappuccino,
        imageAlt: "Taza de café caliente con espuma cremosa",
        items: [
          {
            id: "cal-espresso",
            name: "Espresso",
            description: "Intenso, corto y honesto. Nuestro blend de la casa.",
            price: 45,
            popular: true,
          },
          {
            id: "cal-americano-8",
            name: "Americano 8 oz",
            description: "Espresso alargado con agua caliente.",
            price: 50,
          },
          {
            id: "cal-americano-10",
            name: "Americano 10 oz",
            description: "Espresso alargado con agua caliente.",
            price: 55,
          },
          {
            id: "cal-americano-12",
            name: "Americano 12 oz",
            description: "Espresso alargado con agua caliente.",
            price: 65,
          },
          {
            id: "cal-cappuccino-8",
            name: "Cappuccino 8 oz",
            description: "Espresso con leche vaporizada y una corona de espuma.",
            price: 70,
          },
          {
            id: "cal-cappuccino-10",
            name: "Cappuccino 10 oz",
            description: "Espresso con leche vaporizada y una corona de espuma.",
            price: 75,
            popular: true,
          },
          {
            id: "cal-cappuccino-12",
            name: "Cappuccino 12 oz",
            description: "Espresso con leche vaporizada y una corona de espuma.",
            price: 80,
          },
          {
            id: "cal-caramel-cappuccino",
            name: "Caramel Cappuccino",
            description: "Cappuccino con dulce de caramelo y un toque de sal.",
            price: 90,
            tag: "Favorito",
          },
        ],
      },
      {
        id: "lattes",
        name: "Lattes & Mocas",
        kicker: "Cremosos y suaves",
        blurb:
          "Leche sedosa, espresso equilibrado y ese arte en la taza que hace todo mejor.",
        image: IMG.barista,
        imageAlt: "Barista sirviendo un latte con arte en la leche",
        items: [
          {
            id: "lat-latte-8",
            name: "Latte 8 oz",
            description: "Espresso con leche vaporizada.",
            price: 70,
          },
          {
            id: "lat-latte-10",
            name: "Latte 10 oz",
            description: "Espresso con leche vaporizada.",
            price: 75,
          },
          {
            id: "lat-latte-12",
            name: "Latte 12 oz",
            description: "Espresso con leche vaporizada.",
            price: 80,
          },
          {
            id: "lat-saborizante",
            name: "Latte con Saborizante",
            description: "Escoge tu favorito: vainilla, caramelo o avellana.",
            price: 85,
          },
          {
            id: "lat-ranchero",
            name: "Latte Ranchero",
            description:
              "Nuestra receta insignia: espresso, leche cremosa y un toque secreto de la casa.",
            price: 90,
            popular: true,
            tag: "La casa",
          },
          {
            id: "lat-moca",
            name: "Café Moca",
            description: "Espresso, chocolate y leche vaporizada.",
            price: 75,
          },
          {
            id: "lat-moca-blanco",
            name: "Moca Blanco",
            description: "Chocolate blanco, espresso y leche cremosa.",
            price: 90,
          },
          {
            id: "lat-chai",
            name: "Chai Latte",
            description: "Té de especias con leche vaporizada. Cálido y aromático.",
            price: 90,
          },
          {
            id: "lat-chocolate",
            name: "Chocolate Caliente",
            description: "Chocolate espeso con crema batida opcional.",
            price: 80,
          },
        ],
      },
      {
        id: "frias",
        name: "Bebidas frías",
        kicker: "Frappés & iced",
        blurb:
          "Generosas, heladas y con ese remate de crema batida que nunca falla.",
        image: IMG.vacaLola,
        imageAlt: "Vaca Lola de Café Rancho Sofía en vaso mason, con crema, Oreo y chocolate",
        items: [
          {
            id: "fri-vaca-lola",
            name: "Vaca Lola",
            description: "Nuestro clásico cremoso. Pregunta por el tamaño doble.",
            variants: [
              { label: "12 oz", price: 100 },
              { label: "16 oz", price: 120 },
            ],
            popular: true,
            tag: "Más pedido",
          },
          {
            id: "fri-frappe-cafe",
            name: "Frappé de Café",
            description: "Café frío licuado con hielo y crema.",
            price: 90,
          },
          {
            id: "fri-frappe-horchata",
            name: "Frappé de Horchata",
            description: "Horchata cremosa, helada y llena de canela.",
            price: 90,
          },
          {
            id: "fri-frappe-coco",
            name: "Frappé de Coco",
            description: "Coco, hielo y crema. Refrescante de principio a fin.",
            price: 100,
            popular: true,
          },
          {
            id: "fri-latte",
            name: "Latte Frío",
            description: "Espresso y leche fría con hielo.",
            price: 80,
          },
          {
            id: "fri-moca",
            name: "Moca Frío",
            description: "Espresso, chocolate y leche sobre hielo.",
            price: 80,
          },
          {
            id: "fri-malteada",
            name: "Malteada de Chocolate",
            description: "Helado de vainilla, chocolate y crema batida.",
            price: 95,
          },
          {
            id: "fri-chai",
            name: "Chai Latte Frío",
            description: "Especias chai con leche fría.",
            variants: [
              { label: "12 oz", price: 95 },
              { label: "16 oz", price: 110 },
            ],
          },
          {
            id: "fri-iced-caramel",
            name: "Iced Caramel",
            description: "Café helado con caramelo y leche cremosa.",
            variants: [
              { label: "12 oz", price: 95 },
              { label: "16 oz", price: 110 },
            ],
          },
          {
            id: "fri-iced-tea",
            name: "Iced Tea",
            description: "Té frío con limón, ligero y refrescante.",
            price: 75,
          },
        ],
      },
      {
        id: "smoothies",
        name: "Smoothies",
        kicker: "Fruta natural",
        blurb:
          "Fruta de verdad, licuada al momento. Elige tu color y tu antojo.",
        image: IMG.smoothies,
        imageAlt: "Smoothies de frutas coloridos servidos en vasos",
        items: [
          { id: "smo-fresa", name: "Fresa", description: "Fresa fresca con un toque de azúcar.", price: 95 },
          { id: "smo-sandia", name: "Sandía", description: "Refrescante y ligero.", price: 85 },
          { id: "smo-pina", name: "Piña", description: "Dulce y tropical.", price: 85 },
          { id: "smo-melon", name: "Melón", description: "Suave, dulce y fresco.", price: 85 },
          { id: "smo-arandanos", name: "Arándanos", description: "Intenso, ligeramente ácido.", price: 95 },
          {
            id: "smo-pitaya",
            name: "Pitaya",
            description: "Color vibrante y sabor delicado. El favorito de Instagram.",
            price: 95,
            popular: true,
            tag: "Favorito",
          },
          { id: "smo-fresa-limon", name: "Fresa Limón", description: "Dulce con un golpe cítrico.", price: 100 },
          { id: "smo-menta-limon", name: "Menta Limón", description: "Fresco y aromático.", price: 100 },
          { id: "smo-mango-chamoy", name: "Mango Chamoy", description: "Dulce, ácido y picante.", price: 100 },
          { id: "smo-fresa-chamoy", name: "Fresa Chamoy", description: "El balance perfecto entre dulce y picante.", price: 100 },
          { id: "smo-chicle", name: "Chicle", description: "Dulce, rosado y nostálgico.", price: 95 },
        ],
      },
      {
        id: "naturales",
        name: "Bebidas naturales",
        kicker: "Frescas y ligeras",
        blurb:
          "Jugos naturales y limonadas preparadas al momento, sin atajos.",
        image: IMG.naturals,
        imageAlt: "Bebidas naturales de frutas y limonada",
        items: [
          { id: "nat-limonada", name: "Limonada", description: "Limón recién exprimido y agua fría.", price: 75 },
          { id: "nat-fresa-limon", name: "Fresa Limón", description: "Fresa, limón fresco y un toque de miel.", price: 90 },
          { id: "nat-menta-limon", name: "Menta Limón", description: "Limón, menta fresca y hielo.", price: 85 },
          { id: "nat-fresa", name: "Fresa", description: "Fresa natural licuada.", price: 85 },
          { id: "nat-pina", name: "Piña", description: "Piña fresca y agua fría.", price: 80 },
          { id: "nat-melon", name: "Melón", description: "Melón dulce recién licuado.", price: 80 },
          { id: "nat-sandia", name: "Sandía", description: "Sandía fresca y refrescante.", price: 80 },
        ],
      },
      {
        id: "bobas",
        name: "Bobas smoothies",
        kicker: "Con perlas de fruta",
        blurb:
          "Smoothies con textura: perlas de jelly y sabores que se sienten al beber.",
        image: IMG.pinkDrink,
        imageAlt: "Boba smoothie rosado con hielo",
        items: [
          {
            id: "bob-cereza",
            name: "Cereza (Jelly Ranch)",
            description: "Smoothie de cereza con perlas de jelly.",
            price: 90,
            popular: true,
            tag: "Nuevo",
          },
          {
            id: "bob-manzana",
            name: "Manzana Verde (Blueberry)",
            description: "Manzana verde con perlas de blueberry.",
            price: 90,
          },
          {
            id: "bob-maracuya",
            name: "Maracuyá",
            description: "Ácido, tropical y con perlas de fruta.",
            price: 90,
          },
        ],
      },
      {
        id: "tes",
        name: "Tés & infusiones",
        kicker: "Infusiones",
        blurb:
          "Una pausa caliente. Hojas, flores y especias en cada taza.",
        image: IMG.tea,
        imageAlt: "Té de menta caliente en un vaso de vidrio",
        items: [
          { id: "te-menta", name: "Té de Menta", description: "Menta fresca y agua caliente.", price: 65 },
          { id: "te-verde", name: "Té Verde", description: "Ligero, vegetal y limpio.", price: 65 },
          { id: "te-manzanilla", name: "Té de Manzanilla", description: "Floral y relajante.", price: 65 },
          { id: "te-limon-jengibre", name: "Té de Limón Jengibre", description: "Cítrico con un toque picante.", price: 65 },
          { id: "te-chai", name: "Té de Chai", description: "Especias cálidas y aromáticas.", price: 65 },
          { id: "te-frambuesa", name: "Té de Frambuesa", description: "Frutal y dulce.", price: 65 },
          { id: "te-limon", name: "Té de Limón", description: "Cítrico y reconfortante.", price: 65 },
        ],
      },
    ],
  },
  {
    id: "crepe",
    name: "La Crêpe",
    shortName: "La Crêpe",
    tagline: "Dulce capricho",
    description:
      "Crepas dulces y saladas, pancakes y paninis. La otra mitad de la casa, con todo el sabor.",
    accent: "pink",
    categories: [
      {
        id: "crepas-dulces",
        name: "Crepas dulces",
        kicker: "Dulce capricho",
        blurb:
          "Crepas finas hechas al momento, rellenas de cremas, fruta y todo lo que te hace feliz.",
        image: IMG.crepeSweet,
        imageAlt: "Crepa con fresas, crema chantilly y chocolate",
        items: [
          {
            id: "cd-cheesecake",
            name: "Crepa Cheesecake",
            description: "Crema de queso + fresas + crema chantilly.",
            price: 160,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "cd-vaquera",
            name: "Crepa Vaquera",
            description: "Nutella + banano + crema chantilly.",
            price: 160,
            popular: true,
          },
          {
            id: "cd-tropical",
            name: "Crepa Tropical",
            description: "Crema de queso + arándanos + bananos + crema chantilly.",
            price: 160,
          },
          {
            id: "cd-banafresa",
            name: "Crepa Banafresa",
            description: "Nutella + bananos + fresas + crema chantilly.",
            price: 160,
          },
          {
            id: "cd-deluxe",
            name: "Crepa Deluxe",
            description: "Banano caramelizado + galleta + dulce de leche + chantilly.",
            price: 160,
          },
          {
            id: "cd-cinnamon",
            name: "Crepa Cinnamon Roll",
            description: "Crema de queso + crema de canela + chantilly.",
            price: 160,
            tag: "Nuevo",
          },
        ],
      },
      {
        id: "crepas-saladas",
        name: "Crepas saladas",
        kicker: "Para los que no comen postre",
        blurb:
          "Crepas saladas bien cargadas, con queso crema derretido y rellenos de la casa.",
        image: IMG.crepeSavoryTwo,
        imageAlt: "Crepa salada con queso derretido y hierbas",
        items: [
          {
            id: "cs-clasica",
            name: "Crepa Clásica",
            description: "Queso crema + jamón.",
            price: 170,
          },
          {
            id: "cs-ranchera",
            name: "Crepa Ranchera",
            description: "Queso crema + champiñones salteados + maíz + mozzarella.",
            price: 170,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "cs-hawaiana",
            name: "Crepa Hawaiana",
            description: "Queso crema + jamón + piña.",
            price: 170,
          },
          {
            id: "cs-chicken",
            name: "Crepa Chicken Gourmet",
            description: "Pollo en salsa de hongos + maíz + mozzarella.",
            price: 170,
            tag: "Nuevo",
          },
        ],
      },
      {
        id: "pancakes",
        name: "Pancakes",
        kicker: "Altos y esponjosos",
        blurb:
          "Torres doradas con mantequilla, miel de maple y fruta fresca. Pide los tuyos antes de que se acaben.",
        image: IMG.pancakes,
        imageAlt: "Torre de pancakes con berries y miel de maple",
        items: [
          {
            id: "pan-clasicos",
            name: "Clásicos",
            description: "Miel de maple + mantequilla.",
            price: 140,
          },
          {
            id: "pan-frutilla",
            name: "Frutilla",
            description: "Fresas + miel de maple + crema chantilly.",
            price: 140,
            popular: true,
          },
          {
            id: "pan-banano",
            name: "Banano Pancake",
            description: "Banano + miel de maple + caramelo + syrup de chocolate.",
            price: 140,
          },
          {
            id: "pan-berry",
            name: "Berry Pancakes",
            description: "Arándanos + miel de maple + crema chantilly.",
            price: 140,
            tag: "Favorito",
          },
        ],
      },
      {
        id: "waffles",
        name: "Waffles",
        kicker: "Crujientes y dorados",
        blurb:
          "Waffles dorados por fuera y suaves por dentro, coronados con ice cream y tus toppings favoritos.",
        image: IMG.waffles,
        imageAlt: "Waffles con helado de vainilla, caramelo y menta fresca",
        items: [
          {
            id: "waf-clasico",
            name: "Waffle Clásico",
            description:
              "Ice cream + banano + crema chantilly + miel de maple + syrup de chocolate.",
            price: 170,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "waf-apple-cinnamon",
            name: "Apple Cinnamon",
            description:
              "Salsa de manzana + ice cream + caramelo + crema chantilly.",
            price: 170,
          },
          {
            id: "waf-frutal",
            name: "Waffle Frutal",
            description:
              "Fresas + melocotones + kiwi + salsa de arándanos + ice cream.",
            price: 170,
          },
          {
            id: "waf-peanut-oreo",
            name: "Peanut Butter Oreo",
            description:
              "Salsa de maní + galleta Oreo + caramelo + ice cream.",
            price: 170,
            popular: true,
          },
          {
            id: "waf-banana-fresa",
            name: "Banana Fresa",
            description:
              "Ice cream + banano + crema chantilly + miel de maple + syrup de chocolate.",
            price: 170,
          },
          {
            id: "waf-arandanos",
            name: "Arándanos",
            description:
              "Crema de queso + mermelada de arándanos + ice cream.",
            price: 170,
          },
          {
            id: "waf-puff",
            name: "Puff Waffle",
            description:
              "Caramelo + Nutella + marshmallows + ice cream.",
            price: 170,
            tag: "Nuevo",
          },
          {
            id: "waf-rainbow",
            name: "Rainbow Waffle",
            description: "M&Ms + caramelo + ice cream.",
            price: 170,
            tag: "Nuevo",
          },
        ],
      },
      {
        id: "paninis",
        name: "Paninis",
        kicker: "Prensa caliente",
        blurb:
          "Pan crujiente, queso estirándose y rellenos generosos. Para almorzar sin complicarte.",
        image: IMG.panini,
        imageAlt: "Panini grillado con queso derretido",
        items: [
          {
            id: "pani-cheese",
            name: "Panini Cheese",
            description: "Aderezo + jamón + queso craft.",
            price: 140,
          },
          {
            id: "pani-americano",
            name: "Panini Americano",
            description: "Mayonesa + pollo + tocino + cebolla caramelizada + tomate y lechuga.",
            price: 140,
          },
          {
            id: "pani-catracho",
            name: "Panini Catracho",
            description: "Frijoles fritos + huevo revuelto + aguacate + mantequilla y parmesano.",
            price: 140,
            popular: true,
            tag: "Catracho",
          },
          {
            id: "pani-moyete",
            name: "Moyete",
            description: "Frijoles fritos + mantequilla y parmesano.",
            price: 140,
          },
          {
            id: "pani-italiano",
            name: "Panini Italiano",
            description: "Mayonesa + jamón + salami + mozzarella + lechuga y tomate.",
            price: 135,
          },
        ],
      },
      {
        id: "postres",
        name: "Postres",
        kicker: "Para compartir",
        blurb:
          "Dos clásicos que no necesitan presentación. Solo una cuchara y buena compañía.",
        image: IMG.churros,
        imageAlt: "Churros con azúcar y salsa de chocolate",
        items: [
          {
            id: "post-fresas",
            name: "Fresas con Crema",
            description: "Fresas frescas bañadas en crema dulce.",
            price: 160,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "post-churros",
            name: "Churros Españoles",
            description: "Recién hechos, con azúcar y canela.",
            price: 120,
            popular: true,
          },
        ],
      },
    ],
  },
  {
    id: "bikery",
    name: "Repostería Bikery",
    shortName: "Repostería Bikery",
    tagline: "Arte dulce sobre ruedas",
    description:
      "Repostería de la casa y postres fríos. El toque dulce de Rancho Sofía, horneado para compartir.",
    accent: "mint",
    categories: [
      {
        id: "reposteria",
        name: "Repostería",
        kicker: "Horno de la casa",
        blurb:
          "Horneado al día: marquesote, chilenas, brownies y galletas para acompañar tu café.",
        image: IMG.brownie,
        imageAlt: "Brownie de chocolate de Repostería Bikery",
        items: [
          {
            id: "rep-marquesote",
            name: "Marquesote",
            description: "Bizcocho esponjoso de la casa.",
            price: 50,
          },
          {
            id: "rep-chilenas",
            name: "Chilenas",
            description: "Hojaldre dulce, crujiente y relleno.",
            price: 35,
          },
          {
            id: "rep-pastelito-pina",
            name: "Pastelito de piña",
            description: "Masa hojaldrada con relleno de piña.",
            price: 40,
          },
          {
            id: "rep-brownie",
            name: "Brownie",
            description: "Chocolate intenso, húmedo por dentro.",
            price: 60,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "rep-marmoleado",
            name: "Marmoleado",
            description: "Vainilla y chocolate en un mismo bocado.",
            price: 50,
          },
          {
            id: "rep-galletas",
            name: "Galletas",
            description: "Recién horneadas, para acompañar el café.",
            price: 35,
          },
        ],
      },
      {
        id: "postres-frios",
        name: "Postres fríos",
        kicker: "Para el antojo fresco",
        blurb:
          "Tres leches y cheesecake. El cierre perfecto, bien frío.",
        image: IMG.cheesecake,
        imageAlt: "Cheesecake de Repostería Bikery",
        items: [
          {
            id: "pf-tres-leches",
            name: "Pastel tres leches",
            description: "Esponjoso, bañado y bien frío.",
            price: 95,
            popular: true,
            tag: "Favorito",
          },
          {
            id: "pf-cheesecake",
            name: "Cheesecake",
            description: "Cremoso, con base de galleta.",
            price: 110,
          },
        ],
      },
    ],
  },
];

export const ALL_ITEMS: EnrichedItem[] = VENUES.flatMap((venue) =>
  venue.categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      venueId: venue.id,
      venueName: venue.name,
      categoryId: category.id,
      categoryName: category.name,
    })),
  ),
);

export function getItem(id: string): EnrichedItem {
  const item = ALL_ITEMS.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`Menu item ${id} not found`);
  }
  return item;
}

export const FEATURED_IDS = [
  "lat-ranchero",
  "fri-vaca-lola",
  "cd-cheesecake",
  "pan-frutilla",
];

export const FEATURED_IMAGES: Record<string, string> = {
  "lat-ranchero": IMG.latteArt,
  "fri-vaca-lola": IMG.vacaLola,
  "cd-cheesecake": IMG.crepeSweet,
  "pan-frutilla": IMG.pancakesTwo,
};

export const DEFAULT_WHATSAPP = "50499753442";

export const CONTACT = {
  address: "Flores, Comayagua, Honduras",
  addressShort: "Flores, Comayagua",
  hoursWeek: "Todos los días",
  hoursSunday: "7:00 am – 7:00 pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rancho+Sof%C3%ADa+Flores+Comayagua",
  instagram: "https://www.instagram.com/caferanchosofia/",
  facebook: "https://www.facebook.com/profile.php?id=100071518864255",
  tiktok: "https://www.tiktok.com/@caf.rancho.sofia",
};

export function priceLabel(value: number): string {
  return `L.${value.toLocaleString("es-HN")}`;
}

export function itemPriceLabel(item: Pick<MenuItem, "price" | "variants">): string {
  if (item.variants && item.variants.length > 1) {
    return `L.${item.variants[0].price} / ${item.variants[item.variants.length - 1].price}`;
  }
  return priceLabel(item.price ?? item.variants?.[0]?.price ?? 0);
}
