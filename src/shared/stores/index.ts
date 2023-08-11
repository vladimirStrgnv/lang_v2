import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../../pages/SignUp/widgets/SignUpForm/store/index';
import signInReducer from '../../pages/SignIn/widgets/SignInForm/store/index';

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;