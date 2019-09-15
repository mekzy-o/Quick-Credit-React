import {
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_FAILED,
  } from './types/authTypes';
  import API_SERVICE from '../../../utils/AxiosMethod';
  import Toastr from 'toastr';


  export const authLoading = () => ({
    type: AUTH_LOADING,
    payload: {
      loading: true,
    },
  });
  
  export const authSuccess = user => ({
    type: AUTH_SUCCESS,
    payload: {
      loading: false,
      user,
    },
  });
  
  
  export const authFailed = error => ({
    type: AUTH_FAILED,
    payload: {
      loading: false,
      error,
    },
  });

  export const createAccount = (userData, history) => async (dispatch) => {
    dispatch(authLoading());
    try {
      const newUser = await API_SERVICE.post('/auth/signup', userData);
      const { token } = newUser.data.data
      localStorage.setItem('token', token);
      dispatch(authSuccess(newUser));
      Toastr.success('Account Created! Check your inbox to verify your email');
      return history.push('/login');
    } catch (error) {
     console.log(error);
      return dispatch(authFailed(message));
    }
  };