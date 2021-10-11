import React from "react";
import Footer from "../../Footer/Footer";
import "./home.css";
import Header from "../../Header/Header";
import PostCard from "../../PostCard/PostCard";


function Home() {
    return (
        <div>
            <Header />
            <PostCard />
            <Footer />
        </div>
    )
}

export default Home;
