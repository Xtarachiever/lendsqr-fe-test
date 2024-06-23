import * as React from 'react';

interface ISelectProps {
    defaultValue:string;
    value:string;
    name:string;
    values:string[];
    register?:any;
    form?:boolean;
    onChange?:React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FunctionComponent<ISelectProps> = ({defaultValue, form, name,values, onChange}) => {
  return (
    <div className='select-div'>
        <p className='title'>{name}</p>
        <div className='select-wrapper'>
            <div className={`select-page ${form && 'select_form'}`}>
                <select defaultValue={defaultValue} onChange={onChange}>
                    <option value={defaultValue} disabled>{defaultValue}</option>
                    {
                        values.map((value)=>(
                            <option value={value} key={value}>{value}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    </div>
  );
};

export default Select;
