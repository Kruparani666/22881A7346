import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box, List, ListItem } from '@mui/material';

const StatisticsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get('/api/stats').then((res) => setStats(res.data));
  }, []);

  return (
    <Box>
      <Typography variant="h4">URL Statistics</Typography>
      <List>
        {stats.map((s, idx) => (
          <ListItem key={idx}>
            {s.shortUrl} | Clicks: {s.clicks} | Created: {s.createdAt} | Expiry: {s.expiresAt}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StatisticsPage;
