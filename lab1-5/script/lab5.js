var arrRandom = [];

for (var i = 0; i < 2000; i++) {
    arrRandom.push(Math.floor(Math.random() * 10000));
}


function findMin(arr) {
    var m = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < m) m = arr[i];
    }
    return m;
}

function findMax(arr) {
    var m = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > m) m = arr[i];
    }
    return m;
}

function findMiddle(arr) {
    nums = arr.sort();
    if (nums.length % 2 === 0) {
        return ((nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2);
    } else {
        return nums[parseInt(nums.length / 2)];
    }
}

console.log(findMax(arrRandom));
console.log(findMin(arrRandom));
console.log(findMiddle(arrRandom));


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];

    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quickSort(arrRandom));

var tags = document.getElementsByTagName('*');


t = new Object();

for(var i = 0 ;i < tags.length;i++)
{
   if (typeof(t[tags[i].tagName]) != "undefined"){
       t[tags[i].tagName] = t[tags[i].tagName] +1;
   }
   else {
    t[tags[i].tagName] = 1;
   }
}
console.log(t);