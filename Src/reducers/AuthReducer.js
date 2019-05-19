const INITIAL_STATE = { email : "",password:"",isLoggedIn:false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "email_changed":
            return {...state,email:action.text};
        case "password_changed":
            return {...state,password:action.text};
        case "signed_in":
            return {...state,isLoggedIn:true};     
        case "signed_out":
            return {...state,isLoggedIn:false};         
        default:
            return state;
    }
};