export const saveProfileDetails = profileDetails => ({
  type: 'SAVE_PROFILE_DETAIL',
  profileDetails: {
    name: profileDetails.name,
    phone: profileDetails.phone,
    email: profileDetails.email,
    locality: profileDetails.locality,
    city: profileDetails.city,
    state: profileDetails.state,
    pin: profileDetails.pin,
    photo: profileDetails.photo,
  },
});
