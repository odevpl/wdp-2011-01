/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name */
const createActionName = name => `products/${name}`;

/* action type */
export const FAVOURITE_HANDLER = createActionName('FAVOURITE_HANDLER');

/* action creator */
export const handleFavourite = payload => ({ payload, type: FAVOURITE_HANDLER });

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
    default:
      return statePart;
  }
}
