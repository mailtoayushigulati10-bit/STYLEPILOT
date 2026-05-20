import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { routeTree } from "./router";
import "./styles/globals.css";

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "rgba(22,22,26,0.9)",
          color: "#f5f1e8",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        },
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
