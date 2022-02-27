export const SignIn = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SING_IN",
      payload: data,
    });
  };
};

export const SingOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SING_OUT",
    });
  };
};
