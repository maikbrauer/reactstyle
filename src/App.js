import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Hub from './hub';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <title>VDK iTransfer</title>
                <Routes>
                    <Route path="/" element={<Hub />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
