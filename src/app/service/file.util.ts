import {saveAs} from 'file-saver';

class FileUtil {

  downloadFromBase64(b64Data: string, fileName: string, contentType: string) {
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    saveAs(blob, fileName);
  }

  downloadTextAsFile(content: string, fileName: string) {
    const blob = new Blob([content], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, fileName);
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(`${reader.result}`);
      reader.onerror = () => reject('Error al leer el archivo');
    });
  }

  async fileToByteArray(file: File): Promise<number[]> {
    return Array.from(new Uint8Array(await file.arrayBuffer()));
  }
}

export const fileUtil = new FileUtil();
