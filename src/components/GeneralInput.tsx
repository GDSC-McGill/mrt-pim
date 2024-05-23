import { CloudMoonRain } from 'lucide-react';
import React from 'react';
import { Input } from './lib/ui/input';
import { Trykker } from 'next/font/google';

type inputProps = {
    primaryTextVisible: boolean,
    secondaryTextVisible: boolean,
    primaryText: string,
    secondaryText: string,
}
const GeneralInput = (props: inputProps) => {
    let primaryVisible = props.primaryTextVisible ? props.primaryTextVisible : true;
    let secondaryVisible = props.secondaryTextVisible ? props.secondaryTextVisible : true;
    let primaryText = props.primaryText;
    let secondaryText = props.secondaryText;
    return (
        <div>
            {primaryVisible && <h1 className="text-primary font-medium" style={{paddingBottom: 10}}>{primaryText}</h1>}
            {secondaryVisible && <Input placeholder={secondaryText}/>}
            {!secondaryVisible && <Input />}
        </div>
    );
};
export default GeneralInput;