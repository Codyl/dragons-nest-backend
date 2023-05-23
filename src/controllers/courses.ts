import { Request, Response } from 'express';
import { Course } from '../models/course';
import courseTypes from '../constants/course-types';

const getCourses = async (req: Request, res: Response) => {
  const acceptedQueryParams = ['subject', 'name', 'type'];
  let query: { [props: string]: any } = {};

  for (let [key, value] of Object.entries(req.query)) {
    if (!acceptedQueryParams.includes(key)) {
      return res.status(400).json({
        warning: 'Invalid query parameter.',
      });
    } else if (key === 'name' && typeof value === 'string') {
      query[key] = { $regex: value, $options: 'i' };
    } else {
      query[key] = value;
    }
  }

  try {
    const courses = await Course.find(query).exec();
    return res.status(200).json({
      message: 'Courses successfully retrieved.',
      courses: courses,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

interface Samples {
  [props: string]: any;
}

const getSamples = async (req: Request, res: Response) => {
  try {
    const samplesPromises = courseTypes.map(async (courseType) => {
      const samples = await Course.find({ type: courseType }).limit(3).exec();
      return samples;
    });

    //Set initial keys for all samples to null
    const allSamples: Samples = {};
    for (let i = 0; i < courseTypes.length; i++) {
      const key = courseTypes[i];
      allSamples[key] = null;
    }

    // Assign samples to their respective keys
    for (const [i, courseType] of courseTypes.entries()) {
      allSamples[courseType] = await samplesPromises[i];
    }

    return res.status(200).json({
      message: 'Samples successfully retrieved.',
      samples: allSamples,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default {
  getSamples,
  getCourses,
};
