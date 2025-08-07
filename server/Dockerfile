FROM maven:3.9.11-eclipse-temurin-21 as builder

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:21-ea-11-slim-bullseye

WORKDIR /app

EXPOSE 8080

COPY --from=builder /app/target/*.jar app.jar

