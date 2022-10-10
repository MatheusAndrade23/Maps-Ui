import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
