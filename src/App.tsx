import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainRouter from "./routes";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <TopNavbar />
    <div className="mt-[65px] h-[calc(100vh-109px)] overflow-auto">
      <MainRouter />
    </div>
    <Footer />
  </TooltipProvider>
);

export default App;
