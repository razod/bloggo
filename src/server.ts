import * as express from 'express';

import { renderRecents } from './recents';
import { router } from './api';

import { getHostInfo } from './host';
import { getAuthorInfo } from './author';
import { colors, hexToRgb } from './color'

const app: any = express();

app.use('/public', express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.set('view engine', 'hbs');

app.get('/', (req: any, res: any) => {
  res.render(__dirname + '/../views/index', { recents: renderRecents(), author: getAuthorInfo(), colors: hexToRgb(getHostInfo().primary_color), color_styles: colors(getHostInfo().primary_color)});
});

app.listen(getHostInfo().port, (e?: any) => {
  if(e) throw e;
  console.log('Your blog is running!');
});