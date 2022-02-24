import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";

import landingData from "json/landingPage.json";
import MostPick from "parts/MostPick";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingData.hero} />
        <MostPick
          refMostPicked={this.refMostPicked}
          data={landingData.mostPicked}
        />
        <Categories data={landingData.categories} />
        <Testimony data={landingData.testimonial} />
      </>
    );
  }
}
