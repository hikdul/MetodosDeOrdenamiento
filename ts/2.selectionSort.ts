export const selectionSort = (arr: number[]) => {
    const start = performance.now()
    const length = arr.length
    for (let i = 0; i < length; i++) {
        let minus = i
        for (let j = i + 1; j < length; j++) {
            if (arr[minus] > arr[j]) {
                minus = j
            }
            [arr[i], arr[minus]] = [arr[minus], arr[i]]
        }
    }
    const end = performance.now()
    const worktime = -(start - end)
    return { arr, worktime }
}