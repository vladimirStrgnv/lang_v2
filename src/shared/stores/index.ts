import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../pages/SignUp/widgets/SignUpForm/store/index';


const store = configureStore({
  reducer: {
    auth: authReducer
  },
});


export default store;