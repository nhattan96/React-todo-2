import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'

import FavoritesContext from '../../store/favories-context'

function MeetupItem(props) {
    const favoriesCtx = useContext(FavoritesContext)
    const itemIsFavorites = favoriesCtx.itemIsFavorite(props.id)

    function toogleFavoritesStatusHander() {
        if (itemIsFavorites) {
            favoriesCtx.removeFavories(props.id)
        }
        else {
            favoriesCtx.addFavories({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address : props.address
            })
        }
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toogleFavoritesStatusHander}>
                        {itemIsFavorites ? 'Remove from favorites' : 'Add to favorites'}
                </button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem