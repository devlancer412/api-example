import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { Button, Card, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockHeadSub,
  BlockTitle,
  Icon,
} from "../../../components/Component";
import Wallet from "../../../components/partials/panel/wallet/Wallet";
import AvailableBalance from "../../../components/partials/panel/available-balance/AvailableBalance";

const Wallets = () => {
  return (
    <React.Fragment>
      <Head title="Portfolio"></Head>
      <Content>
        <BlockHead>
          <div className="nk-block-between-md g-4">
            <BlockHeadContent>
              <BlockTitle className="nk-block-title page-title">Portfolio</BlockTitle>
              <BlockDes>
                <p>A list of your assets available on Cilistia.</p>
              </BlockDes>
            </BlockHeadContent>

            <BlockHeadContent>
              <ul className="nk-block-tools gx-3">
                <li>
                  <Button color="primary">
                    <span>Deposit</span> <Icon name="arrow-up"></Icon>
                  </Button>
                </li>
                <li>
                  <Button color="dim" className="btn-outline-light">
                    <span>Withdraw</span> <Icon name="arrow-down" className="d-none d-sm-inline-block"></Icon>
                  </Button>
                </li>
              </ul>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <Block>
          <AvailableBalance />
        </Block>
        <BlockHead size="sm">
          <BlockHeadContent>
            <BlockTitle tag="h5">Crypto Assets</BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col sm="6" lg="4">
              <Card className="card-bordered is-dark">
                <Wallet
                  className="is-default"
                  icon="sign-kobo"
                  title="CIL"
                  firstAmount="1240.509505"
                  firstCurrency="CIL"
                  secondAmount="88,924.63"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  icon="sign-eth"
                  title="Ethereum Wallet"
                  firstAmount="0.452058"
                  firstCurrency="ETH"
                  secondAmount="1,583.25"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  icon="sign-btc"
                  title="Bitcoin Wallet"
                  firstAmount="4.434953"
                  firstCurrency="BTC"
                  secondAmount="28,247.63"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
          </Row>
        </Block>
        <Block size="lg">
          <BlockHead size="sm">
            <BlockHeadContent>
              <BlockTitle tag="h5">Fiat Accounts</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  className="is-default"
                  icon="sign-usd"
                  title="USD Account"
                  firstAmount="12,495.90"
                  firstCurrency="USD"
                  secondAmount="12,495.90"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  icon="sign-eur"
                  title="EUR Account"
                  firstAmount="12,495.90"
                  firstCurrency="EUR"
                  secondAmount="11,495.90"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered dashed h-100">
                <div className="nk-wgw-add">
                  <div className="nk-wgw-inner">
                    <a href="#">
                      <div className="add-icon">
                        <em className="icon ni ni-plus"></em>
                      </div>
                      <h6 className="title">Add New Wallet</h6>
                    </a>
                    <span className="sub-text">You can add your more wallet in your account to manage separetly.</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Wallets;
