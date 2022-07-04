import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Single } from "../pages/Single";
import ScrollToTop from "./ScrollToTop";

export function Router() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/:category" element={<Category />} /> */}
                <Route path="/:slugPage" element={<Single />} />
            </Routes>
        </ScrollToTop>
    );
}