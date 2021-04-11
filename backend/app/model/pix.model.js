const sql = require("./db.js");

// constructor
const Pic = function(pic) {
    this.id = pic.id;
    this.path = pic.path;
};


Pic.findById = (picId, result) => {
    sql.query(`SELECT path FROM pix WHERE id = ${picId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("there u go: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found  with the id
        result({ kind: "gar keine ahnung" }, null);
    });
};

Pic.getAll = result => {
    sql.query("SELECT path FROM pix", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("is this art: ", res);
        result(null, res);
    });
};

Pic.updateById = (id, pic, result) => {
    sql.query(
        "UPDATE pix SET path = ? WHERE id = ?",
        [pic.path, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found  with the id
                result({ kind: "nothing to replace" }, null);
                return;
            }

            console.log("updated picture: ", { id: id, ...pic });
            result(null, { id: id, ...pic });
        }
    );
};

Pic.remove = (id, result) => {
    sql.query("DELETE FROM pix WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Member with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("it gone fam: ", id);
        result(null, res);
    });
};

Pic.removeAll = result => {
    sql.query("DELETE FROM members", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} that pic`);
        result(null, res);
    });
};

module.exports = Pic;
