import React, { forwardRef, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = forwardRef((props, ref) => {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        nome: "",
        telefone: "",
        mensagem: "",
    });

    const handleChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    const sendEmail = (event) => {
        event.preventDefault();

        console.log(inputs);

        emailjs
            .sendForm(
                props.serviceId,
                props.templateId,
                form.current,
                props.userId
            )
            .then(
                (result) => {
                    setSuccessMessage(true);
                },
                (error) => {
                    setErrorMessage(true);
                }
            );

        setInputs({ email: "", nome: "", telefone: "", mensagem: "" });
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
                    <form ref={form}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            onChange={handleChange}
                            value={inputs.nome}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={inputs.email}
                        />
                        <input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            onChange={handleChange}
                            value={inputs.telefone}
                        />
                        <textarea
                            type="text"
                            name="mensagem"
                            placeholder="Descreva seu projeto"
                            onChange={handleChange}
                            value={inputs.mensagem}
                        />
                        <button
                            type="button"
                            className="btn btn-danger btn-lg btn-orcamento"
                            onClick={sendEmail}
                        >
                            Enviar
                        </button>
                        {successMessage && (
                            <p className="alert alert-success mt-4">
                                Email enviado com sucesso.
                            </p>
                        )}

                        {errorMessage && (
                            <p className="alert alert-danger mt-4">
                                Não foi possível enviar o email.
                            </p>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
    );
});

export default ContactForm;
