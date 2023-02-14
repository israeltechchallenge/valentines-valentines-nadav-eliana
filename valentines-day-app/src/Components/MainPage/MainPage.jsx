import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

function MainPage() {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <BrowserRouter>
                <Routes>
                    <div>
                        <FindLovePage />
                    </div>
                    {/* <Route path="/" element={}></Route>
                    <Route path="/success-stories" element={} />
                    <Route path="/meet-the-team" element={} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;