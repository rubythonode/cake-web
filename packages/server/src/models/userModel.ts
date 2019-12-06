import mongoose, { Model, Schema } from 'mongoose';

export interface IUserPayload {
  email: string;
  image: string;
  name: string;
  password: string;
  serial: string;
  type: string;
}

export interface IUser extends IUserPayload, mongoose.Document {}

export interface IUserModel extends IUser {
  id: string;
  joined: Date;
}

const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  image: { type: String, required: true },
  joined: { type: Date, default: Date.now },
  name: { type: String, required: true },
  password: { type: String, required: true },
  serial: { type: String, required: true },
  type: { type: String, required: true },
});

userSchema.statics.createUser = async (userPayload: IUserPayload) => {
  const newUser: IUserModel = new userModel(userPayload);
  const savedUser: IUserModel = await newUser.save();
  return savedUser;
};

userSchema.methods.toJSON = function (): any {
  const obj: any = this.toObject();
  obj.id = obj._id;
  ['_id', '__v'].map((key) => {
    delete obj[key];
  });
  return obj;
};

const userModel: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);

export default userModel;
