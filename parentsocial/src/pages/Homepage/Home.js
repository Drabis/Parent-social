import React from "react";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";


function Home() {
    return (
        <div className="home">
            <Header />
            <PostCard />
            <Footer />
        </div>
    )
}

export default Home;
