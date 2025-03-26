FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm
RUN rm -rf node_modules && npm install  
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]