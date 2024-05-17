export interface Account {
    email: string;
    password: string;
    nickname: string | undefined;
    color:'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'grey';
    proxy: AccountProxy;
}

export interface AccountProxy {
    url: string;
    port: number;
    password: string;
    username: string;
}