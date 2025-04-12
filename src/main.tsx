
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/i18n'; // Import i18n configuration

// This ensures React is properly imported and available
createRoot(document.getElementById("root")!).render(<App />);
