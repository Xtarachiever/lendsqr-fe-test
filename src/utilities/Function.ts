
export interface SplitNumberProps{
    number:number;
    partSize:number
}

function splitNumberCumulatively({number, partSize}:SplitNumberProps):number[] {
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

export default splitNumberCumulatively;