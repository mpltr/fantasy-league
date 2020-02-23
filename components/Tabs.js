import React, {useState} from 'react';

const Tabs = (props) => {
    const [tab, setTab] = useState(0);
    // catch if a single child is passed and create array of children instead
    const children = props.children.length == undefined ? [props.children] : props.children
    return ( 
        <div className="wrapper">
            <div className="header">
                {children.filter(child => child !== undefined).map((child, index) => {
                    return (
                        <button key={index} 
                                className={tab === index ? 'tab tab-active' : 'tab' }
                                onClick={() => setTab(index)}>
                            {child.props.tabtitle ?? 'Set Tab Title'}
                        </button>
                    )
                })}
            </div>
            <div>
                {children.filter(child => child !== undefined).map((child, index) => {
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
                    flex-wrap: wrap;
                    margin-bottom: 16px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .tab {
                    position: relative;
                    flex-grow: 1;
                    flex-basis: 10%;
                    border: none;
                    background-color: #f0f0f0;
                    padding: 16px 4px;
                    text-transform: uppercase;
                    font-size: 11px;
                    color: grey;
                    white-space: nowrap;
                }
                .tab:after {
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 70%;
                    top: 15%;
                    right: 0;
                    background-color: var(--lightGreyAlt);
                }
                .tab:last-child:after {
                    display: none;
                }
                .tab-active {
                    background-color: var(--teal);
                    color: #fff;
                }
                .tab-active:after {
                    display: none;
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
                    width: 100%;
                }
                .content-hidden {
                    display: none;
                }
                
            `}</style>
        </div>
     );
}
 
export default Tabs;