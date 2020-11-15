/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

/* action name */
const createActionName = name => `categories/${name}`;

/* action type */

/* action creator */

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FADE: {
      const newStatePart = statePart.map(category => {
        category.fade = false;
        if (category.id === action.payload) {
          category.fade = !category.fade;
          return category;    
        } else {
          return category;
        }
      });
      return newStatePart;
    }
    default:
      return statePart;
  }
}
