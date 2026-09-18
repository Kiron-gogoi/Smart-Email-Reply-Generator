import { useState } from 'react';
import './App.css';
import {
  Box,
  Container,
  Typography,
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import axios from 'axios';

// 💠 Custom Theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1b6ec1ff', // blue
    },
    secondary: {
      main: '#0a0b0bff',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} sx={{ py: 6, px: 4 }}>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 4,
            boxShadow: 6,
            p: 5,
            mx: 'auto',
            width: '100%',
            maxWidth: '1200px', // 💥 Wide Card
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            textAlign="center"
            color="primary"
          >
            Smart Email Reply Generator
          </Typography>

          

          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone (optional)</InputLabel>
            <Select
              value={tone || ''}
              label="Tone (optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="negative">Negative</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            size="large"
            sx={{ py: 1.5, fontWeight: 600 }}
          >
            {loading ? <CircularProgress size={26} color="inherit" /> : 'Generate Reply'}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply || ''}
                inputProps={{ readOnly: true }}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
