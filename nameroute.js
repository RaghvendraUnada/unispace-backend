const router = require("express").Router();
const NameModal = require("./NameModal");

router.post("/name", async (req, res) => {
  console.log(req.body);
  try {
    const Data = await NameModal.create(req.body);
    res.send(Data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
