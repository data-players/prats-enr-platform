import TaskCreate from './TaskCreate';
import TaskEdit from './TaskEdit';
import TaskList from './TaskList';
import TaskShow from './TaskShow';
import BuildIcon from '@material-ui/icons/Build';

export default {
  config: {
    list: TaskList,
    show: TaskShow,
    create: TaskCreate,
    edit: TaskEdit,
    icon: BuildIcon,
    options: {
      label: 'Actualité'
    }
  },
  dataModel: {
    types: ['pair:Task'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'task',
    fieldsMapping: {
      title: 'pair:label'
    } 
  },
  translations: {
    fr: {
      name: 'Site de Production |||| Les Sites de Production',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
        'pair:hasLocation' : 'Lieu',
      }
    }
  }
};
