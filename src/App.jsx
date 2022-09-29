import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store";
import { HashRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <HashRouter >
          <AppRouter />
        </HashRouter>
      </Provider>
    </>
  );
};
