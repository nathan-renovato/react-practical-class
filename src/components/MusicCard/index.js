import './style.css';

export default function MusicCard({ title, description, cover, setCurrentSong, music }) {

    function handleChooseMusic(music) {
        setCurrentSong(music);
    }

    return (
        <div className='music-card'>
            <img
                onClick={() => handleChooseMusic(music)}
                src={cover} alt='capa do álbum'
            />
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
};