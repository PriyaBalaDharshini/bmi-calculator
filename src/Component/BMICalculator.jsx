import React, { useState } from 'react';
import './Styles.css';

function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    function calculateBmi() {
        if (height && weight) {
            const heightInM = height / 100;
            const bmiValue = weight / (heightInM * heightInM);
            setBmi(bmiValue.toFixed(2));

            if (bmiValue < 18.5) {
                setStatus('Under Weight');
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setStatus('Normal');
            } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
                setStatus('Over Weight');
            } else {
                setStatus('Obese');
            }

            setError(''); // Clear any previous error messages
        } else {
            setBmi(null);
            setStatus('');
            setError('Please enter both height and weight.');
        }
    }

    function handleClear() {
        setHeight("");
        setWeight("")
        setBmi(null);
        setStatus("")
    }

    return (
        <div className="container">
            <div className="imageBox1">
                <img src="./2.png" alt="" className="image-1" />
                <img src="./1.png" alt="" className="image-2" />
            </div>

            <div className="data">
                <h2>BMI Calculator</h2>
                <div className="input-container">
                    <label htmlFor="height">Height (in cm) : </label>
                    <input
                        type="number"
                        name="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        id="height"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="weight">Weight (in kg) : </label>
                    <input
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        id="weight"
                    />
                </div>
                <div className="error">
                    <p>{error}</p>
                </div>
                <div className="buttons">
                    <button className="calculate" onClick={calculateBmi}>
                        Calculate BMI
                    </button>
                    <button className='clear' onClick={handleClear}>Clear</button>
                </div>
                {bmi !== null && (
                    <div className="results">
                        <p>Your BMI is : {bmi}</p>
                        <p>Status : {status}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BMICalculator;
