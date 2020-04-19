import mongoose from 'mongoose';


const testSchema = new mongoose.Schema(
  {
    field: String,
  },
);




const Test = mongoose.model('Test', testSchema);

export default Test;