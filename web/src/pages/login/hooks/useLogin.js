import { AuthContext } from '../../../lib/contexts/AuthContext';
import { LOGGED_IN } from '../../../lib/reducers/constants';
import { useContext } from 'react';
import { fetchData } from '../../../utils/helpers';
import FetchBuilder from '../../../utils/fetchBuilder';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';

const useLogin = () => {
  // const { dispatch } = useAuth();

  return async (data) => {
    const builder = new FetchBuilder('users');
    const users = await fetchData(builder, () => alert('error de login'));
    const user = users.find((usr) => usr.email === data.email && usr.password === data.password);
    if (user) {
      /* dispatch({
        type: LOGGED_IN,
        payload: user
      }); // else notificar */
    }
  };
};

export default useLogin;
