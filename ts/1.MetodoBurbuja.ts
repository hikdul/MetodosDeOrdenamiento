import { IData } from "./interface"

export const burbleSort = (arr: number[]): IData => {
    const start = performance.now()
    const length = arr.length
    for (let i = 0; i < length; i++)
        for (let j = 0; j < length - i - 1; j++)
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    const end = performance.now()
    return { alg: 'Burble Sort', arr, worktime: end - start }
}