import { type NextPage } from "next";
import Footer from "../modules/footer";
import Nav from "../modules/nav";
import Hero from "../modules/hero";

const Home: NextPage = () => {
  return (
<div>
  <Nav/>
  <Hero/>
  <Footer/>
</div>
  );
};

export default Home;
