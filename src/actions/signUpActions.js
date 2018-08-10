export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE';

export const updateEmail = (payload) => ({
    type: UPDATE_EMAIL,
    payload: payload.target.value
});

export const updateFirstName = (payload) => ({
  type: UPDATE_FIRST_NAME,
  payload: payload.target.value
});

export const updateLastName = (payload) => ({
  type: UPDATE_LAST_NAME,
  payload: payload.target.value
});

export const updateFormState = (payload) => ({
  type: UPDATE_FORM_STATE,
  payload: payload
});