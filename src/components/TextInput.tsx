interface TextInputProps {
  value: string,
  updateValue: (newValue: string) => void,
  label: string,

  formatter?: (input: string, error: () => void) => string,
  maxLength?: number,
}

/**
 * @param {string} label
 * Text content for the text input label.
 * 
 * @param {function} formatter
 * Function which text input is passed into before updating
 * state. Should take a string which is either raw or formatted input,
 * and return formatted input. The second parameter is an error
 * callback.
 * 
 * @param {number} maxLength 
 * The maximum input length.
 */
export function TextInput({
  value,
  updateValue,

  label,
  formatter,
  maxLength,
}: TextInputProps) {
  
  // TODO

  return (
    <div className="form-item">
      <div className="form-item-label">
        <p>{label}</p>
      </div>

      <input
        type="text"
        className="form-input"
      />
    </div>
  );
}
