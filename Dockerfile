# 使用官方 Node.js 镜像作为基础镜像
FROM node:20.11.1 as build-stage

# 设置工作目录
WORKDIR /app

# 全局安装 pnpm
RUN npm install -g pnpm

# 复制 package.json 和 pnpm-lock.yaml 到工作目录
COPY package.json pnpm-lock.yaml ./

# 使用 pnpm 安装项目依赖
RUN pnpm install

# 复制项目文件到工作目录
COPY . .

# 构建应用
RUN pnpm build

# 使用 Nginx 镜像作为基础来运行构建好的应用
FROM nginx:stable-alpine

# 从构建阶段复制构建出来的文件到 Nginx 目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露端口 80
EXPOSE 80

# 启动 Nginx 以服务你的应用
CMD ["nginx", "-g", "daemon off;"]
