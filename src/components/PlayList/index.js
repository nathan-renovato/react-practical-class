import './style.css';
import MusicCard from '../MusicCard';
import { musics } from '../../musics';

export default function PlayList({ setCurrentSong }) {
    return (
        <div className='play-list'>
            <h2>The best play list</h2>
            <div className='music-cards-container'>
                {musics.map((music) => (
                    <MusicCard
                        key={music.id}
                        title={music.title}
                        description={music.description}
                        cover={music.cover}
                        setCurrentSong={setCurrentSong}
                        music={music}
                    />
                ))}
            </div>
        </div>
    )
}