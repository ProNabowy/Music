import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../Slices/songSlice";
import EffectIcons from "./Icone_Controlar/EffectIcons";
import "./musicControalr.css";
import Thumb from "./Thumb/Thumb";
import Volume from "./Volume/Volume";
const MusicControalr = (props) =>
{
    const showSinger = props.showSinger;
    const currentSong = useSelector(store => store.currentSong);
    const songs = useSelector(store => store.songs);

    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);
    return (
        <div className="m_controaler ps-4 d-flex flex-wrap justify-content-center align-items-center">
            {
                showSinger &&
                <div className="song-details d-lg-flex d-none">
                    <div className="animait-icone">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="song-details me-4 ms-3 d-flex align-items-center ">
                        <div>
                            <img src={`${currentSong["sm-img"]}`} alt={`${currentSong.songDescrption}`} />
                        </div>
                        <div>
                            <h6 className="mb-1 text-white fw-bold" style={{ "fontSize": "13px" }}>{currentSong.songName.slice(0, 15)}...</h6>
                            <p className="text-white-50 fw-bold" style={{ "fontSize": "10px" }}>{currentSong.singer}</p>
                        </div>
                    </div>
                </div>
            }
            <EffectIcons currentSong={currentSong} songs={songs} />
            <Thumb />
            <Volume />
        </div>
    );
}


export default MusicControalr;