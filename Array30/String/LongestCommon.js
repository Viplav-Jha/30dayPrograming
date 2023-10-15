// Input: {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
// Output: “gee”

// Input: {“apple”, “ape”, “april”}
// Output: “ap”


function commonPrefix(strings) {
    if (!strings || strings.length === 0) {
        return "";
    }

    // Sort the list of strings to make it easier to compare prefixes
    strings.sort();

    const firstStr = strings[0];
    const lastStr = strings[strings.length - 1];

    let common = [];
    for (let i = 0; i < firstStr.length; i++) {
        if (i < lastStr.length && firstStr[i] === lastStr[i]) {
            common.push(firstStr[i]);
        } else {
            break;
        }
    }

    return common.join("");
}

// Example usage:
const input1 = ["geeksforgeeks", "geeks", "geek", "geezer"];
const output1 = commonPrefix(input1);
console.log(output1); // Output: "gee"

const input2 = ["apple", "ape", "april"];
const output2 = commonPrefix(input2);
console.log(output2); // Output: "ap"
