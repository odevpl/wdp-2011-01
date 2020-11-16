/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getPromo = ({ promoProducts }) => promoProducts;

export const getHotDeal = ({ products }) =>
  products.filter(product => product.hotDeal === true || product.hotDeal === false);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name */
const createActionName = name => `products/${name}`;

/* action type */
export const FAVOURITE_HANDLER = createActionName('FAVOURITE_HANDLER');
export const CHANGE_HOTDEAL = createActionName('CHANGE_HOTDEAL');

/* action creator */
export const handleFavourite = payload => ({ payload, type: FAVOURITE_HANDLER });
export const changeHotDeal = payload => ({ payload, type: CHANGE_HOTDEAL });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FAVOURITE_HANDLER: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          product.heart = !product.heart;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case CHANGE_HOTDEAL: {
      const newStatePart = statePart.map(product => {
        product.hotDeal = false;
        if (product.id === action.payload) {
          product.hotDeal = !product.hotDeal;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    default:
      return statePart;
  }
}
