import queryString from "query-string";
import React, { Component } from 'react';
import './App.css';

import TransactionView from "./TransactionView";

import "bootstrap/dist/css/bootstrap.css"
import { Transaction } from "../service/operation";
import ErrorsView from "./ErrorsView";

const ErrorMessage = (props) => {
    return (
        <div className="mt-5 mb-5 alert alert-danger" role="alert">
            <h4>{props.error}</h4>
        </div>
    );
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transaction: null,
            errors: null,
            error: null
        }
    }

    componentDidMount() {
        const params = queryString.parse(window.location.search);
        let tr = params["tr"];
        if (!tr) {
            console.log("Не найден URL параметр tr");
            this.setState({ error: "Вызов без параметров" });
            return;
        }

        try {
            //Пробуем распарсить json
            let json = null;
            try {
                json = JSON.parse(tr);
            } catch (error) {
                console.log("not valid json", tr);
                this.setState({ error: "Переданная транзакция не является валидным JSON" });
                return;
            }
            //Проверка транзакции на валидность
            const transaction = new Transaction(json);
            this.setState({ transaction });
        } catch (errors) {
            //обнаружены ошибки
            console.log("found errors", errors)
            this.setState({ errors });
        }
    }

    render() {

        let content = null;
        if (this.state.transaction) {
            content = <TransactionView transaction={this.state.transaction} />
        } else if (this.state.error) {
            content = <ErrorMessage error={this.state.error} />
        } else if (this.state.errors) {
            content = <ErrorsView errors={this.state.errors} />
        }

        return (
            <div className="container App">
                {<div className="row">
                    <div className="col-sm-12">
                        <nav className="navbar navbar-light " >
                            <div className="navbar-brand">
                                <a className="navbar-brand" href="/"><h3>Писарь</h3></a>
                                <br /><small>Подпись транзакций GOLOS
                                <a rel="noopener noreferrer" target="_blank" href="http://golos.io/@ropox/sign">&nbsp;<span className="rounded-circle bg-info text-white font-weight-bold">&nbsp;?&nbsp;</span></a></small>
                            </div>
                        </nav>
                    </div>
        </div>}
                <div className="row">
                    <div className="col-sm-12">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
