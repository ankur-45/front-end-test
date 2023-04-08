import React, { Component } from 'react';
import { fetchQueueData } from '../mockApi';
import CustomerList from './components/CustomerList';
import SearchBar from './components/SearchBar';

// eslint-disable-next-line
import base64 from 'base-64';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      searchField: '',
      time: Date.now(),
    };
  }

  componentDidMount() {
    fetchQueueData()
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          customers: json.queueData.queue.customersToday,
        });
      });
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField } = this.state;
    let customers = [];
    for (let i = 0; i < this.state.customers.length; ++i) {
      customers.push(
        <div key={this.state.customers[i].id}>
          <div>{this.state.customers[i].customer.name}</div>
        </div>
      );
    }
    const filteredCustomers = this.state.customers.filter((customerName) =>
      customerName.customer.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
    return (
      <div>
        <SearchBar onSearchChange={this.onSearchChange} />
        <CustomerList customer={filteredCustomers} />
      </div>
    );
  }
}
