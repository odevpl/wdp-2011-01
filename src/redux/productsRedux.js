/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name */
const createActionName = name => `products/${name}`;

/* action type */
export const FAVOURITE_HANDLER = createActionName('FAVOURITE_HANDLER');
export const SHINING_STAR = createActionName('SHINING_STAR');
export const CHANGE_STYLE = createActionName('CHANGE_STYLE');

/* action creator */
export const handleFavourite = payload => ({ payload, type: FAVOURITE_HANDLER });
export const handleStar = payload => ({ payload, type: SHINING_STAR });
export const handleStyle = payload => ({ payload, type: CHANGE_STYLE });
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_STYLE: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.starChange = true;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case SHINING_STAR: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.stars = action.payload.ratingValue;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
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
