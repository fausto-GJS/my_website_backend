const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("CONNECT DB")
    }
)