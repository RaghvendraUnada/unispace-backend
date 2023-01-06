const router = require("express").Router();
const NameModal = require("./NameModal");

router.post("/name", async (req, res) => {
  console.log("name", req.name);
  try {
    const Data = await NameModal.create(req.body);
    res.send(Data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/name", async (req, res) => {
  try {
    const Data = await NameModal.find({});
    res.send(Data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
