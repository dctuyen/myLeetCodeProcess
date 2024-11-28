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

var merge = function(nums1, m, nums2, n) {
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
        console.log('k = ' + k + ' i = ' + i + ' j = ' + j);

        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        console.log(nums1)
        k--;
    }

    // Nếu còn phần tử trong nums2, sao chép vào nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

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
    nums1 = [1,2,3,0,0,0]
    m = 3
    nums2 = [2,5,6]
    n = 3
    merge(nums1, m, nums2, n)

    console.log(nums1)
}

run(true).catch()

