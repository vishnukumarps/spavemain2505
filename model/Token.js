const mongoose = require("mongoose")
const TokenSchema = new mongoose.Schema({
    
    mobileNumber:{
        type :String
       
    },
    publicTokens:{
            type:String
    },
    accessTokens:{
        type:String
    },
    processorToken:{
        type:String
    }

})

const Token=mongoose.model('Token',TokenSchema)
module.exports ={Token}