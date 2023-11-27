//ham tính giai thừa 1 tham số n : n! = n* n-1 cho đến khi n == 1 hoặc 0
function factorial(n){
    if (n===1 || n===0){
        return 1;
    }else {
        return n * factorial(n-1);
    }

}
function bai1(){
    let inputNumber = +prompt("Nhap vao so N de tinh N giai thừa: ")
    document.write(`${inputNumber} giai thừa có kết quả là: ${factorial(inputNumber)}`)
}

//in ra 15 so chia hết cho 3 (n%3 ===0)
function bai2(){
    let array2=[]; //mang lưu các số chia hết cho 3
    let count2 = 0;
    let currentNum = 1;
    while (count2<15){
        if (currentNum%3 ===0){
            array2.push(currentNum);
            count2++;
        }
        currentNum++;
    }
document.write(`15 số đầu tiên chia hết cho 3 là :${array2}`);
}

function bai3(){
    let array3 = [1,-2,-41,5,7,67,-10,-14,442,24,-24,-46];
    let outputArr = []; //lưu các số lớn hơn 0
    for (let i = 0; i < array3.length; i++) {
        if (array3[i]>0){
            outputArr.push(array3[i]);
        }
    }
    document.write(`Mảng ban đầu có sẵn la: ${array3} <br>`);
    document.write(`Mảng các số lớn hơn 0 là: ${outputArr}`);
}