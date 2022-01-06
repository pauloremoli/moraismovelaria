import React from "react";
import { motion } from "framer-motion";

export default function Company() {
    return (
        <section id="quemsomos">
            <motion.div
                className="quemsomos"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h1>Quem somos</h1>
                <p>
                    A Morais Movelaria foi criada em 2020, nosso objetivo é
                    criar móveis personalizados de acordo com a necessidade dos
                    nossos clientes. <br />
                    Atendemos São José dos Campos e região.
                </p>
            </motion.div>
        </section>
    );
}
