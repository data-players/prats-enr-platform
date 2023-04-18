import ResourceCreate from './ResourceCreate';
import ResourceEdit from './ResourceEdit';
import ResourceList from './ResourceList';
import ResourceShow from './ResourceShow';
import DescriptionIcon from '@material-ui/icons/Description';

export default {
  config: {
    list: ResourceList,
    show: ResourceShow,
    create: ResourceCreate,
    edit: ResourceEdit,
    icon: DescriptionIcon,
    options: {
      label: 'Resources'
    }
  },
  dataModel: {
    types: ['pair:Resource'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resource',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Resource |||| Resources',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
      }
    }
  }
};
