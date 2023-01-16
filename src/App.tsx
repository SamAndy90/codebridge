import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "components/HomePage";
import { ArticlePage } from "components/ArticlePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/" element={<ArticlePage  />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
