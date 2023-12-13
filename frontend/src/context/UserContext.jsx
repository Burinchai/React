import { createContext, useState } from "react";
export const UserConntext = createContext({});
export const UserConntextProvider = ({children}) =>{
    const [userInfo, setUserIfo] = useState({});
    return(
        <UserConntext.Provider value={{userInfo, setUserIfo}}>
            {children}
        </UserConntext.Provider>
    );
};