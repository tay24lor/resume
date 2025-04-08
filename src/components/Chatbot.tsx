import React, { useState } from 'react';
import './Chatbot.css';
import { resumeData } from '../data/resumeData';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);

    // Generate bot response
    const botResponse = await getBotResponse(input);
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);

    setInput('');
    };

    const getBotResponse = async (userInput: string): Promise<string> => {
    const lowerInput = userInput.toLowerCase();

    // Respond to questions about skills
    if (lowerInput.includes('skills')) {
        return `Here are my skills: ${resumeData.skills.join(', ')}.`;
    }

    // Respond to questions about education
    if (lowerInput.includes('education')) {
        return resumeData.education
        .map(
            (edu) =>
            `${edu.degree} from ${edu.school} (${edu.years}). ${edu.description}`
        )
        .join(' ');
    }

    // Respond to questions about experience
    if (lowerInput.includes('experience')) {
        return resumeData.experience
        .map(
            (exp) =>
            `${exp.title} at ${exp.company} (${exp.years}). Responsibilities: ${exp.responsibilities.join(
                ', '
            )}`
        )
        .join(' ');
    }

    // Respond to questions about projects
    if (lowerInput.includes('projects')) {
        return resumeData.projects
        .map(
            (proj) =>
            `${proj.title}: ${proj.description} (Technologies: ${proj.tags.join(
                ', '
            )})`
        )
        .join(' ');
    }

    // Default response
    return "I'm sorry, I didn't understand that. Can you ask about my skills, education, experience, or projects?";
    };

    return (
    <div className="chatbot">
        <div className="chatbot-messages">
        {messages.map((msg, index) => (
            <div
            key={index}
            className={`chatbot-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
            >
            {msg.text}
            </div>
        ))}
        </div>
        <div className="chatbot-input">
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my resume (beta)"
        />
        <button onClick={handleSend}>Send</button>
        </div>
    </div>
    );
};

export default Chatbot;