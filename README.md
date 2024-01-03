# awsTest
aws 리소스 관련 코드 모음

#sdk 사용 방법
1. aws에 대한 global 스코프의 config 설정
2. 개발 aws 리소스에 대한 설정
3. Setting AWS Credentials




# AWS Credential 세팅 방법
1. 서버(EC2)로부터 IAM  Roles를 얻어 연동

2. 서버의 ~/.aws/credentials 경로의 파일에 자격증명 입력하여 연동

3. 환경변수에 자격증명을 저장하고 연동

4. config.json 파일에 자격증명을 입력하여 연동 - 비추 보안 위험

5. 그냥 소스 코드에 직접 입력하여 연동 - 비추 보안 위험