# Section 4 - Debugging & Easier Development

## Understanding NPM Scripts

```npm init``` to initialize *package.json*.  Scripts can be added to the *package.json* file, such as a "start" command, to run "node app.js"

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node app.js"
},
```

*npm start* is a special example that doesn't need *run* in the command to execute.  Custom script names do however:

```npm run start-server```

