pipeline {
    agent any

    environment {
        DEPLOY_SERVER = '52.74.142.118'
        DEPLOY_USER = 'ubuntu'
        DEPLOY_PATH = '~/SourceCode/Amitech/amitech-fe'
        GITHUB_REPO = 'https://github.com/DaoHuyVu/amitech-fe'
        SSH_KEY_ID = 'da7e4356-4157-42ca-8e8c-cea88743b1dd'  
        DOCKER_CREDENTIAL = '231a1aad-db15-405f-b9f9-ca6cccacd1ac'
        TAG = "2.0.8"
        IMAGE_NAME = "web"
        DOCKER_REGISTRY = "huyvu160102"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '871998dd-4ab0-4d03-98f8-6c10065545b5', url: 'https://github.com/DaoHuyVu/amitech-fe']])
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

        // stage('Deploy') {
        //     steps {
        //         script{
        //             sh """
        //                 scp -i /d/Secret/ec2_ed25519_huyvu161202.pem nginx-server.conf nginx-webserver.conf docker-compose.production.yaml ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_PATH}
        //             """
        //             sh """
        //                 ssh -i /d/Secret/ec2_ed25519_huyvu161202.pem ${DEPLOY_USER}@${DEPLOY_SERVER}:${DEPLOY_PATH} "docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:${TAG}"
        //             """
        //         }
        //     }
        // }
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
