describe('Split Array function', function () {
    it('es capaz de dividir el arreglo en dos partes', function () {
        expect(split([2, 6, 4, 1, 5])).toEqual([[2, 6], [4, 1, 5]])
    });
});

describe('Merge', function () {
    it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
        expect(merge([1,7,10],[4,8,11])).toEqual([1,4,7,8,10,11])
    });
});

describe('MergeSort', function () {
    it('es capaz de ordenar un arreglo desordenado', function () {
        expect(mergeSort([1,7,10,4,8,11])).toEqual([1,4,7,8,10,11])
    });
});


