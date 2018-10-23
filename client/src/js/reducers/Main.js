const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Users
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Main = (state, action = {}) => {
  let { payload, type } = action;
  if(type === "SET") {
    let snapshot = {...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  if (type === "SET_HEADER") {
    let snapshot = { ...takeSnapshot(state)};
    snapshot.setup.selected = payload;
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Main;
