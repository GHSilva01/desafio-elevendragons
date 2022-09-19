import { createContext, useContext, useState, useEffect } from "react";
import Users from "./api/users"

export const UsersContext = createContext<any>([])

export const UsersStorage = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getUsers() {
            Users.get('').then(results => {
                setData(results.data)
                console.log(results.data)
            })
        }
        getUsers()
    }, [])

    return (
        <UsersContext.Provider value={{ data, setData }}>
            {children}

        </UsersContext.Provider>
    )
}