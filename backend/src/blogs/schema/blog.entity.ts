import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop()
  summary: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true })
  author: mongoose.Types.ObjectId;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
