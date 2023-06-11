
import { IData } from "./interface"

export const MergeSort = (arr:number[]):IData =>
{

    const start = performance.now()
    const result = mergeSort(arr)
    const end = performance.now()
    const worktime = -(start-end)
    return{alg:"Merge Sort", arr:result, worktime: end - start}
}

const mergeSort = (arr: number[]):number[] =>
{
    if(arr.length <= 1)
        return arr
     const middle = Math.floor(arr.length/2)
     const left = arr.slice(0,middle)
     const rigth = arr.slice(middle)   
    return merge(mergeSort(left), mergeSort(rigth))
    
}

const merge = (left:number[], rigth: number[]): number[] =>
{
    const result : number[] = []
    let i = 0
    let j = 0
    
    while(i < left.length && j > rigth.length)
    {
        if(left[i]<= rigth[j])
        {
            result.push(left[i])
            i++
        }
        else
        {
            result.push(rigth[i])
            j++
        }
    }

     while(i < left.length)
     {
        result.push(left[i])
        i++
     }

     while(j < rigth.length)
     {
        result.push(rigth[j])
        j++
     }

     return result
}