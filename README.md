# Bloggo
An open source blogging web-app built on Node.js and TypeScript!

## Cloning
Want to create your own blog? Well, thats exactly why this is open source here on GitHub! All you have to do is clone this page:
```
git clone ???
```

Then, move into the directory!
```
cd ./bloggo
```

Now you can launch your own blog with:
```
npm run server
```

### Pushing a blog post
So, now you get to make your blog post! What you need to do is create a `.env` file in your `~` directory, and in it write the following:
```env
PASSWORD=YOUR_PASSWORD
```

> Note: You can edit the "YOUR_PASSWORD", but must leave the name as `PASSWORD` (this will be encrypted)!

From here, you can go to your site (hosted locally or deployed) and go to `https://yoursite.com/publish` OR `localhost:8080/publish`, where you will be able to write out your post! (You will be asked for the password at the end to ensure it is you!

### Settings
Well now you have to edit your blog! You can use the `settings.json` file in `~` to change your profile settings, for example you can change your name by changing the `name` field, your bio with `bio` etc...:
```json
{
  "author": {
    "name": "John Doe",
    "bio": "I am a passionate web developer! I love using tools like TypeScript and Node.js, you can <a href=\"https://yourportfolio.com/\">view my work here</a>!",
    "pfp": "./public/assets/pfp.png"
  },
  "host": {
    "port": 8080,
    "primary_color": "#5539cc"
  }
}
```

**NOTE** If you change the `primary_color` you must use a HEX value

### Credits
Made with <3 by Sqwyer

Recourses:
  - `node.js` - [Website](https://nodejs.org)
    - `NPM` - [Website](https://npmjs.com)
      - `typescript` - [NPM Package](https://npmjs.com/package/typescript)
        - `@types/node` - [NPM Package](https://npmjs.com/package/@types/node)
      - `express` - [NPM Package](https://npmjs.com/package/express)
      - `hbs` [NPM Package](https://npmjs.com/package/hbs)
      - `quick.db` [NPM Package](https://npmjs.com/package/quick.db)
      - `nodemon` [NPM Package](https://npmjs.com/package/nodemon)
  - `visual studio code` - [Website](https://code.visualstudio.com)
  - `github` - [Website](https://github.com)