check_fields = async (req, res, next) => {
    //check if required fields are present
    req.body.description && req.body.project_id
    ?   next()
    :   res.status(400).json({message: `Required fields are not present.`})
}

module.exports = {check_fields}