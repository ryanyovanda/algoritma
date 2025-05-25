export function findLongestWord(sentence: string): string {
    const words = sentence.trim().split(/\s+/);
    let longest = "";
  
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }
  