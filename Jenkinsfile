pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                echo 'installing...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'building...'
                sh 'npm run build'
            }
        }
    }
}
