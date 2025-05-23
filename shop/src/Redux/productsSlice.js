import { createSlice } from '@reduxjs/toolkit';
import womenPinkTrousers from '../assets/women-trousers.png';
import menStripeShirt from '../assets/men-stripe-shirt.png';
import boyBlueShirt from '../assets/boy-cotton-shirt.png';
import womenBlueJacket from '../assets/women-jacket.png';
import menBlueTrousers from '../assets/men-trousers.png';
import girlPinkShirt from '../assets/girl-pink-shirt.png';
import lightWomenJacket from '../assets/women-zip-jacket.png';
import womenGreenTrousers from '../assets/women-green-trousers.png';
import menLightCottonShirt from '../assets/men-cotton-shirt.png';
import womenPinkJacket from '../assets/women-zip-pink-jacket.png';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        title: 'Kid Tapered Slim Fit Trouser',
        price: '$38',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: womenPinkTrousers,
        id: 1,
        category: 'Women',
        link: '/kidSlimTrouser',
      },
      {
        title: 'Men Round Neck Pure Cotton T-shirt',
        price: '$64',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: menStripeShirt,
        id: 2,
        category: 'Men',
        link: '/menCottonShirt',
      },
      {
        title: 'Boy Round Neck Pure Cotton T-shirt',
        price: '$60',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: boyBlueShirt,
        id: 3,
        category: 'Men',
        link: '/boyCottonShirt'
      },
      {
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: '$74',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: womenBlueJacket,
        id: 4,
        category: 'Women',
        link: '/womenBlueJakcet'
      },
      {
        title: 'Men Tapered Fit Flat-Front Trousers',
        price: '$58',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: menBlueTrousers,
        id: 5,
        category: 'Men',
        link: '/menBlueTrousers'
      },
      {
        title: 'Girls Round Neck Cotton Top',
        price: '$56',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: girlPinkShirt,
        id: 6,
        category: 'Women',
        link: '/girlCottonTop'
      },
      {
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: '$68',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: lightWomenJacket,
        id: 7,
        category: 'Women',
        link: '/womenZipJakcet'
      },
      {
        title: 'Kid Tapered Slim Fit Trouser',
        price: '$40',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: womenGreenTrousers,
        id: 8,
        category: 'Women',
        link: '/womenGreenTrousers'
      },
      {
        title: 'Men Printed Plain Cotton Shirt',
        price: '$52',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: menLightCottonShirt,
        id: 9,
        category: 'Men',
        link: '/menPlainShirt'
      },
      {
        title: 'Women Zip-Front Relaxed Fit Jacket',
        price: '$78',
        descirption: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        img: womenPinkJacket,
        id: 10,
        category: 'Women',
        link: '/womenFitJakcet'
      },
    ],
    toggleSearchBar: false,
    cartItems: [],
    createAccount: false,
  },
  reducers: {
    setToggleSearchBar: (state, action) => {
  state.toggleSearchBar = action.payload
    },
    addToCartItems: (state, action) => {
      const exists = state.cartItems.some(item => item.id === action.payload.id)
      if (!exists) {
        state.cartItems.push({...action.payload})
      }
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(item=>item.id !== action.payload)
    },
    createAccount: (state) => {
      state.createAccount = true;
   }
  }
})

export const { setToggleSearchBar, addToCartItems, removeProduct, createAccount } = productsSlice.actions;
export default productsSlice.reducer;
