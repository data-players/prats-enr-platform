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
    types: ['semapps:Document'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'news',
    slugField: 'semapps:title'
  },
  translations: {
    fr: {
      name: 'Actualité |||| Les actualités',
      fields: {
        'semapps:title': 'Titre',
        'semapps:content': 'Contenu',
      }
    }
  }
};
