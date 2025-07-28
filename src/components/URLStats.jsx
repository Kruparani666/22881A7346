import React from 'react';
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const URLStats = ({ stats }) => {
  return (
    <div>
      {stats.map((urlStat, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Short URL: <a href={urlStat.shortUrl} target="_blank" rel="noopener noreferrer">{urlStat.shortUrl}</a>
            </Typography>
            <Typography variant="body2">
              Original URL: {urlStat.originalUrl}
            </Typography>
            <Typography variant="body2">
              Created At: {new Date(urlStat.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="body2">
              Expires At: {new Date(urlStat.expiresAt).toLocaleString()}
            </Typography>
            <Typography variant="body2">
              Total Clicks: {urlStat.clicks}
            </Typography>

            <Divider sx={{ my: 1 }} />

            <Typography variant="subtitle1">Click Details:</Typography>
            {urlStat.clickDetails && urlStat.clickDetails.length > 0 ? (
              <List dense>
                {urlStat.clickDetails.map((click, i) => (
                  <ListItem key={i} alignItems="flex-start">
                    <ListItemText
                      primary={`Clicked At: ${new Date(click.timestamp).toLocaleString()}`}
                      secondary={
                        <>
                          <div>Source: {click.referrer || 'Unknown'}</div>
                          <div>Location: {click.geo || 'Unknown'}</div>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2">No clicks recorded.</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default URLStats;
