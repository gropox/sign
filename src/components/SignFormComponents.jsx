import React from 'react'
import {SIGN_TYPE} from "../service/sign";
import {getCurrentSelectedNode, setCurrentSelectedNode, NODES} from "../service/sign";

const NodeSelector = (props) => {

    const current_ws = getCurrentSelectedNode();

    return (
        <div className="form-group  input-group-sm">
            <label for="selectNode">Нода</label>
            <select className="form-control" id="selectNode" onChange={(v => setCurrentSelectedNode(v.target.value))}>
                {Object.keys(NODES).map(ws => (
                    <option value={ws}  selected={ws === current_ws}>{NODES[ws]}</option>
                ))}
            </select>                  
        </div>
    );
}

function translate_role(role) {
    console.log("translate role", role);
    switch(role) {
        case "owner": return "приватный ключ владельца"; 
        case "active": return "приватный, активный ключ"; 
        case "posting": return "приватный, постинг ключ"; 
        case "memo": return "приватный, ключ для заметок"; 
        default:
            return null;
    }
}

export const WifInput = (props) => {
    const wif_class = (props.wif_error?" is-invalid":"");
    return (
        <input id={props.id} name={props.id}
            value={props.wif}
            onChange={(ev) => props.onChange("wif", ev.target.value)}
            type="password"
            className={"form-control" + wif_class}
            aria-describedby="wif-help"
            required />
    );
}


export const TabButton = (props) => {
    const { active } = props;
    const active_class = active ? " active " : "";
    return (
        <li className="nav-item">
            <button className={"btn nav-link " + active_class} onClick={props.selectForm}>{props.label}</button>
        </li>
    )
}

export const SignButton = (props) => {
    return (
        <div className="form-group input-group-sm">
            <button type="button" id="sign-botton" className="btn btn-primary" onClick={props.onSign}>Отправить</button>
        </div>
    )
}

export const FormWif = (props) => {
    const {transaction, form_class, wif_error} = props;
    return (
        <form id="sign-form" className={form_class}>
            <NodeSelector />
            <div className="form-group input-group-sm">
                <label htmlFor="wif">Приватный ключ</label>

                <WifInput id="wif" {...props} />

                <small id="wif-help" className="form-text text-muted">Для подписи транзакции требуется как минимум <strong>{translate_role(transaction.required_wif)}</strong></small>
                <div className="invalid-feedback">{wif_error}</div>
            </div>
            <SignButton  {...props} />
        </form>
    )
}

export const FormAccountAndPasswort = (props) => {
    const {form_class, onChange, account, account_error, wif_error} = props;
    const account_class = (account_error?" is-invalid":"");
    return (
        <form id="sign-form" className={form_class}>
            <NodeSelector />
            <div className="form-group input-group-sm">
                <label htmlFor="account">Имя пользователя</label>

                <input
                    id="account"
                    name="account"
                    value={account}
                    onChange={(ev) => onChange("account", ev.target.value)}
                    type="text"
                    className={"form-control" + account_class}
                    placeholder="Аккаунт в блокчейне golos"
                    required />

                <div className="invalid-feedback">{account_error}</div>
            </div>
            <div className="form-group input-group-sm">
                <label htmlFor="wif">Пароль</label>

                <WifInput id="password" {...props} />

                <div className="invalid-feedback">{wif_error}</div>
            </div>

            <SignButton  {...props}/>
        </form>
    )
}

export const FormSelector = (props) => {

    switch (props.sign_type) {
        case SIGN_TYPE.WIF:
            return <FormWif {...props} />;
        default:
            return <FormAccountAndPasswort {...props} />;
    }
}

