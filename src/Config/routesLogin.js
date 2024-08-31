import { useSelector } from "react-redux";
import { useMemo } from "react";

export const useMode = () => {
  const login = useSelector((state) => state.loginReducer.login);
  const loginModeRoute = useMemo(() => login, [login]);

  return loginModeRoute;
};
export default useMode;
