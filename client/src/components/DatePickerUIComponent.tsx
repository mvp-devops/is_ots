import { FC } from "react";
import { DatePicker } from "antd";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";

interface DatePickerProps {
  id: string;
  changeValue: Function;
  style?: Object;
  className?: string;
}

const DatePickerUIComponent: FC<DatePickerProps> = ({
  id,
  changeValue,
  style,
  className,
}) => {
  return (
    <DatePicker
      locale={locale}
      size="small"
      className={className ? className + " text-secondary" : "text-secondary"}
      style={style}
      id={id}
      onChange={(date, dateString) => changeValue(id, dateString)}
    />
  );
};

export default DatePickerUIComponent;
