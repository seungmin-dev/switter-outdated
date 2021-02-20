import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const onChange = event => {
        const { target : {value}} = event;
        setNewDisplayName(value);
    }
    const onSubmit = async event => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName : newDisplayName
            });
            refreshUser();
        }
    }
    const getMySweets = async () => {
        const sweets = await dbService.collection("sweets").where("creatorId", "==", userObj.uid).orderBy("createdAt").get();
    }
    useEffect(() => {
        getMySweets();
    }, []);
    return <>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Display Name" value={newDisplayName} />    
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log Out</button></>
};
export default Profile;