import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
// import Features from '../Features/Features';
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },500);
  }, []);
  return (
    <div className="home">
      <Banner></Banner>
      {loading && (
        <>
          <Banner2></Banner2>
          <Services></Services>
        </>
      )}
      {/* <Features></Features> */}
    </div>
  );
};

export default Home;
