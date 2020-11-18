const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const CsvFile = require('./csv');
const sleep = require('sleep');

/**
 * Crawler
 */
const App = async () => {
  const settings = {
    url: 'https://www.medicinanet.com.br/pesquisa/cid10/cod/{code}.htm',
    input: 'teste.csv',
    output: 'cid10.csv'
  }

  const csvFile = new CsvFile({
    path: path.resolve(__dirname, settings.output),
    headers: ['codigo', 'nome'],
  });

  const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  const codes = Array(100)

  for (const letter of alphabet) {
    for (const [id] of codes.entries()) {
      let code = `${letter}${id.toString().padStart(2, '0')}`

      try {
        const res = await axios(settings.url.split('{code}').join(code))
  
        console.log(`\nPesquisando resultados para ${code}...`)
  
        const html = res.data;
        const $ = cheerio.load(html);
        const rows = $('#texto table*[style] tr');
  
        let dataTemp = []      
  
        if (rows.length > 0) {  
          rows.each((i, row) => {
            let code = $(row).find('td b').text().replace(/\./g, '')
            let name = $(row).find('td a').text()
      
            dataTemp = [...dataTemp, {codigo: code, nome: name}]
          });

          for (const data of dataTemp) {
            console.log(`Adicionando [${data.codigo}] ${data.nome} a lista.`)
          }

          csvFile.append(dataTemp)

          sleep.msleep(1500)
        } else {
          console.log(`CID10: ${code} não encontrado\n`);
        }
      } catch (error) {
        console.log("Ocorreu um erro ao buscar os dados\n");
        return;
      }
    }
  }
}

App()