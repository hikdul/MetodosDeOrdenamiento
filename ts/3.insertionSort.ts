
import { IData } from "./interface"

export const insertionSort = (arr: number[]): IData =>
{
    const start = performance.now()
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        let j = i - 1
        while(j >= 0 && item < arr[j])
        {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = item
    }
    const end = performance.now()
    const worktime = -(start-end)
    return {alg:'Insertion Sort', arr, worktime: end - start}   

}