
export const loadState = () => {
  try {
    const serealizedState = localStorage.getItem('state');
    if (serealizedState === null) {
      return undefined;
    }
    
    return JSON.parse(serealizedState);
  } catch(e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serealizedState = JSON.stringify(state);
    localStorage.setItem('state', serealizedState);
  } catch(e) {
    
  }
};
