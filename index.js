const users = [
  {
    id: 1,
    username: 'booklover123',
    email: 'booklover123@example.com',
  },
  {
    id: 2,
    username: 'gamer4life',
    email: 'gamer4life@example.com',
  },
  {
    id: 3,
    username: 'reviewerExtraordinaire',
    email: 'reviewer@example.com',
  },
]
const games = [
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    genre: 'Action-Adventure',
    release_year: 2017,
    description: '',
  },
  {
    id: 2,
    title: 'Elden Ring',
    developer: 'FromSoftware',
    genre: 'Action RPG',
    release_year: 2022,
    description: '',
  },
  {
    id: 3,
    title: 'Minecraft',
    developer: 'Mojang Studios',
    genre: 'Sandbox',
    release_year: 2011,
    description: '',
  },
]
const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    description: '',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    description: '',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    description: '',
  },
]
const reviews = [
  {
    id: 1,
    user_id: 1,
    type: 'book',
    item_id: 1,
    rating: 5,
    comment: 'An absolute classic! Beautifully written and timeless.',
  },
  {
    id: 2,
    user_id: 2,
    type: 'videogame',
    item_id: 2,
    rating: 5,
    comment: 'A masterpiece! The world-building and combat are unparalleled.',
  },
  {
    id: 3,
    user_id: 3,
    type: 'book',
    item_id: 2,
    rating: 4,
    comment: 'Thought-provoking and chilling. A must-read.',
  },
  {
    id: 4,
    user_id: 1,
    type: 'videogame',
    item_id: 3,
    rating: 5,
    comment: 'Endless creativity and fun. A game for all ages.',
  },
  {
    id: 5,
    user_id: 2,
    type: 'book',
    item_id: 3,
    rating: 4,
    comment: 'A powerful story with deep moral lessons.',
  },
]
