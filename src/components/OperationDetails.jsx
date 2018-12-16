import React from 'react'

export function getOpDetails(op) {
    switch(op.name) {
        case "transfer":
            return <div><strong>От</strong> {op.body.from}, <strong>Кому</strong> {op.body.to}, <strong>Сумма</strong> {op.body.amount}</div>;
        default:
            return <pre>{JSON.stringify(op.body, null, 2)}</pre>;
    }
}

const OP_TRANSLATIONS = {
    vote: "Апвоут", 
    comment: "Пост/Комментарий", 

    transfer: "Перевод", 
    transfer_to_vesting: "Перевод в СГ", 
    withdraw_vesting: "Понижение СГ", 

    limit_order_create: "Создать ордер", 
    limit_order_cancel: "Отменить ордер", 

    feed_publish: "Опубликовать фид", 
    convert: "Конвертировать GBG в GOLOS", 

    account_create: "Создать аккаунт", 
    account_update: "Обновить аккаунт", 

    witness_update: "Обновить делегата", 
    account_witness_vote: "Проголосовать за делегата", 
    account_witness_proxy: "Назначить доверенного", 

    pow: "Proof of Work", 

    custom: "custom", 

    report_over_production: "Настучать", 

    delete_comment: "Удалить пост или комментарий", 
    custom_json: "Кастомная операция", 
    comment_options: "Настроить пост/комментарий", 
    set_withdraw_vesting_route: "Установить путь понижения СГ", 
    limit_order_create2: "Создать ордер 2", 
    challenge_authority: "challenge_authority", 
    prove_authority: "prove_authority", 
    request_account_recovery: "request_account_recovery", 
    recover_account: "recover_account", 
    change_recovery_account: "change_recovery_account", 
    escrow_transfer: "escrow_transfer", 
    escrow_dispute: "escrow_dispute", 
    escrow_release: "escrow_release", 
    pow2: "Proof of Work 2", 
    escrow_approve: "escrow_approve", 
    transfer_to_savings: "Перевести в сейф", 
    transfer_from_savings: "Вывести из сейфа", 
    cancel_transfer_from_savings: "Отменить вывод из сейфа", 
    custom_binary: "Кастомная операция (бин.)", 
    decline_voting_rights: "Отказаться от голосования (необратимая операция!)", 
    reset_account: "reset_account", 
    set_reset_account: "set_reset_account", 
    delegate_vesting_shares: "delegate_vesting_shares", 
    account_create_with_delegation: "account_create_with_delegation", 
    account_metadata: "Обновить профиль", 
    proposal_create: "proposal_create", 
    proposal_update: "proposal_update", 
    proposal_delete: "proposal_delete", 
    chain_properties_update: "Обновить параметры сети", 
    break_free_referral: "Откупиться", 
    delegate_vesting_shares_with_interest: "Делегирование с отчислением процента", 
    reject_vesting_shares_delegation: "Отказаться от делегирования",   
}

export function getOpName(op) {
    let name = OP_TRANSLATIONS[op.name];
    if(!name) name = op.name;

    return <span className="label label-default">{name}</span>
}