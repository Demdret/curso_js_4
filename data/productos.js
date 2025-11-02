/* guitarras.js  Esto fue sacado con IA de ChatGPT con el siguiente prompt:
  hazme un archivo js de 6 objetos de guitarras electricas con imagenes reales y otros atributos para unas cards
*/
const data = [
  {
    id: 1,
    marca: "Fender",
    modelo: "Stratocaster",
    precio: 1200,
    color: "Sunburst",
    imagen: "./img/fender.jpg",
    descripcionCorta:
      "La icónica Fender Stratocaster con acabado Sunburst, popular en blues y rock.",
    descripcionLarga:
      "La icónica Fender Stratocaster con acabado Sunburst, popular en blues y rock. Su versatilidad permite tocar desde suaves melodías hasta riffs potentes, y su diseño ergonómico ofrece comodidad incluso en largas sesiones. Es apreciada tanto por principiantes como por músicos profesionales, y su sonido cristalino es inmediatamente reconocible.",
    stock: 7,
  },
  {
    id: 2,
    marca: "Gibson",
    modelo: "Les Paul Standard",
    precio: 2500,
    color: "Cherry Sunburst",
    imagen: "./img/gibson.jpg",
    descripcionCorta:
      "La Gibson Les Paul Standard ofrece un tono cálido y sustain legendario.",
    descripcionLarga:
      "La Gibson Les Paul Standard ofrece un tono cálido y sustain legendario. Su construcción robusta y su puente ajustable permiten una afinación estable y gran expresividad al tocar. Ideal para rock clásico, blues y hard rock, cada instrumento mantiene una resonancia y profundidad sonora que la convierten en un estándar entre guitarristas de todo el mundo.",
    stock: 12,
  },
  {
    id: 3,
    marca: "Ibanez",
    modelo: "RG550",
    precio: 1000,
    color: "Neon Yellow",
    imagen: "./img/ibanez.jpg",
    descripcionCorta:
      "Una guitarra veloz y moderna, favorita para metal y shredding.",
    descripcionLarga:
      "Una guitarra veloz y moderna, favorita para metal y shredding. Su mástil delgado y rápido permite ejecutar solos complejos con gran facilidad. Con pastillas de alta salida, es perfecta para distorsión agresiva y técnicas avanzadas como sweep picking o tapping, ofreciendo un control preciso y un tono definido incluso en velocidades extremas.",
    stock: 3,
  },
  {
    id: 4,
    marca: "PRS",
    modelo: "Custom 24",
    precio: 3200,
    color: "Whale Blue",
    imagen: "./img/prs.jpg",
    descripcionCorta:
      "La PRS Custom 24 combina diseño elegante con gran versatilidad sonora.",
    descripcionLarga:
      "La PRS Custom 24 combina diseño elegante con gran versatilidad sonora. Su construcción de alta calidad y sus pastillas humbucker permiten un rango tonal amplio, ideal para jazz, rock, metal y estilos fusionados. Además, su acabado refinado y cómodo perfil del mástil hacen que tocar sea una experiencia placentera y visualmente atractiva.",
    stock: 15,
  },
  {
    id: 5,
    marca: "Jackson",
    modelo: "Soloist SL1",
    precio: 1500,
    color: "Black",
    imagen: "./img/jackson.jpg",
    descripcionCorta:
      "Jackson Soloist, diseñada para velocidad y riffs pesados, clásica del metal.",
    descripcionLarga:
      "Jackson Soloist, diseñada para velocidad y riffs pesados, clásica del metal. Su mástil fino y rápido, junto con su puente flotante, permite técnicas avanzadas sin perder afinación. Su tono agresivo y definido la hace perfecta para solos complejos y acordes pesados, siendo una favorita entre guitarristas de metal moderno y thrash.",
    stock: 9,
  },
  {
    id: 6,
    marca: "ESP",
    modelo: "LTD EC-1000",
    precio: 1200,
    color: "See Thru Black",
    imagen: "./img/esp.jpg",
    descripcionCorta:
      "La ESP LTD EC-1000 ofrece potencia y estilo para rock y metal moderno.",
    descripcionLarga:
      "La ESP LTD EC-1000 ofrece potencia y estilo para rock y metal moderno. Con pastillas activas de alta ganancia, proporciona un sonido contundente y definido incluso con distorsión intensa. Su diseño elegante y cómodo permite largas sesiones de práctica o conciertos, y su construcción robusta asegura durabilidad y estabilidad en el escenario.",
    stock: 1,
  },
  {
    id: 7,
    marca: "Yamaha",
    modelo: "Pacifica 112V",
    precio: 600,
    color: "Old Violin Sunburst",
    imagen: "./img/yamaha.jpg",
    descripcionCorta:
      "La Yamaha Pacifica 112V combina calidad y versatilidad a un precio accesible.",
    descripcionLarga:
      "La Yamaha Pacifica 112V combina calidad y versatilidad a un precio accesible. Ideal para principiantes y músicos intermedios, ofrece un sonido equilibrado y confortable al tocar. Su diseño versátil permite experimentar con diferentes estilos, desde blues y pop hasta rock ligero, ofreciendo un instrumento confiable y duradero.",
    stock: 5,
  },
  {
    id: 8,
    marca: "Schecter",
    modelo: "Hellraiser C-1",
    precio: 1400,
    color: "Black Cherry",
    imagen: "./img/schecter.jpg",
    descripcionCorta:
      "La Schecter Hellraiser C-1 destaca por su tono potente y diseño agresivo, ideal para metal moderno.",
    descripcionLarga:
      "La Schecter Hellraiser C-1 destaca por su tono potente y diseño agresivo, ideal para metal moderno. Sus pastillas activas EMG proporcionan claridad y definición incluso con alta ganancia, y su mástil rápido facilita técnicas avanzadas como legato y tapping. Su estética impactante y construcción sólida la convierten en un instrumento confiable tanto para estudio como para presentaciones en vivo.",
    stock: 13,
  },
];
