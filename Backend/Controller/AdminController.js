// const AdminSchema = require("../Model/AdminSchema")

// module.exports = {
//
//  Admin to get all users [GET api/admin/users]----------------
//
//     getAllusers : async (req,res) => {
//         try {
//             const users = await AdminSchema.find();
//             res.json(users);
//         } ctach (error) {
//           console.error(error);
//           res.status(500).json({ error: "Internal Server Error" });
//       }
//    },
// 
//
//  Delete all the users [DELETE api/admin/users/:id]----------------
//     
//     deleteUser : async (req,res) => {
//           const userId = req.params.id;
//       try {

//         await AdminSchema.findByIdandDelete(UserId)
//          res.json({ message: 'User deleted successfully' });

//        } catch (error) {
           
//          console.error(error);
//          res.status(500).json({ error: 'Internal Server error' });
//        }
//    },
// }