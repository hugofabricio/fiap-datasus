import { Schema } from 'mongoose';

export const CidSchema = new Schema({
  cid: { type: String, required: true },
  name: { type: String, required: true },
  statistics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Statistic',
    },
  ],
});
