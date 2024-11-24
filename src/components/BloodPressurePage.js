import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodPressure.css'; // Import the CSS file

const BloodPressurePage = ({ setBloodPressure }) => {
    const [bloodPressure, setBloodPressureInput] = useState(''); // Local state for input
    const navigate = useNavigate();

    const handleNext = () => {
        setBloodPressure(bloodPressure); // Save the blood pressure to App.js state
        navigate('/skinthickness'); // Navigate to the next page
    };

    return (
        <div className="container">
            <h1>Enter Your Blood Pressure</h1>
            <p>To monitor your blood pressure, please follow these simple steps:</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Blood Pressure Reading:</strong> Enter your blood pressure reading in millimeters of mercury (mmHg).
                </li>
                <li>
                    <strong>Measurement:</strong> Ensure that you measure your blood pressure accurately, ideally while seated and at rest.
                </li>
                <li>
                    <strong>Format:</strong> Enter your reading in the format: Systolic/Diastolic (e.g., 120/80).
                </li>
                <li>
                    <strong>Submit:</strong> After entering your blood pressure, click the "Next" button to proceed to the next step.
                </li>
                <li>
                    <strong>Understanding Blood Pressure Levels:</strong> Normal blood pressure is typically around 120/80 mmHg. Values above this may indicate hypertension.
                </li>
            </ul>
            <p>Click <strong>"Next"</strong> to continue!</p>
            <input
                type="number"
                value={bloodPressure}
                onChange={(e) => setBloodPressureInput(e.target.value)} // Update local input
                placeholder="Enter your blood pressure (mmHg)"
            />
            <button onClick={handleNext} disabled={!bloodPressure}>Next</button> {/* Disable if no input */}
        </div>
    );
};

export default BloodPressurePage;
