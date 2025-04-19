import { createContext, useState } from "react";


export const providerContext=createContext();




export const ProviderData=({children})=>{
    const [otpData , setOtpData]=useState("")
    const [otpData2 , setOtpData2]=useState("")

    return(
        <providerContext.Provider value={ {setOtpData , otpData}}>
        {children}
        </providerContext.Provider>
    )

}
