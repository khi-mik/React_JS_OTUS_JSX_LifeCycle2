import { SettingsPanel } from "../GameSettingsPanel/Group"
import { NumberTextBox } from "../Input/NumberTextBox"
import styles from "./FieldProp.module.css"
import { game_fieldWidth, game_fieldHeight, game_cellCount, game_population } from "../Game/Game"

type FieldPropProps = {
  onWidthChange: (width: number) => void
  onHeightChange: (height: number) => void
  onCellCountChange: (cellCount: number) => void
  onPopulationChange: (percentage: number) => void
}

export const FieldProp = ({
  onWidthChange,
  onHeightChange,
  onCellCountChange,
  onPopulationChange
}: FieldPropProps) => {
  const numberTextBoxClasses = `${styles.fieldPropElement} ${styles.fieldPropTextbox}`

  return (
    <SettingsPanel title="Field settings">
      <div className={styles.fieldPropPanel}>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Width:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Width"
            defaultValue={game_fieldWidth}
            onValueChange={onWidthChange}
          ></NumberTextBox> 
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Height:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Height"
            defaultValue={game_fieldHeight}
            onValueChange={onHeightChange}
          ></NumberTextBox>
        </div>
        <div className={styles.fieldPropGroup}>  
          <div className={styles.fieldPropElement}>Cell count:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Cell count"
            defaultValue={game_cellCount}
            onValueChange={onCellCountChange}
          ></NumberTextBox>
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Population:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Population"
            defaultValue={game_population}
            onValueChange={onPopulationChange}
          ></NumberTextBox>
        </div>
      </div>
    </SettingsPanel>
  )
}
