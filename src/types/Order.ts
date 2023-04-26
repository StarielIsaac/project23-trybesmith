export interface Order { 
  id?: number,
  userId: number,
}

// representa um objeto com o ids dos produtos associados a estes.
export interface OrderWithIdAssociates { 
  id?: number,
  userId: number,
  productsIds: number[],
}

export interface CreateNewOrder { 
  productsIds: number[],
}