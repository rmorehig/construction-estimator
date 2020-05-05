import { useReducer } from 'react';

const initialState = {
  steps: [],
  currentStep: 0
};
const actionTypes = {
  NEXT_STEP: 'NEXT_STEP',
  PREVIOUS_STEP: 'PREVIOUS_STEP',
  SET_STEP: 'SET_STEP'
};

const stepsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        currentStep:
          state.steps.length > state.currentStep + 1
            ? state.currentStep + 1
            : state.currentStep
      };
    case actionTypes.PREVIOUS_STEP:
      return {
        ...state,
        currentStep:
          state.currentStep > 0 ? state.currentStep - 1 : state.currentStep
      };
    case actionTypes.SET_STEP:
      return {
        ...state,
        currentStep: action.payload
      };
    default: {
      throw new Error('Unhandled type in stepsReducer: ' + action.type);
    }
  }
};

const useSteps = (steps = []) => {
  const [state, dispatch] = useReducer(stepsReducer, {
    ...initialState,
    steps
  });

  const nextStep = () => dispatch({ type: actionTypes.NEXT_STEP });

  const previousStep = () => dispatch({ type: actionTypes.PREVIOUS_STEP });

  const setStep = (payload) =>
    dispatch({ type: actionTypes.SET_STEP, payload });

  return { ...state, nextStep, previousStep, setStep };
};

export { useSteps };
