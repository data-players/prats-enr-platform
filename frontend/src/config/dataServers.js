const dataServers = {
  av: {
    name: 'Prats',
    baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
    sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
    authServer: true,
    default: true,
    containers: {
      av: {
        'pair:Event': ['/events'],
        'pair:Organization': ['/organizations'],
        'pair:OrganizationType': ['/organization-types'],
        'pair:Person': ['/persons'],
        'pair:Resource': ['/resources'],
        'pair:Topic': ['/topics'],
        'pair:Task': ['/task'],
        'pair:News': ['/news'],
        'pair:Project': ['/project'],
        'pair:Portrait': ['/portrait'],
        'pair:Place': ['/places'],
        'pair:Page': ['/pages'],
      }
    },
    uploadsContainer: '/files'
  }
};

export default dataServers;
