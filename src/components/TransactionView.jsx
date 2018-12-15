import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transaction } from "../service/operation";
import SignForm from './SignForm';
import {getOpDetails, getOpName} from "./OperationDetails";

export class TransactionView extends Component {
    static propTypes = {
        transaction: PropTypes.instanceOf(Transaction).isRequired
    }

    constructor(props) {
        super(props);
        this.status = {

        }
    }

    render() {

        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        <SignForm transaction={this.props.transaction} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className=" border m-2 p-2">
                        <div className="alert alert-info" role="alert">
                            <h4>Содержимое</h4>
                        </div>


                        <table className="table table-sm text-left">
                            <thead>
                                <tr>
                                    <th>Операция</th>
                                    <th>Дополнительная информация</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.transaction.ops.map((op, i) => (
                                    <tr key={i}>
                                        <td>{getOpName(op)}</td>
                                        <td>{getOpDetails(op)}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionView
