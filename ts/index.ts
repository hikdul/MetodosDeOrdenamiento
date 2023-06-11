// la idea es que aca se corran los algoritmos uno a uno
import {generateRandomIntegerList} from './GenerateIntegers'
import { burbleSort } from './1.MetodoBurbuja';
import { selectionSort } from './2.selectionSort';
import { insertionSort } from './3.insertionSort';
import {shellSort} from './4.shellSort'
import { MergeSort } from './5.mergeSort';
import { QuickSort } from './6.QuickSort';
import { HeapSort } from './7.HeapSort';

const integerList: number[] = generateRandomIntegerList(100, 1, 2000);

console.log('Muestra a probar')
console.log(integerList)
console.log('====================================')

const ordBurbleSort = burbleSort(integerList)
console.log(ordBurbleSort.alg + ': '  + ordBurbleSort.worktime)

const ordSelectionSort = selectionSort(integerList)
console.log(ordSelectionSort.alg + ': ' + ordSelectionSort.worktime)

const ordInsertionSort = insertionSort(integerList)
console.log(ordInsertionSort.alg +': ' + ordInsertionSort.worktime)

const ordShellSort = shellSort(integerList)
console.log(ordShellSort.alg +": " + ordShellSort.worktime)
 
const ordMergeSort = MergeSort(integerList)
console.log(ordMergeSort.alg + ": " + ordMergeSort.worktime)

const ordQuickSort = QuickSort(integerList)
console.log(ordQuickSort.alg + ': ' + ordQuickSort.worktime)

// TODO: entender el ordenamiento por monton que aun no lo tengo claro al 100%
const ordHeapSort = HeapSort(integerList)
console.log(ordHeapSort.alg + ': ' + ordHeapSort.worktime)

console.log(ordHeapSort)