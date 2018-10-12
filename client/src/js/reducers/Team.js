const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Team
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Team = (state, action = {}) => {
  let { payload, type } = action;
  if (type === "SET_TEAM") {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Team;
