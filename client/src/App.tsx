import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router base="/portfolio-website">
      <TooltipProvider>
        <SmoothScroll>
          <Toaster />
          <Routes />
        </SmoothScroll>
      </TooltipProvider>
    </Router>
  );
}

export default App;
