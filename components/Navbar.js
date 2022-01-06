import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
            <div className=" w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="navbar-brand" href="#">
                            {" "}
                            <img
                                src="img/logo.png"
                                width="250px"
                                alt="Morais Movelaria logo"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto order-0 navbar-collapse collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#quemsomos" className="nav-link m-2 menu-item">
                            Quem somos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projetos" className="nav-link m-2 menu-item">
                            Projetos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#orcamento" className="nav-link m-2 menu-item">
                            orçamento
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contato" className="nav-link m-2 menu-item">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <img
                            src="img/whatsapp.svg"
                            className="whatsapp  mr-sm-2"
                            alt="Telefone"
                        />
                    </li>
                    <li className="nav-item">
                        <span className="mr-sm-2">(12) 99680-2206</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
