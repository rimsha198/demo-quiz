function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
  }
  
  getItems(["banana", "apple"], "pear", "orange")
  //function getItems(fruitList, ...args, favoriteFruit) {


    //SyntaxError: Rest parameter must be last formal parameter