const longestS = (str) => {
  let maxLen = 0;
  let substring;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let currentSubstring = str.slice(i, j + 1);
      let set = new Set(currentSubstring);

      if (set.size == currentSubstring.length) {
        if (currentSubstring.length > maxLen) {
          maxLen = currentSubstring.length;
          substring = currentSubstring;
        }
      }
    }
  }
  console.log(maxLen, substring);
};

longestS("pwwkew");

// input = "pwwkew"
// let maxL=0 & let substring;
// for loop (i=0)
// for loop (j=i)
// currentSubstring= input.slice(i, j+1)
// let set = new Set (currentSubstring)
// if(set.size == Substring.length) then
// if(substring.lenght> maxL) then => maxL= currentSubstring.length
// substring = currentSubstring.
