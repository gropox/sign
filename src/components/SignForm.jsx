import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transaction } from "../service/operation";
import signandsend, {SIGN_TYPE, checkAccount} from "../service/sign";
import SignErrorsView from './SignErrorsView';
import MediaQuery from 'react-responsive';

import {FormSelector} from "./SignFormComponents";
import {FaKey, FaUser} from "react-icons/fa";

export class SignForm extends Component {

    static propTypes = {
        transaction: PropTypes.instanceOf(Transaction).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            wif: "",
            account: props.user || "",
            error: null,
            result: null,
            sign_type: SIGN_TYPE.PASSWORD,
            account_error : null,
            sending: false,
            redirect: null,
        }
    }

    /**
     * Собственно отправка транзакции
     */
    send() {
        signandsend(this.props.transaction, this.state.sign_type, this.state.account, this.state.wif)
            .then(result => this.onSuccess(result))
            .catch(error => this.setState({ result: null, error, account_error: null, sending: false }));
        this.setState({sending:true, error: null, result: null});
    }

    onSuccess(result) {
        this.setState({ result, error: null, account_error: null, sending: false })
        this.redirect();
    }

    redirect() {
        if(!this.props.redirect) {
            return;
        }

        setTimeout(() => {window.location = this.props.redirect}, 5 * 1000);
    }

    onSign() {
        //Валидация форм.
        switch(this.state.sign_type) {
            case SIGN_TYPE.PASSWORD:
                    let wif_error = null;
                    if(!this.state.wif) {
                        wif_error = "Пароль обязателен";
                    }

                    checkAccount(this.state.account).then(account_error => {
                    if(account_error || wif_error) {
                        this.setState({account_error, wif_error});
                    } else {
                        //При отсутствии ошибок оправить транзакцию
                        this.send();
                    }
                }).catch(error => {
                    console.error("Ошибка проверки аккаунта");
                    this.setState({account_error: "Не получилось проверить аккаунт"});
                })

                break;
            default:
                if(!this.state.wif) {
                    this.setState({wif_error: "Приватный ключ обязателен"})
                    return;
                }
                //При отсутствии ошибок оправить транзакцию
                this.send();
        }
    }

    onChange(key, value) {
        console.log("onChange", key, value)
        this.setState({[key]:value, wif_error:null, account_error:null});
    }

    render() {
        const {nowif, redirect} = this.props;
        let form_class = "needs-validation";

        const TabButton = (props) => {
            const { sign_type } = props;
            const active = this.state.sign_type === sign_type ? " active " : "";
            return (<li className="nav-item"><button  type="button" className={"btn btn-block nav-link " + active} onClick={() => this.setState({ sign_type })}>{props.label}</button></li>)
        }

        const BottomToggler = (props) => {
            if(nowif) {
                const is_pass = this.state.sign_type === SIGN_TYPE.PASSWORD;
                const icon = is_pass?<FaKey />:<FaUser />;
                const sign_type =  is_pass?SIGN_TYPE.WIF:SIGN_TYPE.PASSWORD;
                const title = is_pass?"Подпись ключом":"Подпись паролем";
                return <button type="button" title={title} 
                    className="btn-outline-primary float-right btn btn-sm btn-primary" 
                    onClick={() => this.setState({ sign_type })}>{icon}</button>;
            }
        }

        return (
            <div className="clearfix border p-2 m-2">
                {!nowif && <div className=" mb-3">
                
                <MediaQuery minWidth={425}>
                    <ul className="nav nav-tabs">
                        <TabButton label="Подпись паролем" sign_type={SIGN_TYPE.PASSWORD} />
                        <TabButton label="Подпись ключом" sign_type={SIGN_TYPE.WIF} />
                    </ul>
                </MediaQuery>
                <MediaQuery maxWidth={420}>
                    <ul className="nav nav-pills nav-justified">
                        <TabButton label="Подпись паролем" sign_type={SIGN_TYPE.PASSWORD} />
                        <TabButton label="Подпись ключем" sign_type={SIGN_TYPE.WIF} />
                    </ul>
                </MediaQuery>
                
                </div>}
                
                {(this.state.error || this.state.result) && <SignErrorsView error={this.state.error} result={this.state.result} redirect={redirect} />}
                {this.state.sending && <div className={"mt-5 mb-5 alert alert-warning"} role="alert">
                    <h4>Отправка...</h4>
                    </div>
                }

                <FormSelector 
                    onChange={(key,value) => this.onChange(key, value)}
                    onSign={() => this.onSign()}
                    form_class={form_class}
                    {...this.state}
                    {...this.props}
                />
                <BottomToggler />
            </div>
        )
    }
}

export default SignForm
