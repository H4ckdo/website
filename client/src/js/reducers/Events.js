const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Events
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Events = (state, action = {}) => {
  let { payload, type } = action;
  if (type === "SET_EVENTS") {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Events;
