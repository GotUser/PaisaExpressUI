import React, { Component } from 'react';
import { Row, Label, } from 'reactstrap';

import { connect } from 'react-redux';


class Disclaimer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div xs="12" lg="12" style={{ background: "white", padding: 10, marginBottom: "2%" }}>
                    <Row style={{ borderBottom: "1px solid rgb(241, 239, 239)" }}>
                        <label class="labelStyleHeadings">Disclaimer </label>
                    </Row>
                    <Row style={{ borderRadius: 10, border: "1px solid #dfdfdf", margin: "5%", padding: "5%" }}>
                        <Label style={{ fontWeight: "bold", fontSize: 20 }}>Terms & Conditions </Label>
                        <Label>
                            Help protect your website and its users with clear and fair website terms and conditions.
                                        <br />
                            These terms and conditions for a website set out key issues such as acceptable use, privacy, cookies, registration and passwords, intellectual property, links to other sites, termination and disclaimers of responsibility. Terms and conditions are used and necessary to protect a website owner from liability of a user relying on the information or the goods provided from the site then suffering a loss.
                                        <br />
                            Making your own terms and conditions for your website is hard, not impossible, to do. It can take a few hours to few days for a person with no legal background to make. But worry no more; we are here to help you out.
                                        <br />
                            All you need to do is fill up the blank spaces and then you will receive an email with your personalized terms and conditions.
                                    </Label>
                    </Row>
                    <Row style={{ marginLeft: "5%" }}>
                        <div>
                            <button class="buttonStyle Submit">I undersotood </button>
                        </div>
                    </Row>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ }) => {

    return null
};

export default connect(mapStateToProps, {

})(Disclaimer);


