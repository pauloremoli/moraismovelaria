import Head from "next/head";
import Company from "../components/Company";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { useRef, useEffect } from "react";

export default function Home() {

    const contactFormRef = useRef();

    const scrollIntoView = () => {
        contactFormRef.current.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
        });
    };


    return (
        <>
            <div>
                <Navbar />
                <Hero scrollIntoView={scrollIntoView} />
                <Features />
                <Company />
                <Projects />
                <ContactForm ref={contactFormRef} />
                <Footer />
            </div>
        </>
    );
}
