import PasswordField from './PasswordField'

export const generated = (args) => {
  return <PasswordField {...args} />
}

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
  argTypes: {
    variant: {
      options: ['None', 'Progress', 'Requirements'],
      control: { type: 'radio' },
    },
  },
}
