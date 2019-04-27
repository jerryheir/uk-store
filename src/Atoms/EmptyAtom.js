import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ButtonAtom } from './ButtonAtom';

export default class EmptyAtom extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
            {this.props.text}
            </div>
            <Link to="/">
                <ButtonAtom>
                    Back to Home
                </ButtonAtom>
            </Link>
        </div> 
      </div>
    )
  }
}
