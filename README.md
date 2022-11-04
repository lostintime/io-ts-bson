# `io-ts` codecs for `bson` types

This package provides [io-ts](https://github.com/gcanti/io-ts) codecs for [bson](https://github.com/mongodb/js-bson) data types.

## Installation

```sh
npm install --save io-ts-bson
```

## Usage

Database entities may be defined using the `io-ts-bson` types and then decoded/encoded.

```ts
import * as bson from 'bson';
import * as t from 'io-ts';
import * as bt from 'io-ts-bson';

export const UserProfile = t.type(
  {
    _id: bt.ObjectId,
    name: t.string,
    createdAt: bt.date,
  },
  'UserProfile',
);
export type UserProfile = t.TypeOf<typeof UserProfile>;

export const loadUserProfile = async (id: string) => {
  const user = await db.collection('users').findOne({
    _id: bson.ObjectId.createFromHexString(id),
  });

  return UserProfile.decode(user);
};
```
