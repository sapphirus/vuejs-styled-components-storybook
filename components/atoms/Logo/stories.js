import { storiesOf } from '@storybook/vue'
import Logo from './index.vue'

// atoms
storiesOf('Atoms/Logo', module).add('default', () => ({
  components: {
    Logo
  },
  template: `<Logo />`
}))

// molecules
// organisms
