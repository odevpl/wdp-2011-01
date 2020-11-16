/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

/* action name */
const createActionName = name => `categories/${name}`;

/* action type */
<<<<<<< HEAD

/* action creator */
=======
export const CHANGE_FADE = createActionName('CHANGE_FADE');

/* action creator */
export const changeFade = payload => ({ payload, type: CHANGE_FADE });
>>>>>>> 49cc6d5... Changes to add fadeIn and fadeOut

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
