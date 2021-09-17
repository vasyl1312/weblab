import bcrypt from 'bcryptjs';

const data={
  users: [
    {
      name: 'Sasha',
      email: 'vasylhryts74@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Alex',
      email: 'vasylhryts@knu.ua',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
        {
           
      name: 'Barcelona Shirt',
      category: 'Shirts',
      image: '/images/Barcelona.jpg',
      price: 80,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: '2021/2022 Barcelona home shirt',
        },
        {          
            name: 'West Ham Shirt',
            category: 'Shirts',
            image: '/images/WestHam.jpg',
            price: 65,
            countInStock: 0,
            brand: 'Umbro',
            rating: 4.8,
            numReviews: 17,
            description: '2021/2022 west ham home shirt',
          },
          {            
            name: 'Real Madrid Shirt',
            category: 'Shirts',
            image: '/images/RealMadrid.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: '2021/2022 Real Madrid home shirt',
          },
          {            
            name: 'Champions League ball',
            category: 'Balls',
            image: '/images/ChampionsLeague.jpg',
            price: 120,
            countInStock: 15,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 14,
            description: 'Official 2021/2022 champions league ball',
          },
          {            
            name: 'Euro 2020 ball',
            category: 'Balls',
            image: '/images/Euro2020.jpg',
            price: 80,
            countInStock: 5,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'Official Euro 2020 ball',
          },
          {            
            name: 'Bundesliga ball',
            category: 'Balls',
            image: '/images/Bundesliga.jpg',
            price: 95,
            countInStock: 12,
            brand: 'Select',
            rating: 4.5,
            numReviews: 15,
            description: 'Official 2021/2022 bundesliga ball',
          },
    ]
}

export default data;