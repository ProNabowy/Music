import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  controalLeftCarousel, controalRightCarousel, hunadler_current_song } from "../Global Funactions/globalFunctions";
import "./popular.css";
import { getDataFromAPI } from "../Slices/songSlice";
import { getCurrentSong } from "../Slices/active-song";
const PopularSongs = _ =>
{
    const [wrapper_element, setWrapper_element] = useState([]);
    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);
    const popularUi = songs.map(song =>
    {
        return (
            <div key={song.id * Math.random()} className="me-3 popular-Song">
                <img src={song["sm-img"]} alt={song.songDescrption} style={{ "width": "100px", "height": "100px" }} />
                <h6 className="text-white mb-1 mt-1" >{song.songName.slice(0, 10)}</h6><p className="text-white-50" style={{ "fontSize": "11px" }} >{song.singer}</p>
                <i className={`fa-solid fa-play popular-icone`} onClick={(e) =>
                {
                    hunadler_current_song(e, song);
                    dispatch(getCurrentSong(song));
                }}></i>
            </div>
        );
    });

    useEffect(() =>
    { 
        const element = document.querySelector(".carousel");
        setWrapper_element(element);
    }, []);

    return (
        <section className="p-5 pb-2" >
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4 text-white">Popular Song</h3>
                <div className="position-relative wrapper-icone">
                <i className="fa-solid fa-arrow-left me-3 text-white" onClick={() => controalRightCarousel(wrapper_element)} style={{"cursor": "pointer"}}></i>
                <i className="fa-solid fa-arrow-right me-3 text-white" onClick={() => controalLeftCarousel(wrapper_element)} style={{"cursor": "pointer"}}></i>
                </div>
            </div>
            <div className="d-flex  align-items-center carousel" style={{"overflowX": "visible" , "overflowY": "hidden"}}>
                    {popularUi}
            </div>
        </section>
    )
}

export default PopularSongs;