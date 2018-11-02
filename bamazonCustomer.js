var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});
console.log("working")
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    // start();
  });


    // bid was high enough, so update db, let the user know, and start over
    connection.query(
      "SELECT * FROM products", function(error, results) {
        if (error) throw err;
      
            results.forEach(function(result){
                console.log(`${result.id} ${result.product_name} ${result.department_name} ${result.price} ${result.stock_quantity}`)
               

            })
            
        start();
      }
    );

    function start() {
        inquirer
          .prompt([{
            name: "productID",
            type: "input",
            message: "What's the ID of the item you would like to buy?",
            
          },
          {
            name: "quantity",
            type: "input",
            message: "How many you buying?",
            
          }]
          )
          .then(function(answer) {
            var chosenItem;
          connection.query(`UPDATE products 
           SET stock_quantity = stock_quantity -` + mysql.escape(answer.quantity) + `
           WHERE products.id = ` + mysql.escape(answer.productID),
          //  function(err,results){
            
          //   if(stock_quantity){
          //     console.log(err)

          //   }
          //   else if(!err){
          //     console.log(results)
          //   }
            
          //  }
           
           function(err, results){

              if(err &&( err.code == 'ER_DATA_OUT_OF_RANGE' || err.code == 'ER_WARN_DATA_OUT_OF_RANGE')){
                console.log("insufficient quantity")
                process.exit()
                // console.log(err.code)
                // console.log(err)
                // console.log(mysql.escape(answer.quantity))
              }
              

              else if(!err){
              connection.query( `SELECT price FROM products WHERE id =` + answer.productID,
              function(err, result){
                if(err){
                console.log(err)
                }
                else if(result){
                  // console.log((result.price)*(answer.quantity))
                  
                  console.log("thank you, your total comes to $" + result[0].price * answer.quantity)
                process.exit()
                }
              }
              )
               
              }
           }
           
           );
          });
      }
  
  