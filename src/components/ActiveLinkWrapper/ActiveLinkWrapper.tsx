import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export interface ActiveLinkWrapperProps {
    children?: ReactNode;
    activeLinkSetter: (current_active_link: string) => void;
    old_location: string;
}
export function ActiveLinkWrapper({ children, activeLinkSetter, old_location }: ActiveLinkWrapperProps) {
    const location = useLocation();
    if (old_location !== location.pathname) {
        activeLinkSetter(location.pathname);
    }
    return children;
}
