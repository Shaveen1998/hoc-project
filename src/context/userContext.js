import { createContext } from "react";

const context = createContext()

const UserContext = ({children})=>{
    return(
        <context.Provider>
            {children}
        </context.Provider>
    )
}

export default UserContext