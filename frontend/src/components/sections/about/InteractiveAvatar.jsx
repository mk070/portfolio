import React, { useState, useEffect, useRef } from 'react';

export default function InteractiveAvatar() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState([]);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Web Speech API not supported');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      recognition.stop();
      setListening(false);
      handleUserQuery(text);
    };
    recognitionRef.current = recognition;
  }, []);

  // Start listening
  const startListening = () => {
    if (recognitionRef.current) {
      setListening(true);
      setTranscript('');
      recognitionRef.current.start();
    }
  };

  // Handle user query: send to backend
  const handleUserQuery = async (text) => {
    appendMessage({ role: 'user', text });
    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });
      const { answer } = await res.json();
      appendMessage({ role: 'avatar', text: answer });
      speakWithAvatar(answer);
    } catch (err) {
      console.error(err);
    }
  };

  // Append message
  const appendMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  // Initial greeting
  useEffect(() => {
    const greeting = "I am Mr. Madhan, you can ask me anything about me.";
    appendMessage({ role: 'avatar', text: greeting });
    speakWithAvatar(greeting);
  }, []);

  // Send text to D-ID Real-Time API via backend
  const speakWithAvatar = async (text) => {
    try {
      await fetch('/api/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      // The avatar container auto-updates via D-ID SDK or iframe
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div id="avatar-container" className="w-48 h-48 bg-gray-100 rounded-full overflow-hidden" />
      <div className="mt-2">
        {messages.map((m, i) => (
          <p key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>{m.text}</p>
        ))}
      </div>
      <button
        className={`mt-2 px-4 py-2 rounded ${listening ? 'bg-red-500' : 'bg-blue-500'}`}
        onClick={startListening}
      >
        {listening ? 'Listening...' : 'Ask'}
      </button>
    </div>
  );
}