/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    let result = []
    let can1 = 0
    let can2 = nums.length - 1

    for (let p = nums.length - 1; p >= 0; p--) {
        if (Math.abs(nums[can1]) > Math.abs(nums[can2])) {
            result[p] = nums[can1] * nums[can1]
            can1++;
        } else {
            result[p] = nums[can2] * nums[can2]
            can2--;
        }
    }
    return result
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
    let rs = {...arr}
    let lengths = arr.length
    let indexRs = 0
    for (let i = 0; i < lengths; i++) {
        if (lengths < i + 1) break
        arr[i] = rs[indexRs]
        if (rs[indexRs] === 0) {
            if (lengths < i + 2) break
            arr[i + 1] = 0
            i += 1
        }
        indexRs += 1
    }
};

var merge = function (nums1, m, nums2, n) {
    //! Ý tưởng: tạo 3 con trỏ
    /*
        ! i: con trỏ từ phần tử đầu đến phần tử m trong nums1 (m - 1)
        ! j: con trò từ phần tử đầu đến phần thử n trong nums2 (n - 1)
        ! k: con trỏ đến phần tử cuối của mảng nums1 cuối cùng (phần tử thứ m + n - 1)
        * B1: so sánh các phần tử của nums1 và nums2 từ cuối lên đầu
        * B2: đặt phần tử lớn hơn vào vị trí k
     */
    let i = m - 1, j = n - 1, k = m + n - 1

    // Hợp nhất từ cuối

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Nếu còn phần tử trong nums2, sao chép vào nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

};

var removeElement = function (nums, val) {
    let writePointer = 0; // Vị trí để ghi các giá trị không phải `val`.

    // Bước 1: Lọc các phần tử khác `val` và ghi đè lên mảng từ đầu.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writePointer] = nums[i];
            writePointer++;
        }
    }

    // Bước 2: Thay phần còn lại của mảng bằng `_`.
    for (let i = writePointer; i < nums.length; i++) {
        let ii = nums.indexOf(nums[i])
        nums.splice(ii, 1)
    }

    console.log(nums);
};

var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            let jIndex = -1
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] / 2 === arr[j])
                    jIndex = j
            }
            if (jIndex === -1) continue;

            if (jIndex !== i)
                return true
        }
    }
    return false
};


var validMountainArray = function(arr) {
    if (arr.length <= 2) return false

    let top1 = top2 = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) top1 = arr[i]
        else break
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i + 1] < arr[i]) top2 = arr[i]
        else break
    }

    if (top1 === top2 && top1 !== arr[0] && top2 !== arr[arr.length-1]) return true
    return false

};
const run = async () => {
    let arr = [1, 0, 2, 3, 0, 4, 5, 0]

    /*
       ? Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
       ? Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
    **/
    duplicateZeros(arr)

    arr = [-4, -1, 0, 3, 10]
    //? sắp xếp tăng dần bình phương của phần tử trong mảng
    sortedSquares(arr)
    //? Output: [0,1,9,16,100]
    /*
        ? Cho 2 mảng số nguyên nums1 và nums2, đều đã được sắp xếp theo thứ tự tăng dần
        ? Hợp nhất 2 mảng nums1 và nums2 vào nums1 với kích thước nums1 = m + n
    */
    nums1 = [1, 2, 3, 0, 0, 0]
    m = 3
    nums2 = [2, 5, 6]
    n = 3
    merge(nums1, m, nums2, n)

    let nums = [3, 2, 2, 3]

    let val = 3
    removeElement(nums, val)
    console.log(checkIfExist([7, 1, 14, 11]))
    validMountainArray([2,0,2])
}


run(true).catch()

