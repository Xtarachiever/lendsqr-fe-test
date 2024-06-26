
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
  if (str.length <= maxLength) {
    return str;
  }
  
  const parts = str.split(delimiter);
  if (parts.length < 2) {
    return str.slice(0, maxLength) + '...';
  }

  const [firstPart, secondPart] = parts;
  if(firstPart.length >= maxLength){
    return `${firstPart}${delimiter}...`;
  }
  const truncatedSecondPart = secondPart.length > maxLength - firstPart.length - delimiter.length
    ? secondPart.slice(0, maxLength - firstPart.length - delimiter.length) + '...'
    : secondPart;

  return `${firstPart}${delimiter}${truncatedSecondPart}`;
}
