import React, { useEffect } from "react";
import { User } from "../types/User";

export default function useCurrentProfile(){
    let [profile,setProfile] = React.useState<User | null>(null);
    let [isLoggedIn,setIsLoggedIn] = React.useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem("profile")){
            setProfile(JSON.parse(sessionStorage.getItem("profile")!));
            setIsLoggedIn(true);
        }
    },[]);

    return {profile,isLoggedIn};

}