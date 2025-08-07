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
        
        stage('Build Client') {
            steps{
                echo 'Start to build the Postit Client.'
                dir('client'){
                    sh 'docker build -t biswasakash/post-it-client:docker-deployment .'
                }
            }
        }
        stage('Nginx Build') {
            steps{
                echo 'Start to build the Postit Gateway.'
                dir('nginx'){
                    sh 'docker build -t biswasakash/post-it-gateway:docker-deployment .'
                }
            }
        }
        stage('Server Build') {
            steps{
                echo 'Start to build the Postit Server.'
                dir('nginx'){
                    sh 'docker build -t biswasakash/post-it-server:docker-deployment .'
                }
            }
        }

        
    }
}
