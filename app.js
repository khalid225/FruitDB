import mongoose  from "mongoose";

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema(
    {
        name : String,
        rating: Number,
        review: String
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "An apple a daykeeps the doctor away!"
});

fruit.save();