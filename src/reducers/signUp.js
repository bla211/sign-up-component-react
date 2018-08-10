import { UPDATE_EMAIL, UPDATE_FORM_STATE, UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from '../actions/signUpActions'

const signUp = (state = {
    formState: 'email',
    userInfo: {
        email: '',
        name: {
            first: '',
            last: ''
        }
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
        case UPDATE_FORM_STATE:
        return {...state,
            formState: action.payload
        }
      default:
        return state
    }
  }
  
  export default signUp