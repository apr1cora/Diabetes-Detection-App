// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './GlucosePage.css';

// const GlucosePage = ({ setGlucose }) => {
//     const [glucose, setGlucoseInput] = useState(''); // Local state for input
//     const navigate = useNavigate();

//     const handleNext = () => {
//         console.log('Glucose entered:', glucose); // Check if the value is captured correctly
//         if (glucose) {  // Ensure glucose is valid before setting
//             setGlucose(glucose); // Set the glucose value to the parent state (App.js)
//             navigate('/bloodpressure'); // Navigate to the next page
//         }
//     };

//     return (
//         <div>
//             <h1>Enter Your Glucose Level</h1>
//             <input
//                 type="number"
//                 value={glucose}
//                 onChange={(e) => setGlucoseInput(e.target.value)} // Update local state
//                 placeholder="Enter your glucose level (mg/dL)"
//             />
//             <button onClick={handleNext} disabled={!glucose}>Next</button>
//         </div>
//     );
// };

// export default GlucosePage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GlucosePage.css'; // Import the CSS file

const GlucosePage = ({ setGlucose }) => {
    const [glucose, setGlucoseInput] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        setGlucose(glucose); // Update glucose value in App.js state
        navigate('/bloodpressure'); // Navigate to next page
    };

    return (
        <div className="container">
            <h1>Enter Your Glucose Level</h1>
            <p>To assess your glucose levels, please follow these simple steps:</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Glucose Level:</strong> Enter your glucose level in milligrams per deciliter (mg/dL).
                </li>
                <li>
                    <strong>Measurement:</strong> Ensure your glucose level is measured after fasting or as recommended by your healthcare provider.
                </li>
                <li>
                    <strong>Submit:</strong> Once you've entered your glucose level, click the "Next" button to proceed to the next step.
                </li>
                <li>
                    <strong>Understanding Glucose Levels:</strong> Normal fasting glucose levels range from 70 to 100 mg/dL. Levels above this range may indicate a risk of diabetes.
                </li>
            </ul>
            <p>Click <strong>"Next"</strong>to continue!</p>
            <input
                type="number"
                value={glucose}
                onChange={(e) => setGlucoseInput(e.target.value)}
                placeholder="Enter your glucose level (mg/dL)"
            />
            <button onClick={handleNext} disabled={!glucose}>Next</button>
        </div>
    );
};

export default GlucosePage;

