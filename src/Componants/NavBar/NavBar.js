import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../App.css";
import NavSongs from "../Nav_Songs/NavSongs";
const NavgationBar = _ =>
{
    return (
        <div className={styles.navBar} style={{ "background": "#101828" , "width": "400px" , "maxHeight": "95vh" , "overflowY": "auto" , "overflowX": "hidden"}}>
            <nav className={styles.navWrapper}>
                <h4 className={`${styles.logo} mb-lg-5 mb-md-5  text-center fst-italic position-relative p-3`}>
                    Playlist</h4>
                <ul>
                    <li className={`${styles.link_item}`}>
                        <Link to="/library" className={`nav-link active-text`}>
                            <i className="fa-solid fa-music"></i>
                            <span className="ms-3">My Playlist</span>
                        </Link>
                    </li>
                    <li className={`${styles.link_item}`}>
                        <Link to="/last-listening" className={`nav-link`}>
                            <i className="fa-solid fa-record-vinyl"></i>
                            <span className="ms-3">Last Listening</span>
                        </Link>
                    </li>
                    <li className={`${styles.link_item}`}>
                        <Link to="/library" className={`nav-link`}>
                            <i className="fa-solid fa-record-vinyl"></i>
                            <span className="ms-3">Recommended</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <NavSongs />
        </div>
    )
}


export default NavgationBar;