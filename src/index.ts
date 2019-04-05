import * as path from 'path';
const fs = require('fs');
export function longestString(fileName: string): string {
  console.log(__dirname);
  const filePath = path.resolve(__dirname, `../__tests__/fixtures/${fileName}`);
  const movieTitles = fs.readFileSync(filePath).toString().split('\n');
  return '?';
}
