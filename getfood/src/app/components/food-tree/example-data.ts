/** Example file/folder data. */
export const files = [
  {
    name: 'Forrett',
    type: 'menu_book',
    children: [
      {
        name: 'Italiensk',
        type: 'menu_book',
        children: [
          { name: 'Pasta', type: 'dinner_dining' }
        ]
      }
    ]
  },
  {
    name: 'Hovedrett',
    type: 'menu_book',
    children: [
      {
        name: 'Pizza',
        type: 'local_pizza',
        children: [
          { name: 'Milano', type: 'local_pizza' },
          { name: 'Diavola', type: 'local_pizza' },
        ]
      },
      { name: 'Pasta', type: 'dinner_dining' }
    ]
  },
  {
    name: 'Dessert',
    type: 'menu_book',
    children: [
      { name: 'cake', type: 'cake' },
      { name: 'icecream', type: 'icecream' }
    ]
  }
];
