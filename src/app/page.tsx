"use client";

import initMockAPI from "@/mocks";
import HomePage from "@/page/home";

if (process.env.NODE_ENV === "development") initMockAPI();

const Home = () => {
  return <HomePage />;
};

export default Home;
