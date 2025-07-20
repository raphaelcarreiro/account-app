import React from 'react';
import { CircularProgress, styled } from '@mui/material';
import { useAuth } from 'src/providers/auth/context';

const Container = styled('div')(props => ({
  display: 'flex',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  alignItems: 'center',
  position: 'fixed',
  backgroundColor: props.theme.palette.background.default,
  zIndex: 2000,
  flexDirection: 'column',
}));

const Content = styled('div')({
  top: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});

const SplashScreen: React.FC = () => {
  const { isRefreshing } = useAuth();

  if (!isRefreshing) {
    return null;
  }

  return (
    <Container>
      <Content>
        <CircularProgress color="secondary" />
      </Content>
    </Container>
  );
};

export default SplashScreen;
