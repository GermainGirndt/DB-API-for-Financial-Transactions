// Node file system
import fs from 'fs';

import csvParse from 'csv-parse';

interface RequestDTO {
  csvFilePath: string;
}

class ReadCsvService {
  async execute({ csvFilePath }: RequestDTO): Promise<Array<string>> {
    // Reading CSV File
    const readCSVStream = fs.createReadStream(csvFilePath);

    const parseStream = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });

    // Receiving read data for parsing
    const parseCSV = readCSVStream.pipe(parseStream);

    const transactionsDataArray: Array<string> = [];

    parseCSV.on('data', line => {
      transactionsDataArray.push(line);
    });

    await new Promise(resolve => {
      parseCSV.on('end', resolve);
    });

    return transactionsDataArray;
  }
}

export default ReadCsvService;
