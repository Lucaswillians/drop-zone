import React, { useState } from 'react';
import Form from '../../components/Form';
import Card from '../../components/Card';
import './Documents.css';

interface FormData {
  titulo: string;
  descricao: string;
  nomeArquivo: string;
  arquivo: File | null;
}

const Documents: React.FC = () => {
  const [items, setItems] = useState<FormData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
  const [filterText, setFilterText] = useState<string>(''); 

  const handleSave = (data: FormData) => {
    const newItem = {
      ...data,
      dataCriacao: new Date().toLocaleString(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleEdit = (updatedData: FormData) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.nomeArquivo === updatedData.nomeArquivo ? { ...item, ...updatedData } : item
      )
    );
  };


  const handleDelete = (itemToDelete: FormData) => {
    setItems((prevItems) => prevItems.filter(item => item !== itemToDelete));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredItems = items.filter(item => {
    return (
      item.titulo.toLowerCase().includes(filterText.toLowerCase()) ||
      item.descricao.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); 

  return (
    <div className="documents-container">
      <h1>Cadastrar Novo Arquivo</h1>
      <Form onSave={handleSave} initialData={null} />

      <div className="filter-container">
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter by title or description..."
          className="filter-input"
        />
      </div>

      <div className="cards-container">
        <h2>Created Itens</h2>
        {filteredItems.length > 0 ? ( 
          <>
            <div className="cards-list">
              {currentItems.map((item, index) => (
                <Card
                  key={index}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  nomeArquivo={item.nomeArquivo}
                  arquivo={item.arquivo}
                  dataCriacao={item.dataCriacao}
                  onEdit={handleEdit}
                  onDelete={() => handleDelete(item)}
                />
              ))}
            </div>
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Anterior
              </button>
              <span>
                Página {currentPage} de {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
              >
                Próxima
              </button>
            </div>
          </>
        ) : (
          <p>No itens created yet!</p>
        )}
      </div>
    </div>
  );
};

export default Documents;
