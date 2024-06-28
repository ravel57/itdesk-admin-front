export interface Instance {
  id : number
  name: string
  createdAt: Date
  validUntil: Date
  usersCount: number
  license: string
}

export interface LinkElement {
  title: string
  caption: string
  link: string
}
