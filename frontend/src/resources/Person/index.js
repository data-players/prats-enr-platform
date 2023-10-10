// import PersonCreate from "./PersonCreate";
import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    list: PersonList,
    show: PersonShow,
    // create: PersonCreate,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes'
    }
  },
  dataModel: {
    types: ['pair:Person'],
    list: {
      blankNodes: ['pair:hasLocation/pair:hasPostalAddress'],
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:label': 'Nom complet',
        'pair:description': 'Description',
        'prats:openbadgeId': 'Id Openbadge'
      }
    }
  }
};