import swaggerAutogen from 'swagger-autogen';

const swagger = swaggerAutogen();

const output = './swagger_doc.json'
const endpoints = ['./src/routes/personagemRoutes.js' , './src/routes/armaRoutes.js', './src/routes/mapaRoutes.js', './src/routes/nacionalidadeRoutes.js' , './src/routes/funcaoRoutes.js']


const doc = {
    info: {
      version: '',      // by default: '1.0.0'
      title: '',        // by default: 'REST API'
      description: '',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000'
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
      {
        name: '',         // Tag name
        description: '',  // Tag description
      },
      // { ... }
    ],
    securityDefinitions: {},  // by default: empty object
    definitions: {},          // by default: empty object
  };
  
swaggerAutogen(output, endpoints, doc)