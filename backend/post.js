const router = require("express").Router();
const postModel = require("./post.model");

router.post("/", async (req, res) => {
  try{
    const newPost = new postModel({
        title: req.body.title,
        content: req.body.content
    })
    const savePost = await newPost.save()
    res.status(200).json("Succes")
  } catch(err) {
    res.json(err)
  }
})

router.get("/", async (req, res) => {
    try {
        const allPosts = await postModel.find({});
        res.status(200).json(allPosts)
    } catch(err) {
        res.json(err)
      }
})

module.exports = router;