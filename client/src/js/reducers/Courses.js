const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Courses
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Courses = (state, action = {}) => {
  let { payload, type } = action;
  if (type === "SET_COURSES") {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Courses;
