import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class About {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true })
  user: mongoose.Types.ObjectId;

  @Prop({ required: true })
  content: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);
