import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utills/store";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      // {
      //   path: "demo",
      //   element: (
      //     <>
      //       <Demo />
      //       <Demo2 />
      //     </>
      //   ),
      // },
    ],
  },
]);


function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
         <RouterProvider router={appRouter} />
        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
