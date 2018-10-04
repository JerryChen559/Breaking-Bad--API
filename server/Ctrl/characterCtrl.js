// const {characters} = require('../Data/characters')

const getPeople = (req, res) => {
    const db = req.app.get('db');

  db.characters.get_characters()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
    // res.status(200).json(characters)
}

module.exports = {
    getPeople
}
