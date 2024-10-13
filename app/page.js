"use client";
import Category from "./components/home/category";
import Projects from "./components/home/projects";
import Review from "./components/home/review";
import Header from "./components/home/header";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <Projects />
      <Review />
      <FAQ />
    </>
  );
}
