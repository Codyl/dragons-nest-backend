import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  subject: String,
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
