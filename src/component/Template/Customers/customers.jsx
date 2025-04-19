import { useEffect, useState } from "react"
import handledFetch from "../../../utils/handledfetch"
import { getCookie } from "../../../utils/cookie";
import Table from "../UsersTable/UsersTable";

export default function Customers(){
    const [page,setPage]=useState(1)
    const [usersCount,setUsersCount]=useState(0)
    const [dataCustomer , setDataCustomer]=useState([])

    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization" , getCookie('accessToken'))
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };
        

        handledFetch(`customer/?page=${page}`,requestOptions,(res)=>{
          
            setUsersCount(res.count)

        }
            
        ).then(
            (res)=>{}
        ).finally()
    },[])
    return <div>
        
    </div>
}