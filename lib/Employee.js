class Employee {
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
getName() {
    return this.name 
}
getEmail() {
    return this.email 
}
getId() {
    return this.id 
}
getRoll() {
    return 'Employee'
}

}

module.exports = Employee 