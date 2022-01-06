import Head from "next/head";
import Company from "../components/Company";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { useRef, useEffect } from "react";

const Home = ({serviceId, templateId, userId}) => {

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
                <ContactForm ref={contactFormRef} serviceId={serviceId} templateId={templateId} userId={userId}/>
                <Footer />
            </div>
        </>
    );
}


export async function getServerSideProps() {
    return {
        props: {
            serviceId: process.env.SERVICE_ID,
            templateId: process.env.TEMPLATE_ID,
            userId: process.env.USER_ID,
        },
    };
}

export default Home;