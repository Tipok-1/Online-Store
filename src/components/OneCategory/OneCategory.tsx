import React from "react";
import '../OneCategory/OneCategory.css'


interface IOneCategory {
  category: string,
  value: string,
  onClick: (add: boolean,
    filtr: string) => void,
  resetCheckbox?: boolean
  setReset: (arg: boolean) => void
}

const OneCategory = ({ resetCheckbox, setReset, category, value, onClick }: IOneCategory): JSX.Element => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    if (resetCheckbox) {
      if (checked)
        setChecked(false);
      setReset(false);
    }
  }, [resetCheckbox])
  function chengeCheckbox() {
    setChecked(!checked);
  }

  return (
    <label className="categories">
      <input
        style={{ cursor: 'pointer' }}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={chengeCheckbox}
        onClick={e => {
          if (e.currentTarget.checked) {
            onClick(true, e.currentTarget.value);
          }
          else {
            onClick(false, e.currentTarget.value);
          }
        }}
        id={category}
      />
      <label className="categories__name" htmlFor={category}>{category}</label>
    </label>
  )
}

export default OneCategory;