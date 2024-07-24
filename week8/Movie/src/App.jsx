import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlaying/NowPlaying";
import TopRatedPage from "./pages/TopRated";
import UpComing from "./pages/Upcoming";
import MovieDetail from "./pages/DetailPage/MovieDetail";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/LoginPage/Login";
import Sidebar from "./component/Sidebar/Sidebar";
function App() {
  const pages = [
    { path: "/", component: MainPage },
    { path: "/popular", component: PopularPage },
    { path: "/nowPlaying", component: NowPlayingPage },
    { path: "/topRated", component: TopRatedPage },
    { path: "/upComing", component: UpComing },
    { path: "/movie/:id", component: MovieDetail },
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/sidebar", component: Sidebar },
  ];

  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <>
                  <Navbar />
                  <page.component />
                  <Footer />
                </>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
