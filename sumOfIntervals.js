/*

Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

*/

function sumIntervals(intervals) {
  var sortedIntervals = intervals.sort(function(a,b) {
    return a[0] - b[0];
  });

  var nonOverlappingIntervals = sortedIntervals.reduce(function(result, sortedInterval) {
    var hasNotBeenPushed = true;
    result.forEach(function(checkInterval, i) {
      if(isOverlap(checkInterval, sortedInterval)) {
        var mergedInterval = [ Math.min(checkInterval[0], sortedInterval[0]) , Math.max(checkInterval[1], sortedInterval[1]) ];
        result[i] = mergedInterval;
        hasNotBeenPushed = false;
      }
    });
    if (hasNotBeenPushed) result.push(sortedInterval);
    return result;
  }, []);

  return nonOverlappingIntervals.reduce(function(sum, interval) {
    var length = interval[1] - interval[0];
    return sum + length;
  }, 0);

  function isOverlap(intervalOne, intervalTwo) {
    console.log("comparing ", intervalOne, intervalTwo);
    return intervalOne[1] > intervalTwo[0];
  }
};