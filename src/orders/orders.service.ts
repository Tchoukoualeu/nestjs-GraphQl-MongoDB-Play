import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from 'src/graphql';
import { UpdateOrderInput } from './dto/update-order.input';
import { OrderDocument } from './schemas/orders.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('order') private orderModel: Model<OrderDocument>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  update(updateOrderInput: UpdateOrderInput) {
    // Validate request base on state

    return this.orderModel
      .findByIdAndUpdate(
        { _id: updateOrderInput._id },
        {
          $set: {
            currentState: updateOrderInput.currentState,
            lastUpdatedAt: updateOrderInput.createdAt,
          },
          $push: {
            stateHistory: {
              state: updateOrderInput.currentState,
              createdAt: updateOrderInput.createdAt,
              ...(updateOrderInput.assignedTo && {
                assignedTo: updateOrderInput.assignedTo,
              }),
            },
          },
        },
      )
      .exec();
  }
}
