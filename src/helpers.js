function choice(items){
    // to randomly select an item from an array, use Math.random function
    // Math.random()  // this returns random number between 0 - 1
   let random_index = Math.floor(Math.random() * items.length); // floor rounds down
   return items[random_index];
}

function remove(items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

// export both funtions at once
// this is named export
export {choice, remove}

// default export would be export default choice