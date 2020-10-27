const express = require("express");
const faunadb = require("faunadb"),
  q = faunadb.query;
const router = express.Router();

const client = new faunadb.Client({
  secret: "fnAD5LPUijACBegsjLc_Aq2ksdH0RPzOfEaYfqOK",
});

router.get("/getCards", async (req, res, next) => {
  await client
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_cards"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    )
    .then((ret) => res.json(ret.data.map((x) => ({ id: x.ref.id, ...x.data }))))
    .catch((err) => res.json(err));
});

router.post("/createCard", async (req, res, next) => {
  const title = req.body.title;
  const category = req.body.category;
  const definition = req.body.definition;

  await client
    .query(
      q.Create(q.Collection("cards"), { data: { title, category, definition } })
    )
    .then((ret) => {
      console.log("Created a new card:", { title, category, definition });
      res.json(ret);
    });
});

router.post("/deleteCard", async (req, res, next) => {
  const id = req.body.id;

  await client
    .query(q.Delete(q.Ref(q.Collection("cards"), id)))
    .then((ret) => {
      console.log("Deleted the card:", id);
      res.json(ret);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
