// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BMICalculator.css'; // Import the CSS file

// const BMICalculator = ({ setBmi }) => {
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const navigate = useNavigate();

//     const handleCalculateBMI = () => {
//         if (height > 0 && weight > 0) {
//             const heightInMeters = height / 100; // Convert height to meters
//             const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//             setBmi(calculatedBmi);
//             navigate('/glucose'); // Navigate to the next page after calculation
//         } else {
//             alert("Please enter valid height and weight.");
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Calculate Your BMI</h1>
//             <label htmlFor="height">Height (cm):</label>
//             <input
//                 type="number"
//                 id="height"
//                 value={height}
//                 onChange={(e) => setHeight(e.target.value)}
//                 placeholder="Enter your height in cm"
//             />
//             <label htmlFor="weight">Weight (kg):</label>
//             <input
//                 type="number"
//                 id="weight"
//                 value={weight}
//                 onChange={(e) => setWeight(e.target.value)}
//                 placeholder="Enter your weight in kg"
//             />
//             <button onClick={handleCalculateBMI}>Calculate BMI</button>
//         </div>
//     );
// };

// export default BMICalculator;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BMICalculator = ({ setBmi }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiValue, setBmiValue] = useState(null); // Local BMI state to display calculated value
    const navigate = useNavigate();

    const handleCalculateBMI = () => {
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100; // Convert height to meters
            const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(calculatedBmi); // Set local BMI value for display
            setBmi(calculatedBmi); // Update BMI state in App.js
        }
    };

    const handleNext = () => {
        if (bmiValue) {
            navigate('/glucose'); // Only navigate if BMI is calculated
        }
    };

    return (
        <div className="container">
            <h1>Calculate Your BMI</h1>
            <p>To assess your body mass index (BMI), please provide your height and weight.</p>
            <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
                <li>
                    <strong>Height:</strong> Enter your height in centimeters (cm).
                </li>
                <li>
                    <strong>Weight:</strong> Enter your weight in kilograms (kg).
                </li>
                <li>
                    <strong>How to Calculate BMI:</strong> Once you’ve entered both your height and weight, click the "Calculate BMI" button, and your BMI will be created.
                </li>
                <li>
                    <strong>Understanding Your BMI:</strong> A BMI below 18.5 indicates underweight, 18.5-24.9 is normal weight, 25-29.9 is overweight, and 30 or above indicates obesity.
                </li>
            </ul>
            <p>Click the <strong>"Calculate BMI"</strong> button to calculate your BMI and to continue click on the <strong>"Next"</strong> button!</p>
        
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
            />
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
            />
            <button onClick={handleCalculateBMI} disabled={!height || !weight}>Calculate BMI</button>

            {bmiValue && <p>Your BMI: {bmiValue}</p>} {/* Display BMI if calculated */}

            <button onClick={handleNext} disabled={!bmiValue}>Next</button> {/* Next only if BMI is calculated */}
        </div>
    );
};

export default BMICalculator;

