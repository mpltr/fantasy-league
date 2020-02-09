import React, {useState} from 'react';

const Tabs = (props) => {
    const [tab, setTab] = useState(0);
    return ( 
        <div>
            <div>
                {props.children.map((child, index) => {
                    return (
                        <button key={index} 
                                className={tab === index ? 'tab-active' : 'tab' }
                                onClick={() => setTab(index)}>
                            {child.props.tabtitle ?? 'Set Tab Title'}
                        </button>
                    )
                })}
            </div>
            <div>
                {props.children.map((child, index) => {
                    return (
                        <div key={index}
                             className={tab === index ? 'content-active' : 'content-hidden'}>
                            {child}
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
                .tab {

                }
                .tab-active {
                    background-color: grey;
                    color: #fff;
                }
                .content-active {

                }
                .content-hidden {
                    display: none;
                }
                
            `}</style>
        </div>
     );
}
 
export default Tabs;