class NewController {
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("newdetails");
  }
}

module.exports = new NewController();
