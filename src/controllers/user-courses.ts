import { Request, Response } from 'express';
import { Course, UserCourse } from '../models/course';
import User from '../models/user';

interface UserCourseA {
  name: string;
}

const getUserCourses = async (req: Request, res: Response) => {
  const { userId } = req.params;
  // Check if user exists
  try {
    const user = await User.findById(userId).exec();

    if (!user) {
      return res.status(400).json({
        error: 'User not found. Please login again.',
      });
    }
  } catch(error) {
    return res.status(400).json({
      error: `User not found. Please login again.`,
    });
  }

  try {
    

    // Retrieve all courses
    const courses = await Course.find().exec();

    // Retrieve UserCourses with the same name and user_id
    const userCourses: UserCourseA[] = await UserCourse.find({
      name: { $in: courses.map((course) => course.name) },
      user_id: userId,
    })
      .exec()
      .then((docs) => docs.map((doc) => doc.toObject() as UserCourseA));

    // Combine courses and matching UserCourses
    const mergedCourses = courses.map((course) => {
      const matchingUserCourse = userCourses.find(
        (userCourse) => userCourse.name === course.name
      );
      return matchingUserCourse ? matchingUserCourse : course;
    });

    return res.status(200).json({
      message: 'Courses successfully retrieved.',
      courses: mergedCourses,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const getUserCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const userCourse = await UserCourse.findById(id).exec();
    return res.status(200).json({
      message: 'Samples successfully retrieved.',
      courses: userCourse,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default {
  getUserCourse,
  getUserCourses,
};
