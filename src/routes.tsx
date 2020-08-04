import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </Router>
  );
};

export default Routes;
