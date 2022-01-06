import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div id="projetos" className="projetos">
            <div>
                <h1 className="transition">Projetos</h1>
                <motion.div
                    className="row transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="img/guarda_roupa.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                    <motion.img
                        src="img/cozinha_espelho.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                    <motion.img
                        src="img/painel_tv.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                </motion.div>
                <motion.div
                    className="row transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="img/painel_discordia.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                    <motion.img
                        src="img/fato_acqua.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                    <motion.img
                        src="img/painel_tv2.jpg"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
