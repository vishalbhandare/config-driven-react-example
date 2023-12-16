import React, { useContext, useState } from "react";
const RoleContext = React.createContext()
const RoleUpdateContext = React.createContext()

export function useRoleContext() {
    return useContext(RoleContext)
}

export function useRoleUpdateContext() {
    return useContext(RoleUpdateContext)
}

export function RoleContextProvider({ children }) {
    const [role, setRole] = useState('user')
    function changeRole(role) {
        setRole(role)
    }
    return(
        <RoleContext.Provider value={role}>
            <RoleUpdateContext.Provider value={changeRole}>
                { children }
            </RoleUpdateContext.Provider>
        </RoleContext.Provider>
    )
}