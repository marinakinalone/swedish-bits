import mongoose from "mongoose";

const { Schema } = mongoose;

const vocabularySchema = new Schema({
  id: mongoose.SchemaTypes.ObjectId,
  swedish: { type: String, required: true },
  english: { type: String, required: true },
},
{
  collection: 'vocab',
});

const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);

export default Vocabulary;