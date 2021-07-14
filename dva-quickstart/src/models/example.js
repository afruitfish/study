export default {
  namespace: "list",
  state: [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
  ],
  reducers: {
    del(state, action) {
      return state.filter((item) => {
        console.log(item, action);
        return item.id !== action.payload;
      });
    },
  },
  effects: {
    *delete({ payload: id }, { call, put }) {
      yield call(() => {}, 1000);
      yield put({ type: "del", payload: id });
    },
  },
};
