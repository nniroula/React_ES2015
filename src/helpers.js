function choice(items){
    // to randomly select an item from an array, use Math.random function
    // Math.random()  // this returns random number between 0 - 1
   let random_index = Math.floor(Math.random() * items.length); // floor rounds down
   return items[random_index];
}