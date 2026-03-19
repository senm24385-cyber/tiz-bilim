import React, { useState } from 'react';

const MicButton = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleRecordingToggle = () => {
        setIsRecording(!isRecording);
        // Additional logic for starting/stopping recording can be added here.
    };

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for message submission can be added here. 
        console.log('Submitted message:', textInput);
        setTextInput(''); // Clear text input after submission
    };

    return (
        <div>
            <button onClick={handleRecordingToggle}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {isRecording && <div>Recording...</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={textInput} onChange={handleInputChange} placeholder="Type your message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MicButton;
