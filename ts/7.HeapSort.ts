import { IData } from "./interface";

export const HeapSort = (arr:number[]):IData =>
{
    const start = performance.now()
    heapSort(arr)
    const end = performance.now()
    
    return{
        alg: "Heap Sort",
        worktime: end - start,
        arr
    }
}

const heapSort = (arr: number[]): void => 
{
  const n = arr.length;

  // Construir el montón máximo
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extraer sucesivamente el máximo y reconstruir el montón
  for (let i = n - 1; i > 0; i--) {
    // Mover el elemento máximo actual a la posición final
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Reconstruir el montón para el subarray reducido
    heapify(arr, i, 0);
  }
}

const heapify = (arr: number[], n: number, i: number): void =>
{
  let largest = i; // Inicializar el nodo raíz como el más grande
  const left = 2 * i + 1; // Índice del hijo izquierdo
  const right = 2 * i + 2; // Índice del hijo derecho

  // Si el hijo izquierdo es más grande que la raíz
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Si el hijo derecho es más grande que el más grande actual
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Si el más grande no es la raíz
  if (largest !== i) {
    // Intercambiar el más grande con la raíz
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursivamente construir el montón para el subárbol afectado
    heapify(arr, n, largest);
  }
}
