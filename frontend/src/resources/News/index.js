import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';
import NewsList from './NewsList';
import NewsShow from './NewsShow';
import AnnouncementIcon from '@material-ui/icons/Announcement';

export default {
  config: {
    list: NewsList,
    show: NewsShow,
    create: NewsCreate,
    edit: NewsEdit,
    icon: AnnouncementIcon,
    options: {
      label: 'Actualité'
    }
  },
  dataModel: {
    types: ['pair:Document'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'news',
    slugField: 'pair:label',
    forceArray: ['pair:hasResource']
  },
  translations: {
    fr: {
      name: 'Actualité |||| Les actualités',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Contenu',
      }
    }
  }
};
