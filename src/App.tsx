
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => {
  // Determine if we're running on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // Always use HashRouter for GitHub Pages
  const RouterComponent = isGitHubPages ? HashRouter : BrowserRouter;
  
  // When using HashRouter (on GitHub Pages), we don't need a basename
  // Only set basename for BrowserRouter (non-GitHub Pages environments)
  const routerProps = isGitHubPages ? {} : { basename: '/abhyum-ai-automation-platform-f8842845' };
  
  console.log("App router configuration:", { 
    isGitHubPages, 
    routerType: isGitHubPages ? 'HashRouter' : 'BrowserRouter', 
    routerProps 
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <CartProvider>
            <RouterComponent {...routerProps}>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </RouterComponent>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
