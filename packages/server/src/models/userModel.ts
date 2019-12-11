import { randomBytes } from 'crypto';
import mongoose, { Model, Schema } from 'mongoose';

import encryptPassword from '../utils/encryptPassword';
import requestDimigo from '../utils/requestDimigo';

// tslint:disable-next-line:import-name
import whitelist from '../../whitelist.json';

export interface IUserPayload {
  email: string;
  name: string;
  password: string;
  serial: string;
  type: string;
  username: string;
  uid: string;
}

export interface IUser extends IUserPayload, mongoose.Document {}

export interface IUserModel extends IUser {
  id: string;
  joined: Date;
  verifyPassword(userPassword: string): boolean;
}

const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  joined: { type: Date, default: Date.now },
  name: { type: String, required: true },
  password: { type: String, required: true },
  serial: { type: String, required: true },
  type: { type: String, required: true },
  uid: { type: String, required: true },
  username: { type: String, required: true },
});

interface IDimigoIdentity extends IUserPayload {
  user_type: string;
}

userSchema.pre<IUser>('save', function (done: () => any): any {
  if (!this.isModified('password')) {
    return done();
  }
  const salt: string = randomBytes(10).toString('base64');
  const encryptedPassword: string = encryptPassword(this.password, salt);
  this.password = `${encryptedPassword}|${salt}`;
  return done();
});

userSchema.statics.createUser = async (userPayload: IUserPayload) => {
  const newUser: IUserModel = new userModel(userPayload);
  const savedUser: IUserModel = await newUser.save();
  return savedUser;
};

userSchema.statics.createDimigo =
  async function (username: string, password: string): Promise<IUserModel> {
    const identity: any = await requestDimigo(username, password);
    const { email, name, serial, user_type }: IDimigoIdentity = identity;
    // @ts-ignore
    const rfid: string = whitelist[name];

    const newUser: IUserModel = this.createUser({
      email,
      name,
      password,
      serial,
      username,
      type: user_type,
      uid: rfid || 'none',
    });

    return newUser;
  };

userSchema.methods.toJSON = function (): any {
  const obj: any = this.toObject();
  obj.id = obj._id;
  ['_id', '__v', 'password'].map((key) => {
    delete obj[key];
  });
  return obj;
};

userSchema.methods.verifyPassword = function (userPassword: string): boolean {
  const [encrypted, salt] = this.password.split('|');
  const password: string = encryptPassword(userPassword, salt);
  return (password === encrypted);
};

const userModel: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);

export default userModel;
