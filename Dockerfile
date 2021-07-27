FROM node:12

# /Tera_Express_Quaca_Store_Notice 디렉토리를 WORKDIR 로 설정
WORKDIR C:\Users\user\Documents\GitHub\Tera_Express_Quaca_Store_Notice

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install

# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

EXPOSE 10060

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

CMD [ "node", "./bin/www" ]