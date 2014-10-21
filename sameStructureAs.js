/*

Complete the method on Array called 'sameStructureAs' to return true when its argument is an Array that has the same nesting structure as the 'this' array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );

*/

Array.prototype.sameStructureAs = function (other) {
  return this && other && Array.isArray(this) === Array.isArray(other) && this.every(function(element, i) {
    if (Array.isArray(element)) {
      return element.sameStructureAs(other[i]);
    }
    return element && other[i] && Array.isArray(element) === Array.isArray(other[i]);
  });
};