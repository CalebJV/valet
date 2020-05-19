import React, { Component } from 'react';

import { getCars } from './../services/fakeCarService';

export default class Valet extends Component {
  state = {};

  componentDidMount() {
    getCars();
  }

  render() {
    return <div></div>;
  }
}
