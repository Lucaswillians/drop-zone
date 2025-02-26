import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Chart.css";

const data = [
  { name: "PDF", quantidade: 40 },
  { name: "Word", quantidade: 25 },
  { name: "Images", quantidade: 20 },
  { name: "Others", quantidade: 15 },
];

const FileTypeChart = () => {
  return (
    <div className="chart-wrapper">
      <h2 className="chart-title">Distribuição dos Arquivos Importados</h2>
      <div className="chart-content">
        <div className="chart-container">
          <ResponsiveContainer width="70%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#4F46E5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-legend">
          <p><span className="legend-color" style={{ backgroundColor: "#4F46E5" }}></span> Arquivos Importados</p>
          <ul>
            <li>📄 PDF</li>
            <li>📝 Word </li>
            <li>🖼 Imagens </li>
            <li>📂 Outros Arquivos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FileTypeChart;
