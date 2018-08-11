import { UPDATE_EMAIL, UPDATE_FORM_STATE, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, TOGGLE_AGREES_TO_DISCLAIMER, UPDATE_SHOW_ERRORS } from '../actions/signUpActions'

const signUp = (state = {
    formState: 'email',
    showErrors: false,
    userInfo: {
        email: '',
        name: {
            first: '',
            last: ''
        },
        isAgreesToDisclaimer: true
    }
}, action) => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {...state,
                userInfo: {
                    ...state.userInfo,
                    email: action.payload
                }
            }
        case UPDATE_FIRST_NAME:
            return {...state,
                userInfo: {
                    ...state.userInfo,
                    name: {
                        ...state.userInfo.name,
                        first: action.payload
                    }
                }
            }
        case UPDATE_LAST_NAME:
            return {...state,
                userInfo: {
                    ...state.userInfo,
                    name: {
                        ...state.userInfo.name,
                        last: action.payload
                    }
                }
            }
        case TOGGLE_AGREES_TO_DISCLAIMER:
            return {...state,
                userInfo: {
                    ...state.userInfo,
                    isAgreesToDisclaimer: !state.userInfo.isAgreesToDisclaimer
                }
            }
        case UPDATE_FORM_STATE:
        return {...state,
            formState: action.payload,
            showErrors: false
        }
        case UPDATE_SHOW_ERRORS:
        return {...state,
            showErrors: action.payload
        }
      default:
        return state
    }
  }
  
  export default signUp