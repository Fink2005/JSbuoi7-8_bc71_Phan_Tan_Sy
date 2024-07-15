function findMin(numbers) {
    if (numbers.length === 0) {
        return undefined; // Trường hợp mảng rỗng
    }
    
    let min = numbers[0]; // Giả sử phần tử đầu tiên là số nhỏ nhất
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; // Cập nhật số nhỏ nhất nếu tìm thấy số nhỏ hơn
        }
    }
    
    return min;
}

let arr = [5, 3, 8, 1, 4];
console.log("Số nhỏ nhất trong mảng là:", findMin(arr)); // Kết quả: Số nhỏ nhất trong mảng là: 1



// 5 

document.getElementById("Even").onclick = function() {
    
}