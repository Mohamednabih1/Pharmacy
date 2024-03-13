class User {
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.email = data.email
    this.role = data.role
    this.password = data.password
    this.orders = data.orders
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.__v = data.__v
  }
}
