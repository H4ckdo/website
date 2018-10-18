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
  if (type === "SETUP_TEAM") {
    let snapshot = { ...takeSnapshot(state) };
    snapshot.setup = { ...snapshot.setup, ...payload }
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }

  if (type === "SET_DATA_TEAM") {
    let snapshot = { ...takeSnapshot(state) };
    snapshot.data = payload;
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Team;
