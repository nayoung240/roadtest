# roadtest

## 개발환경
- Artillery : third party 스트레스 테스트 툴

## 실행
```
npx artillery run artillery/loadtest.yaml
```

### 그래프 확인하기
```
npx artillery run -o myReport loadtest.json // 테스트 결과 데이터 파일 myReport 생성
npx artillery report myReport
```