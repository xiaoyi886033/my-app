import React, { useState, useEffect } from 'react';

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString()); // Initialize the current time
    const [bgColor, setBgColor] = useState('white'); // Initialize the background color to white

    // Use useEffect to update the time in real-time
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); // Update the time every second
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer to avoid memory leaks
    }, []);

    // Function to toggle the background color
    const toggleBgColor = () => {
        setBgColor(bgColor === 'white' ? 'lightblue' : 'white'); // Toggle between white and light blue
    };

    return (
        <div
            style={{
                backgroundColor: bgColor,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Real-Time Clock</h1>
            <h2>{time}</h2> {/* Display the current time */}
            <button
                onClick={toggleBgColor}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
            >
                Toggle Background Color
            </button>
        </div>
    );
}

export default App;
