import {useNavigate} from 'react-router-dom';

const Hub = () => {
    import('./hub.css');
            const navigate = useNavigate(); 

function gotologin() {
        navigate('/login')
    }

    return (
        <div className="navbar">
            <div className="nav-links">
                <a href="#home">START</a>
                <a href="#Login" onClick={gotologin}>Login</a>
            </div>
            <div className="logout">
                <a href="#Abmelden">Abmelden</a>
            </div>
        </div>
    );
};


export default Hub;