const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "f4b14871bbe38451aa1d1a9262c17cdf1128ab94",
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