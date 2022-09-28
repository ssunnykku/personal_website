const { Router } = require("express");
const { Photo } = require("../../models");

const router = Router();

router.get("/posts", async (req, res) => {
  const photos = await Photo.fine({});

  res.json(photos);
});

module.exports = router;
