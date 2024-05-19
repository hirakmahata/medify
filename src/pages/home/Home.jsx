import { Suspense, lazy } from "react";
import Skeleton from "../../components/skeleton/Skeleton";

const Blog = lazy(() => import("../../components/blog-news-section/Blog"));
const Caring = lazy(() => import("../../components/caring-section/Caring"));
const Families = lazy(() => import("../../components/families/Families"));
const Faq = lazy(() => import("../../components/FAQ-section/Faq"));
const Hero = lazy(() => import("../../components/hero-section/Hero"));
const News = lazy(() => import("../../components/news/News"));
const SearchBox = lazy(() => import("../../components/search-box/SearchBox"));
const Specialisation = lazy(() =>
  import("../../components/specialisation-section/Specialisation")
);
const Specialists = lazy(() =>
  import("../../components/specialists/Specialists")
);

const Home = () => {
  return (
    <Suspense fallback={<Skeleton width="100vw" length={10} />}>
      <Hero />
      <SearchBox />
      <News />
      <Specialisation />
      <Specialists />
      <Caring />
      <Blog />
      <Families />
      <Faq />
    </Suspense>
  );
};

export default Home;
