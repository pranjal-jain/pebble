import * as React from "react";
import { cx } from "emotion";
import { SelectProps } from "./typings/Select";
import {
  chevronStyle,
  dropDownClass,
  inputWrapper,
  selectInputStyle,
  selectWrapper
} from "./styles/Select.styles";
import DropDown from "./DropDown";
import Input from "./Input";
import OptionGroupCheckBox from "./OptionGroupCheckBox";
import OptionGroupRadio from "./OptionGroupRadio";

function noop() {}

const Select: React.SFC<SelectProps> = props => {
  const {
    className,
    placeholder,
    required,
    errorMessage,
    onChange,
    value,
    selected,
    children,
    multiSelect,
    onClear,
    onApply,
    searchBox,
    searchBoxPlaceholder,
    onSearchBoxQueryChange
  } = props;

  const OptionGroup: any = multiSelect ? OptionGroupCheckBox : OptionGroupRadio;

  return (
    <div className={cx(selectWrapper, className)}>
      <DropDown
        dropDownClassName={dropDownClass}
        labelComponent={({ toggleDropdown, isOpen }) => {
          const chevron = cx(chevronStyle, "icon-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return (
            <div className={inputWrapper} onClick={toggleDropdown}>
              <Input
                className={selectInputStyle}
                placeholder={placeholder}
                value={value}
                onChange={noop}
                required={required}
                message={isOpen ? " " : ""}
                errorMessage={errorMessage}
                readOnly
              />
              <i className={chevron} />
            </div>
          );
        }}
      >
        {({ toggle }) => (
          <React.Fragment>
            <OptionGroup
              selected={selected}
              onChange={(_value, event) => {
                onChange(_value, event);
                if (!multiSelect) {
                  toggle();
                }
              }}
              onApply={_value => {
                onApply(_value, props);
                toggle();
              }}
              onClear={() => {
                onClear();
                toggle();
              }}
              searchBox={searchBox}
              searchBoxPlaceholder={searchBoxPlaceholder}
              onSearchBoxQueryChange={onSearchBoxQueryChange}
            >
              {children}
            </OptionGroup>
          </React.Fragment>
        )}
      </DropDown>
    </div>
  );
};

export default Select;
