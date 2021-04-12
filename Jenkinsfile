pipeline {
    agent {
        docker {
            image 'node:12.22.1'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
    }
}
