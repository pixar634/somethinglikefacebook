import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatGPT() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    const res = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.choices && data.choices[0]) {
      setReply(data.choices[0].message.content);
      setMessages([...newMessages, data.choices[0].message]);
    } else {
      setReply('Error from API');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">ChatGPT Demo</h1>
      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2">
          Send
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {reply && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {reply}
        </motion.p>
      )}
    </div>
  );
}
