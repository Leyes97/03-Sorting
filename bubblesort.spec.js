describe('Bubble Sort', function(){
    it('handles an empty array',function(){
        expect(bubbleSort([])).toEqual([]);
    });
});

describe('Bubble Sort', function(){
   it('handle an unordered array',function(){
        expect(bubbleSort([10,3,1,6,4])).toEqual([1,3,4,6,10]);
    });
});

describe('Bubble Sort', function(){
    it('handles an ordered array',function(){
        expect(bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });
});                                  

describe('Bubble Sort', function(){
    it('handles an inverted matrix',function(){
        expect(bubbleSort([7,6,5,4,3])).toEqual([3,4,5,6,7]);
    });
});

describe('probando spies', function() {
    it('cuantas veces ejecuta swap', function () {
      spyOn(window, 'swap').and.callThrough(); 
      window.bubbleSort([10,3,1,6,4]);
      expect(window.swap.calls.count()).toEqual(6);
    });
  });

/*3,10,1,6,4
  3,1,10,6,4
  3,1,6,10,4
  3,1,6,4,10
  1,3,6,4,10
  1,3,4,6,10*/
