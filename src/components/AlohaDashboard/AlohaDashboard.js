import React from "react";
import Aloha from "../Aloha/Aloha";

class AlohaDashboard extends React.Component {
  render() {
    return (
      <>
        <Aloha name="Alex" country="USA" />
        <Aloha name="Julia" country="Australia" />
        <Aloha name="Masha" country="Ukraine" />
      </>
    );
  }
}

export default AlohaDashboard;
