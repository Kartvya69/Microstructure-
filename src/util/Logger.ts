import { Account } from '../interface/Account'
import { Webhook } from './Webhook'
import color from 'colorts'

function getAccountNickname(account?: Account):string{
    return account?.nickname? `[${color(account.nickname).stylize(account.color || 'white')}]`:''
}

export function log(title: string, message: string, type?: 'log' | 'warn' | 'error',account?:Account) {
    const currentTime = new Date().toLocaleString()

    let str = ''

    switch (type) {
        case 'warn':
            str = `[${currentTime}] [PID: ${process.pid}] ${getAccountNickname(account)} [WARN] [${title}] ${message}`
            console.warn(str)
            break

        case 'error':
            str = `[${currentTime}] [PID: ${process.pid}] ${getAccountNickname(account)} [ERROR] [${title}] ${message}`
            console.error(str)
            break

        default:
            str = `[${currentTime}] [PID: ${process.pid}] ${getAccountNickname(account)} [LOG] [${title}] ${message}`
            console.log(str)
            break
    }

    if (str) Webhook(str)
}