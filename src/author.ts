import * as fs from 'fs';

function getAuthorInfo() {
  let raw: any = fs.readFileSync(__dirname + '/../settings.json');
  let data: any = JSON.parse(raw);

  return data.author;
}

export { getAuthorInfo }