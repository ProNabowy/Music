import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Artists from "../Popular_artiset/PopularArtists";
import PopularSongs from "../Popular_Songs/PopularSongs";
import "./App_controalr.css";
import SongDescrption from "../Song_Descprtion/SongDescprtion";

const AppControaler = _ =>
{
    const currentSong = useSelector(store => store.currentSong);
    return (
        <div className="app-controlar" style={{ "width": "calc(100% - 400px)", "backgroundImage": `url(${currentSong.poster})` , "backgroundRepeat": "no-repeat" , "backgroundPosition": "top right" }}>
            <Header path={"/"} />
            <SongDescrption />
            <PopularSongs />
            <Artists />
        </div>
    )
}

export default AppControaler;