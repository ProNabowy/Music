export const controalLeftCarousel = (carousel) =>
{
        carousel.scrollBy({
            left: "300",
            top: "0",
            behavior: "smooth"
        });

}
export  const controalRightCarousel = (carousel) =>
{
        carousel.scrollBy({
            left: "-300",
            top: "0",
            behavior: "smooth"
        });
}

// main audio
export const audio = new Audio("https://github.com/ProNabowy/music-app-img/blob/main/Bad%20Guy.mp3?raw=true");

// control play and pause icone function

const control_play_pause_icone = (e , song) =>
{
    if (e.target.classList.contains("fa-play"))
    {
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audio.src = song.url;
        audio.pause();
        audio.play();
    } else
    {

        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
       return audio.pause();
    }
}

// converte all pause icone to play icone
const converte_play_pause = () =>
{
    document.querySelectorAll(".fa-pause").forEach(ele =>
    {
        if (!ele.classList.contains("active-audio"))
        {
            ele.classList.remove(".fa-pause");
            ele.classList.add("fa-play");
            audio.currentTime = 0;
        } else
        {
            ele.classList.add(".fa-pause");
            ele.classList.remove("fa-play");
        }
    });
}

// this Function To push currrent Song to store and use it
export const hunadler_current_song = (e , song) =>
{
    
    // remove active-audio class from all of audios
    document.querySelectorAll(".active-audio").forEach(element => element.classList.remove("active-audio"));
    // add active class for the cureent element
    e.target.classList.add("active-audio");
    converte_play_pause();
    control_play_pause_icone(e, song);
};

// this functio to play animation icone
const play_animation = (song_play) =>
{
    const elements = document.querySelectorAll(".animait-icone span");
    if (song_play&& elements.length )
    {
        elements[0].classList.add("run-animation-one");
        elements[1].classList.add("run-animation-two");
        elements[2].classList.add("run-animation-three");
        elements[3].classList.add("run-animation-four");
    } else if(!song_play && elements.length )
    {
        elements[0].classList.remove("run-animation-one");
        elements[1].classList.remove("run-animation-two");
        elements[2].classList.remove("run-animation-three");
        elements[3].classList.remove("run-animation-four");
    }

}


// set a valid time to html time tag
export const timeUpdate = () =>
{
    const start_Time = document.querySelector(".start-time");
    const end_Time = document.querySelector(".end-time");
    let thumb_icone = document.querySelector(".thumb-icone");

    // set a valid time to html elements 
    audio.addEventListener("timeupdate", _ =>
    {

        thumb_icone.classList.add("fa-pause");
        thumb_icone.classList.remove("fa-play");
        
        // start

        const audio_duration = audio.duration;
        let min = Math.floor(audio_duration / 60);
        const audio_CurrentTime = audio.currentTime;

        let start_min = Math.floor(audio_CurrentTime / 60);
        let start_sec = Math.floor(audio_CurrentTime % 60);

        if (start_min < 10)
        {
            start_min = "0" + start_min;
        }
        if (start_sec < 10)
        {
            start_sec = "0" + start_sec;
        }

        start_Time.innerHTML = start_min + ":" + start_sec;

        // end

        let end_sec = audio_duration - start_sec;
        let end_mins = min - start_min;
        let end_secs = Math.floor((end_sec % 60) % 60);

        if (end_secs < 10)
        {
            end_secs = "0" + end_secs;
        };
        if (end_mins < 10)
        {
            end_mins = "0" + end_mins;
        };
        end_Time.innerHTML = end_mins + ":" + end_secs;

        if (audio.paused)
        {
            thumb_icone.classList.add("fa-play");
            thumb_icone.classList.remove("fa-pause");
        }

        // Call animation

        let song_play = false;

        if (audio.played)
        {
            song_play = true;
        }
        if (audio.paused)
        {
            song_play = false;
        }
        
        play_animation(song_play);

    });
};

// this functio to reset cureent audio time when audio ended

const audio_ended = () =>
{
    audio.addEventListener("ended", () =>
    {
        let each_pause = Array.from(document.querySelectorAll(".fa-pause"));
        each_pause.map(icone =>
        {
            icone.classList.remove("fa-pause");
            icone.classList.add("fa-play");
            return null;
        });
    });
};

// control thumb to play when audio playing
export const control_thumb = () =>
{

    audio.addEventListener("timeupdate", _ =>
    {
        const thumb = document.querySelector("#thumb");
        let seek = document.querySelector("#seek");
        let seek_dot = document.querySelector("#seek_dot");
        let progress = parseInt((audio.currentTime / audio.duration) * 100);

        thumb.value = progress;
        let seekbar = thumb.value;

        // set new width to seek and seek_dot
        seek.style.width = `${seekbar}%`;
        seek_dot.style.left = `${seekbar}%`;

        // update current audio time when user update seek
        thumb.addEventListener("change", () =>
        {
            audio.currentTime = thumb.value * audio.duration / 100;
        });

        // calling audio_ended to reset cureent audio time
        audio_ended();
    });
}


// voule handler
export const voule_handler = () =>
{
    const volume = document.querySelector("#thumb-volume");
    let volume_icone = document.querySelector(".volume-icone");
    const thumb = document.querySelector(".volume-controlar .thumb-ui");
    let seek_dot = document.querySelector(".volume-controlar .thumb-cricle");

    volume.addEventListener("change", () =>
    {
        // set new thumb width
        thumb.style.width = `${volume.value}%`;
        seek_dot.style.left = `${volume.value}%`;

        
        // change icone when value changed
        if (Number(volume.value) === 0)
        {
            volume_icone.classList.remove("fa-volume");
            volume_icone.classList.remove("fa-volume-high");
            volume_icone.classList.add("fa-volume-xmark");
        } else if (volume.value <= 50)
        {
            volume_icone.classList.remove("fa-volume-xmark");
            volume_icone.classList.remove("fa-volume-high");
            volume_icone.classList.add("fa-volume-low");
        } else if (volume.value > 50)
        {
            volume_icone.classList.remove("fa-volume-xmark");
            volume_icone.classList.remove("fa-volume-low");
            volume_icone.classList.add("fa-volume-high");
        }

    });

}
// create function to controal next and perv songs

// next icone
const next_icone = (state, active_song) =>
{
    const next = document.querySelector(".next-icone");
    // loop for state to get the  next song;
    next.addEventListener("click", () =>
    {
        let currentSong = state.filter(song => Number(song.id) === Number(active_song.id) + 1);
        audio.src = currentSong[0].url;
    });
};
// perv icone
const perv_icone = (state, active_song) =>
{
    const perv = document.querySelector(".perv-icone");
    // loop for state to get the  perv song;
    perv.addEventListener("click", () =>
    {
        let currentSong = state.filter(song => +song.id === Number(active_song.id) - 1);
        audio.src = currentSong[0].url;
    });
};


export const control_next_perv = (state , active_song) =>
{
    next_icone(state, active_song);
    perv_icone(state, active_song);

   return audio.pause();
}
