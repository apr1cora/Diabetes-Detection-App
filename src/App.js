import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GenderPage from './components/GenderPage';
import AgePage from './components/AgePage';
import BMICalculator from './components/BMICalculator';
import GlucosePage from './components/GlucosePage';
import BloodPressurePage from './components/BloodPressurePage';
import SkinThicknessPage from './components/SkinThicknessPage';
import InsulinPage from './components/InsulinPage'; // Import the InsulinPage
import ResultPage from './components/ResultPage';

const App = () => {
    const [bmi, setBmi] = useState(null); 
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [glucose, setGlucose] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [skinThickness, setSkinThickness] = useState('');
    const [insulin, setInsulin] = useState(''); // Add state for insulin

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gender" element={<GenderPage setGender={setGender} />} />
                <Route path="/age" element={<AgePage setAge={setAge} />} />
                <Route path="/bmi" element={<BMICalculator setBmi={setBmi} />} />
                <Route path="/glucose" element={<GlucosePage setGlucose={setGlucose} />} />
                <Route path="/bloodpressure" element={<BloodPressurePage setBloodPressure={setBloodPressure} />} />
                <Route path="/skinthickness" element={<SkinThicknessPage setSkinThickness={setSkinThickness} />} />
                <Route path="/insulin" element={<InsulinPage setInsulin={setInsulin} />} /> {/* Pass setInsulin */}
                <Route path="/result" element={<ResultPage bmi={bmi} gender={gender} age={age} glucose={glucose} bloodPressure={bloodPressure} skinThickness={skinThickness} insulin={insulin} />} /> {/* Pass insulin to result */}
            </Routes>
        </Router>
    );
};

export default App;
