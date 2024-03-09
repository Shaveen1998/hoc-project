import { createContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({children})=>{

    const [user, setUser] = useState({name:'Shaveen'})

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext