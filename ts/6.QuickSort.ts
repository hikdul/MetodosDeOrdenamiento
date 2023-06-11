import { IData } from "./interface";

const  quickSort =(arr: number[], low: number, high: number): void =>
{
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

const partition = (arr: number[], low: number, high: number): number =>
{
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

export const QuickSort = (arr:number[]): IData =>
{
    const start = performance.now()
    quickSort(arr, 0, arr.length - 1)
    const end = performance.now()
    return{alg:"Quick Sort", arr , worktime: end - start }
    
}