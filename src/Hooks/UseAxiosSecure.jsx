import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = ({accessToken}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
  });

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    console.log(token)

    const requestInterceptor = axiosSecure.interceptors.request.use(
      config => {

          config.headers.authorization = `Bearer ${accessToken}`;
        
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [token, user, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
