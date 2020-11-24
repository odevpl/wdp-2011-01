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
    default:
      return statePart;
  }
}
