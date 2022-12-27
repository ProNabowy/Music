import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../Slices/songSlice";
import { controalLeftCarousel, controalRightCarousel } from "../Global Funactions/globalFunctions";
import "../Popular_Songs/popular.css";
const Artists = () =>
{
    const songs = useSelector((state) => state.songs);
    const [wrapper_element, setWrapper_element] = useState([]);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(getDataFromAPI());
    }, [dispatch]);

    const artistUi = songs.map(song =>
    {
        return (
            <div key={song.id * Math.random()} className="artist-img">
                {
                    song["sm-img"] && <img src={song["sm-img"]} alt={song.songDescrption} style={{ "border": "1px solid rgb(77, 206, 228)" }} />
                }
            </div>
        );
    });

    useEffect(() =>
    { 
        const element = document.querySelector(".carousel-artist");
        setWrapper_element(element);
    }, []);
    
    return (
        <section className="p-5" >
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4 text-white">Popular Artists</h3>
                <div className="position-relative wrapper-icone">
                <i className="fa-solid fa-arrow-left me-3 text-white" onClick={() => controalRightCarousel(wrapper_element)} style={{"cursor": "pointer"}}></i>
                <i className="fa-solid fa-arrow-right me-3 text-white" onClick={() => controalLeftCarousel(wrapper_element)} style={{"cursor": "pointer"}}></i>
            </div>
            </div>
            <div className="carousel-artist d-flex justify-content-between" style={{ "overflowX": "visible", "overflowY": "hidden" }}>
                {artistUi}
            </div>
        </section>
    )
}


export default Artists;