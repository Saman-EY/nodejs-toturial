const { query } = require("express-validator");

const searchValidotor = [
  query("title").trim().notEmpty().withMessage("title is required").isString().withMessage("title must be string"),
  query("sort")
    .matches(/ASC|DESC/)
    .withMessage("sort must be ASC or DESC"),
];

module.exports = searchValidotor;