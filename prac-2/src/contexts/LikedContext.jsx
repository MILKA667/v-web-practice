import { createContext, useState } from 'react';

export const LikedContext = createContext();

export const LikedProvider = ({ children }) =>{
    const [likes,setLikes] = useState([])

    const addToLiked = (product) => {
        setLikes(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.filter(item => item.id !== product.id);
            } else {
                return [...prevItems, product];
            }
        });
    };

    const clearLiked = () => {
        setLikes([])
    }
    

    const value = {
        likes,
        addToLiked,
        clearLiked
    }

    return(
        <LikedContext.Provider value={value}>
            {children}
        </LikedContext.Provider>
    )
}