import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Context/UserContext";
import DataContext from "./DataContext.js/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <UserContext>
        <DataContext>
          <App />
        </DataContext>
      </UserContext>
    </React.StrictMode>
  </QueryClientProvider>
);

reportWebVitals();
