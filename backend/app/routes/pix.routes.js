module.exports = app => {
    const pix = require("../controller/pix.controller.js");


    // GET all
    app.get("/pix", pix.findAll);

    // GET one with Id
    app.get("/pix/:pixId", pix.findOne);

    // Update one with memberId
    app.put("/pix/:pixId", pix.update);

    // Delete pic by Id
    app.delete("/pix/:pixId", pix.delete);

    // Delete all
    app.delete("/pix", pix.deleteAll);
};
