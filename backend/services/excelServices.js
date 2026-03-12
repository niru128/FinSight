import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readExcelFile = () => {

  const filepath = path.join(__dirname, "../data/E555815F_58D029050B.xlsx");

  const workbook = XLSX.readFile(filepath);

  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const dataRows = rows.slice(2); 

  const portfolio = dataRows
    .filter(row => row[1]) 
    .map(row => ({
      name: row[1],
      symbol: row[1].replace(/\s+/g, "").toUpperCase() + ".NS",
      purchasePrice: Number(row[2]),
      quantity: Number(row[3]),
      exchangeCode: row[6] || "NSE",
      sector: "Unknown"
    }));

  return portfolio;
};