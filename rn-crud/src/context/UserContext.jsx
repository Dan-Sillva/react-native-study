import React, { createContext, useReducer } from 'react';

import users from '../data/users';

const initialState = { users }
const UserContext = createContext({})

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    }, 

    updateUser(state, action) {
        const updatedUser = action.payload
        return {
            ...state, 
            users: state.users.map((u) => u.id === updatedUser.id  ? updatedUser : u)
        }
    },

    deleteUser(state, action) {
        const user = action.payload
        return {
            // ...state,
            users: state.users.filter((u) => u.id !== user.id),
        }
    }
}

export const UserProvider = props => {
    const reducer = (state, action) => {
        const reducerFunction = actions[action.type]
        return reducerFunction ? reducerFunction(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;