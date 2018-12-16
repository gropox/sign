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
                    <div className="col-sm-12">
                        <SignForm {...this.props} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                    <div className=" border m-2 p-2">
                        <div className="alert alert-info" role="alert">
                            <h4>Содержимое</h4>
                        </div>


                        <div className="container">
                                {this.props.transaction.ops.map((op, i) => (
                                <div className="row" key={i}>
                                    <div className="col-sm-3"><div className="font-weight-bold">Операция</div>{getOpName(op)}<div><small>{op.name}</small></div></div>
                                    <div className="col-sm-9"><div className="font-weight-bold">Детальная информация</div>{getOpDetails(op)}</div>
                                </div>
                                ))
                                }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionView
