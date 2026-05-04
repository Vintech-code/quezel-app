import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/app.css";

import LandingPage from "@/Landing";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/sign-in" element={<SignInPage />} />
                <Route path="/auth/sign-up" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);