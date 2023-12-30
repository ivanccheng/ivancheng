import React from "react";

const Experiences =
    [
        {
            jobTitle: 'Product Design and Developer',
            company: 'Interac',
            logo: 'opentext.png',
            link: 'https://www.opentext.com/about',
            images: [
                ['Node', 'node_js.png'],
                ['Angular', 'angular.svg'],
                ['Devops', 'devops.png'],
                ['Docker', 'docker.svg'],
                ['Redis', 'redis.svg']
            ],
            duration: 'Sept - Dec 2022',
            jobResponsibilities: [
                'Implemented security measures utilizing Blackduck and Twistlock',
                'Created deployment and testing pipeline for node.js application',
                'Upgraded auth token manager using Bigints and Buffers to manage cryptographic tokens',
                'Designed UI components and resolved bugs in Angular.js'
            ]
        },
        {
            jobTitle: 'Full Stack Software Developer',
            company: 'OpenText',
            logo: 'opentext.png',
            link: 'https://www.opentext.com/about',
            images: [
                ['Node', 'node_js.png'],
                ['Angular', 'angular.svg'],
                ['Devops', 'devops.png'],
                ['Docker', 'docker.svg'],
                ['Redis', 'redis.svg']
            ],
            duration: 'Sept - Dec 2022',
            jobResponsibilities: [
                'Implemented security measures utilizing Blackduck and Twistlock',
                'Created deployment and testing pipeline for node.js application',
                'Upgraded auth token manager using Bigints and Buffers to manage cryptographic tokens',
                'Designed UI components and resolved bugs in Angular.js'
            ]
        },
        {
            jobTitle: 'Full Stack Software Developer',
            company: 'Mobials',
            logo: 'company-logo-1.png',
            images: [
                ['PHP', 'php.svg'],
                ['Vue', 'vue.svg'],
                ['MySQL', 'mysql.svg'],
                ['RabbitMQ', 'rabbitmq.svg']
            ],
            link: "https://mobials.com/",
            duration: 'Jan - Apr 2022',
            jobResponsibilities: [
                'Integrated application with third party services such as Google My Business, Lenderdesk, and SiriusXM, using PHP and REST APIs.',
                'Created and updated user-facing front end components in Vue.js',
                'Investigated defects in production environment using Kibana, Busgnag, and RabbitMQ',

            ]
        },
        {
            company: 'Venngage',
            duration: 'May - Aug 2021',
            logo: 'company-logo-1.png',
            images: [
                ['AWS EC2', 'aws-ec2.svg'],
                ['Bash', 'bash.svg'],
                ['REST API', 'api.svg'],
                // ['Selenium', 'selenium.svg'],

            ],
            jobTitle: 'Software Automation Engineer',
            link: "https://venngage.com/",
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
            link: 'https://360educationlabs.com/',
            duration: 'May - Aug 2020',
            jobResponsibilities: [
                'Collaborated with developers to create 50+ test cases for new and evolving features',
                'Prevented major functional, security, and feature errors from being released by thoroughly running smoke tests.',
                'Implemented automated tests using Java and Selenium.'
            ]
        },
        {
            jobTitle: 'System Administrator Intern',
            company: 'World Link Communications',
            logo: 'company-logo-1.png',
            images: [
                ['PHP', 'php.svg'],
                ['CMS', 'backup.svg'],
            ],
            link: 'http://www.wlink.ca/html1/index.html',
            duration: 'May - Aug 2019',
            jobResponsibilities: [
                'Implemented script to validate and export data from Customer Management System (CMS) using PHP',
                'Performed routine backups of company data for both offsite storage and onsite servers',
                'Configured computer systems to ensure users full capability',

            ]
        }
    ]

export default Experiences