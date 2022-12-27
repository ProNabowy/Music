import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { audio } from "../Global Funactions/globalFunctions";
import { getCurrentSong } from "../Slices/active-song";
import "./header.css";
const Header = ({...props}) =>
{
    const currentSong = useSelector(store => store.currentSong);
    const songs = useSelector(store => store.songs);
    const [input_value, set_input_value] = useState("");
    const dispatch = useDispatch();
    const path = props.path;

    // active search input 
    const search = (e) =>
    {
        e.preventDefault();
                    
        let getSong = songs.filter(song => song.songName.includes(input_value))[0];
        audio.currentTime = 0;
        audio.pause();
        return dispatch(getCurrentSong(getSong));
    };
    
    return (
        <header className="p-3 d-flex justify-content-between align-items-center">
            <ul className="list d-flex justify-content-between align-items-center">
                <li className={`${path === "/" ? "active" : ""}`}><Link to={"/"} className={`${path === "/" ? "text-white " : "text-white-50"}`}  >Discover</Link></li>
                <li className={`${path === "library" ? "active " : ""}`}><Link to={"/library"} className={`${path === "library" ? "text-white " : "text-white-50"}`} >LIBRARY</Link></li>
            </ul>
            <div className="search position-relative">
                <form onSubmit={(e) =>  {search(e)}}>
                    <input type="search" onChange={(e) => set_input_value(e.target.value)} id="search_input"placeholder="Search Music" />
                </form>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
                <img src={`${currentSong.poster}`} alt={currentSong.songDescrption} className={"d-lg-block d-none"} />
            </div>
        </header>
    )
}


export default Header;