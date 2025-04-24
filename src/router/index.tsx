import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import PrivacyEn from "../pages/PrivacyEn";
import PrivacyKr from "../pages/PrivacyKr";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy/en" component={PrivacyEn} />
        <Route exact path="/privacy/kr" component={PrivacyKr} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
