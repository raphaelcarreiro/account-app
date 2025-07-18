import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

type Props = {
  title?: string;
};

const AppBar: React.FC<Props> = ({ title }) => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export { AppBar };
