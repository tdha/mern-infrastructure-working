// V2 DEBUGGING
// const create = async (req, res) => {
//     console.log(req.body); // Log request body to see what's being received
//     // user creation logic
//     res.json({
//         user: {
//             name: req.body.name,
//             email: req.body.email
//         }
//     });
//     console.log("User created:", req.body.name); // Confirm response
// };


// V1
const create = async (req, res) => {
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
};

module.exports = {
    create
};