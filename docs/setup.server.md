# setup

```javascript
import { items } from './data';

const server = new express();

server.get("/ping", (req, res) => {
  res.send('pong');
});

server.get("/items", (req,res) => {
  res.json(items);
});

server.listen(3000,() =>{
  console.info("Express listening on port 3000."); 
});
```

    node server/server.js
    
<img width="1623" alt="screen shot 2018-01-17 at 2 13 58 am" src="https://user-images.githubusercontent.com/5876481/35037362-27e98dbe-fb2c-11e7-854f-626bf07a11ff.png">

    npm i -D babel-node
    
<img width="1623" alt="screen shot 2018-01-17 at 2 17 28 am" src="https://user-images.githubusercontent.com/5876481/35037527-9fa41fcc-fb2c-11e7-93d6-7e06e400462a.png">

    npx babel server -d dist --presets es2015,stage-2
    node dist/server.js
    