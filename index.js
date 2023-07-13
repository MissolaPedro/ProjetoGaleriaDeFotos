const app = require("express")();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("views", "project/web");
app.use(require("express").static("project/web"))

app.listen(80, () => {
  console.log(
    "Servidor online, acesse http://localhost para ver como esta o projeto"
  );
});
