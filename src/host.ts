import * as fs from 'fs';

function getHostInfo() {
  let raw: any = fs.readFileSync(__dirname + '/../settings.json');
  let data: any = JSON.parse(raw);

  return data.host;
}

export { getHostInfo }