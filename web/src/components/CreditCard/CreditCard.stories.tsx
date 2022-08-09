import CreditCard from './CreditCard'

export const generated = (args) => {
  return <CreditCard {...args} />
}

export default {
  title: 'Components/CreditCard',
  component: CreditCard,
  argTypes: {
    expMonth: {
      options: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      control: 'select',
    },
    expYear: {
      options: [
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
      ],
      control: 'select',
    },
  },
}
