pipeline {
    agent any

    environment {
        DEPLOY_SERVER = '52.74.142.118'
        DEPLOY_USER = 'ubuntu'
        DEPLOY_PATH = '~/SourceCode/Amitech/amitech-fe'
        GITHUB_REPO = 'https://github.com/DaoHuyVu/amitech-fe'
        SSH_KEY_ID = 'da7e4356-4157-42ca-8e8c-cea88743b1dd'  
        DOCKER_CREDENTIAL = '231a1aad-db15-405f-b9f9-ca6cccacd1ac'
        TAG = "2.0.8    "
        IMAGE_NAME = "web"
        DOCKER_REGISTRY = "huyvu160102"
        ENV_PATH = credentials('33cdf5ff-1d1e-4929-8d55-27f3bdec95f2')
    }

    stages {
        stage('Setup env'){
            steps {
                    script {
                        def envContent = readFile(ENV_PATH)
                        writeFile file: '.env.production.local', text: envContent
                    }
                }
            }
        stage('Build and Push') {
            steps {
                 script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIAL}") {
                        sh """
                            docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG} .
                            docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG}
                        """
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    sh """
                        scp -i /d/Secret/ec2_ed25519_huyvu161202.pem -o StrictHostKeyChecking=no nginx-server.production.conf nginx-webserver.production.conf docker-compose.production.yaml ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_PATH}
                    """
                    sh """
                        ssh -i /d/Secret/ec2_ed25519_huyvu161202.pem -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_SERVER} "sudo docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG} & sudo docker compose -f ${DEPLOY_PATH}/docker-compose.production.yaml up -d --build"
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
