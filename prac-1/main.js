data = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};

function sumArray(nums){
    let sum = 0;
    for(let i = 0; i < nums.length;i++){
        sum = sum + nums[i];
    }
    return sum;
}

function findMax(nums){
    let max = nums[0];
    for(let i = 0;i< nums.length;i++){
        if(nums[i]>max){
            max = nums[i];
        }
    }
    return max;
}

function groupByCategory(data) {
  return data.products.reduce((acc, product) => {
    const { category, name, price } = product;
    
    if (!acc[category]) {
      acc[category] = [];
    }
    
    acc[category].push({
      productName: name,
      price: price
    });
    
    return acc;
  }, {});
}


console.log(sumArray([1,2,3,4]));
console.log(findMax([1,2,3,4]));
console.log(groupByCategory(data));
