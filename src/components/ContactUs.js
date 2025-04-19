import React from 'react';

class Status {
    static Success = "SUCCESS";
    static Error = "ERROR";
    static Initial = "";
    static Processing = "PROCESSING";
}

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: Status.Initial
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: Status.Success});
            } else {
                this.setState({status: Status.Error});
            }
        };
        xhr.send(data);
        this.setState({status: Status.Processing});
    }

    render() {
        return <div>
            <div className='contact-us'>
        <h1 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">Contact Us</h1>
        <p className="has-text-centered" style={{color:"hsl(217, 71.70%, 20.80%)" }}>We respond to 100% of messages. Ask us anything.</p>
        <br/>
        <div style={{width: "85%", margin: "auto"}}>
            {/*<form method="post" action="https://formspree.io/mrgbyoqr">*/}
            <form method="post" action="https://formspree.io/xlepnyzk" onSubmit={this.submitForm}>
                
                <div className="has-text-left has-text-weight-bold" style={{width: "100%", display: "table"}}>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Name:</label>
                        <div>
                            <input type="text" className="inputbox" id="name" name="name" required style={{width: "95%"}}/>
                        </div>
                    </div>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Email:</label>
                        <div>
                            <input type="email" className="form-control inputbox" id="email" name="_replyto" required style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="has-text-weight-bold">Message:</label>
                    <div style={{margin: "auto"}}>
                        <textarea id="message" name="message" maxLength="6000" rows="7" style={{width: "100%"}}/>
                    </div>
                </div>
                <br/>

                <div className="has-text-centered">
                    <div className="">
                        {this.getStatusDisplay()}
                    </div>
                </div>
            </form>
        </div>
        </div>
        <style>
            {`
                .contact-us {
                    background-color:rgba(230, 211, 234, 0.14);
                    padding: 20px;
                    border-radius: 10px;
                    border: 1px solid #ddd;
                    box-shadow: 0 4px 8px rgba(42, 27, 27, 0.35);
                    margin: 20px auto;
                }
                .inputbox {
                    background-color: white;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 10px;
                    width: 100%;
                    box-sizing: border-box;
                }
                #message {
                    background-color: white;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 10px;
                    width: 100%;
                    box-sizing: border-box;
                }
                .bttn {
                    background-color: #00b5a1;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .bttn:hover {
                    background-color: #009b8a;
                }
                .btn.is-disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
            `}
            </style>
        </div>
    }

    getStatusDisplay() {
        const {status} = this.state;
        if (status === Status.Initial) return this.getSubmitButton();
        if (status === Status.Processing) return <button className="">Sending...</button>;
        if (status === Status.Success) return <div>{this.getSubmitButton()}<p className="has-text-centered is-size-3-mobile is-size-3-desktop">Thanks
            for contacting us! We will contact you within 1 working day.</p></div>;
        if (status === Status.Error) return <div>{this.getSubmitButton()}<p className="has-text-centered is-size-3-mobile is-size-3-desktop has-text-weight-bold">There was an error. We are sorry, please try again.</p></div>;
    }

    getSubmitButton() {
        return <button type="submit" className="bttn">Send &rarr;</button>;
    }
}