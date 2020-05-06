export const incomeOutcomeData = {
  labels: ['수입', '지출'],
  datasets: [{
    data:[],
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
    ],
    borderWidth: 1,
    borderColor: '#777',
    hoeverBorderWidth: 3,
    hoverBorderColor: '#000',
  }],
};

export const outcomeDetail = {
  labels: ['경기장', '음식', '장비', '기타'],
  datasets: [{
    data:[],
    backgroundColor: [
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
    ],
    borderWidth: 1,
    borderColor: '#777',
    hoeverBorderWidth: 3,
    hoverBorderColor: '#000',
  }],
};

export const BEST_ELEVEN = {
  players: {
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Member List',
      playersIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Best Eleven',
      playersIds: [],
    }
  },
  columnOrder: ['column-1', 'column-2'],
};
