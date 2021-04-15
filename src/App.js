import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Abouts } from "./Pages/Abouts";
import Category from "./Pages/Category";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter basename='/rea-food'>
      <Header />
      <main className="container content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={Abouts} exact />
            <Route path="/contacts" component={Contact} exact />
            <Route path='/category/:name' component = {Category}/>
            <Route path='/meal/:id' component={Recipe}/>
            <Route component={NotFound}/>
          </Switch>
      </main>
      <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
