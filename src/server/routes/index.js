const { Router } = require("express");
const matter = require("gray-matter");
const { join, parse } = require("path");
const { readFile, existsSync, readdir } = require("fs");

const router = Router();

router.get("/articles/:slug?", (req, res, next) => {
  try {
    let { slug } = req.params;

    let targetPath = join(__dirname, "../docs/reviews");

    if (!slug) {
      if (existsSync(targetPath)) {
        readdir(targetPath, (err, data) => {
          if (err) next(err);

          res.json(
            data.map((article) => {
              let name = parse(article).name;
              return { slug: name, title: name.replace(/-/g, " ") };
            })
          );
        });
      } else throw new Error("Folder does not exist.");
    } else {
      targetPath += `/${slug}.md`;
      if (existsSync(targetPath)) {
        readFile(targetPath, (err, data) => {
          if (err) next(err);

          res.json(matter(data));
        });
      } else throw new Error("File does not exist");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
