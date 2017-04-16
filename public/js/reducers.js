const initialState = {
  riskLevel: 0
}

function riskApp(state, action){
  if(typeof state === "undefined") {
    return initialState;
  }

  switch(action.type){
    case 'AddRiskLevel':
      return Object.assign({}, state, { riskLevel: action.value });
    default:
      return state;
  }
}

export default riskApp;