import { createContext, useState } from "react";


export const ProfileCard = createContext()


export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState([])

    const addUser = (userId) => {
        if (Object.keys(profile).length > 9) {
            profile.splice(0,1)
            if (userId.name !== undefined) {
                setProfile(prev=>[...prev,userId])
            }
        }else{
            if (userId.name !== undefined) {
                setProfile(prev=>[...prev,userId])
            }
             
        }
        
    }
    const context = { profile, addUser }
    return (
        <ProfileCard.Provider value={context}>
            {children}
        </ProfileCard.Provider>
    )
}

