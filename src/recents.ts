import * as db from 'quick.db';

function renderRecents() {
  let posts = db.get('posts');
  let final = [];

  if(posts == undefined || posts == null || posts == [] || posts.length == 0) return [];
  else {
    for(let i: number = 0; i < db.all.length; i++) {
      final.push(posts[i]);
    }
  }

  return final;
}

export { renderRecents }