
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure there's an element to mount the app
const rootElement = document.getElementById("root");
if (!rootElement) {
  const newRoot = document.createElement("div");
  newRoot.id = "root";
  document.body.appendChild(newRoot);
  console.warn("Root element not found, created new one");
}

createRoot(document.getElementById("root")!).render(<App />);
