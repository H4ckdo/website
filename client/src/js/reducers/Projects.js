const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Projects
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Projects = (state, action = {}) => {
  let { payload, type } = action;
  if (type === "SET_PROJECTS") {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Projects;
