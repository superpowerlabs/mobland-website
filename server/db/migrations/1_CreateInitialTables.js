// const helpers = require("./helpers");

class CreateInitialTables extends require("../Migration") {
  async body(index, database) {
    let done = false;
    // let sql = await this.sql();

    // no migrations for this repo, because connection to DB is only preconfigured

    if (!done) {
      console.info("No change required for this migration");
    }
  }
}

module.exports = CreateInitialTables;
