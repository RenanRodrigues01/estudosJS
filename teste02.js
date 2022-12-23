const lis = (nums) => {
    let n = nums.length
    if(!n) return 0;

    let table = Array.from({length: n}, ()=>1);
    let max = 1

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[j] > nums[i]){
                table[j] = Math.max(table[j], table[i] + 1);
                max = Math.max(max, table[j])
            }
        }
    }
    return max;
}

console.log(lis([1, 4, 2, 4, 3, 7]));