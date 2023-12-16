import React, { useContext, useState } from "react";
const LayoutContext = React.createContext()
const LayoutUpdateContext = React.createContext()

export function useLayoutContext() {
    return useContext(LayoutContext)
}

export function useLayoutUpdateContext() {
    return useContext(LayoutUpdateContext)
}

export function LayoutContextProvider({ children }) {
    const [layout, setLayout] = useState('desktop')
    function changeLayout(layout) {
        setLayout(layout)
    }
    return(
        <LayoutContext.Provider value={layout}>
            <LayoutUpdateContext.Provider value={changeLayout}>
                { children }
            </LayoutUpdateContext.Provider>
        </LayoutContext.Provider>
    )
}