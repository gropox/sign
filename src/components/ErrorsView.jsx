import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorsView extends Component {
    static propTypes = {
        errors: PropTypes.arrayOf(Object).isRequired
    }

    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                <h4>Полученная на подпись транзакция содержит ошибки</h4>
                </div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Тип ошибки</th>
                            <th>Место в данных</th>
                            <th>Схема</th>
                            <th>Сообщение</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.errors.map((e, i) => <tr key={i}>
                        <td>{e.keyword}</td>
                        <td>{e.dataPath}</td>
                        <td>{e.schemaPath}</td>
                        <td>{e.message}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ErrorsView
