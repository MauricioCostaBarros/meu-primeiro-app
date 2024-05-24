import React from "react";

function Cabecalho() {
    return (
        <div className="cabecalhoClass">
            <h1>
                <div id="cabecalho"></div>
            </h1>
            <img id="imagemLogo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2hpTgdga-scMLHulmshdAlO4v_VRAW0lOg&s"></img>
            <div id="navTelas">
                <button className="botaoTela">HOME</button>
                <button className="botaoTela">PRODUTOS</button>
                <button className="botaoTela">CADASTRO</button>
                <div id="input">
                    <input type="text" placeholder="Pesquise aqui..."></input>
                </div>
            </div>
            <div id="icones">
            </div>
        </div>
    );
}

export default Cabecalho;