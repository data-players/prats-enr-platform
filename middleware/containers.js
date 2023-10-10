const CONFIG = require('./config');
const { ACTOR_TYPES } = require("@semapps/activitypub");

module.exports = [
  {
    path: '/'
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    preferredView: '/Organization',
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
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
    path: '/events',
    preferredView: '/Event',
    acceptedTypes: ['pair:Event'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']

  },
  {
    path: '/users',
    preferredView: '/Person',
    acceptedTypes: ['pair:Person'],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    dereference: ['sec:publicKey'],
    excludeFromMirror: true
  },
  {
    path: '/pages',
    preferredView: '/Page',
    acceptedTypes: ['pair:Page']
  },
  {
    path: '/files'
  },
  {
    path: '/organization-types',
    preferredView: '/OrganizationType',
    acceptedTypes: ['pair:OrganizationType'],
  },
  {
    path: '/resources',
    preferredView: '/Resource',
    acceptedTypes: ['pair:Resource'],
  },
  {
    path: '/topics',
    preferredView: '/Topic',
    acceptedTypes: ['pair:Topic'],
  },
  {
    path: '/task',
    acceptedTypes: 'pair:Task',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
  },
  {
    path: '/news',
    preferredView: "/News",
    acceptedTypes: 'pair:News'
  },
  {
    path: '/project',
    preferredView: '/Project',
    acceptedTypes: 'pair:Project',
  },
  {
    path: '/portrait',
    preferredView: '/Portrait',
    acceptedTypes: 'pair:Portrait',
  },
  {
    path: '/resource',
    preferredView: '/Resource',
    acceptedTypes: 'pair:Resource',
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
];
