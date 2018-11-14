import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import Button from './index.vue'

// atoms
storiesOf('Atoms/Button', module).add('default', () => ({
  components: {
    Button
  },
  template: `<Button>Default</Button>`
}))

// molecules
// organisms
