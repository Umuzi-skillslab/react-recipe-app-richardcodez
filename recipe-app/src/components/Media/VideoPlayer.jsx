import PropTypes from "prop-types";
import styles from "./Media.module.css";
import { useRef, useState } from "react";

const VideoPlayer = ({videoUrl, title}) => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        isPlaying ? video.pause() : video.play();
    }

    return (
        <div className={styles.mediaCard}>
            <div className={styles.mediaHeader}>
                <h4>{title}</h4>
            </div>
            <video 
                ref={videoRef}
                className={styles.videoEl}
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={videoUrl} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className={styles.controlsRow}>
                <button className={styles.plaBtn} onClick={togglePlay}>
                    {isPlaying ? "❚❚" : "▶"}
                </button>
                <span>{isPlaying ? "Playing..." : "Tap Play"}</span>
            </div>
        </div>
    );
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string
}

VideoPlayer.defaultProps = {
    title: 'Cooking Tutorial'
}

export default VideoPlayer;