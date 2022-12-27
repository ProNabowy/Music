/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  hunadler_current_song } from "../Global Funactions/globalFunctions";
import { getCurrentSong } from "../Slices/active-song";
import { getDataFromAPI } from "../Slices/songSlice";
import styles from "./songs.module.css";

const NavSongs = () =>
{
    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);


    // darw song ui
    const songNavUi = songs.map(song =>
    {
        return (
            <div key={song.id} className={`d-flex align-items-center ${styles.navSong}`} style={{ "padding": "10px 15px", "width": "400px" }}>
                <p style={{ color: "var(--text-color)" }} className={"me-2"} >{song.id < 10 ? `0${song.id}` : song.id}</p>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex ms-3">
                        <img src={song["sm-img"]} alt={song.songDescrption} style={{ "width": "40px", "height": "40px", }} />
                        <div style={{ "fontSize": "13px" }} className={"ms-3 text-white"} >
                            <p className={`${styles.fsn}`}>{song.songName.slice(0, 20)}</p>
                            <p className="text-white-50">{song.singer}</p>
                        </div>
                    </div>
                    <i className={`fa-solid fa-play ${styles.icone}`} onClick={(e) =>
                    {
                        hunadler_current_song(e, song);
                        dispatch(getCurrentSong(song));
                    }}></i>
                </div>
            </div>
        )
    });

    return (
        <div>
            {songNavUi}
        </div>
    );
}

export default NavSongs;