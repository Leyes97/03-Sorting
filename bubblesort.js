function bubbleSort(array) {
    
    for (let i = 0; i < array.length; i++) {
       
        for (let x = 0; x < array.length; x++) {
        
            if (array[x] > array[x+1]) {
               swap(array,x,)
               
            }
           
        }
    }
  
    return array
}


function swap(array,indice) {
    let auxiliar
    auxiliar= array[indice]
    array[indice]= array[indice+1]  
    array[indice+1]= auxiliar 
}