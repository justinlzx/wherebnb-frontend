# Build stage
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN rm -rf /app/build
ARG REACT_APP_FRONTEND_URL=http://localhost:3000
ARG REACT_APP_ACCOMS_URL=http://localhost:3001
ARG REACT_APP_BOOKINGS_URL=http://localhost:3002
ARG REACT_APP_ACCOUNTS_URL=http://localhost:3003
ARG REACT_APP_PROCESS_BOOKING_URL=http://localhost:3004
ARG REACT_APP_PAYMENTS_URL=http://localhost:3005
ARG REACT_APP_NOTIFICATIONS_URL=http://localhost:3006
ARG REACT_APP_CHECKIN_URL=http://localhost:3007
ARG REACT_APP_REVIEWS_URL=http://localhost:3008
RUN npm run build

# Run stage
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]