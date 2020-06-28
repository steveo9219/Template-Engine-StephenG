// TODO: Write code to define and export the Employee class
// fs = require("fs");
// const questions = [
// 	{
// 		type: "input",
// 		name: "name",
// 		message: "What is your name?",
// 	},

// 	{
// 		type: "input",
// 		name: "id",
// 		message: "What is your id?",
// 	},
// 	{
// 		type: "input",
// 		name: "email",
// 		message: "What is your email?",
// 	},
// ];
// var inquirer = require("inquirer");

// inquirer
// 	.prompt(questions)
// 	//
// 	.then((employeeData) => {
// 		console.log(employeeData);
// 	});

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
