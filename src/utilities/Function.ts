
export interface SplitNumberProps{
    number:number;
    partSize:number
}

export function splitNumberCumulatively({number, partSize}:SplitNumberProps):number[] {
    const result = [];
    let cumulativeSum = 0;
    
    while (cumulativeSum < number) {
      cumulativeSum += partSize;
      if (cumulativeSum > number) {
        cumulativeSum = number;
      }
      result.push(cumulativeSum);
    }
    
    return result;
}

export function truncateString(str: string, delimiter: string, maxLength: number = 15): string {
  const parts = str.split(delimiter);
  if (parts.length < 2) return str;

  const [firstPart, secondPart] = parts;
  const truncatedPart = secondPart.length > maxLength ? secondPart.slice(0, maxLength) + '...' : secondPart;
  return `${firstPart}${delimiter}...`;
}