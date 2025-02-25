// src/components/Sidebar.js
import { useState } from 'react';
import './Sidebar.css';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineFileText, AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={24} color="#fff" />
          </button>
          <img src={'data:image/png;base64,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'} alt="Logo" className="logo" />
        </div>
      </header>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/home">
                <AiOutlineHome /> Início
              </Link>
            </li>
            <li>
              <Link to="/documents">
                <AiOutlineFileText /> Meus Documentos
              </Link>
            </li>
            <li>
              <Link to="/about">
                <AiOutlineInfoCircle /> Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
