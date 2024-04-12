import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import CloudDoneSharpIcon from '@mui/icons-material/CloudDoneSharp';
import { CssBaseline } from '@mui/material';

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <div>Hello World!</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <DepartureBoardIcon />
      <CloudDoneSharpIcon />
    </main>
  );
}
