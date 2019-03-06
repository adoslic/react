import React from 'react';

import './Modal.scss';

const modal = (props) => {
    return (
        <div className="overlay" style={{
            display: props.show ? 'block' : 'none'
        }}>>

            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                    <div className="modal-header">
                        <h3>Error</h3>
                        <span className="close-modal-btn" onClick={props.close}>X</span>
                    </div>
                    <div className="modal-body">
                        <p>
                            {props.children}
                        </p>
                    </div>
                
                

                {/* <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div> */}
            </div>
        </div>
    )
}

export default modal;