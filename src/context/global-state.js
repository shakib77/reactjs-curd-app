import React, { createContext, useReducer } from 'react';

import AppReducer from './app-reducer';

const initialState = {
    items: [
        {id: 1, name: 'Item One'},
        {id: 2, name: 'Item Two'},
        {id: 3, name: 'Item Three'}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeItem = (id) => {
        dispatch ({
            type: 'REMOVE_ITEM',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            items: state.items
        }}>
            { children }
        </GlobalContext.Provider>
    )
};