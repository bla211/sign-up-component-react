export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const TOGGLE_AGREES_TO_DISCLAIMER = 'TOGGLE_AGREES_TO_DISCLAIMER';
export const UPDATE_SHOW_ERRORS = 'UPDATE_SHOW_ERRORS';

export const updateEmail = (payload) => ({
    type: UPDATE_EMAIL,
    payload: payload
});

export const updateFirstName = (payload) => ({
  type: UPDATE_FIRST_NAME,
  payload: payload.target.value
});

export const updateLastName = (payload) => ({
  type: UPDATE_LAST_NAME,
  payload: payload.target.value
});

export const toggleAgreesToDisclaimer = () => ({
  type: TOGGLE_AGREES_TO_DISCLAIMER
});

export const updateFormState = (payload) => ({
  type: UPDATE_FORM_STATE,
  payload: payload
});

export const updateShowErrors = (payload) => ({
  type: UPDATE_SHOW_ERRORS,
  payload: payload
});