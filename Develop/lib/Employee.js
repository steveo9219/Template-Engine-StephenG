// TODO: Write code to define and export the Employee class
fs = require("fs");
const questions = [
	// Question for project title section
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
	// Question for Project Description section
	{
		type: "input",
		name: "id",
		message: "What is your id?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email?",
	},
];
class Employee {
	constructor(name, id, email) {
		if (!name) {
			throw new Error("You are missing the name.");
		}
		if (!id) {
			throw new Error("You are missing the id.");
		}
		if (!email) {
			throw new Error("You are missing the email.");
		}
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName() {
		console.log("I got the name");
		return this;
	}
	getEmail() {
		console.log("I got the email");
		return this;
	}
	getRole() {
		console.log("I got the role");
		return this;
	}
}
var inquirer = require("inquirer");

inquirer
	.prompt(questions)
	//
	.then((data) => {
		console.log(data);
		fs.exports;
	});

module.exports = Employee;
