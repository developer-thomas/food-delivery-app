import { Food } from '../models/food.model';

export const foods: Food[] = [
  {
    id: 1,
    title: 'Cheeseburger',
    price: 11.99,
    category: 'burgers',
    image: 'assets/images/foods/cheeseburger.jpg',
    description:
      'Juicy beef patty with melted cheese, lettuce, tomato, and pickles on a toasted bun.',
  },
  {
    id: 2,
    title: 'Bacon Burger',
    price: 13.99,
    category: 'burgers',
    image: 'assets/images/foods/bacon-burger.jpg',
    description:
      'Grilled beef patty topped with crispy bacon, cheddar cheese, lettuce, and tomato.',
  },
  {
    id: 3,
    title: 'Margherita Pizza',
    price: 19.99,
    category: 'dishes',
    image: 'assets/images/foods/margherita-pizza.jpg',
    description:
      'A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
  },
  {
    id: 4,
    title: 'Grilled Salmon',
    price: 17.99,
    category: 'dishes',
    image: 'assets/images/foods/grilled-salmon.jpg',
    description:
      'Fresh salmon fillet grilled to perfection, served with a lemon butter sauce.',
  },
  {
    id: 5,
    title: 'Spaghetti Carbonara',
    price: 14.99,
    category: 'dishes',
    image: 'assets/images/foods/spaghetti-carbonara.jpg',
    description:
      'Traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
  },
  {
    id: 6,
    title: 'Sushi Platter',
    price: 24.99,
    category: 'sushi',
    image: 'assets/images/foods/sushi-platter.jpg',
    description:
      'An assortment of fresh sushi, including nigiri, maki rolls, and sashimi.',
  },
  {
    id: 7,
    title: 'California Roll',
    price: 12.99,
    category: 'sushi',
    image: 'assets/images/foods/california-roll.jpg',
    description:
      'Sushi roll filled with crab, avocado, and cucumber, wrapped in seaweed and rice.',
  },
  {
    id: 8,
    title: 'Dragon Roll',
    price: 15.99,
    category: 'sushi',
    image: 'assets/images/foods/dragon-roll.jpg',
    description:
      'A sushi roll with eel, cucumber, and avocado, topped with thinly sliced avocado.',
  },
];
