/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum StateType {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE',
}

export class UpdateOrderInput {
  _id: string;
  currentState: StateType;
  createdAt: string;
  assignedTo?: Nullable<string>;
}

export class Order {
  _id: string;
  lastUpdatedAt: string;
  createdAt: string;
  customer: Customer;
  lineItems?: Nullable<LineItem[]>;
  currentState: StateType;
  stateHistory?: Nullable<Nullable<History>[]>;
}

export class Customer {
  fname: string;
  lname: string;
}

export class History {
  _id: string;
  state: StateType;
  createdAt: string;
  assignedTo?: Nullable<string>;
}

export class LineItem {
  _id: string;
  sku: string;
  name: string;
}

export abstract class IQuery {
  abstract orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;

  abstract order(_id: string): Nullable<Order> | Promise<Nullable<Order>>;
}

export abstract class IMutation {
  abstract updateOrder(
    updateOrderInput: UpdateOrderInput,
  ): Order | Promise<Order>;
}

type Nullable<T> = T | null;
