import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import FindLovePage from "../FindLovePage/FindLovePage";

function MainPage() {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <BrowserRouter>
                <Routes>

                    <Route path="/find-love" element={<FindLovePage />} />

                    {/* <Route path="/" element={}></Route>
                    <Route path="/success-stories" element={} />
                    <Route path="/meet-the-team" element={} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;