import mongoose, { Model, Schema } from 'mongoose';

export interface IRoomPayload {
  name: string;
  pin: string;
  room: string;
  date: Date;
  time: 'afsc1' | 'afsc2' | 'night1' | 'night2';
  max: number;
  desc: string;
}

export interface IRoom extends IRoomPayload, mongoose.Document {}

export interface IRoomModel extends IRoom {
  id: string;
  created: Date;
  delegate: string;
  users: string[];
}

const roomSchema: Schema = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  date: { type: Date, required: true },
  delegate: { type: String, required: true },
  desc: { type: String, required: true },
  max: { type: Number, required: true },
  name: { type: String, required: true },
  pin: { type: String, required: true },
  room: { type: String, required: true },
  time: { type: String, required: true },
  users: { type: [String], default: [] },
});

roomSchema.statics.createRoom = async (roomPayload: IRoomPayload, delegateID: string) => {
  const newRoom: IRoomModel = new roomModel({
    ...roomPayload,
    ...{ delegate: delegateID },
  });
  const savedRoom: IRoomModel = await newRoom.save();
  return savedRoom;
};

roomSchema.methods.toJSON = function (): any {
  const obj: any = this.toObject();
  obj.id = obj._id;
  ['_id', '__v'].map((key) => {
    delete obj[key];
  });
  return obj;
};

const roomModel: Model<IRoomModel> = mongoose.model<IRoomModel>('Room', roomSchema);

export default roomModel;
