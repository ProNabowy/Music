import { useEffect } from "react";
import { control_thumb, timeUpdate } from "../../Global Funactions/globalFunctions";
import "../musicControalr.css";

const Thumb = () =>
{
    // calling functions when page loaded 
    useEffect(() =>
    {
        timeUpdate();
        control_thumb();
    }, []);
    
    return (
        <div className="thumb-wrapper w-50">
            <time className="start-time" dateTime="start">00:00</time>
            <div className="thumb-controal w-100 position-relative">
              <input type="range" id="thumb" name="volume" defaultValue={0} min={0} />
              <span className="thumb-ui-full-width"></span>
              <span id="seek" className="thumb-ui"></span>
              <span id="seek_dot" className="thumb-cricle"></span>
            </div>
            <time className="end-time" dateTime="end">00:00</time>
        </div>
    )
}

export default Thumb;