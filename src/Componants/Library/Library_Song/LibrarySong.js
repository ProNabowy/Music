import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hunadler_current_song } from "../../Global Funactions/globalFunctions";
import MusicControalr from "../../Music_Controlar/MusicControalr";
import { getCurrentSong } from "../../Slices/active-song";

import { getDataFromAPI } from "../../Slices/songSlice";

const LibrarySong = () =>
{
    const songs = useSelector(store => store.songs);
    const dispatch = useDispatch();
    // call api to get songs
    useEffect(() => { dispatch(getDataFromAPI()) }, [dispatch]);

    const song_ui = songs.map((song) => {
        return (
            <div key={Math.random() * song.id} className="col-lg-5  p-1 mb-5 position-relative text-white " style={{ "borderRadius": "10px", "border": "1px solid var(--second-color)" }} >
                <div style={{ "backgroundImage": `url(${song["bg-poster"]})`, "backgroundSize": "cover", "backgroundPosition": "center center", "borderRadius": "10px", "width": "100%", "height": "200px" }}></div>
                <article className="text-center mb-3 fw-bold">
                    <h4>{song.songName.slice(0, 40)}</h4>
                    <p className="mb-5">{song.singer}</p>
                </article>
                <div className="p-2 d-flex justify-content-center align-items-center" style={{ "backgroundColor": "var(--main-color)", "borderRadius": "10px" }}>
                    <i className={`fa-solid fa-play text-white fs-3`} style={{ "cursor": "pointer" }} onClick={(e) =>
                    {
                        hunadler_current_song(e, song);
                        dispatch(getCurrentSong(song));
                    }}></i>
                </div>
            </div>
        );
    })
    return (
        
        <Container className="mt-5">
            <div className="row p-2 gap-2" style={{ "placeContent": "center" }}>
                {song_ui}
                <MusicControalr showSinger={true} />
            </div>
        </Container>

    );
}

export default LibrarySong;