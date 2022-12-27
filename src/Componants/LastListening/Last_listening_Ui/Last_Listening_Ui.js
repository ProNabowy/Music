import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hunadler_current_song } from "../../Global Funactions/globalFunctions";
import { getCurrentSong } from "../../Slices/active-song";

const Last_Listening_Ui = () =>
{
    const dispatch = useDispatch();
    const song = useSelector(store => store.currentSong);
    return (
        <Container className="mt-5">
            <div key={Math.random() * song.id} className="p-1 mb-5 position-relative text-white " style={{ "borderRadius": "10px", "border": "1px solid var(--second-color)" }} >
                <div style={{ "backgroundImage": `url(${song["bg-poster"]})`, "backgroundSize": "cover", "backgroundPosition": "center center", "borderRadius": "10px", "width": "100%", "height": "200px" }}></div>
                <article className="text-center mb-3 ">
                    <h4>{song.songName.slice(0, 40)}</h4>
                    <p className="mb-2 text-white-50">{song.singer}</p>
                    <p>{song.songDescrption}</p>
                </article>
                <div className="p-2 d-flex justify-content-center align-items-center" style={{ "backgroundColor": "var(--main-color)", "borderRadius": "10px" }}>
                    <i className={`fa-solid fa-play text-white fs-3`} style={{ "cursor": "pointer" }} onClick={(e) =>
                    {
                        hunadler_current_song(e, song);
                        dispatch(getCurrentSong(song));
                    }}></i>
                </div>
            </div>
        </Container>
    );
};

export default Last_Listening_Ui;