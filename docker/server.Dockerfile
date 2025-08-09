FROM maven:3.9.11-eclipse-temurin-21 as builder

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:21-ea-11-slim-bullseye

RUN apt-get update && apt-get install -y curl

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]


