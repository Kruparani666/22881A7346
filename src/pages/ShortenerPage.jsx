import React, { useState } from 'react';
import URLForm from '../components/URLForm';
import axios from 'axios';
import { Typography, Box, List, ListItem } from '@mui/material';

const ShortenerPage = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = async (urls) => {
    const output = [];
    for (let url of urls) {
      try {
        const res = await axios.post('/api/shorten', {
          longUrl: url.longUrl,
          validity: url.validity || 30,
          shortcode: url.shortcode || undefined,
        });
        output.push(res.data);
      } catch (e) {
        output.push({ error: e.message });
      }
    }
    setResults(output);
  };

  return (
    <Box>
      <Typography variant="h4">URL Shortener</Typography>
      <URLForm onSubmit={handleSubmit} />
      <List>
        {results.map((r, i) => (
          <ListItem key={i}>
            {r.shortUrl ? (
              <a href={r.shortUrl} target="_blank" rel="noopener noreferrer">
                {r.shortUrl} (Expires in {r.validity} mins)
              </a>
            ) : (
              <span>Error: {r.error}</span>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShortenerPage;
