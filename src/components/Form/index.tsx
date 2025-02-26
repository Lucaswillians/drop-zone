import React, { useState, useEffect, useRef } from 'react';
import './Form.css';

interface FormData {
  titulo: string;
  descricao: string;
  arquivo?: File | null;
  nomeArquivo: string;
}

interface FormProps {
  onSave: (data: FormData) => void;
  initialData: FormData | null;
}

const Form: React.FC<FormProps> = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    descricao: '',
    arquivo: null,
    nomeArquivo: '',
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        arquivo: file,
        nomeArquivo: file.name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);

    setFormData({
      titulo: '',
      descricao: '',
      arquivo: null,
      nomeArquivo: '',
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = ''; 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="titulo">Título</label>
          <input
            className="form-input"
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="nomeArquivo">Nome do Arquivo</label>
          <input
            className="form-input"
            type="text"
            id="nomeArquivo"
            name="nomeArquivo"
            value={formData.nomeArquivo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            className="form-input"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="arquivo">Arquivo</label>
          <input
            className="form-input"
            type="file"
            id="arquivo"
            name="arquivo"
            accept=".exe,.zip,.bat,.pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
