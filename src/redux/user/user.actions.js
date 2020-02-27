import UserActionTypes from './user.types'

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = (emailAndpassword) => ({
	type: UserActionTypes.EMAIL_SIGNIN_START,
	payload: emailAndpassword
});

export const SignInSuccess = user => ({
	type: UserActionTypes.SIGNIN_SUCCESS,
	payload: user
});

export const SignInFailure = error => ({
	type: UserActionTypes.SIGNIN_FAILURE,
	payload: error
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});