
import { IData } from "./interface"

export const shellSort =(arr:number[]): IData =>
{
    const start = performance.now()
    const length = arr.length
    let distance = Math.floor(length/2)
    while( distance > 0)
    {
        for (let i = distance; i < arr.length; i++) {
            const item = arr[i]
            let j = i
            while(j >= distance && arr[j-distance] > item)
            {
                arr[j] = arr[j-distance]
                j-= distance
            }
            arr[j] = item
        }
        distance = Math.floor(distance / 2)
    }
    const end = performance.now()
    return{alg:'Shell Sort',arr, worktime: end - start}
}