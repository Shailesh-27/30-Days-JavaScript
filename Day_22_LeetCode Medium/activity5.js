// ************************ Group Anagrams **************************


// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// - Write a function that takes an array of strings and groups anagrams together. • Log the grouped anagrams for a few test cases.


function groupAnagrams(strs) {
    const map = new Map(); // To store grouped anagrams

    for (const str of strs) {
        // Create a key by sorting the string
        const key = str.split('').sort().join('');
        
        // If the key is not in the map, add it with an empty array
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        // Append the original string to the list corresponding to the key
        map.get(key).push(str);
    }

    // Convert map values to an array
    return Array.from(map.values());
}

// Helper function to test and log results
function runTests() {
    // Test case 1
    let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log('Test Case 1:', groupAnagrams(strs));
    // Expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

    // Test case 2
    strs = [""];
    console.log('Test Case 2:', groupAnagrams(strs));
    // Expected: [[""]]

    // Test case 3
    strs = ["a"];
    console.log('Test Case 3:', groupAnagrams(strs));
    // Expected: [["a"]]

    // Test case 4
    strs = ["abc", "bca", "cab", "xyz", "zyx"];
    console.log('Test Case 4:', groupAnagrams(strs));
    // Expected: [["abc", "bca", "cab"], ["xyz", "zyx"]]

    // Test case 5
    strs = ["listen", "silent", "enlist", "hello", "world"];
    console.log('Test Case 5:', groupAnagrams(strs));
    // Expected: [["listen", "silent", "enlist"], ["hello"], ["world"]]
}

runTests();
