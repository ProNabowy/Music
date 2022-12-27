import { Fragment } from "react";
import { useDispatch  } from "react-redux";
import { control_next_perv, hunadler_current_song } from "../../Global Funactions/globalFunctions";
import { getCurrentSong } from "../../Slices/active-song";


const EffectIcons = ({...props}) =>
{
    const currentSong = props.currentSong;
    const songs = props.songs;
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="item-controlar">
                <i className="fa-solid fa-backward-step perv-icone" onClick={() =>
                {
                    // push new song to default song store
                    dispatch(getCurrentSong(...songs.filter(song => +song.id === Number(currentSong.id) - 1)));
                    return control_next_perv(songs, currentSong);
                }}></i>
                <i className="fa-solid fa-play thumb-icone" onClick={(e) => hunadler_current_song(e, currentSong)}></i>
                <i className="fa-solid fa-forward-step next-icone" onClick={() =>
                {
                    // push new song to default song store
                    dispatch(getCurrentSong(...songs.filter(song => +song.id === Number(currentSong.id) + 1)));
                    return control_next_perv(songs, currentSong);
                }}></i>
            </div>
        </Fragment>
    );
}

export default EffectIcons;