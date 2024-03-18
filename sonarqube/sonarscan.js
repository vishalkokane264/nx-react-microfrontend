const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "27202e8522779837d8df8c9e6f33bc8dda1478cd",
        options: {
            'sonar.projectName': 'microf-demo',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'microf-demo',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)