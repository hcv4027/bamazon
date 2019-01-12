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
      //connection.end();
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
            console.log("You want to purchase: "+inquirerResponse.quantity+ " total items.")
            buyProducts(inquirerResponse.product_ID, inquirerResponse.quantity);
        });
  };

  //This function checks the bamazon stock inventory to see if the customer's order can be filled.
  //if the quantity being ordered is more than what the stock invemntory has available, the customer
  //is shown a message to let them know. Otherwise, the order is filled and the cost is calculated.
  function buyProducts(id, quantity)
  {
    connection.query("SELECT * FROM products WHERE item_id = "+id,
    function(err, res) 
    {
      if (err) throw err;
      if(quantity > res[0].stock_quantity)
      {
        console.log("Quantity Requested: "+quantity);
        console.log("Quantity In Stock: "+res[0].stock_quantity);
        console.log("SORRY! We don't have enough to fill your order");
        connection.end();
      }
      else
      {
        var inventory = parseInt(res[0].stock_quantity) - quantity;
        var newid = res[0].item_id;
        var newname = res[0].product_name;
        console.log("Product name: "+newname+ " , Product ID: "+newid);

        console.log("Stock Inventory BEFORE your Purchase: "+res[0].stock_quantity);
        console.log("Units you are purchasing: "+quantity);
        console.log("Stock Inventory AFTER your Purchase: "+inventory);
        updateQuantity(res[0].stock_quantity, newid, inventory );
        priceIt(quantity, res[0].price);
      }      
    });
  };

  //This function updates the inventory within the bamazon database.
  function updateQuantity(stock_qty, id, qty)
  {
    
    connection.query("UPDATE products SET stock_quantity = "+ qty + " WHERE item_id = "+id,
    function(err, res2) 
    {
      if (err) throw err;
      console.log("Updated stock inventory quantity: " +qty);
      connection.end();
    });
  };

  //This function calculates te price of the purchase the user is making and displays it to the screen.
  function priceIt(qty, cost)
  {
    var total = (parseFloat(cost) * qty);
    console.log("Your Total Cost is: $"+total.toFixed(2));
  };
  
  