<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Nestjs playground

## Generate ts type from graphQl type

1. Create the graphQl type (ie. orders.graphql)
2. run `tsc src/generate-types.ts`
3. run `node src/generate-types.js`

This should update the `graphql.ts` file with the new types

## Dev

![](/docs/images/overview.png)

1. Replace MLAB_URI****\*\*****\*\*****\*\*****\_\_\_\_****\*\*****\*\*****\*\***** in the app.module.ts with the URI of your mongo instance.
2. `npm run start`
3. Nagivate to `http://localhost:3002/graphql`

Example of a mutation request

```ts
mutation {
  updateOrder(
    updateOrderInput: {
      _id: "637204eee0202ebc1d7fe866"
      currentState: COMPLETE
      createdAt: "2022-04-11T20:06:19.776Z"
    }
  ) {
    stateHistory {
      _id
    }
  }
}
```

Example of a query all request

```ts
{
  orders {
    _id
    customer{fname, lname}
    currentState
    stateHistory{createdAt, state}
    lastUpdatedAt
  }
}
```
