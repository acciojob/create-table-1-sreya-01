function insert_Row() {
    //Write your code here
	
    // Create a new row
    const newRow = document.createElement("tr");
    
    // Create the left cell and set its content
    const leftCell = document.createElement("td");
    leftCell.textContent = "New Cell1";
    
    // Create the right cell and set its content
    const rightCell = document.createElement("td");
    rightCell.textContent = "New Cell2";
    
    // Append cells to the new row
    newRow.appendChild(leftCell);
    newRow.appendChild(rightCell);
    
    // Append the new row to the table
    const table = document.getElementById("sampleTable");
	table.insertBefore(newRow, table.rows[0]);
	

}
