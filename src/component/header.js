import React, { Component } from 'react';
import styles from './header.module.scss';

class Header extends Component {
  render() {
    return <header className={styles.heyo}>{this.props.children}</header>;
  }
}

export default Header;
