/*
* Вспомогательные классы для валидирования входных данных (операций) и для отображения.
*/
import Ajv from "ajv";
import GolosSchema from "./opschemas";

import operations from "golos-classic-js/lib/broadcast/operations";

const ROLES_PRIORITY = {
    "owner" : 0,
    "active" : 1,
    "posting" : 2,
    "memo" : 3
}

function sort_roles(roles) {
    return roles.sort((a,b) => {
        return ROLES_PRIORITY[b] - ROLES_PRIORITY[a];
    })
}

const ajv = new Ajv({schemas: GolosSchema, verbose: true});
const validate = ajv.getSchema("/golos/transaction");

export class Transaction {
    constructor(json) {
        if(!validate(json)) {
            
            throw validate.errors;
        }
        this.raw_transaction = [...json];
        this.ops = [];
        this.readOps();
    }

    /**
     * Вернуть минимальную, требуемую роль
     */
    get required_wif() {
        if(this.ops.length == 0) {
            return null;
        }
        const temp = [];
        for(let op of this.ops) {
            temp.push(op.role);
        }
        return sort_roles(temp)[0];
    }

    readOps() {
        for(let opTuple of this.raw_transaction) {
            this.ops.push(new Operation(opTuple[0], opTuple[1]));
        }
    }
}

class Operation {
    constructor(name, body) {
        this.name = name;
        this.body = body;

        for(let op of operations) {
            if(op.operation === this.name) {
                this.roles = sort_roles(op.roles);
            }
        }
    }

    get role() {
        //Вернуть самый слабый ключ 
        return this.roles[0];
    }
    
}

//////////////////////////

function test_roles() {
    console.log("TEST", sort_roles(["active", "owner", "posting"]))
    console.log("TEST", sort_roles(["posting", "active", "owner"]))
    console.log("TEST", sort_roles(["active", "owner"]))
}

//test_roles();