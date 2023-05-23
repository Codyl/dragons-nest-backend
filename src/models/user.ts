import mongoose from 'mongoose';
import { UserCourse } from './course';

const Schema = mongoose.Schema;

export default mongoose.model(
  'User',
  new Schema(
    {
      
      name: {
        type: String,
        default: 'missing',
        required: true,
        trim: true,
      },
      current_courses: [UserCourse.schema],
      skill_levels: {}
      // photo: {
      //   type: Schema.Types.Mixed,
      //   default: {},
      // },
      // billing: {
      //   type: Object,
      //   default: {
      //     stripe_id: 'missing',
      //     checkout_session: 'missing',
      //   },
      // },
      // communication: {
      //   type: Object,
      //   default: {
      //     email: '',
      //     unsubscribed_from_email: false,
      //     email_delivery_errors: {
      //       bounced: 0,
      //       dropped: 0,
      //       blocked: 0,
      //     },
      //   },
      // },
      // address: {
      //   type: Object,
      //   default: {
      //     address_one: '',
      //     address_two: '',
      //     city: '',
      //     state: '',
      //     zip_code: '',
      //   },
      // },
      // portfolio: {
      //   type: Object,
      //   default: {
      //     instagram: 'missing',
      //     facebook: 'missing',
      //     linkedin: 'missing',
      //     twitter: 'missing',
      //     blog: 'missing',
      //   },
      // },
      // password: {
      //   type: String,
      //   trim: true,
      //   required: true,
      // },
      // mfa_verified: {
      //   type: Boolean,
      //   default: false,
      // },
      // mfa_code: {
      //   type: String,
      // },
      // allowPasswordChange: {
      //   type: Boolean,
      //   default: false,
      // },
      // resetCode: {
      //   type: String,
      // },
    },
    { timestamps: true, minimize: false }
  )
);