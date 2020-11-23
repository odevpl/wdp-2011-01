const initialState = {
  categories: [
    { id: 'bed', name: 'Bed', fade: true, amount: 6 },
    { id: 'chair', name: 'Chair', fade: true, amount: 4 },
    { id: 'sofa', name: 'Sofa', fade: false, amount: 5 },
    { id: 'table', name: 'Table', fade: false, amount: 4 },
    { id: 'dining', name: 'Dining', fade: false, amount: 6 },
  ],

  brands: [
    {
      id: 'Brand-1',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-2',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-3',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-4',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-5',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-6',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-7',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-8',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-9',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-10',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-11',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-12',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-13',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-14',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-15',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-16',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-17',
      image: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png',
    },
    {
      id: 'Brand-18',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-19',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-20',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-21',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-22',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-23',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
    {
      id: 'Brand-24',
      image: 'https://www.graphicsbeam.com/wp-content/uploads/2012/10/Furnicom.jpg',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: 'images/bed1.jpeg',
      price: 30,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: false,
      starChange: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'images/table1.jpeg',
      price: 30,
      olderPrice: `$ ${50}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      hotDeal: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: 'images/sofa2.jpeg',
      price: 30,
      olderPrice: `$ ${35}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      hotDeal: false,
      heart: false,
      arrow: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 2,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: 'images/bed2.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: 'images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${60}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      hotDeal: false,
      heart: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 0,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      image: 'images/table1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      image: 'images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: false,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      image: 'images/bed8.jpeg',
      price: 30,
      olderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      heart: true,
      arrow: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      image: 'images/chair1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      image: 'images/sofa1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      image: 'images/sofa2.jpeg',
      price: 30,
      oolderPrice: `$ ${35}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      image: 'images/sofa3.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      image: 'images/sofa4.jpeg',
      price: 30,
      olderPrice: `$ ${50}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      image: 'images/bed1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      image: 'images/bed2.jpeg',
      price: 30,
      oolderPrice: `$ ${40}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      image: 'images/bed3.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      image: 'images/bed4.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      image: 'images/bed5.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      image: 'images/bed6.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      image: 'images/chair2.jpeg',
      price: 30,
      olderPrice: `$ ${45}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      image: 'images/chair3.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      image: 'images/table1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      image: 'images/bed1.jpeg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      image: 'images/bed2.jpeg',
      price: 30,
      olderPrice: `$ ${55}`,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      quantity: 1,
    },
  ],

  promoProducts: {
    name: 'indoor',
    spanName: 'furniture',
    subName: 'save up to 50% of all furniture',
    button: 'shop now',
    images: [
      {
        image:
          'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        imageAlt: 'chair',
      },
      {
        image:
          'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        imageAlt: 'bed',
      },
      {
        image:
          'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        imageAlt: 'sofa',
      },
    ],
  },

  cart: {
    products: [],
  },
  saleContent: {
    sofa: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
    goldenChair: 'https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg',
    yellowChair: 'https://images.pexels.com/photos/4056469/pexels-photo-4056469.jpeg',
    bed: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    content1a: 'GUEST ROOM',
    content1b: 'SOFA',
    bargain: '-20%',
    content2a: 'OFFICE ',
    content2b: 'CHAIR',
    content2c: 'COLLECTION',
    price: '$200.00',
    content3a: 'SPECIAL',
    content3b: 'COLLECTION',
    info: 'SAVE UP 45% OF FURNITURE',
  },
  tagsContent: {
    firstTag: 'Table',
    secondTag: 'Chair',
    thirdTag: 'Hand Bag',
    forthTag: 'Women',
    fifthTag: 'Fashion',
    sixthTag: 'Clothes',
  },
  feedback: [
    {
      id: 1,
      content: 'Suspendisse ac nisl nisi. Proin suscipit, ligula ut pharetra mollis.',
      photo: 'https://i.ibb.co/0mTvQjz/099962-1.jpg',
      name: 'John Smith',
      position: 'Furniture client',
    },
    {
      id: 2,
      content:
        'Nullam nulla leo, auctor a fermentum id, vehicula id augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photo: 'https://i.ibb.co/0GTZk8M/099947-1.jpg',
      name: 'Lisa Brown',
      position: 'Furniture client',
    },
    {
      id: 3,
      content:
        'Nullam vel finibus dui. Aenean condimentum nibh id massa imperdiet, ac tempus mauris elementum.',
      photo: 'https://i.ibb.co/ZmBY6jg/089960-1.jpg',
      name: 'Marc Leopold',
      position: 'Furniture client',
    },
  ],
};

export default initialState;
