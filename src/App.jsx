import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, Navbar, VideoDetail, ChannelInfo, SearchFeed } from "./components";


const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}} >
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" exact element={<VideoDetail />} />
                <Route path="/channel/:id" exact element={<ChannelInfo />} />
                <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App