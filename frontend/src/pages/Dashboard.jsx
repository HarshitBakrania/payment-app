import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { User } from "../components/User"

export const Dashboard = () =>{
    return <div>
        <Appbar />
        <Balance value={"10000"} />
        <User />
    </div>
}