            var total = 0;
            var weekly = 0;
            var fortnightly = 0;
            var quarterly = 0;
            function addExpense() {
                // Get the values from the form inputs
                var category = document.getElementById("category").value;
                var frequency = document.getElementById("frequency").value;
                var amount = parseFloat(document.getElementById("amount").value);
            
                //Add a new row to the expense list
                var expenseList = document.getElementById("expense-list");
                var row = document.createElement("tr");
                var deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "X";
                deleteBtn.className = "bg-red";
                row.innerHTML = "<td>" + category + "</td><td>" + frequency + "</td><td>" + amount + "</td><td>";
                row.appendChild(deleteBtn);
                expenseList.appendChild(row);

//update the total and other figures
total += amount;
document.getElementById("total").innerHTML = total;
if(frequency === "weekly"){
    weekly += amount;
    document.getElementById("weekly").innerHTML = weekly;
    fortnightly = weekly * 2;
    document.getElementById("fortnightly").innerHTML = fortnightly;
    quarterly = fortnightly * 6;
    document.getElementById("quarterly").innerHTML = quarterly;
}else if(frequency === "fortnightly"){
    fortnightly += amount;
    document.getElementById("fortnightly").innerHTML = fortnightly;
    weekly = fortnightly / 2;
    document.getElementById("weekly").innerHTML = weekly;
    quarterly = fortnightly * 3;
    document.getElementById("quarterly").innerHTML = quarterly;
}else if(frequency === "quarterly"){
    quarterly += amount;
    document.getElementById("quarterly").innerHTML = quarterly;
    fortnightly = quarterly / 3;
    document.getElementById("fortnightly").innerHTML = fortnightly;
    weekly = fortnightly / 2;
    document.getElementById("weekly").innerHTML = weekly;
}
    
              //attach a click event listener to the delete button
              deleteBtn.addEventListener("click", function() {
                //remove the row
                expenseList.removeChild(row);
                //update the total
                total -= amount;
                document.getElementById("total").innerHTML = total;
                if(frequency === "weekly"){
                    weekly -= amount;
                    document.getElementById("weekly").innerHTML = weekly;
                }else if(frequency === "fortnightly"){
                    fortnightly -= amount;
                    document.getElementById("fortnightly").innerHTML = fortnightly;
                }else if(frequency === "quarterly"){
                    quarterly -= amount;
                    document.getElementById("quarterly").innerHTML = quarterly;
                }
              });

              //clear the form
              document.getElementById("category").value = "";
              document.getElementById("amount").value = "";
            
        }
