/* selectors */
export const getAll = ({ tabs }) => tabs;
export const getCount = ({ tabs }) => tabs.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
