import * as express from 'express';
import * as dotenv from 'dotenv';
import * as db from 'quick.db';

import { generateTimestamp } from './timestamp';
import { getAuthorInfo } from './author'

dotenv.config();

const router = express.Router();

router.post('/publish', (req: any, res: any) => {
  let body = req.body;
  let match = false;

  if(body.password === process.env.PASSWORD) match = true;

  if(match) {
    if(db.get('posts') == null || db.get('posts') == undefined) db.set('posts', []);
    let id: any = db.get('posts');
    db.push('posts', {
      title: body.title,
      markdown: body.content,
      timestamp: generateTimestamp(),
      id: id++
    });

    res.redirect(`/posts/${id}`);
  } else {
    res.render('/../views/publish', {
      title: body.title,
      markdown: body.content
    });
  }
});

router.get('/publish', (req: any, res: any) => {
  res.render(__dirname + '/../views/publish');
});

router.get('/posts/:id', (req: any, res: any) => {
  let all: any = db.get('posts');

  console.log(req.params.id);

  let post: any = all.find(obj => {
    if(obj.id === Number(req.params.id)) return obj
  });
  let author: any = getAuthorInfo();
  if(post) {
    res.render(__dirname + '/../views/post', {
      title: post.title,
      timestamp: post.timestamp,
      content: post.html,
      author: author
    });
  } else {
    res.render(__dirname + '/../views/error', { 
      error_type: '404',
      error_message: 'We couldn\'t find that blog post!'
    });
  }
});

router.get('/api/author', (req: any, res: any) => {
  let author: any = getAuthorInfo();
  res.json({
    error: undefined,
    data: author
  });
});

router.get('/api/posts', (req: any, res: any) => {
  res.json({
    error: undefined,
    data: db.all()
  });
});

export { router }