import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportsService {

  constructor() { }

  excel(data: any[], fileName: string) {
    // Pastikan data yang diterima adalah array
    if (!Array.isArray(data) || data.length === 0) {
      console.error('Data must be a non-empty array');
      return;
    }

    // Buat worksheet dari data JSON
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    // Tambahkan worksheet ke workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    // Buat file Excel
    const excelBuffer: Uint8Array = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    // Simpan file
    const blob = new Blob([excelBuffer], {
      type: 'application/octet-stream'
    });
    saveAs(blob, `${fileName}.xlsx`);
  }
}
