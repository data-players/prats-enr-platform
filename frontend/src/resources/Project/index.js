import ProjectCreate from './ProjectCreate';
import ProjectEdit from './ProjectEdit';
import ProjectList from './ProjectList';
import ProjectShow from './ProjectShow';
import BuildIcon from '@material-ui/icons/Build';

export default {
  config: {
    list: ProjectList,
    show: ProjectShow,
    create: ProjectCreate,
    edit: ProjectEdit,
    icon: BuildIcon,
    options: {
      label: 'Actualité'
    }
  },
  dataModel: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'project',
    fieldsMapping: {
      title: 'pair:label'
    },
  },
  translations: {
    fr: {
      name: 'Projet |||| Les projets',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
        'pair:hasLocation' : 'Lieu',
        'pair:logo': "logo"
      }
    }
  }
};
