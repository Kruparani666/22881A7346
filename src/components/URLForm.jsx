import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import logMiddleware from '../utils/logger';

const URLForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addInput = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    logMiddleware('Submit URLs', urls);
    onSubmit(urls);
  };

  return (
    <div>
      {urls.map((item, idx) => (
        <Grid container spacing={2} key={idx}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Long URL"
              required
              onChange={(e) => handleChange(idx, 'longUrl', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Validity (mins)"
              type="number"
              onChange={(e) => handleChange(idx, 'validity', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Custom Shortcode"
              onChange={(e) => handleChange(idx, 'shortcode', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" onClick={addInput} disabled={urls.length >= 5}>
        Add More
      </Button>
      <Button variant="outlined" onClick={handleSubmit} sx={{ ml: 2 }}>
        Shorten URLs
      </Button>
    </div>
  );
};

export default URLForm;
