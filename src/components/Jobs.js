import React from "react";

const Experiences =
    [
        {
            logo: 'opentext.png',
            images: [
                ['Node', 'node_js.png'],
                ['Angular', 'angular.svg'],
                ['Devops', 'devops.png'],
                ['Docker', 'docker.svg'],
                ['Redis', 'redis.svg']
            ],
            jobTitle: 'Full Stack Software Developer',
            company: 'OpenText',
            duration: 'Sept - Dec 2022',
            jobResponsibilities: [
                'Implemented security measures utilizing Blackduck and Twistlock',
                'Created deployment and testing pipeline for node.js application',
                'Upgraded auth token manager using Bigints and Buffers to manage cryptographic tokens',
                'Designed UI components and resolved bugs in Angular.js'
            ]
        },
        {
            logo: 'company-logo-1.png',
            images: [
                ['PHP', 'php.svg'],
                ['Vue', 'vue.svg'],
                ['MySQL', 'mysql.svg'],
                ['RabbitMQ', 'rabbitmq.svg']
            ],
            jobTitle: 'Full Stack Software Developer',
            company: 'Mobials',
            duration: 'Jan - Apr 2022',
            jobResponsibilities: [
                'Integrated application with third party services such as Google My Business, Lenderdesk, and SiriusXM, using PHP and REST APIs.',
                'Created and updated user-facing front end components in Vue.js',
                'Investigated defects in production environment using Kibana, Busgnag, and RabbitMQ',

            ]
        },
        {
            logo: 'company-logo-1.png',
            images: [
                ['AWS EC2', 'aws-ec2.svg'],
                ['Bash', 'bash.svg'],
                ['REST API', 'api.svg'],
                // ['Selenium', 'selenium.svg'],

            ],
            jobTitle: 'Software Automation Engineer',
            company: 'Venngage',
            duration: 'May - Aug 2021',
            jobResponsibilities: [
                'Implemented test automation pipeline using REST APIS to manage execution on AWS EC2 instances',
                'Optimized Test suite execution by leveraging multithreading, reducing runtime by 25%',
                'Managed weekly release cycle by clearly communicating cycle processes with QA, Dev, and Product teams',
            ]
        },
        {
            jobTitle: 'Quality Assurance Engineer',
            company: '360 Education Labs',
            logo: 'company-logo-1.png',
            images: [
                ['Java', 'java.png'],
                ['Selenium', 'selenium.svg'],
                ['Testing', 'testing.svg'],
            ],
            duration: 'May - Aug 2021',
            jobResponsibilities: [
                'Collaborated with developers to create 50+ test cases for new and evolving features',
                'Prevented major functional, security, and feature errors from being released by thoroughly running smoke tests.',
                'Implemented automated tests Java and Selenium.'
            ]
        },
        {
            logo: 'company-logo-1.png',
            images: [
                ['PHP', 'php.svg'], ,
                ['CMS', 'backup.svg'],
            ],
            jobTitle: 'System Administrator Intern',
            company: 'World Link Communications',
            duration: 'May - Aug 2021',
            jobResponsibilities: [
                'Implemented script to validate and export data from Customer Management System (CMS) using PHP',
                'Performed routine backups of company data for both offsite storage and onsite servers',
                'Configured computer systems to ensure users full capability',

            ]
        }
    ]

export default Experiences