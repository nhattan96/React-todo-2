import { useContext } from 'react'

import { Link } from 'react-router-dom'

import mainNavigationSCSS from './MainNavigation.module.css'

import FavoritesContext from '../../store/favories-context'

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext)
    return (
        <header className={mainNavigationSCSS.header}>
            <div className={mainNavigationSCSS.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favories'>
                            My Favories
                            <span className={mainNavigationSCSS.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation