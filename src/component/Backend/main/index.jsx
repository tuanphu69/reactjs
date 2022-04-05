import React from "react";
import Header from "./header"
import Contents from "./content"


// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';

export default function Backend() {
  return (
    <div>
      <div className="main-content">
          <Header/>
          <Contents/>
      </div>
    </div>
  );
}
