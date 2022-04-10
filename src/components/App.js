import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    penalties: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const penalties = [
      {
        name: "VAZ 2107",
        number: "30Z444ZZ",
        address: "Samarkand",
        payment: 5,
      },
      {
        name: "Nexia 2",
        number: "50X777XX",
        address: "Fergana",
        payment: 4,
      },
      {
        name: "Cobalt",
        number: "80B888BB",
        address: "Bukhara",
        payment: 7,
      },
      {
        name: "Gentra",
        number: "01Z712ZB",
        address: "Tashkent",
        payment: 7,
      },
    ];
    this.setState({
      penalties,
    });
  }

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisibility: false,
      currentData: "",
    });
  };

  removePenalty = (index) => {
    const penalties = this.state.penalties;
    penalties.splice(index, 1);
    this.setState({
      penalties,
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
          name: "none",
          number: "",
          address: "none",
          payment: 0,
        };
    if (type === "value") {
      if (isInc) newCurrentData.payment++;
      else if (newCurrentData.payment < 1) newCurrentData.payment = 0;
      else newCurrentData.payment--;
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  saveChanges = (carName, carNumber, carAddress) => {
    const { penalties, currentData } = this.state;
    currentData.name = carName[0].toUpperCase() + carName.slice(1);
    currentData.number = carNumber.split(" ");
    currentData.address = carAddress[0].toUpperCase() + carAddress.slice(1);
    if (currentData.number && currentData.payment) {
      penalties.push(currentData);
      this.setState({
        penalties,
        modalVisibility: false,
      });
    }
  };

  render() {
    const { penalties, modalVisibility, currentData } = this.state;
    return (
      <div className="penalties">
        <div className="container">
          <h1 className="text-center my-3">💰 CAR Penalty</h1>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary my-2" onClick={this.openModal}>
                Add a Penalty
              </button>
              {modalVisibility ? (
                <Modal
                  closeModal={this.closeModal}
                  currentData={currentData}
                  changeCurrentData={this.changeCurrentData}
                  saveChanges={this.saveChanges}
                  clearCurrentData={this.clearCurrentData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Address</th>
                    <th>Payment</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {penalties.map((penalty, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{penalty.name}</td>
                      <td>{penalty.number}</td>
                      <td>{penalty.address}</td>
                      <td>
                        <span className="badge badge-primary">
                          {penalty.payment * 270000} so'm
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.removePenalty(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
