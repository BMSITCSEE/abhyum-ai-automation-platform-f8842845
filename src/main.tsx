
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

// Log environment information for debugging
console.log("Environment info:", {
  hostname: window.location.hostname,
  pathname: window.location.pathname,
  href: window.location.href,
  isGitHubPages: window.location.hostname.includes('github.io'),
  publicURL: import.meta.env.BASE_URL || '/',
  mode: import.meta.env.MODE
});

// Add an event listener to log when the app is fully loaded
window.addEventListener('load', () => {
  console.log('Application fully loaded');
  console.log('Current URL:', window.location.href);
  console.log('Document title:', document.title);
  console.log('Root element contents:', document.getElementById('root')?.innerHTML);
});

createRoot(document.getElementById("root")!).render(<App />);
