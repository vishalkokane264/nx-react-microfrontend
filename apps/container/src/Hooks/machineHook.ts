import { assign, createMachine } from 'xstate';

interface ToggleContext {
  count: number;
}
type ToggleEvents = { type: 'TOGGLE' };

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IATFwCsOAJwA2ABwB2BVwAsXdeoCMso6oA0IAJ6IjAZiMrlz5Qs3zNB3QF9vltBjYOKTkVHRMrJy8kkIiYhJI0nKKKhraegbGphbWiMY4ui7Khgq6qlzOPr6WBKgQcJIBWGAxwqJ44pIyCAC0OTa9qtUgTUGEIZQtibHtnYndurKWA8p2OAZ2drJ2q8qyultDfiPozcFkk61xHQmg3ZtcOLJZi2lciku5CK44CuqbdmMXFUqjsmiOviAA */
  id: 'toggle',
  initial: 'inactive',
  context: {
    count: 0,
  },
  states: {
    inactive: {
      entry: assign({
        count: (ctx: any) => {
          return ctx.context.count + 1;
        },
      }),
      on: {
        TOGGLE: 'active',
      },
    },
    active: {
      entry: assign({
        count: (ctx: any) => {
          return ctx.context.count + 1;
        },
      }),
      on: { TOGGLE: 'aboutactive' },
    },
    aboutactive: {
      entry: assign({
        count: (ctx: any) => {
          return ctx.context.count + 0.5;
        },
      }),
      on: { TOGGLE: 'inactive' },
    },
  },
});

export default toggleMachine;
