import React, { Component } from 'react';
import './index.css'
class Dialog extends Component {
    static defaultProps = {
        title: '我是标题',
        context: '我是内容'
    }
    render() {
        console.log(this.props)
        const { title, children } = this.props;
        return (
            <div className='dialog-wrap'>
                <div className='title'>{title}</div>
                <div className='context'>
                    {children}
                </div>
            </div>
        );
    }
}

export default Dialog;