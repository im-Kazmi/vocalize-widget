import './index.css'

import { StrictMode } from 'react'
import { WallOfLove } from '.'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WallOfLove />
  </StrictMode>,
)
