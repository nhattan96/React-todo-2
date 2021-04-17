import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favories: [],
    totalFavories: 0,
    addFavories: (favoritesMeetup) => { },
    removeFavories: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
})

export function FavoriesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoritesHander(favoritesMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesMeetup)
        })
    }

    function removeFavoritesHander(meetupId) {
        setUserFavorites((preUserFavorites) => {
            return preUserFavorites.filter(meetup =>
                meetup.id !== meetupId)
        })
    }

    function itemIsFavoritesHander(meetupId) {
        {
            return userFavorites.some(meetup =>
                meetup.id === meetupId)
        }
    }

    const context = {
        favorites: userFavorites,
        totalFavories: userFavorites.length,
        addFavories: addFavoritesHander,
        removeFavories: removeFavoritesHander,
        itemIsFavorite: itemIsFavoritesHander
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext