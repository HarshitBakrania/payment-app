import axios from "axios";
import { useEffect, useState } from "react"

export const useUser = () =>{
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);

    async function getDetails(){
        try{
            const res = await axios.get("http://localhost:3000/api/v1/user/me",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setUserDetails(res.data);
        }catch(error){
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[]);

    return {
        loading,
        userDetails
    }
    
}