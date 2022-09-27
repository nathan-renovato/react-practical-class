import './style.css';
import ProfileImage from '../../assets/profile.jpeg';
import Logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <div className='header'>
            <img src={Logo} alt='Logo' />
            <div className='user-information'>
                <div
                    className='user-photo'
                    style={{ backgroundImage: `url('${ProfileImage}')` }}
                >
                </div>
                <span>
                    Bem vindo, Nathan.
                </span>
            </div>
        </div>
    )
}