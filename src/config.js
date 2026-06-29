// Configuration file for Kekse digital menu
import traditionalImg from './assets/cookie_traditional.jpg';
import redVelvetImg from './assets/cookie_red_velvet.jpg';
import nutellaImg from './assets/cookie_nutella.jpg';

export const WHATSAPP_NUMBER = "555121604346";

export const PRODUCTS = [
  {
    id: "traditional",
    name: "Cookie Tradicional",
    description: "Cookie de chocolate meio amargo com toque especial de café e manteiga noisette, trazendo sabor intenso, aroma sofisticado e textura equilibrada.",
    basePrice: 12.00,
    image: traditionalImg,
    tags: ["Artesanal", "Chocolate Meio Amargo", "Café"],
    // Discount rule details:
    // 1 unidade: R$12,00
    // A partir de 2 unidades: R$10,00 cada
    pricingText: [
      { qty: 1, label: "1 unidade", price: 12.00 },
      { qty: 2, label: "2+ unidades", price: 10.00, isEach: true }
    ],
    calculatePrice: (qty) => {
      if (qty >= 2) return 10.00;
      return 12.00;
    }
  },
  {
    id: "red_velvet",
    name: "Cookie Red Velvet",
    description: "Cookie inspirado no clássico red velvet, com recheio de chocolate branco caramelizado, gotas de chocolate branco e um toque extra de cacau.",
    basePrice: 14.00,
    image: redVelvetImg,
    tags: ["Recheado", "Chocolate Branco", "Cacau"],
    // Discount rule details:
    // 1 unidade: R$14,00
    // 2 unidades: R$13,00 cada
    // A partir de 3 unidades: R$12,00 cada
    pricingText: [
      { qty: 1, label: "1 unidade", price: 14.00 },
      { qty: 2, label: "2 unidades", price: 13.00, isEach: true },
      { qty: 3, label: "3+ unidades", price: 12.00, isEach: true }
    ],
    calculatePrice: (qty) => {
      if (qty === 2) return 13.00;
      if (qty >= 3) return 12.00;
      return 14.00;
    }
  },
  {
    id: "nutella",
    name: "Cookie Nutella",
    description: "Cookie com recheio cremoso de Nutella e manteiga tostada, criando uma combinação intensa e irresistível.",
    basePrice: 15.00,
    image: nutellaImg,
    tags: ["Recheado", "Nutella", "Favorito"],
    // Discount rule details:
    // 1 unidade: R$15,00
    // 2 unidades: R$14,00 cada
    // A partir de 3 unidades: R$13,00 cada
    pricingText: [
      { qty: 1, label: "1 unidade", price: 15.00 },
      { qty: 2, label: "2 unidades", price: 14.00, isEach: true },
      { qty: 3, label: "3+ unidades", price: 13.00, isEach: true }
    ],
    calculatePrice: (qty) => {
      if (qty === 2) return 14.00;
      if (qty >= 3) return 13.00;
      return 15.00;
    }
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Mariana Souza",
    role: "Cliente",
    text: "O Cookie Tradicional é inexplicável! A textura é exatamente como dizem: crocante por fora e macia por dentro. A manteiga noisette faz toda a diferença.",
    rating: 5
  },
  {
    id: 2,
    name: "Guilherme Santos",
    role: "Cliente",
    text: "O Red Velvet com chocolate branco caramelizado é de outro mundo. Dá para sentir a qualidade dos ingredientes em cada mordida. Experiência de altíssimo nível.",
    rating: 5
  },
  {
    id: 3,
    name: "Renata Oliveira",
    role: "Cliente",
    text: "Nutella é meu sabor favorito da vida, e o cookie da Kekse superou todas as expectativas. Vem super recheado e o sabor é muito equilibrado. Vale cada centavo!",
    rating: 5
  }
];
