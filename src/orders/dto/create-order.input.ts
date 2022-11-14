import { Customer, LineItem, Order, StateType } from 'src/graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderInput extends Order {
  @IsNotEmpty()
  lastUpdatedAt: string;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  customer: Customer;

  @IsNotEmpty()
  lineItems: LineItem[];

  @IsNotEmpty()
  currentState: StateType;
}
