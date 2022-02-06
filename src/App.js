import React from 'react';
import styles from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Messager from './Components/Messager/Messager';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessager: false
    }

    this.handleMessager = this.handleMessager.bind(this);
  }

  handleMessager(status) {
    this.setState({ showMessager: status });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header handleMessager={this.handleMessager} />
          {this.state.showMessager && <Messager handleMessager={this.handleMessager} />}
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
