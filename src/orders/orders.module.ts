import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './schemas/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'order', schema: orderSchema }]),
  ],
  controllers: [],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
