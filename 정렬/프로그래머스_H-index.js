// H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
// 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

function solution(citations) {
    
  //내림차순 정렬
  citations.sort((a, b) => b - a);
  
  let hIndex = 0

  for (const citation of citations) {
      if(citation >= hIndex + 1) {
          hIndex += 1;
      } else {
          break;
      }
  }
  
  return hIndex;
}

//H-index
// [9, 7, 6, 2, 1] 의 인용횟수를 가진 교수가 있다면
// 9번 이상 인용 횟수를 가진 논문은 1편입니다. 이때 H-Index는 1입니다.
// 7번 이상 인용 횟수를 가진 논문은 2편입니다. 이때 H-Index는 2입니다.
// 6번 이상 인용 횟수를 가진 논문은 3편입니다. 이때 H-Index는 3입니다.
// 2번 이상 인용 횟수를 가진 논문은 4편입니다. 이때 H-Index는 2입니다.
// 1번 이상 인용 횟수를 가진 논문은 5편입니다. 이때 H-Index는 1입니다.
// 여기서 H-Index는 3입니다.