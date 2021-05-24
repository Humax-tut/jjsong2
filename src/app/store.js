import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// 로컬스토리지를 불러옵니다
import storage from "redux-persist/lib/storage";

// (미리 작성해둔)리듀서와 미들웨어를 불러옵니다
import rootReducer from "../features/userSlice";
import { composeWithDevTools } from "redux-devtools-extension";

// persist를 적용하기 위한 설정입니다
const persistConfig = {
  key: "root", // reducer 객체에서 데이터를 저장하는 지점 설정
  storage, // 로컬 스토리지 사용
};

// 위에 정의한 config 대로 persist를 적용한 리듀서를 생성합니다
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어와 persistor를 리턴하는 함수를 export합니다
export default function configureStore() {
  const store = createStore(persistedReducer, composeWithDevTools());
  const persistor = persistStore(store);
  return { store, persistor };
}

/*
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
*/
