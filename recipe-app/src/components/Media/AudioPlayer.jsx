import PropTypes from "prop-types";
import styles from "./Media.module.css";
import { useRef, useState } from "react";

const AudioPlayer = ({audioUrl, title}) => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        isPlaying ? audio.pause() : audio.play();
    }

    return (
        <div className={styles.audioCard}>
            <h4>{title}</h4>
            <audio 
                ref={audioRef}
                controls
                style={{width: "100%"}}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={audioUrl} type='audio/mpeg' />
                Your browser does not support the audio element.
            </audio>
            <div className={styles.controlsRow}>
                <button className={styles.playBtn} onClick={togglePlay}>
                    {isPlaying ? "❚❚" : "▶"}
                </button>
                <span>{isPlaying ? 'Playing...' : 'Tap Play'}</span>
            </div>
        </div>
    );
}

AudioPlayer.propTypes = {
    audioUrl: PropTypes.string.isRequired,
    title: PropTypes.string
}

AudioPlayer.defaultProps = {
    title: "Cooking Tip"
}

export default AudioPlayer;