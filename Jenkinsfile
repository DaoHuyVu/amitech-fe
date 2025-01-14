pipeline {
    agent any

    environment {
        DEPLOY_SERVER = '52.74.142.118'
        DEPLOY_USER = 'ubuntu'
        DEPLOY_PATH = '~/SourceCode/Amitech/amitech-fe'
        GITHUB_REPO = 'https://github.com/DaoHuyVu/amitech-fe'
        SSH_KEY_ID = 'da7e4356-4157-42ca-8e8c-cea88743b1dd'  
        TAG = "2.0.7"
        IMAGE_NAME = "web"
        DOCKER_REGISTRY = "huyvu160102"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh """
                        docker build -t ${IMAGE_NAME} .
                    """
                    sh """
                        docker tag ${IMAGE_NAME}:latest ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG}
                    """
                    sh """
                        docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG}
                    """   
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent (credentials: [SSH_KEY_ID]) {
                    sh """
                        scp nginx-server.conf nginx-webserver.conf docker-compose-production.yaml ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_PATH}
                    """
                    sh """
                        docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG}
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
