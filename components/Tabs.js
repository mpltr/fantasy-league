import React, {useState} from 'react';

const Tabs = (props) => {
    const [tab, setTab] = useState(0);
    return ( 
        <div className="wrapper">
            <div className="header">
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

                .wrapper {
                }
                
                .header {
                    width: 100%;
                    display: flex;
                    margin-bottom: 16px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .tab {
                    flex-grow: 1;
                    flex-shrink: 0;
                    border: none;
                    background-color: #f0f0f0;
                    padding: 16px 0;
                    text-transform: uppercase;
                    font-size: 11px;
                    color: grey;
                }
                .tab-active {
                    flex-grow: 1;
                    flex-shrink: 0;
                    background-color: #34bcb9;
                    color: #fff;
                    border: none;
                    padding: 16px 0;
                    text-transform: uppercase;
                    font-size: 11px;
                    letter-spacing: .5px;
                }
                .tab:active, 
                .tab:focus, 
                .tab:hover
                .tab-active:active, 
                .tab-active:focus, 
                .tab-active:hover {
                    outline:none;
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