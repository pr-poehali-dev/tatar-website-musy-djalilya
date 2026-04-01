
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tormysh from "./pages/Tormysh";
import Shakhsi from "./pages/Shakhsi";
import Ijat from "./pages/Ijat";
import Sugish from "./pages/Sugish";
import Moabit from "./pages/Moabit";
import Jalilchelar from "./pages/Jalilchelar";
import Photogallery from "./pages/Photogallery";
import Bugen from "./pages/Bugen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tormysh" element={<Tormysh />} />
          <Route path="/shakhsi" element={<Shakhsi />} />
          <Route path="/ijat" element={<Ijat />} />
          <Route path="/sugish" element={<Sugish />} />
          <Route path="/moabit" element={<Moabit />} />
          <Route path="/jalilchelar" element={<Jalilchelar />} />
          <Route path="/photogallery" element={<Photogallery />} />
          <Route path="/bugen" element={<Bugen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;