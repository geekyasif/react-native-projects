const InitialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const AuthReducer = (state = InitialState, action) => {
  if (action.type === "SIGN_IN") {
    return {
      ...prevState,
      userToken: action.token,
      isLoading: false,
    };
  }
};
