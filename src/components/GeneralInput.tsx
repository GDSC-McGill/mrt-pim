import React from 'react';
import { Input } from './lib/ui/input';

type inputProps = {
    primaryText?: string,
    secondaryText?: string,
}
const GeneralInput = (props: inputProps) => {
    let primaryText = props.primaryText;
    let secondaryText = props.secondaryText;
    return (
        <div>
            {primaryText && <h1 className="text-primary font-medium" style={{paddingBottom: 10}}>{primaryText}</h1>}
            {secondaryText && <Input placeholder={secondaryText}/>}
            {!secondaryText && <Input />}
        </div>
    );
};
export default GeneralInput;