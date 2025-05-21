
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || true' // Skip if no lint config yet
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploy step - simulate deployment by copying files..."'
                sh 'mkdir -p /tmp/deploy_myownproject'
                sh 'cp -r * /tmp/deploy_myownproject/'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Build, test, and deploy succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}