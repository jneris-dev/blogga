import { Navigate, Route, Routes, } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Single } from "../pages/Single";

export function Router() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} />

                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/post/:slug" element={<Single />} />
            </Routes>
        </ScrollToTop>
    );
}