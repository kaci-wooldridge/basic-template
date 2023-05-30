import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Home from "./Home";
import CardPage from "./CardPage";

export default function AppViews() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
            </Route>

            <Route path="page1">
                <Route index element={<Page1 />} />
            </Route>

            <Route path="page2">
                <Route index element={<Page2 />} />
            </Route>

            <Route path="cardpage">
                <Route index element={<CardPage />} />
            </Route>

        </Routes>
    );
}