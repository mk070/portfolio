const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Gemini AI query endpoint
app.post('/api/query', async (req, res) => {
  const { question } = req.body;
  try {
    const gResponse = await fetch(
      'https://generativeai.googleapis.com/v1beta2/models/text-bison-001:generateText',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: question,
          temperature: 0.7,
          maxOutputTokens: 500,
        }),
      }
    );
    const gData = await gResponse.json();
    const answer = gData.candidates?.[0]?.output || 'Sorry, I could not answer that.';
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate text' });
  }
});

// D-ID Speak endpoint
app.post('/api/speak', async (req, res) => {
  const { text } = req.body;
  try {
    const didResponse = await fetch('https://api.d-id.com/talks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DID_API_KEY}`,
      },
      body: JSON.stringify({
        script: { type: 'text', input: text },
        avatar: { source_url: process.env.AVATAR_URL },
        config: { lip_sync: true }
      }),
    });
    const data = await didResponse.json();
    // Optionally stream or send URL back to client
    res.json({ success: true, id: data.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'D-ID speak failed' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));