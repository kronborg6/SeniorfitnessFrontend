import { Outlet, Navigate } from "react-router-dom";
import useToken from '../Hooks/useToken.js'


const PrivateRoutes = () => {
    const { token } = useToken();

    return(
        token ? <Outlet /> : <Navigate to="/" replace/>
    )
}

export default PrivateRoutes;