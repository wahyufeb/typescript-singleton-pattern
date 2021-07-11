import SingletonApp from "./SingletonApp";

const singletonApp = new SingletonApp()
console.log("== Order Service ==")
console.log(singletonApp.saveAction().saveOrder)
console.log("===================")


console.log("== Detail Order Service ==")
console.log(singletonApp.saveAction().saveDetailOrder)
console.log("==========================")