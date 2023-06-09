// representa um usuario
export interface User { 
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
}

export interface ObjLogin { 
  username: string,
  password?: string,
}
// representa informações de login
export interface Login { 
  id: number | undefined,
  username: string | undefined,
}