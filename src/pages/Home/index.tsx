import React from "react";
import FileTypeChart from "../../charts";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="chart-container">
          <FileTypeChart />
        </div>
        <div className="product-presentation">
          <h2 className="product-title">DocSpider</h2>
          <p className="product-text">
            Organize, armazene e acesse todos os seus documentos em um único lugar.
            Com o <strong>DocSpider</strong>, você pode importar arquivos de diversos formatos,
            garantindo segurança e acessibilidade para sua equipe.
          </p>
          <ul className="product-benefits">
            <li>📂 Suporte a PDF, DOCX, imagens e mais</li>
            <li>🔍 Busca inteligente para encontrar documentos rapidamente</li>
            <li>🔒 Segurança e privacidade garantidas</li>
            <li>📊 Relatórios detalhados sobre os arquivos importados</li>
          </ul>
        </div>
      </div>

      <div className="cta-container">
        <p className="cta-text">Dúvidas? Entre em contato conosco!</p>
        <a href="https://www.docspider.com.br/FaleConosco.html" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Estou com dúvida!</button>
        </a>
      </div>
    </div>
  );
}