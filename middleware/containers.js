module.exports = [
  {
    path: '/',
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person']
  },
  {
    path: '/events',
    acceptedTypes: 'pair:Event',
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/places',
    acceptedTypes: 'pair:Place',
    dereference: ['pair:hasPostalAddress']
  },
  {
    path: '/documents',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/status',
    acceptedTypes: [
      'pair:TaskStatus'
    ]
  },
  {
    path: '/types',
    acceptedTypes: [
      'pair:Type',
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType'
    ]
  },
  {
    path: '/organizations',
    acceptedTypes: 'pair:Organization'
  },
  {
    path: '/news',
    acceptedTypes: 'pair:Document'
  },
  {
    path: '/task',
    acceptedTypes: 'pair:Task',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
  },
  {
    path: '/pages'
  },
  {
    path: '/files'
  }
];
