FROM node:18.17.1-alpine3.18

# タイムゾーンを日本に設定
ENV TZ Asia/Tokyo

# ワーキングディレクトリを指定
WORKDIR /usr/src/app

# パッケージをインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# prismaの生成
RUN npx prisma generate

# 起動
CMD [ "npm", "start" ]
