const Pic = require("../model/pix.model.js");



// Retrieve all pix from the database.
exports.findAll = (req, res) => {
        Pic.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Uhoh, some error occurred while retrieving the pictures."
                });
            else res.send(data);
        });
};

// Find a single one with a Id
exports.findOne = (req, res) => {
        Pic.findById(req.params.picId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found with id ${req.params.picId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Picture with id " + req.params.picId
                    });
                }
            } else res.send(data);
        });
};

// Update identified pix by the id in the request
exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        Pic.updateById(
            req.params.picId,
            new Pic(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Picture with id ${req.params.picId}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Picture with id " + req.params.picId
                        });
                    }
                } else res.send(data);
            }
        );


};

// Delete  pix of Id in the request
exports.delete = (req, res) => {
    Pic.remove(req.params.PicId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Pic with id ${req.params.PicId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Pic with id " + req.params.picId
                });
            }
        } else res.send({message: ` gone successfully!`});
    });
}

// Delete all from the database.
exports.deleteAll = (req, res) => {
        Pic.removeAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all pictures."
                });
            else res.send({ message: `All Pictures were deleted successfully!` });
        })

};
