import React from 'react';

const Chat = ({messages, aiResponses, motivationMessages, questions, xpFeedback}) => {
    return (
        <div className="chat-container">
            <h1>Chat</h1>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <p>{msg}</p>
                    </div>
                ))}
            </div>
            <div className="ai-responses">
                {aiResponses.map((response, index) => (
                    <div key={index} className="ai-response">
                        <p>AI: {response}</p>
                    </div>
                ))}
            </div>
            <div className="motivation-messages">
                {motivationMessages.map((message, index) => (
                    <div key={index} className="motivation-message">
                        <p>Motivation: {message}</p>
                    </div>
                ))}
            </div>
            <div className="questions">
                {questions.map((question, index) => (
                    <div key={index} className="question">
                        <p>Question: {question}</p>
                    </div>
                ))}
            </div>
            <div className="xp-feedback">
                <p>XP Earned: {xpFeedback}</p>
            </div>
        </div>
    );
};

export default Chat;