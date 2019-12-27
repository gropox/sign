/*
* Схемы операций для валидирования.
*/

/**
 * Взято из исходников голоса
 */
const known_operations = [
    "vote",
    "comment",

    "transfer",
    "transfer_to_vesting",
    "withdraw_vesting",

    "limit_order_create",
    "limit_order_cancel",

    "feed_publish",
    "convert",

    "account_create",
    "account_update",

    "witness_update",
    "account_witness_vote",
    "account_witness_proxy",

    "pow",

    "custom",

    "report_over_production",

    "delete_comment",
    "custom_json",
    "comment_options",
    "set_withdraw_vesting_route",
    "limit_order_create2",
    "challenge_authority",
    "prove_authority",
    "request_account_recovery",
    "recover_account",
    "change_recovery_account",
    "escrow_transfer",
    "escrow_dispute",
    "escrow_release",
    "pow2",
    "escrow_approve",
    "transfer_to_savings",
    "transfer_from_savings",
    "cancel_transfer_from_savings",
    "custom_binary",
    "decline_voting_rights",
    "reset_account",
    "set_reset_account",
    "delegate_vesting_shares",
    "account_create_with_delegation",
    "account_metadata",
    "proposal_create",
    "proposal_update",
    "proposal_delete",
    "chain_properties_update",
    "break_free_referral",
    "delegate_vesting_shares_with_interest",
    "reject_vesting_shares_delegation",
    "worker_request",
    "worker_request_delete",
    "worker_request_vote"

]


/**
 * Схема параметра transaction. Ожидается массив (Array) операций
 */
const transaction = {
    "$id" : "/golos/transaction",
    type: "array",
    minItems: 1,
    items: [ 
        {"$ref": "/golos/operation"}
    ]
}

/**
 * Операция 
 */
const operation = {
    "$id" : "/golos/operation",
    type: "array",
    minItems: 2, maxLength: 2,
    items: [
        {type: "string", enum: known_operations},
        {type: "object"}
    ]
}


const account = {
    "$id" : "/golos/account",
    type: "string",
    pattern: "^[a-z][-\\.a-z\\d]{2,15}[a-z\\d]$"
}

const permlink = {
    "$id" : "/golos/permlink",
    type: "string",
    pattern: "^.{1,256}$"
}

const public_key = {
    "$id" : "/golos/public_key",
    type: "string",
    pattern: "^GLS[0-9a-zA-Z]{50}$"
}

const percent = {
    "$id" : "/golos/percent",
    type: "integer",
    minimum: 0, 
    maximum: 10000
}

const asset = {
    "$id" : "/golos/asset",
    type: "string",
    pattern: "^[0-9]+\\.[0-9]{3} (GOLOS|GBG)$"
}

export default [
    //базовые типы
    transaction,
    account,
    asset,
    permlink,
    public_key,
    percent, 

    operation,
]

