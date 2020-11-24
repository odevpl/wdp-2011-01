/* selectors */
export const getMore = ({ more }) => more;

/* action name creator */
const reducerName = 'more';

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
