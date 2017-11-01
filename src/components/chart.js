import React from 'react';
// Sparklines is the library used to create our charts.
// The SparklinesLine is a chield package into Sparkedlines used to add a different layout.
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    );
}