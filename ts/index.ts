// la idea es que aca se corran los algoritmos uno a uno
import {generateRandomIntegerList} from './GenerateIntegers'
import { burbleSort } from './1.MetodoBurbuja';
import { selectionSort } from './2.selectionSort';
import { insertionSort } from './3.insertionSort';
import {shellSort} from './4.shellSort'


const integerList: number[] = generateRandomIntegerList(10000, 1, 999999999);

console.log('Muestra a probar')
console.log(integerList)
console.log('====================================')

const ordBurbleSort = burbleSort(integerList)
console.log('Ordenamiento por burbuja: ' + ordBurbleSort.worktime)

const ordSelectionSort = selectionSort(integerList)
console.log('Ordenamiento por seleccion: ' + ordSelectionSort.worktime)

const ordInsertionSort = insertionSort(integerList)
console.log('Ordenamiento por insercion: ' + ordInsertionSort.worktime)

 const ordShellSort = shellSort(integerList)
 console.log("ordenamiento por shell: " + ordShellSort.worktime)
//console.log(ordShellSort)