import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ERROR_DESC = {
    "Expected version": "Вероятно введенный ключ не является приватным ключем, неверный формат, пропущенный знак",
    "3020100": "Введенный ключ либо недостаточного уровня либо отсутствует в ауторити пользователя, неверный пароль",
    "2020000": "Недостаточно средств на счету пользователя",
    "3080000": "Повторная транзакция с такими же параметрами в блоке",
    "2030000": "Нельзя в транзакции комбинировать операции требующие ключи разного уровня",
    "1020400": "Неверное переданное значение",
    "4020100": "Значение находится вне заданных пределов",
    "3010000": "Ошибочная операция в транзакции",
}

function getDesc(msg) {
    for(let pattern in ERROR_DESC) {
        if(msg.match(pattern)) {
            return ERROR_DESC[pattern];
        }
    }
    return null;
}

export class SignErrorsView extends Component {
    static propTypes = {
        error: PropTypes.object,
        result: PropTypes.object,
        redirect: PropTypes.string,
    }

    extractErrorMessage() {
        const error = this.props.error;
        console.log("error", error);
        let ret = [<h4 key="head">Ошибка отправки транзакции</h4>];
        if(error.message) {
            let arr = error.message.split("\n");
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] && !arr[i].match(/for the full error payload/)) {
                    ret.push(<p key="error-text" className="mb-0">{arr[i]}</p>);
                    const desc = getDesc(arr[i]);
                    if(desc) {
                        ret.push(<small key="error-desc" className="mb-0">{desc}</small>);
                    }                    
                }
            }
        }

        return ret;
    }

    extractUsefulInfos() {
        console.log("ret", this.props.result);
        return <div>
            <h4>Отправлено!</h4>
                <p className="mb-0">Номер блока: {this.props.result.block_num}</p>
                <p className="mb-0">ID транзакции: {this.props.result.id}</p>
                {this.props.redirect && <p className="mt-2">Вы будете автоматически перенаправлены на адрес <strong>{this.props.redirect}</strong>...</p>
                }
            </div>;
    }

    render() {
        const isError = !!this.props.error;
        const alert = isError? "danger" : "success"
        const message = isError?this.extractErrorMessage():this.extractUsefulInfos();
        return (
            <div className={"mt-5 mb-5 alert alert-"+ alert} role="alert">
                {message}
            </div>
        )
    }
}

export default SignErrorsView
