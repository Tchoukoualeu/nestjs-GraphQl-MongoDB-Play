import mongoose, { HydratedDocument } from 'mongoose';
import { Order } from 'src/graphql';

export const orderSchema = new mongoose.Schema<Order>({
  lastUpdatedAt: String,
  createdAt: String,
  customer: {
    fname: String,
    lname: String,
  },
  lineItems: [
    {
      _id: String,
      sku: String,
      name: String,
    },
  ],
  currentState: {
    type: String,
    enum: ['OPEN', 'IN_PROGRESS', 'COMPLETE'],
  },
  stateHistory: [
    {
      state: {
        type: String,
        enum: ['OPEN', 'IN_PROGRESS', 'COMPLETE'],
      },
      createdAt: String,
      assignedTo: String,
    },
  ],
});

export type OrderDocument = HydratedDocument<Order>;
