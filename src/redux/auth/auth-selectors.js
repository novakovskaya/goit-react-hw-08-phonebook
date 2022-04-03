export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getError = state => state.auth.error;