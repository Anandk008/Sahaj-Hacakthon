const express = require('express');
const fs = require('fs');
const app = express();

const port = 8080;

app.use(express.json());

// Load data from file
let data = JSON.parse(fs.readFileSync('data.json'));

// Greetings
app.get('/greeting', (req, res) => {
    res.status(200).json('Hello world!')
}),
// GET all items
app.get('/employee/all', (req, res) => {
  res.json(data);
});

// GET single item by id
app.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  const item = data.find(item => item.id === id);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).send(`Employee with ${id} was not found`);
  }
});

// POST new item
app.post('/employee', (req, res) => {
    const { name, city } = req.body;
    
    // Generate unique id for new item
    const newItem = { name, city}
  newItem.id = Date.now().toString();
//   newItem.name = req.name;
//   newItem.city = req.city;
    console.log(newItem);
  data.push(newItem);


    const ans = "employeeId: " + newItem.id ;
  // Save data to file
  fs.writeFileSync('data.json', JSON.stringify(data));

  res.status(201).json(ans);
});

// PUT update item by id
app.put('/employee/:id', (req, res) => {
  const id = req.params.id;
  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    res.status(404).send(`Employee with ${id} was not found`);
  } else {
    data[itemIndex] = req.body;


    // Save data to file
    fs.writeFileSync('data.json', JSON.stringify(data));

    res.status(201).json(data[itemIndex]);
  }
});

// DELETE item by id
app.delete('/employee/:id', (req, res) => {
  const id = req.params.id;
  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    res.status(404).send(`Employee with ${id} was not found`);
  } else {
    data.splice(itemIndex, 1);

    // Save data to file
    fs.writeFileSync('data.json', JSON.stringify(data));

    res.status(200).send();
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
