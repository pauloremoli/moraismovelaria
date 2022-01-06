import React from "react";
import { motion } from "framer-motion";

export default function Features() {
    return (
        <motion.div
            id="diferencial"
            className="diferencial"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <h1>Nosso diferencial</h1>
            <div className="services">
                <motion.div
                    className="service-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img src="img/design.png" alt="design" />
                    <br />
                    <h2>Design</h2>
                    <br />
                    <p>
                        Projetos milimetricamente desenvolvidos em software de
                        última geração tecnologia.
                    </p>
                </motion.div>
                <motion.div
                    className="service-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img src="img/quality.png" alt="qualidade" />
                    <br />
                    <h2>Qualidade</h2>
                    <br />
                    <p>
                        Matéria-prima da mais alta qualidade.
                        <br />
                        Pontualidade no cumprimento dos prazos.
                    </p>
                </motion.div>
                <motion.div
                    className="service-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img src="img/delivery.png" alt="entrega" />
                    <br />
                    <h2>Entrega & Montagem</h2>
                    <br />
                    <p>
                        Montagem realizada com cuidados por nossos
                        profissionais.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
