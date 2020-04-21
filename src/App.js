import React, { Component } from 'react'

export default class App extends Component {

  state = {
    salary: 0,
    operation: {
      amount: 0,
      location: '',
      date: '',
    },

    operations: []

  }









  componentDidMount = () => {

    const salary = prompt('Income')
    this.setState({
      salary: salary
    })

  }

  setAmount = (e) => {

    this.setState({
      operation: {
        amount: e.target.value,
        location: this.state.operation.location,
        date: this.state.operation.date
      }

    })

  }

  setLocation = (e) => {
    console.log(e.target.value)
    this.setState({
      operation: {
        amount: this.state.operation.amount,
        location: e.target.value,
        date: this.state.operation.date
      }

    })

  }

  setDate = (e) => {
    console.log(e.target.value)
    this.setState({
      operation: {
        amount: this.state.operation.amount,
        location: this.state.operation.location,
        date: e.target.value
      }

    })


  }

  save = (e) => {
    e.preventDefault()

    const list = this.state.operations;
    list.push(this.state.operation)
    this.setState({
      operations: list,
      salary: this.state.salary - this.state.operation.amount,
      operation: {
        amount: 0,
        location: '',
        date: '',
      }
    })


  }







  render() {
    return (
      <div className="container">
        <h2> Your Income : {this.state.salary} </h2>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Add Transaction
  </div>
              <div className="card-body">
                <form onSubmit={this.save} >
                  <div className="form-group">
                    <label > Amount</label>
                    <input type="text" className="form-control" onChange={this.setAmount} />

                  </div>
                  <div className="form-group">
                    <label >Location</label>
                    <input type="text" className="form-control" onChange={this.setLocation} />

                  </div>
                  <div className="form-group">
                    <label > Date</label>
                    <input type="text" className="form-control" onChange={this.setDate} />

                  </div>

                  <button type="submit" className="btn btn-danger">Submit</button>

                </form>


              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Show All Transactions
  </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.operations.map((item, index) =>
                      < tr key={index} >
                        <td>{item.amount}</td>
                        <td>{item.location}</td>
                        <td>{item.date}</td>
                        <td>
                          <button className="btn btn-danger">Edit</button>
                        </td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>


                    )

                    }
                  </tbody>
                </table>


              </div>
            </div>
          </div>

        </div>

      </div >
    )
  }
}



