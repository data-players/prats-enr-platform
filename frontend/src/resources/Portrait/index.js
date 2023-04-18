import PortraitCreate from './PortraitCreate';
import PortraitEdit from './PortraitEdit';
import PortraitList from './PortraitList';
import PortraitShow from './PortraitShow';
import BuildIcon from '@material-ui/icons/Build';

export default {
  config: {
    list: PortraitList,
    show: PortraitShow,
    create: PortraitCreate,
    edit: PortraitEdit,
    icon: BuildIcon,
    options: {
      label: 'Actualité'
    }
  },
  dataModel: {
    types: ['pair:Portrait'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'portrait',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Portrait |||| Les portraits',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
        'pair:hasLocation' : 'Lieu',
      }
    }
  }
};
