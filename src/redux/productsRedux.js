/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompared = ({ products }) =>
  products.filter(product => product.compare === true);

/* action name */
const createActionName = name => `products/${name}`;

/* action type */
export const FAVOURITE_HANDLER = createActionName('FAVOURITE_HANDLER');
export const COMPARE_HANDLER = createActionName('COMPARE_HANDLER');
export const REMOVE_HANDLER = createActionName('REMOVE_HANDLER');

/* action creator */
export const handleFavourite = payload => ({ payload, type: FAVOURITE_HANDLER });
export const handleCompare = payload => ({ payload, type: COMPARE_HANDLER });
export const handleRemove = payload => ({ payload, type: REMOVE_HANDLER });

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
    case COMPARE_HANDLER: {
      let compareCounter = 0;
      for (let product of statePart) {
        if (product.compare) {
          compareCounter++;
        }
      }
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          if (product.compare) {
            product.compare = false;
          } else if (compareCounter < 4) {
            product.compare = true;
          }
        }
        return product;
      });
      return newStatePart;
    }
    case REMOVE_HANDLER: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
      return newStatePart;
    }
    default:
      return statePart;
  }
}
