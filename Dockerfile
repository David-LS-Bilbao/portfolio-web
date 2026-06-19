# Build stage: compila el bundle estático de Vite
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
<<<<<<< HEAD
# NOTA: el package-lock.json del repo está desincronizado con package.json
# (faltan deps opcionales @emnapi/* para linux-musl), por lo que `npm ci` falla.
# Usamos `npm install` hasta que se regenere y commitee el lockfile.
RUN npm install
=======
RUN npm ci
>>>>>>> 8bc648f (chore: add docker deployment config)
COPY . .
RUN npm run build

# Runtime stage: sirve el estático con nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
