import mongoose from "mongoose";
const User = mongoose.model('User', new mongoose.Schema({

  vendorname:{
    type:String,
    maxlength:100,
    minlength:2,
   },
   vendortype:{
    type:String,
    enum : ['weldor','machanic','Painter','puncher','tinber','sparedealer'],
    required:true,
  },
  address:{
    type:String,    
    required:true,
  },
  pincode:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  mobileno:{
    type:String,
    required:true,
 },
//  image:{
//     type:Object,
//   },
  }));
export default User;