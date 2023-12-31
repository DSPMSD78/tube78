import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const appRouter = createBrowserRouter([
  {
    path: "/tube78",
    element: <Body />,
    children: [
      {
        path: "/tube78/",
        element: <MainContainer />,
      },
      {
        path: "/tube78/watch",
        element: <WatchPage />,
      },
      {
        path: "/tube78/demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
