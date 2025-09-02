import classes from '../styles/MiniPlayer.module.css';
import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

export default function MiniPlayer({ id, title }) {
    const buttonRef = useRef();
    const YoutubeBtnRef = useRef();
    const [status, setStatus] = useState(false);
    const [play, setPlay] = useState(0);
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;


    function toggleMiniPlayer() {
        // console.log(buttonRef);
        // console.log(YoutubeBtnRef);
        if (!status) {
            buttonRef.current.classList.remove(classes.floatingBtn);
            YoutubeBtnRef.current.classList.remove(classes.hello);

            setStatus(true);
            setPlay(1);
        } else {
            buttonRef.current.classList.add(classes.floatingBtn);
            YoutubeBtnRef.current.classList.add(classes.hello);
            setStatus(false);
            setPlay(0);
        }
    };
    const opts = {
        height: '300px',
        width: '300px',
        playerVars: {
            videoUrl,
            autoplay: play,
        },
    };
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={toggleMiniPlayer}>
            <span className={`material-icons-outlined ${classes.open}`}>
                {" "}
                play_circle_filled{" "}
            </span>
            <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}>
                {" "}
                close{" "}
            </span>
            <div className={classes.hello}
                ref={YoutubeBtnRef}>
                <YouTube
                    videoId={id}
                    opts={opts}
                />
            </div>
            <p>{title}</p>
        </div>
    );
}
