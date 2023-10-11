const data = [
  {
    id: 19,
    title: 'avant-garde lamp',
    company: 'Modenza',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: true,
    category: 'Kids',
    image:
      'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '17999',
    shipping: false,
    colors: ['#33FF57', '#3366FF'],
  },

  {
    id: 12,
    title: 'chic chair',
    company: 'Luxora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Chairs',
    image:
      'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '33999',
    shipping: true,
    colors: ['#FF5733', '#33FF57', '#3366FF'],
  },
  {
    id: 6,
    title: 'coffee table',
    company: 'Modenza',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: true,
    category: 'Tables',
    image:
      'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '17999',
    shipping: false,
    colors: ['#FF5733', '#FFFF00'],
  },
  {
    id: 7,
    title: 'comfy bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: true,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '12999',
    shipping: false,
    colors: ['#FF5733'],
  },

  {
    id: 13,
    title: 'contemporary sofa',
    company: 'Comfora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Sofas',
    image:
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '15999',
    shipping: false,
    colors: ['#FFFF00'],
  },
  {
    id: 20,
    title: 'cutting-edge bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '8499',
    shipping: true,
    colors: ['#FFFF00', '#3366FF'],
  },
  {
    id: 16,
    title: 'futuristic shelves',
    company: 'Luxora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Kids',
    image:
      'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '9499',
    shipping: true,
    colors: ['#33FF57', '#FFFF00'],
  },
  {
    id: 21,
    title: 'glass table',
    company: 'Modenza',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Tables',
    image:
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '15999',
    shipping: false,
    colors: ['#FF5733', '#3366FF'],
  },
  {
    id: 22,
    title: 'King Bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '18999',
    shipping: true,
    colors: ['#FF5733'],
  },
  {
    id: 24,
    title: 'Lounge Chair',
    company: 'Luxora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Chairs',
    image:
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '25999',
    shipping: false,
    colors: ['#FF5733', '#33FF57', '#3366FF'],
  },
  {
    id: 11,
    title: 'Minimalist Shelves',
    company: 'Artifex',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Kids',
    image:
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '43999',
    shipping: false,
    colors: ['#FF5733', '#FFFF00'],
  },
  {
    id: 5,
    title: 'modern sofa',
    company: 'Comfora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Sofas',
    image:
      'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '29999',
    shipping: false,
    colors: ['#FF5733', '#33FF57', '#FFFF00'],
  },
  {
    id: 9,
    title: 'modern table',
    company: 'Modenza',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Tables',
    image:
      'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '38999',
    shipping: true,
    colors: ['#33FF57', '#3366FF'],
  },
  {
    id: 18,
    title: 'reclining sofa',
    company: 'Comfora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Sofas',
    image:
      'https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '32999',
    shipping: false,
    colors: ['#FF5733', '#33FF57', '#3366FF', '#FFFF00'],
  },
  {
    id: 25,
    title: 'Sectional Sofa',
    company: 'Comfora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Sofas',
    image:
      'https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '35999',
    shipping: true,
    colors: ['#FF5733', '#33FF57', '#3366FF', '#FFFF00'],
  },
  {
    id: 10,
    title: 'sleek bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '53999',
    shipping: true,
    colors: ['#FFFF00', '#3366FF'],
  },
  {
    id: 4,
    title: 'sleek bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '53999',
    shipping: true,
    colors: ['#FFFF00', '#3366FF'],
  },
  {
    id: 14,
    title: 'streamlined table',
    company: 'Modenza',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Tables',
    image:
      'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '20999',
    shipping: true,
    colors: ['#FF5733', '#3366FF'],
  },
  {
    id: 15,
    title: 'stylish bed',
    company: 'Homestead',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Beds',
    image:
      'https://images.pexels.com/photos/6758398/pexels-photo-6758398.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '16999',
    shipping: true,
    colors: ['#FF5733'],
  },
  {
    id: 23,
    title: 'Toy Shelf',
    company: 'Luxora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Kids',
    image:
      'https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '7999',
    shipping: false,
    colors: ['#33FF57', '#FFFF00'],
  },
  {
    id: 17,
    title: 'velvet sofa',
    company: 'Luxora',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Chairs',
    image:
      'https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: '28999',
    shipping: true,
    colors: ['#FF5733', '#33FF57', '#FFFF00'],
  },
  {
    id: 8,
    title: 'wooden shelves',
    company: 'Artifex',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    featured: false,
    category: 'Kids',
    image:
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '11999',
    shipping: true,
    colors: ['#33FF57', '#3366FF'],
  },
];


//export the data
module.exports = data;