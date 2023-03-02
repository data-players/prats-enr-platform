import WorksiteCreate from './WorksiteCreate';
import WorksiteEdit from './WorksiteEdit';
import WorksiteList from './WorksiteList';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WorksiteShow from './WorksiteShow';

export default {
  config: {
    list: WorksiteList,
    show: WorksiteShow,
    create: WorksiteCreate,
    edit: WorksiteEdit,
    icon: VisibilityIcon,
    options: {
      label: 'Chantiers',
    }
  },
  dataModel: {
    types: [
      'pair:Worksite'
    ],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'worksites',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Chantier |||| Chantiers',
      fields: {
        '@type': 'Classe',
        'pair:label': 'Nom'
      }
    }
  }
};
