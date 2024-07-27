// ************************ Module Pattern **************************


// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items

function createCollection(){
    let items = [];

    function addItem(item){
        items.push(item)
        console.log(`Added: ${item}`);
    }

    function removeItem(item){
        const index = items.indexOf(item)
        if (index > -1){
            items.splice(index,1)
            console.log(`Removed: ${item}`);
        }
        else{
            console.log(`Item not found: ${item}`);
        }
    }

    function listItems(){
        console.log('Current items:', items);
    }

    return {
        addItem,
        removeItem,
        listItems,
    }
}

// Create an item manager instance

const itemManager = createCollection();

itemManager.addItem('Apple')  // Outputs: Added: Apple
itemManager.addItem('Banana'); // Outputs: Added: Banana
itemManager.listItems();      // Outputs: Current items: [ 'Apple', 'Banana' ]
itemManager.removeItem('Apple'); // Outputs: Removed: Apple
itemManager.listItems();      // Outputs: Current items: [ 'Banana' ]
itemManager.removeItem('Grapes'); // Outputs: Item not found: Grapes