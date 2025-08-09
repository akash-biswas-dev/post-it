@Library('base-library') _
pipeline {
    agent {label 'local'}

    stages {
        stage('Clone Form repositpory') {
            steps {
                script {
                    cloneRepo('https://github.com/akash-biswas-dev/post-it.git', 'docker-deployment')
                }
            }
        }
        stage('Build'){
            parallel {
                stage('Build Client') {
                    steps{
                        echo 'Start to build the Postit Client.'
                        
                        sh 'docker build -t biswasakash/postit-client:docker-deployment -f docker/client.Dockerfile client'

                    }
                }
                stage('Nginx Build') {
                    steps{
                        echo 'Start to build the Postit Gateway.'
                    
                        sh 'docker build -t biswasakash/postit-gateway:docker-deployment -f docker/nginx.Dockerfile nginx '
                    }
                }
                stage('Server Build') {
                    steps{
                        echo 'Start to build the Postit Server.'
                        
                        sh 'docker build -t biswasakash/postit-server:docker-deployment -f docker/server.Dockerfile server'
                        
                    }
                }
            }

        }
        stage('Deploy') {
            steps{
                echo 'Start to deploy the Postit Client.'
                sh 'docker compose up -d'
            }
        }
        
    }
}
