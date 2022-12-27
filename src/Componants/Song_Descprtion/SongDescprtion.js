import { useSelector } from "react-redux";
import { audio } from "../Global Funactions/globalFunctions";
import "./songDescrption.css";
const SongDescrption = () =>
{
    const currentSong = useSelector(store => store.currentSong);
    return (
        <article className="p-5 pb-3 ">
            <h1 className="mb-3 song-name text-white">{currentSong && currentSong.songName}</h1>
            <p style={{ "maxWidth": "40%", "fontSize": "13px" }} className={"mb-5 descrption text-white-50"} >{currentSong && currentSong.songDescrption}</p>
            <button className="pe-lg-5 ps-lg-5 me-lg-3 me-2 pe-2 ps-2 btn btn-primary" style={{ "background": "#4dcee4" }} onClick={() => audio.play()} >PLAY</button>
            <button className="pe-lg-5 ps-lg-5 me-lg-3 me-2 pe-1 ps-1  btn btn-outline-primary">FOLLOW</button>
        </article>
    );
}


export default SongDescrption;