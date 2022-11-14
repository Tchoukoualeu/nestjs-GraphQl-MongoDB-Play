import { CreateOrderInput as UpdateType } from './create-order.input';
import { IsNotEmpty } from 'class-validator';
import { StateType } from 'src/graphql';

export class UpdateOrderInput extends UpdateType {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  currentState: StateType;

  @IsNotEmpty()
  createdAt: string;

  assignedTo: string;
}
