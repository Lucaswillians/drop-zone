import React, { useState } from 'react';
import './Card.css';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { GoDownload } from 'react-icons/go';

interface CardProps {
  titulo: string;
  descricao: string;
  nomeArquivo: string;
  arquivo: File | null; 
  onEdit: (updatedData: { titulo: string; descricao: string; nomeArquivo: string; arquivo: File | null }) => void;
  onDelete: () => void;
}

interface CardProps {
  titulo: string;
  descricao: string;
  nomeArquivo: string;
  arquivo: File | null;
  dataCriacao: string; 
  onEdit: (updatedData: { titulo: string; descricao: string; nomeArquivo: string; arquivo: File | null }) => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ titulo, descricao, nomeArquivo, arquivo, dataCriacao, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitulo, setEditedTitulo] = useState(titulo);
  const [editedDescricao, setEditedDescricao] = useState(descricao);
  const [editedNomeArquivo, setEditedNomeArquivo] = useState(nomeArquivo);
  const [editedArquivo, setEditedArquivo] = useState<File | null>(arquivo);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      onEdit({
        titulo: editedTitulo,
        descricao: editedDescricao,
        nomeArquivo: editedNomeArquivo,
        arquivo: editedArquivo
      });
    }
    setIsEditing(!isEditing);
  };

  const handleDownload = () => {
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      const link = document.createElement('a');
      link.href = url;
      link.download = nomeArquivo;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        {isEditing ? (
          <div className="card-edit">
            <input
              type="text"
              value={editedTitulo}
              onChange={(e) => setEditedTitulo(e.target.value)}
              className="card-input"
            />
            <textarea
              value={editedDescricao}
              onChange={(e) => setEditedDescricao(e.target.value)}
              className="card-textarea"
            />
            <input
              type="text"
              value={editedNomeArquivo}
              onChange={(e) => setEditedNomeArquivo(e.target.value)}
              className="card-input"
            />
            <input
              type="file"
              onChange={(e) => setEditedArquivo(e.target.files ? e.target.files[0] : null)}
              className="card-file-input"
            />
          </div>
        ) : (
          <>
            <h3 className="card-title"><strong>Title: </strong>{titulo}</h3>
            <p className="card-description"><strong>Description: </strong>{descricao}</p>
            <p className="file-info"><strong>File Name: </strong>{nomeArquivo}</p>
            {arquivo && (
              <GoDownload onClick={handleDownload} className="download-button" />
            )}
            <p className="card-date"><strong>Created At: </strong>{dataCriacao}</p> 
          </>
        )}
      </div>

      <div className="card-options">
        <HiOutlineDotsVertical onClick={handleMenuToggle} className="menu-button" />
        {showMenu && (
          <div className="menu">
            <button onClick={handleEditToggle}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Card;
