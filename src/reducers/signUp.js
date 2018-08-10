import { UPDATE_EMAIL, UPDATE_FORM_STATE } from '../actions/signUpActions'

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
                    email: action.payload
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