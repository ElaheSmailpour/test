const mongoose = require("mongoose");
const { Schema } = mongoose;

const listename = new Schema(
    {

      
         name: [{
            type: String
     }]

       /*   name: {
        type: [String],
      }
  */
    
    }



);

module.exports = mongoose.model("name", listename);