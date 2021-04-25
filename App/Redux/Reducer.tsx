const initialState = {
  profileDetails: {
    name: '',
    phone: '',
    email: '',
    locality: '',
    city: '',
    state: '',
    pin: '',
  },
};

const profileDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PROFILE_DETAIL': {
      return {
        ...state,
        profileDetails: action.profileDetails,
      };
    }
    default: {
      return state;
    }
  }
};
export default profileDetailReducer;
