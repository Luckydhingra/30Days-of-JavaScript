function Swappinbubble_Sort(arr)
{
    let swapping;
          do {
        swapping = false;
        for (let i=0; i < arr.length-1; i++)
        {
            if (arr[i] < arr[i+1])
            {
               let x = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = x;
               swapping = true;
            }
        }
          }  
           while (swapping);
 return arr; 
}

console.log("Sorted_array : " +  Swappinbubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); //Output: Sorted_array : 3223,546,455,345,234,213,122,98,84,64,23,12,9,4,1
