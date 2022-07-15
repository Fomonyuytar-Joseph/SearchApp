import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends Component {
   
  state= { images:[] }




   onSearchSubmit = async (term) => {
  const response =   await   unsplash.get("/search/photos", {
      params: { query: term },
     
    })
      console.log(response.data.results)

      this.setState({ images :response.data.results} )

    

   
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList/>
      </div>
    );
  }
}

export default App;
