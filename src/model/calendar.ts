export interface IEvents {
  start: number
  end: number
  column?: number
  index?: number
}
export interface IGroups {
  key: number
  columns: number
  items: IEvents[]
}
export interface ITime {
  hour: string
  period: string
}

export const time: ITime[] = [
  {
    hour: '8:00',
    period: 'am'
  },

  {
    hour: '8:30',
    period: ''
  },

  {
    hour: '9:00',
    period: 'am'
  },

  {
    hour: '9:30',
    period: ''
  },

  {
    hour: '10:00',
    period: 'am'
  },

  {
    hour: '10:30',
    period: ''
  },

  {
    hour: '11:00',
    period: 'am'
  },

  {
    hour: '11:30',
    period: ''
  },

  {
    hour: '12:00',
    period: 'am'
  },

  {
    hour: '12:30',
    period: ''
  },

  {
    hour: '1:00',
    period: 'pm'
  },

  {
    hour: '1:30',
    period: ''
  },

  {
    hour: '2:00',
    period: 'pm'
  },

  {
    hour: '2:30',
    period: ''
  },

  {
    hour: '3:00',
    period: 'pm'
  },

  {
    hour: '3:30',
    period: ''
  },

  {
    hour: '4:00',
    period: 'pm'
  },

  {
    hour: '4:30',
    period: ''
  },

  {
    hour: '5:00',
    period: 'pm'
  },

  {
    hour: '5:30',
    period: ''
  },

  {
    hour: '6:00',
    period: 'pm'
  },

  {
    hour: '6:30',
    period: ''
  },

  {
    hour: '7:00',
    period: 'pm'
  },

  {
    hour: '7:30',
    period: ''
  },

  {
    hour: '8:00',
    period: 'pm'
  }
]
