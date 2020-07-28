pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''echo 9d9f0a5ef00f4855a1c9083859c2a056 | sudo -S npm install
npm start'''
      }
    }

  }
}