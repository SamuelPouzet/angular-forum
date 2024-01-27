import {Topic} from "../interface/topic";


export const TOPICS: Topic[] = [
  {
    id:1,
    category: 0,
    status: 1,
    title: 'administratif',
    subtitle: 'tout ce que vous avez besoin de savoir',
    children: [
      {
        id: 1,
        category: 1,
        status: 1,
        title: 'règlements',
        subtitle: 'les règles à suivre pour vivre en société',
      },
      {
        id: 2,
        category: 1,
        status: 1,
        title: 'l\'univers',
        subtitle: 'les règles à suivre pour vivre en société',
      },
    ]
  },
  {
    id:2,
    category: 0,
    status: 1,
    title: 'zone de jeu',
    subtitle: 'amusez vous',
    children: [
      {
        id: 3,
        category: 2,
        status: 1,
        title: 'Sunnydale',
        subtitle: 'là où tout à commencé',
      },
      {
        id: 4,
        category: 2,
        status: 0,
        title: 'Cardiff',
        subtitle: 'la porte la plus active',
      },
      {
        id: 5,
        category: 2,
        status: 1,
        title: 'Autres lieux',
        subtitle: 'Parce que le Mal peut se montrer partout',
      },
    ]
  },


];
