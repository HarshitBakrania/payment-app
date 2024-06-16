import { Navigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () =>{
    const user = useUser();
    if(user.loading){
        return "loading..."
    }
    if(!user.userDetails){
        return <Navigate to = {"/signin"} /> 
    }

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={Math.ceil(user.userDetails.account.balance)} />
            <Users />
        </div>
    </div>
}