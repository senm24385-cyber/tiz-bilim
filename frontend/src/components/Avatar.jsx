import React, { useState } from 'react';
import './Avatar.css'; // make sure to define styles for each emotion in this CSS file

const Avatar = () => {
    const [emotion, setEmotion] = useState('neutral');

    const emotions = ['confusion', 'frustration', 'boredom', 'motivation', 'neutral'];

    const handleEmotionChange = (newEmotion) => {
        setEmotion(newEmotion);
    };

    return (
        <div className={`avatar ${emotion}`}> {/* This will apply emotion styles */} 
            <div className="emotion-display">
                <h2>{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</h2>
            </div>
            <div className="controls">
                {emotions.map((em) => (
                    <button key={em} onClick={() => handleEmotionChange(em)}>{em.charAt(0).toUpperCase() + em.slice(1)}</button>
                ))}
            </div>
        </div>
    );
};

export default Avatar;