import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ scrollIntoView }) {
    const variants = {
        enter: {
            x: "-100%",
            opacity: 0,
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div className="hero">
            <Image
                src="/img/kitchen_white.png"
                layout="fill"
                objectPosition="50% 50%"
            />

            <div className="slogan"></div>
            <div className="slogan-text">
                <motion.h1
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={{ duration: 1 }}
                >
                    <strong>
                        MÓVEIS
                        <br /> PERSONALIZADOS
                        <br /> SOB MEDIDA
                    </strong>
                </motion.h1>
                <br />
                <motion.h3
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={{ duration: 1 }}
                >
                    Transforme seu ambiente <br /> com um projeto exclusivo.
                </motion.h3>
                <br />
                <motion.button
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={{ duration: 1 }}
                    type="button"
                    className="btn btn-danger btn-lg btn-orcamento"
                    onClick={scrollIntoView}
                >
                    Peça um orçamento
                </motion.button>
            </div>
        </motion.div>
    );
}
