import React, { Component } from "react";

class Modal extends Component {
  cancelBtn = () => {
    this.props.closeModal();
  };

  changeCurrentData(type, isInc) {
    this.props.changeCurrentData(type, isInc);
  }

  saveChanges = () => {
    let carName = document.getElementById("carName").value.toLowerCase();
    let carNumber = document.getElementById("carNumber").value.toUpperCase();
    let carAddress = document.getElementById("carAddress").value.toLowerCase();
    this.props.saveChanges(carName, carNumber, carAddress);
    this.props.clearCurrentData();
  };

  render() {
    const { currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header">Add Penalty Card</div>
        <div className="card-body">
          <div className="row text-center justify-content-between">
            <div className="col-5">
              <h5>Car's a Name</h5>
              <form>
                <div class="form-group d-flex justify-content-center">
                  <input
                    type="text"
                    class="form-control"
                    id="carName"
                    placeholder="Gentra ❤"
                    autocomplete="off"
                  />
                </div>
              </form>
            </div>
            <div className="col-5">
              <h5>Car's a Number</h5>
              <form>
                <div class="form-group d-flex justify-content-center">
                  <input
                    type="text"
                    class="form-control"
                    id="carNumber"
                    placeholder="30A777AA ❤"
                    autocomplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-5">
              <h5>Car's a Address</h5>
              <form>
                <div class="form-group d-flex justify-content-center">
                  <input
                    type="text"
                    class="form-control"
                    id="carAddress"
                    placeholder="Samarkand ❤"
                    autocomplete="off"
                  />
                </div>
              </form>
            </div>
            <div className="col-2">
              <img
                src="https://avtotexxizmat.uz/uploads/car-color/KK/KK/K0/1635153004.png"
                alt="CarPicture"
                className="img-fluid"
              />
            </div>
            <div className="col-5">
              <h5>Penalty Price</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeCurrentData("value", false)}
                >
                  -
                </button>
                <button className="btn">
                  💰 {currentData ? currentData.payment + " aklad" : 0} 🧐
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => this.changeCurrentData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning mr-2" onClick={this.cancelBtn}>
            Cancel
          </button>
          <button className="btn btn-success mr-2" onClick={this.saveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
