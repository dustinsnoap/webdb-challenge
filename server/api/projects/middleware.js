check_fields = async (req, res, next) => {
    req.body.name && req.body.description
    ?   next()
    :   res.status(400).json({message: `Required fields are not present.`})
}

module.exports = {check_fields}