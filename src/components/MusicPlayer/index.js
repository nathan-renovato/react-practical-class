import './style.css';
import StopBtn from '../../assets/stop.svg';
import PreviousBtn from '../../assets/previous.svg';
import PlayBtn from '../../assets/play.svg';
import PauseBtn from '../../assets/pause.svg';
import NextBtn from '../../assets/next.svg';
import { useRef } from 'react';
import { musics } from '../../musics';


export default function MusicPlayer({ currentSong, setCurrentSong }) {

    const audioRef = useRef(null);

    function handlePlayMusic() {
        if (currentSong) {
            audioRef.current.src = currentSong.url;
        }

        audioRef.current.play();
        return;
    }

    function handleStopMusic() {
        audioRef.current.pause();
        audioRef.current.time = 0;
    }

    function handleSkipMusic(skipMusic) {
        const currentMusicIndex = musics.findIndex((music) => music.id === currentSong.id);

        if (currentMusicIndex + skipMusic < 0) {
            setCurrentSong(musics[musics.length - 1]);
            audioRef.current.src = currentSong.url;
            audioRef.current.play();
            return;
        }

        if (currentMusicIndex + skipMusic > musics.length - 1) {
            setCurrentSong(musics[0]);
            audioRef.current.src = currentSong.url;
            audioRef.current.play();
            return;
        }

        setCurrentSong(musics[currentMusicIndex + skipMusic]);
        handlePlayMusic();
        return;
    }

    return (
        <div className='music-player-container'>
            <div className='song-information'>
                <h2>Violão acústico</h2>
                <span>Robert Mayer</span>
            </div>
            <div className='music-controls'>
                <div className='music-controller-buttons'>
                    <img
                        onClick={() => handleStopMusic()}
                        src={StopBtn}
                        alt='botão stop'
                    />
                    <img
                        onClick={() => handleSkipMusic(-1)}
                        src={PreviousBtn}
                        alt='botão música anterior'
                    />
                    <img
                        onClick={() => handlePlayMusic()}
                        src={PlayBtn}
                        alt='botão play e pause'
                    />
                    <img
                        onClick={() => handleSkipMusic(1)}
                        src={NextBtn}
                        alt='botão próxima música' />
                </div>
                <div className=''>
                    <span>1.45</span>
                    <audio ref={audioRef} />
                    <span>3.34</span>
                </div>
            </div>
        </div>
    )
};