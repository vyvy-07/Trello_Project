'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import CloudDoneSharpIcon from '@mui/icons-material/CloudDoneSharp';
import theme from './theme';
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Typography variant="body2" color="text.secondary">
          btn Typography
        </Typography>{' '}
        <div>Hello World!</div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <br />
        <DepartureBoardIcon />
        <CloudDoneSharpIcon />
      </main>{' '}
    </ThemeProvider>
  );
}
