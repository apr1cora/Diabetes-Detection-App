import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/gender'); // Navigate to the Gender Page
    
    };
    const boldTextStyle = {
        fontWeight: 'bold',
        color: '#000000',
    };

    return (
        <div className="container">
            <h1>Welcome to the Diabetes Detection App</h1>
            <p className="instructions">
            <span style={boldTextStyle}>INSTRUCTIONS</span>
            <br></br>
            <p>Please follow these steps to assess your risk of diabetes:</p>
            <ol style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Step 1: Gender</strong> - Select your gender to personalize the assessment.
                </li>
                <li>
                    <strong>Step 2: Age</strong> - Enter your age to help us calculate your risk.
                </li>
                <li>
                    <strong>Step 3: BMI</strong> - Input your height and weight to calculate your Body Mass Index (BMI).
                </li>
                <li>
                    <strong>Step 4: Glucose Level</strong> - Enter your current glucose level (in mg/dL).
                </li>
                <li>
                    <strong>Step 5: Blood Pressure</strong> - Input your blood pressure (in mmHg).
                </li>
                <li>
                    <strong>Step 6: Skin Thickness</strong> - Enter the skin thickness measurement (in mm).
                </li>
                <li>
                    <strong>Step 7: Insulin Level</strong> - Provide your insulin level (in μU/mL).
                </li>
            </ol>
            <p>After completing these steps, you will receive an report of your diabetes risk. Click <strong>"Start the test"</strong> to begin!</p>
            </p>
            <button onClick={handleStart}>Start the Test</button>
        </div>
    );
};

export default HomePage;
