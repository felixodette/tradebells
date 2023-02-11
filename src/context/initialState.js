import { fetchSesionUser } from '../utils/fetchSessionData';

const sessionUser = fetchSessionUser();
export const initialState = {
  user: sessionUser,
};
