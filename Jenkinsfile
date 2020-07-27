pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''sudo apt install npm
npm start'''
      }
    }

  }
}