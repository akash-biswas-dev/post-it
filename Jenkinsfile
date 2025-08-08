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
                        dir('client'){
                            sh 'docker build -t biswasakash/postit-client:docker-deployment docker/client.Dockerfile'
                        }
                    }
                }
                stage('Nginx Build') {
                    steps{
                        echo 'Start to build the Postit Gateway.'
                        dir('nginx'){
                            sh 'docker build -t biswasakash/postit-gateway:docker-deployment docker/nginx.Dockerfile'
                        }
                    }
                }
                stage('Server Build') {
                    steps{
                        echo 'Start to build the Postit Server.'
                        dir('server'){
                            sh 'docker build -t biswasakash/postit-server:docker-deployment server/server.Dockerfile'
                        }
                    }
                }
            }

        }
        stage('Deploy') {
            steps{
                echo 'Start to deploy the Postit Client.'
                sh 'docker-compose up -d'
            }
        }
        
    }
}
