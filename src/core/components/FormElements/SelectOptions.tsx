import { useState, ChangeEvent } from "react";

interface SelectOptionsProps {
  id: string;
  options: string[];
  onChange: (selectedOption: string) => void;
}

const useSelectOptions = (
  initialOption: string,
  onChange: (selectedOption: string) => void
) => {
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    onChange(newOption);
  };

  return {
    selectedOption,
    handleOptionChange,
  };
};

const SelectOptions: React.FC<SelectOptionsProps> = ({
  id,
  options,
  onChange,
}) => {
  const { selectedOption, handleOptionChange } = useSelectOptions(
    options[0],
    onChange
  );

  return (
    <select id={id} value={selectedOption} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;
