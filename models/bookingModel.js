const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookedTimeSlots :
        {
            from : {type : String},
            to : {type : String }
        }
     ,
      totalHours : {type : Number},
      totalAmount : {type : Number},
      transactionId : {type : String},
      driverRequired : {type : Boolean},
      location: [{
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        lat: {
            type: Number
        },
        lng: {
            type: Number
        },
    }]


},
  {timestamps : true}
)

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel