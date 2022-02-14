import 'styled-components'

import { Theme } from '@mui/system'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
