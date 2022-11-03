let pharmacist_role ={prescribe:'write prescriptions'}
let collect_role ={collect:'collect cash'}
let returnCash = {returnCash:'collect cash'}
let manage_role ={manage:()=>console.log('manage employees')}

function mixin (...args){
    return Object.assign({},...args)
}
let cashier =mixin(collect_role,returnCash)
let manager=mixin(pharmacist_role)

console.log(pharmacist);
