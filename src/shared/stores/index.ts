import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../../pages/SignUp/widgets/SignUpForm/store/index';
import signInReducer from '../../pages/SignIn/widgets/SignInForm/store/index';

const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log(action.type)
  if ( action.type?.startsWith('/sign-in') ) {
    // const authState = store.getState().auth;
    // localStorage.setItem('auth', JSON.stringify(authState))
  }
  return result;
};

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;