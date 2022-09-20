import { Field } from "../Field/Field"
import { PlayProp } from "../PlayProp/PlayProp"
import { FieldProp } from "../FieldProp/FieldProp"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { game_fieldWidth, game_fieldHeight, game_cellCount, game_population, game_speed } from "../Game/Game"

interface GamePanelProps {}

export const GamePanel: React.FC<GamePanelProps> = ({}) => {
  const dispatch = useDispatch()
  const gameState = useSelector<boolean[], boolean[]>((state) => state)

  const [running, setRunning] = useState(true)
  const [restart, setRestart] = useState(false)
  const [speed, setSpeed] = useState(game_speed)

  const [width, setWidth] = useState(game_fieldWidth)
  const [height, setHeight] = useState(game_fieldHeight)
  const [cellCount, setCellCount] = useState(game_cellCount)
  const [percentage, setPercentage] = useState(game_population)
  useEffect(() => {
    if (running && !gameState) {
      dispatch({ type: "INIT", payload: { cellCount, percentage } })
    }
  }, [running, gameState])
  useEffect(() => {
    dispatch({ type: "INIT", payload: { cellCount, percentage } })
  }, [restart, cellCount, percentage])
  useEffect(() => {
    if (running) {
      const timer = setTimeout(() => {
        const cellInRow = cellCount ? Math.ceil(Math.sqrt(cellCount)) : 0
        dispatch({ type: "NEXT_STEP", payload: { cellInRow } })
      }, 1000 / speed)
      return () => clearTimeout(timer)
    }
  })
  return (
    <div style={{ width: game_fieldWidth }}>
      <PlayProp
        onRestart={() => {
          setRestart((prev) => !prev)
        }}
        onPlayChange={setRunning}
        onSpeedChange={setSpeed}
      ></PlayProp>
      <FieldProp
        onCellCountChange={setCellCount}
        onHeightChange={setHeight}
        onPopulationChange={setPercentage}
        onWidthChange={setWidth}
      ></FieldProp>
      <Field width={width} height={height} cellCount={cellCount} />
    </div>
  )
}
