export interface AuthResponse {
    ok    : boolean,
    uid?  : String,
    name? : String,
    token?: String,
    msg?  : String
}

export interface Usuario {
    uid : String,
    name: String
}
