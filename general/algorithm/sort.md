# Sort

열거된 데이터를 기준 순서 (오름차순, 내림차순 등등) 에 맞게 새로 정리하는 기법을 말한다.

**정렬 속도**

@flowstart
stage1=>operation: 퀵 (Quick)
stage2=>operation: 합병 (Merge)
stage3=>operation: 힙 (Heap)
stage4=>operation: 삽입 (Insertion)
stage5=>operation: 버블 (Bubble)

stage1(right)->stage2(right)->stage3(right)->stage4(right)->stage5
@flowend

## 퀵 정렬 (Quick Sort)

정렬 알고리즘중에서 가장 빠른 정렬이다.  
기준이 되는 피벗 노드에 따라 성능이 좌우된다.

### 시간 복잡도

* 평균 `O(n log n)` 로 소요되며 일반적으로 사용될 때는 이보다 빠르다.
* 최악의 경우에는 `O(n^2)` 으로 소요

### 특이사항

* 기준이 되는 Pivot 노드에 따라 성능이 달라진다.

## 머지 정렬 (Merge Sort)

정렬하려는 배열을 반으로 나눠 최소의 파티션으로 나누고 정렬한 후 머지하면서 정렬

### 시간 복잡도

* `O(n log n)` 으로 퀵 정렬과 같다.

### 특이사항

* _**별도의 저장 공간이 필요**_ 하다.

### Example

**Case 1 : JS - ES5**

```javascript
var arr = [6, 3, 8, 4, 1, 9, 2, 5, 7, 0];

function MergeSort(arr) {
  this.arr = null;

  if (arr instanceof Array) {
    this.arr = arr;
    return this.sort(arr);
  }
}

MergeSort.prototype = (function () {
  function sort(arr) {
    if (typeof arr === 'undefined' || !(arr instanceof Array)) {
      if (!(this.arr instanceof Array)) {
        throw new Error('Array object is not exist');
      }
      arr = this.arr;
    }

    if (arr.length === 1) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

    return merge(sort(left), sort(right));
  }

  function merge(left, right) {
    var answer = [],
      leftLength = left.length,
      rightLength = right.length,
      leftIdx = 0,
      rightIdx = 0;

    while (leftIdx < leftLength && rightIdx < rightLength) {
      if (left[leftIdx] < right[rightIdx]) {
        answer.push(left[leftIdx]);
        leftIdx++;
      } else {
        answer.push(right[rightIdx]);
        rightIdx++;
      }
    }

    return answer.concat(left.slice(leftIdx), right.slice(rightIdx));
  }

  return {
    sort: sort
  };
}());
```

```javascript
console.log(new MergeSort(arr));
```

```javascript
var ms = new MergeSort();

console.log(ms.sort(arr));
```

## 삽입 (Insertion)

전체요소에서 가장 작은 데이터를 찾아 가장 앞의 데이터와 교환하는 방식

```javascript

const array = [5, 3, 1, 4, 2];

let len = array.length, i = 1, j, temp;

for (; i < len; ++i) {
  temp = array[i];
  j = i;

  while (j > 0 && array[j - 1] > temp) {
    array[j] = array[j - 1];

    j--;
    cnt++;
  }

  array[j] = temp;
}

console.log(array.join(' '));
```

## 선택 (Selection)

전체 요소에서 기준 위치에 맞는 원소를 선택하여 교환하는 방식

## 버블 (Bubble)

왼쪽 끝에서 부터 인접하는 두 항목의 값을 비교하여 서로 위치를 교환하는 정렬 방법