pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'installing...'
                nodejs('nodejs@12.22.1') {
                    sh 'yarn install'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'building...'
                nodejs('nodejs@12.22.1') {
                    sh 'yarn build'
                }
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}
