import {useNavigate} from 'react-router-dom';

const Login = () => {
    import('./login.css');
    const navigate = useNavigate();

    function gotohub() {
        navigate('/')
        window.location.reload(false);
    }

    return (
        <div className="login-container">
            <h2>Anmeldung</h2>
            <input type="text" id="username" name="username" placeholder="Benutzername" required/>
            <input type="password" id="password" name="password" placeholder="Passwort" required/>
            <button onClick={gotohub}>Anmelden</button>
            <div
                className="background-text">LOGIN TESTFORM
            </div>
        </div>
    );
};

export default Login;