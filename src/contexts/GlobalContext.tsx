import React, { createContext, ReactElement, SetStateAction, useState } from "react";

interface GlobalContextInterface {
    loading: LoadingInterface,
    setLoading: React.Dispatch<SetStateAction<LoadingInterface>>
}

interface GlobalProviderProps {
    children: ReactElement
}

interface LoadingInterface {
    active: boolean,
    hide: boolean
}

export const GlobalContext = createContext<GlobalContextInterface>({} as GlobalContextInterface);
GlobalContext.displayName = "Global";

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [loading, setLoading] = useState<LoadingInterface>({
        active: false,
        hide: false
    });
    
    return (
        <GlobalContext.Provider value={{ 
            loading, 
            setLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
} 