import { getCookie } from "../utils/cookie";
import api from "../configs/api";

const refresh = async () => {
  const refreshToken = getCookie("refereshToken");
  
  if (!refreshToken) return "No refresh token available";
  
  try {
    const res = await api.post("auth/check-refresh-token", { refreshToken });
   
    return res ;
  } catch (error) {
    return { error };
  }
};





export default refresh;