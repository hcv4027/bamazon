var mysql = require("mysql");
var inquirer = require("inquirer");

// Create the connection information for the sql database: bamazon
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Burlbed_82",
    database: "bamazon"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    readThem();
    
  });

  //Functions reads and diosplays all items in the Bamazon Database.
  function readThem() 
  {
    console.log("Selecting all of the BAMAZON products...");
    console.log("===========================================");
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) 
    {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
      challenge_1();
    });
  };

  function challenge_1()
  {
    // Create a "Prompt" with 2 questions.
    inquirer
    .prompt([
    // Here we create a basic text prompt.
    {
        type: "input",
        message: "What is the product ID  of the item you want to purchase?",
        name: "product_ID"
    },
    {
        type: "input",
        message: "How many units would you like to purchase?",
        name: "quantity"
        }
    ]).then(function(inquirerResponse)
        {
            console.log("You chose product ID: "+ inquirerResponse.product_ID);
            console.log("Ypu want: "+inquirerResponse.quantity+ " total items.")
            buyProducts(inquirerResponse.product_ID, inquirerResponse.quantity);
        });
  };

  function buyProducts(id, quantity)
  {
    connection.query("SELECT ?, product_name FROM products"
    [
        {
            item_id: id
        }
    ],
    function(err, res) 
    {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
      
    });
  }