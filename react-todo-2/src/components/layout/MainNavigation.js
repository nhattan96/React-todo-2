import { Link } from 'react-router-dom'

import mainNavigationSCSS from './MainNavigation.module.css'

function MainNavigation() {
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
                        <Link to='/favories'>My Favories</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation