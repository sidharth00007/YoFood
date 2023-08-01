const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://gofood:02062002@cluster0.u2naj3h.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food-items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })

                // if (err) console.log(err);
                // else {
                //     global.food_items = data; 
                // }
            })
        }
    });
}
module.exports = mongoDB;
