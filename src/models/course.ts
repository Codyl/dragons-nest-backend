import mongoose from 'mongoose';
import Skill from './skill';

const Schema = mongoose.Schema;

// Define the base course schema
const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  required_level: {
    type: String,
  },
  quests: [
    {
      name: String,
      task: String,
      resources: [String],
    },
  ],
  skill: Skill.schema,
});

// Create the base course model
const Course = mongoose.model('Course', courseSchema);

const UserCourseSchema = new Schema({
  user_level: Number,
});

// Extend the UserCourseSchema from the Course schema
UserCourseSchema.add(courseSchema.obj);

// Create the derived course model using discriminator
const UserCourse = Course.discriminator('UserCourse', UserCourseSchema);

export { Course, UserCourse };
