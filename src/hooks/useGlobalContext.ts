import { useContext } from "react";

import { GlobalContext } from "@/contexts/GlobalContext";

export const useGlobalContext = () => {
    const { loading, setLoading } = useContext(GlobalContext);

    const showLoading = (action: "show" | "hide" | "reset") => {
        switch (action) {
            case "show":
                return setLoading({ active: true, hide: false });
            case "hide":
                return setLoading({ active: true, hide: true });
            case "reset":
                return setLoading({ active: false, hide: false });
            default:
                return;
        }
    };

    return {
        loading,
        showLoading
    };
};