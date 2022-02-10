// biến 
var fullName = 'Phan Chi Tai';
var age = 26;
alert(fullName);
alert(age);
/**
 * Gioi thieu mot so ham built-in
 * 1. Alert : 
 * 2. Console : dùng đỏe gọi các phương thức, hàm  in ra tren console
 * 3. confirm :thông báo
 * 4. Prompt : thông báo có input
 * 5. Set timeOut :chay một đoạn code sau 1 time 1 lần
 * 6. Set interval  :chay một đoạn code sau 1 time nhiều lần
 */
// Example:
// console.log(fullName);

// confirm('Xac nhan ban du tuoi!');
// prompt('xá nhan ban du tuoi');
// setTimeout(() => {
//     alert('thong bao')
// }, 1000);
// setInterval(() => {
//     console.log('đây là setInterval');
// }, 1000);

// toán tử
// 1 toán tử số học- Arithmetic (+,-,*,/,...)
// 2. Toán tử gán - Assignment
// 3. Toán tử so sánh - Comparion (>,<,==,===,...)
// 4. Toán tử logic - Logical (&& ,||)

//  Toán tử chuỗi
console.log(fullName + age);
/** 
 *  Kiểu dữ liệu:
 * -Number :số
 * -String: chuỗi
 * -Boolean: logic
 * - Underfined : không xác định
 * -Null: Rỗng
 * -Symbol: 
 * 
 * Dữ liệu phức tạp
 * - Function :hàm
 * - Object: đối tượng
 *  
*/
// Examble:
var myOject = {
    name: 'tai',
    age: 20,
    adress: 'Huế',
    MyFunction :function(){
        alert(this.name);
    }
}
var myArray =[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(myArray);
// typeof :Kiểm tra kiểu dữ liệu
console.log(typeof myOject.MyFunction)

// cộng chuỗi bản esc 6
console.log(` ${fullName}`);
console.log(myArray.join(', '));
myArray.splice(2,1,'java');
var string= myArray.join(', ');
myArray= string.split(', ');

console.log(myArray);
/*Array
    * Hàm basic
    * Hàm sử dụng tham số là function
    forEarch(); duyệt qua từng phần tử
    every(); kiểm tra phần tử khác biệt trong mảng trả về true /false
    some(); trả về một phần tử thõa mãn điều kiện cho trước
    find(); tmf kiếm trả về phần tử tìm kiếm được
    filter(); trả về mảng phần tử thỏa mãn điều kiện cho trước
    map(); trả về mảng mới dược thay đổi
    reduce(); cộng dồn giá trị vd{
       "tên mảng".reduce("hàm sử dụng", giá trị ban đầu)
       function tên hàm sử dụng(biến tích trữ, curentValue:giá trị phần tử hiện tại, indexValue, originArray: mảng ducowj gọi hàm reduce)
    }

*/
// showDate
const labelDate = document.getElementById('date');
const btnDate = document.getElementById('btn-date');

btnDate.addEventListener('click',function(){
    var date =new Date();
    var day =date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    labelDate.innerHTML=`Today is : ${day}/${month}/${year}`;
});
function run(socialType, isVerified) {
    var result;

    if(socialType=='google' ||socialType=='facebook'||(socialType=='email' && isVerified==true ))       result=true;
    else result=false; 

    return result;
}
run('email',false) ;

