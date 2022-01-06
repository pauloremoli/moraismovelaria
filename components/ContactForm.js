import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const ContactForm = forwardRef((props, ref) => {
    const handleSend = () => {
        const email = "moraismovelaria@gmail.com";
        //TODO: send email')
    };

    return (
        <div id="orcamento">
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                Peça um orçamento
            </motion.h1>
            <motion.div
                className="orcamento"
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="descricao">
                    <p>
                        Descreva com detalhes as necessidade do seu projeto que
                        entraremos em contato.
                    </p>
                </div>
                <div className="form">
                    <form>
                        <input type="text" name="nome" placeholder="Nome" />
                        <input type="text" name="email" placeholder="Email" />
                        <input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                        />
                        <textarea
                            type="text"
                            name="descricao"
                            placeholder="Descreva seu projeto"
                        />
                        <button
                            type="button"
                            className="btn btn-danger btn-lg btn-orcamento"
                            onClick={handleSend}
                            disabled="true">
                            Enviar
                        </button>
                        <p className="alert alert-danger mt-4">Envio de email não está funcionando no momento, por favor envie diretamente para: moraismovelaria@gmail.com</p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
});

export default ContactForm;
