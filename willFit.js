function willFit(present, box){
  console.log(present,box);
  present = present.sort(function(a,b){ return a - b; });
  box = box.sort(function(a,b){ return a - b; });
  
  return present.every(function(presentDimension, index) {
    var boxDimension = box[index];
    return presentDimension <= boxDimension - 2;
  });
}